#!/usr/bin/env node
/**
 * Design match test — compares the live home page against the Canva template.
 *
 * Opens the page in headless Google Chrome at the Canva artboard size
 * (1366×768), measures typography and layout of every element tagged with
 * `data-cine="…"`, and checks them against the values read from the Canva
 * design (DAHaFiVir_4). Also writes per-section screenshots and an HTML
 * report that puts each section next to the matching Canva section.
 *
 * Usage:  npm run test:design [-- --url http://localhost:3000/]
 *         npm run test:design -- --mobile   (390×844 full-page screenshot only)
 *         npm run test:design -- --wide     (same checks at 2400×1239, except left positions)
 * Needs:  a running dev/prod server and google-chrome on PATH. No npm deps
 *         (uses the Chrome DevTools Protocol over Node's built-in WebSocket).
 */
import { spawn } from "node:child_process"
import { mkdtemp, mkdir, readFile, writeFile, rm } from "node:fs/promises"
import { existsSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"

const args = process.argv.slice(2)
const argValue = (name, fallback) => {
  const i = args.indexOf(name)
  return i >= 0 ? args[i + 1] : fallback
}
const URL_TO_TEST = argValue("--url", "http://localhost:3000/")
const CHROME = argValue("--chrome", process.env.CHROME_PATH || "google-chrome")
const OUT_DIR = path.resolve(argValue("--out", ".design-test"))
const MOBILE = args.includes("--mobile")
// Canva artboard size; --mobile only takes a full-page phone screenshot (no checks)
// --wide re-runs the checks on a large screen: every size/top must stay at its 1366 value
// (all fluid values are capped), only left positions change because the layout is centered.
const WIDE = args.includes("--wide")
const VIEWPORT = MOBILE ? { width: 390, height: 844 } : WIDE ? { width: 2400, height: 1239 } : { width: 1366, height: 768 }

const log = (msg) => console.log(`[design-test] ${msg}`)

// Closest Google Fonts to the Canva fonts (picked by pixel-matching, see docs)
const DISPLAY_FONT = "Crimson Pro"
const SANS_FONT = "Work Sans"

const PX = 0.75 // tolerance for font metrics (px)
const POS = 6 // tolerance for positions & sizes (px)

/*
 * Expected values, straight from the Canva element data at 1366px.
 * Positions are relative to the element's section (data-cine section),
 * except "nav" which is relative to the viewport.
 */
const SPEC = [
  // ---- Navbar pill
  { el: "nav", left: 143.7, top: 18.67, width: 1078.6, height: 58.13, tol: { left: POS } },

  // Nav links: 21.33px bold (Canva "Home  Services  Projects  Blog")
  { el: "nav-link", fontSize: 21.33, fontWeight: 700 },

  // ---- Hero band (Canva page 1)
  { el: "hero", height: 768 },
  { el: "hero-title", section: "hero", fontSize: 106.67, lineHeight: 106.67, letterSpacing: -5.33, fontWeight: 250, left: 100, top: 187.13 },
  { el: "hero-lead", section: "hero", fontSize: 24, lineHeight: 31.2, fontWeight: 400, left: 100, top: 439.93, width: 544.13 },
  { el: "hero-cta", section: "hero", fontSize: 21.33, lineHeight: 29.87, letterSpacing: -0.43, fontWeight: 700, left: 100, top: 609.87, width: 382, height: 58.13 },

  // ---- About band (Canva page 2). Canva puts this one title at x=76.8; we keep the 100px gutter.
  { el: "about", height: 768 },
  { el: "about-title", section: "about", fontSize: 106.67, lineHeight: 106.67, fontWeight: 250, left: 100, top: 76.8, note: "Canva x=76.8 (inconsistent with other bands); site uses 100" },
  { el: "about-copy", section: "about", fontSize: 24, lineHeight: 31.2, fontWeight: 400, left: 508.9, top: 100 },

  // ---- Experience band (modeled on Canva page 3 "What I can do for you")
  { el: "experience-title", section: "experience", fontSize: 106.67, lineHeight: 106.67, fontWeight: 250, left: 100, top: 73.8, width: 466.6 },
  { el: "experience-item", section: "experience", left: 688, top: 101, width: 500.47 },
  { el: "experience-item-title", section: "experience", fontSize: 28, lineHeight: 33.6, fontWeight: 700 },
  { el: "experience-item-copy", section: "experience", fontSize: 21.33, lineHeight: 25.6, fontWeight: 400 },

  // ---- Skills band (modeled on Canva page 4 "A few things I'm proud of")
  { el: "skills", height: 768 },
  { el: "skills-title", section: "skills", fontSize: 106.67, lineHeight: 106.67, fontWeight: 250, left: 100, top: 76.8 },
  { el: "skills-lead", section: "skills", fontSize: 24, lineHeight: 31.2, fontWeight: 400, left: 100, top: 242 },
  { el: "skills-col", section: "skills", left: 100, top: 443 },
  { el: "skills-col-title", section: "skills", fontSize: 28, lineHeight: 33.6, fontWeight: 700 },

  // ---- Contact band (Canva page 6)
  { el: "contact", height: 768 },
  { el: "contact-title", section: "contact", fontSize: 106.67, lineHeight: 106.67, fontWeight: 250, left: 100, top: 76.8, width: 544.13 },
  { el: "contact-lead", section: "contact", fontSize: 24, lineHeight: 31.2, fontWeight: 400, left: 100, top: 455, width: 544.13 },
  { el: "contact-form", section: "contact", left: 721.87, top: 102.44, width: 544.13, height: 494.56, tol: { height: 24 } },
  { el: "contact-row", section: "contact", fontSize: 18.67, lineHeight: 22.4, top: 708.5 },
]

// Which Canva page each site section is compared with in the visual report
const REPORT = [
  { section: "hero", canvaPage: 0, label: "Hero  ↔  Canva hero" },
  { section: "about", canvaPage: 1, label: "About me  ↔  Canva about me" },
  { section: "experience", canvaPage: 2, label: "Experience  ↔  Canva services" },
  { section: "skills", canvaPage: 3, label: "Skills  ↔  Canva projects" },
  { section: "contact", canvaPage: 5, label: "Contact  ↔  Canva contact" },
]

// ---------------------------------------------------------------- CDP helpers
async function launchChrome() {
  const profile = await mkdtemp(path.join(tmpdir(), "design-test-"))
  const proc = spawn(
    CHROME,
    [
      "--headless=new",
      "--remote-debugging-port=0",
      `--user-data-dir=${profile}`,
      "--no-first-run",
      "--no-default-browser-check",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "about:blank",
    ],
    { stdio: ["ignore", "ignore", "pipe"] }
  )
  const wsUrl = await new Promise((resolve, reject) => {
    let buf = ""
    const timer = setTimeout(() => reject(new Error("Chrome did not start (is google-chrome installed?)")), 15000)
    proc.stderr.on("data", (d) => {
      buf += d
      const m = buf.match(/DevTools listening on (ws:\/\/\S+)/)
      if (m) {
        clearTimeout(timer)
        resolve(m[1])
      }
    })
    proc.on("error", reject)
  })
  return { proc, profile, port: new URL(wsUrl).port }
}

function connect(wsUrl) {
  const ws = new WebSocket(wsUrl)
  let id = 0
  const pending = new Map()
  const listeners = new Map()
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data)
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id)
      pending.delete(msg.id)
      if (msg.error) reject(new Error(msg.error.message))
      else resolve(msg.result)
    } else if (msg.method && listeners.has(msg.method)) {
      for (const fn of listeners.get(msg.method)) fn(msg.params)
    }
  }
  const ready = new Promise((resolve, reject) => {
    ws.onopen = resolve
    ws.onerror = reject
  })
  return {
    ready,
    send: (method, params = {}) =>
      new Promise((resolve, reject) => {
        const msgId = ++id
        pending.set(msgId, { resolve, reject })
        ws.send(JSON.stringify({ id: msgId, method, params }))
      }),
    once: (method) =>
      new Promise((resolve) => {
        const fn = (p) => {
          listeners.set(method, (listeners.get(method) || []).filter((f) => f !== fn))
          resolve(p)
        }
        listeners.set(method, [...(listeners.get(method) || []), fn])
      }),
    close: () => ws.close(),
  }
}

// Runs in the page: measure every data-cine element
function measureInPage() {
  const out = {}
  for (const node of document.querySelectorAll("[data-cine]")) {
    const key = node.getAttribute("data-cine")
    if (out[key]) continue
    const r = node.getBoundingClientRect()
    const cs = getComputedStyle(node)
    const range = document.createRange()
    range.selectNodeContents(node)
    out[key] = {
      x: r.left + scrollX,
      y: r.top + scrollY,
      vy: r.top,
      width: r.width,
      height: r.height,
      fontSize: parseFloat(cs.fontSize),
      lineHeight: cs.lineHeight === "normal" ? null : parseFloat(cs.lineHeight),
      letterSpacing: cs.letterSpacing === "normal" ? 0 : parseFloat(cs.letterSpacing),
      fontWeight: Number(cs.fontWeight),
      fontFamily: cs.fontFamily.split(",")[0].replace(/["']/g, ""),
    }
  }
  return out
}

// ---------------------------------------------------------------- comparison
function compare(measured) {
  const rows = []
  for (const spec of SPEC) {
    const m = measured[spec.el]
    const props = Object.keys(spec).filter((k) => !["el", "section", "tol", "note"].includes(k) && !(WIDE && k === "left"))
    if (!m) {
      rows.push({ el: spec.el, prop: "(element)", expected: "present", actual: "missing", pass: false })
      continue
    }
    const base = spec.section ? measured[spec.section] : null
    for (const prop of props) {
      let actual
      if (prop === "left") actual = base ? m.x - base.x : m.x
      else if (prop === "top") actual = base ? m.y - base.y : m.vy
      else actual = m[prop]
      let expected = spec[prop]
      // The hero fills the screen height with its content anchored to the bottom,
      // so on taller screens everything inside it shifts down by the extra height.
      const heroExtra = Math.max(0, VIEWPORT.height - 768)
      if (spec.el === "hero" && prop === "height") expected += heroExtra
      if (spec.section === "hero" && prop === "top") expected += heroExtra
      const tol = spec.tol?.[prop] ?? (["fontSize", "lineHeight", "letterSpacing"].includes(prop) ? PX : prop === "fontWeight" ? 0 : POS)
      const pass = actual != null && Math.abs(actual - expected) <= tol
      rows.push({ el: spec.el, prop, expected, actual, pass, tol, note: spec.note })
    }
    // Font family: display text uses the serif, everything else the sans
    if (spec.fontSize) {
      const expected = spec.fontWeight === 250 ? DISPLAY_FONT : SANS_FONT
      rows.push({ el: spec.el, prop: "fontFamily", expected, actual: m.fontFamily, pass: m.fontFamily === expected })
    }
  }
  // The hero CTA must never touch the bottom of the hero band (Canva: 100px gap)
  const hero = measured["hero"], cta = measured["hero-cta"]
  if (hero && cta) {
    const gap = hero.y + hero.height - (cta.y + cta.height)
    rows.push({ el: "hero-cta", prop: "gapToBottom", expected: 100, actual: gap, pass: Math.abs(gap - 100) <= POS })
  }
  return rows
}

function printTable(rows) {
  const fmt = (v) => (typeof v === "number" ? (Math.round(v * 100) / 100).toString() : String(v))
  const pad = (s, n) => s + " ".repeat(Math.max(0, n - s.length))
  console.log(`\n${pad("ELEMENT", 24)}${pad("PROPERTY", 15)}${pad("CANVA", 10)}${pad("SITE", 10)}RESULT`)
  console.log("-".repeat(70))
  for (const r of rows) {
    const diff = typeof r.actual === "number" ? ` (Δ ${fmt(r.actual - r.expected)})` : ""
    console.log(
      `${pad(r.el, 24)}${pad(r.prop, 15)}${pad(fmt(r.expected), 10)}${pad(fmt(r.actual), 10)}${r.pass ? "✓ pass" : "✗ FAIL" + diff}`
    )
  }
}

async function writeReport(rows, shots, measured) {
  const ref = path.resolve("docs/design-reference/template-1366.jpg")
  const hasRef = existsSync(ref)
  if (hasRef) await writeFile(path.join(OUT_DIR, "template-1366.jpg"), await readFile(ref))
  const failed = rows.filter((r) => !r.pass)
  const sections = REPORT.map(({ section, canvaPage, label }) => {
    const shot = shots[section]
    if (!shot) return ""
    return `<section><h2>${label}</h2><div class="pair">
      <figure><figcaption>Canva template</figcaption>${
        hasRef
          ? `<div class="canva" style="background-position:0 -${canvaPage * 768}px"></div>`
          : "<p>Missing docs/design-reference/template-1366.jpg</p>"
      }</figure>
      <figure><figcaption>Site (${Math.round(measured[section].height)}px tall)</figcaption><img src="${shot}" alt=""></figure>
    </div></section>`
  }).join("")
  const tableRows = rows
    .map(
      (r) =>
        `<tr class="${r.pass ? "ok" : "bad"}"><td>${r.el}</td><td>${r.prop}</td><td>${r.expected}</td><td>${
          typeof r.actual === "number" ? Math.round(r.actual * 100) / 100 : r.actual
        }</td><td>${r.pass ? "pass" : "FAIL"}</td><td>${r.note ?? ""}</td></tr>`
    )
    .join("")
  const html = `<!doctype html><meta charset="utf-8"><title>Design match report</title>
<style>
  body{margin:0;padding:32px;background:#030405;color:#f9ffd7;font:15px/1.4 system-ui,sans-serif}
  h1{font-weight:300;font-size:40px;margin:0 0 8px} h2{font-weight:600;font-size:18px;margin:40px 0 12px}
  .sum{color:${failed.length ? "#d9573a" : "#8fa860"};font-size:18px}
  .pair{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  figure{margin:0} figcaption{font-size:13px;color:#a7ac91;margin-bottom:6px}
  img,.canva{width:100%;display:block;border:1px solid #2a2b22}
  .canva{aspect-ratio:1366/768;background:url(template-1366.jpg) no-repeat;background-size:100% auto}
  table{border-collapse:collapse;width:100%;margin-top:16px;font-size:13px}
  td,th{border-bottom:1px solid #2a2b22;padding:6px 8px;text-align:left}
  tr.bad td{color:#d9573a} tr.ok td:nth-child(5){color:#8fa860}
</style>
<h1>Design match report</h1>
<p class="sum">${rows.length - failed.length}/${rows.length} checks pass at ${VIEWPORT.width}×${VIEWPORT.height} — ${URL_TO_TEST}</p>
${sections}
<h2>All checks</h2>
<table><tr><th>Element</th><th>Property</th><th>Canva</th><th>Site</th><th>Result</th><th>Note</th></tr>${tableRows}</table>
<script>
  // Map 1366px-based offsets to the rendered width of each Canva frame
  for (const el of document.querySelectorAll('.canva')) {
    const y = parseFloat(el.style.backgroundPosition.split(' ')[1]);
    const fit = () => { el.style.backgroundPosition = '0 ' + (y * el.clientWidth / 1366) + 'px' };
    fit(); addEventListener('resize', fit);
  }
</script>`
  await writeFile(path.join(OUT_DIR, "report.html"), html)
}

// ---------------------------------------------------------------- main
async function main() {
  await rm(OUT_DIR, { recursive: true, force: true })
  await mkdir(OUT_DIR, { recursive: true })

  const { proc, profile, port } = await launchChrome()
  const watchdog = setTimeout(() => {
    console.error("[design-test] Timed out after 90s")
    proc.kill()
    process.exit(2)
  }, 90000)
  try {
    const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" })).json()
    const cdp = connect(target.webSocketDebuggerUrl)
    await cdp.ready
    await cdp.send("Page.enable")
    await cdp.send("Emulation.setDeviceMetricsOverride", { ...VIEWPORT, deviceScaleFactor: 1, mobile: false })

    log(`Opening ${URL_TO_TEST} at ${VIEWPORT.width}×${VIEWPORT.height}…`)
    await cdp.send("Page.navigate", { url: URL_TO_TEST })
    // Poll instead of waiting on the load event: dev servers keep HMR sockets open
    const evalValue = async (expression) =>
      (await cdp.send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true })).result.value
    const deadline = Date.now() + 30000
    while ((await evalValue("document.readyState").catch(() => "")) !== "complete") {
      if (Date.now() > deadline) throw new Error(`Page did not finish loading: ${URL_TO_TEST} (is the server running?)`)
      await new Promise((r) => setTimeout(r, 250))
    }
    // Scroll through the page so lazy-loaded images start loading, then return to top
    await evalValue(`(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 60)) } scrollTo(0, 0); return true })()`)
    // Web fonts + images, capped at 10s so a stuck image can't hang the test
    await evalValue(`Promise.race([
      Promise.all([document.fonts.ready, ...[...document.images].filter(i => !i.complete)
        .map(i => new Promise(r => { i.onload = i.onerror = r }))]),
      new Promise(r => setTimeout(r, 10000))
    ]).then(() => true)`)
    await new Promise((r) => setTimeout(r, 500))
    log("Measuring…")

    if (MOBILE) {
      const height = await evalValue("document.documentElement.scrollHeight")
      const { data } = await cdp.send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: true,
        clip: { x: 0, y: 0, width: VIEWPORT.width, height, scale: 1 },
      })
      const file = path.join(OUT_DIR, "mobile.png")
      await writeFile(file, Buffer.from(data, "base64"))
      const overflow = await evalValue("document.documentElement.scrollWidth > innerWidth")
      log(`Mobile screenshot: ${file}${overflow ? "  ✗ page scrolls horizontally!" : "  ✓ no horizontal overflow"}`)
      process.exitCode = overflow ? 1 : 0
      return
    }

    const { result } = await cdp.send("Runtime.evaluate", {
      expression: `(${measureInPage.toString()})()`,
      returnByValue: true,
    })
    const measured = result.value
    const rows = compare(measured)
    printTable(rows)

    const fonts = [...new Set(Object.values(measured).map((m) => m.fontFamily))]
    console.log(`\nFonts in use: ${fonts.join(", ")}`)

    // Per-section screenshots for the visual report
    const shots = {}
    for (const { section } of REPORT) {
      const m = measured[section]
      if (!m) continue
      const { data } = await cdp.send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: true,
        clip: { x: 0, y: m.y, width: VIEWPORT.width, height: Math.min(m.height, 2400), scale: 1 },
      })
      const file = `${section}.png`
      await writeFile(path.join(OUT_DIR, file), Buffer.from(data, "base64"))
      shots[section] = file
    }
    await writeReport(rows, shots, measured)
    cdp.close()

    const failed = rows.filter((r) => !r.pass).length
    console.log(`\n${rows.length - failed}/${rows.length} checks pass. Report: ${path.join(OUT_DIR, "report.html")}`)
    process.exitCode = failed ? 1 : 0
  } finally {
    clearTimeout(watchdog)
    proc.kill()
    await rm(profile, { recursive: true, force: true }).catch(() => {})
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(2)
})
