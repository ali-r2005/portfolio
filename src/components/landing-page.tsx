"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { sendContactEmail } from "@/app/contact/actions"
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  CpuChipIcon,
  LinkIcon,
  Square3Stack3DIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  CheckIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  ArrowPathIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline"

export function LandingPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full Next.js Web Application",
    details: "",
  })

  const trustMetrics = [
    { label: "100% Core Web Vitals Focus", icon: <BoltIcon className="size-5 text-primary" /> },
    { label: "End-to-End n8n Automation Engine", icon: <CpuChipIcon className="size-5 text-primary" /> },
    { label: "Seamless CRM / ERPNext Integration", icon: <LinkIcon className="size-5 text-primary" /> },
    { label: "TypeScript-First Architecture", icon: <Square3Stack3DIcon className="size-5 text-primary" /> },
  ]

  const comparisonCards = [
    {
      title: "The Traditional Setup",
      subtitle: "Disconnected & Manual",
      icon: <ExclamationTriangleIcon className="size-5 text-amber-500" />,
      borderClass: "border-border hover:border-amber-500/40",
      badgeClass: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
      points: [
        "Slow WordPress sites with bloated plugins.",
        "Leads sitting in inbox unhandled for hours.",
        "Manual data entry into CRMs and spreadsheets.",
        "Hours spent drafting custom PDF proposals.",
      ],
      isNegative: true,
    },
    {
      title: "My Integrated Approach",
      subtitle: "Modern & Automated",
      icon: <CheckCircleIcon className="size-5 text-emerald-500" />,
      borderClass: "border-border hover:border-emerald-500/40",
      badgeClass: "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",
      points: [
        "Sub-second Next.js / Astro frontends built for SEO.",
        "Instant lead capture routed through n8n workflows.",
        "Real-time sync with Frappe CRM & ERPNext.",
        "Automated proposal & invoice generation pipelines.",
      ],
      isPositive: true,
    },
    {
      title: "Business Impact",
      subtitle: "Measurable Results",
      icon: <ArrowTrendingUpIcon className="size-5 text-primary" />,
      borderClass: "border-border hover:border-primary/40",
      badgeClass: "bg-primary/10 text-primary border border-primary/20",
      points: [
        "Higher search rankings and conversion rates.",
        "Zero manual copy-pasting between systems.",
        "Lead response time reduced from hours to seconds.",
        "Faster sales cycles and operational efficiency.",
      ],
      isImpact: true,
    },
  ]

  const caseStudies = [
    {
      id: "travel-agency",
      isPrimary: true,
      tag: "Full System Architecture",
      title: "Travel & Events Agency: Digital Sales Transformation",
      subtitle: "Replacing legacy web infrastructure with a Next.js frontend and an integrated n8n + ERPNext business engine.",
      problem: "The agency suffered from high drop-off rates on an outdated web presence and lost deals due to manual, slow lead processing across fragmented tools.",
      solution: [
        { label: "Next.js Frontend", desc: "High-performance, SEO-optimized marketing website built with TypeScript and Tailwind CSS." },
        { label: "n8n Automation Layer", desc: "Automated webhook processing, lead scoring algorithms, and instant team notification routing." },
        { label: "Frappe CRM & ERPNext", desc: "Unified lead management, automated status tracking, and database inventory sync." },
        { label: "Proposal OS", desc: "Web-based proposal engine pulling directly from ERP data to generate custom sales documents in minutes." },
      ],
      highlights: [
        "100% Automated Lead Intake",
        "Zero Manual Data Syncing Required",
        "Custom Proposal OS Integrated with ERP",
      ],
      ctaText: "Read Full Case Study",
      ctaLink: "/projects/sales-automation-platform",
    },
    {
      id: "n8n-workflow",
      isPrimary: false,
      tag: "Workflow & CRM Automation",
      title: "n8n Lead Processing & Multi-System Workflow Engine",
      subtitle: "Automated validation, CRM synchronization, and team notifications.",
      problem: "Incoming customer leads required manual evaluation by staff, creating bottlenecks during peak booking windows.",
      solutionText: [
        "End-to-end n8n automation engine ingesting webhook payloads.",
        "Custom payload transformation using JavaScript nodes.",
        "Automated error-handling fallback logic and Slack/Email alerts.",
      ],
      highlights: [
        "Automated Lead Scoring",
        "Instant CRM Payload Sync",
        "Custom REST API Integrations",
      ],
      ctaText: "Read Workflow Breakdown",
      ctaLink: "/projects/proposal-os",
    },
    {
      id: "wordpress-astro",
      isPrimary: false,
      tag: "Performance & Modernization",
      title: "Monolithic WordPress to Astro Modernizations",
      subtitle: "Modernizing legacy content sites into lightning-fast static web applications.",
      problem: "Legacy WordPress sites were suffering from poor Core Web Vitals (LCP > 3.5s), security vulnerability patching, and high server overhead.",
      solutionText: [
        "Extracted legacy content and restructured page components using Astro's Zero-JS-by-default engine.",
        "Optimized image delivery pipelines and deployed to global edge CDNs (Cloudflare Pages).",
      ],
      highlights: [
        "95+ Mobile & Desktop Lighthouse Scores",
        "Sub-second Page Load Speed",
        "Reduced Hosting Overhead to Near-Zero",
      ],
      ctaText: "Read Migration Case Study",
      ctaLink: "/projects/slideforge",
    },
  ]

  const pipelineSteps = [
    {
      step: 1,
      title: "Next.js Website",
      action: "Lead Capture",
      desc: "Captures lead via optimized form & sends secure REST/Webhook payload.",
      detail: "Client-side validation using TypeScript schemas, instantly transmitting payloads over HTTPS directly to the webhook receiver with sub-100ms latency.",
      codeSnippet: `// Step 1: Encrypted Webhook Payload
POST https://n8n.internal.app/webhook/lead-intake
{
  "source": "nextjs_frontend",
  "client": {
    "name": "Jane Doe",
    "email": "jane@travelco.com",
    "budget": "$15,000",
    "service": "Custom Events"
  },
  "timestamp": "2026-09-21T21:40:00Z"
}`,
      icon: <BoltIcon className="size-5" />,
    },
    {
      step: 2,
      title: "n8n Workflow Engine",
      action: "Validation & Routing",
      desc: "Validates data, runs scoring rules, and branches workflow paths.",
      detail: "Executes custom JavaScript nodes for payload sanitization, runs email MX check verification, computes dynamic lead score, and prepares ERP schema format.",
      codeSnippet: `// Step 2: n8n Workflow Data Transformation
const score = calculateLeadScore($input.item.json);
const sanitizedPayload = {
  doctype: "Lead",
  lead_name: $input.item.json.client.name,
  email_id: $input.item.json.client.email,
  custom_score: score,
  status: score >= 80 ? "Hot" : "Open"
};
return sanitizedPayload;`,
      icon: <CpuChipIcon className="size-5" />,
    },
    {
      step: 3,
      title: "Frappe CRM / ERPNext",
      action: "System Sync",
      desc: "Creates client profile, updates pipeline status, and triggers sales assignment.",
      detail: "Atomic API creation of Customer & Lead records inside Frappe CRM, automated task allocation to available reps, and instant team alerts via Slack/Email.",
      codeSnippet: `// Step 3: Frappe REST API
POST /api/resource/Lead
Response: 200 OK
{
  "name": "LEAD-2026-00421",
  "lead_owner": "sales.rep@agency.com",
  "assigned_pipeline": "Enterprise Q3",
  "status": "In Progress"
}`,
      icon: <LinkIcon className="size-5" />,
    },
    {
      step: 4,
      title: "Proposal OS",
      action: "Document & Notify",
      desc: "Auto-populates document template and notifies client via email/WhatsApp.",
      detail: "Pulls real-time pricing and inventory catalogs directly from ERPNext to render an interactive web proposal and dispatches automated confirmation links.",
      codeSnippet: `// Step 4: Automated Document Pipeline
Generated: Proposal #PROP-9921
Delivery: WhatsApp & Resend Email Sent
Interactive Link: https://proposal.agency.com/p/9921
Status: Viewed by Client (Instant Tracking)`,
      icon: <DocumentTextIcon className="size-5" />,
    },
  ]

  const services = [
    {
      title: "Next.js Web Development & Performance",
      icon: <BoltIcon className="size-5 text-primary" />,
      features: [
        "Custom Next.js & React web application development.",
        "Core Web Vitals optimization (LCP, CLS, INP) for maximum SEO.",
        "Headless CMS integration and dynamic static generation (SSG/ISR).",
        "Modern UI/UX implementation using Tailwind CSS & shadcn/ui.",
      ],
    },
    {
      title: "n8n Workflow & Business Automation",
      icon: <CpuChipIcon className="size-5 text-primary" />,
      features: [
        "Automated lead intake, processing, and distribution systems.",
        "Multi-step API integrations between web applications and internal tools.",
        "Data payload transformation, webhooks, and custom error handling.",
        "Automated proposal, invoice, and email/notification workflows.",
      ],
    },
    {
      title: "CRM/ERP Integration & Custom Dashboards",
      icon: <LinkIcon className="size-5 text-primary" />,
      features: [
        "Frappe CRM and ERPNext custom setup and API integration.",
        "Custom internal tools and dashboards built with TypeScript & PostgreSQL.",
        "Legacy site migrations (WordPress to Next.js / Astro).",
        "Database schema design and RESTful API development.",
      ],
    },
  ]

  const whyPoints = [
    {
      number: "01",
      title: "Engineering + Automation Combined",
      desc: "You don't need to hire a separate web developer and an automation engineer. I build both seamlessly.",
      icon: <SparklesIcon className="size-5 text-primary" />,
    },
    {
      number: "02",
      title: "Code Built for Speed & SEO",
      desc: "Next.js and TypeScript ensure your site is fast, scalable, accessible, and ranks on search engines.",
      icon: <BoltIcon className="size-5 text-primary" />,
    },
    {
      number: "03",
      title: "System Thinking",
      desc: "I don't just write code; I architect systems that save your team hours of manual operational overhead every week.",
      icon: <CpuChipIcon className="size-5 text-primary" />,
    },
  ]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    const formattedMessage = `Project Type: ${formData.projectType}\n\nProject Details:\n${formData.details}`

    const res = await sendContactEmail({
      name: formData.name,
      email: formData.email,
      message: formattedMessage,
    })

    setIsSubmitting(false)

    if (res.success) {
      setStatus({
        type: "success",
        text: "Thank you! Your project inquiry has been received. I will review your requirements and reply within 24 hours.",
      })
      setFormData({
        name: "",
        email: "",
        projectType: "Full Next.js Web Application",
        details: "",
      })
    } else {
      setStatus({
        type: "error",
        text: res.error || "Failed to send inquiry. Please try again or reach out via email directly.",
      })
    }
  }

  return (
    <div className="space-y-12">
      {/* UNIFIED HEADER PATTERN (Consistent with all pages in portfolio) */}
      <div className="border-b border-border pb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
              Services & Automation
            </h1>
            <p className="mt-2 text-base text-muted-foreground">
              Full-Stack Next.js development & business workflow automation
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Book a Call
            </a>
            <a
              href="#case-studies"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-card px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Case Studies
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 1: HERO CARD */}
      <section>
        <Card className="border-border bg-card p-6 md:p-8 transition-colors hover:bg-muted/30">
          <div className="space-y-6">

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground leading-snug">
              I Build Fast Next.js Websites & <span className="text-primary">Automate Your Business Operations.</span>
            </h2>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-3xl">
              Connecting high-converting web frontends with n8n, CRMs, and ERP systems so your leads turn into revenue automatically—without manual copy-pasting.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#case-studies"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Explore Case Studies
                <ArrowRightIcon className="ml-2 size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-sidebar px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Book a Technical Call
              </a>
            </div>

            {/* Key Metrics / Trust Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-border mt-6">
              {trustMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-lg border border-border bg-sidebar p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* SECTION 2: THE PROBLEM & SOLUTION */}
      <section>
        <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          <span className="h-4 w-4 rounded-full bg-primary" />
          Problem & Solution
        </div>

        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
            Most websites are disconnected from how the business actually runs.
          </h2>
          <p className="mt-2 text-base text-text-secondary max-w-3xl">
            Having a fast website isn&apos;t enough if your team is still manually copying leads, writing slow proposals, and wrestling with disconnected tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {comparisonCards.map((card, idx) => (
            <Card key={idx} className={`border bg-card p-6 md:p-8 transition-colors hover:bg-muted/50 ${card.borderClass}`}>
              <CardHeader className="p-0 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold ${card.badgeClass}`}>
                    {card.icon}
                    {card.subtitle}
                  </span>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-2 space-y-3">
                {card.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-base text-text-secondary">
                    {card.isNegative ? (
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive text-xs font-bold">×</span>
                    ) : (
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-success" />
                    )}
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 3: FEATURED CASE STUDIES */}
      <section id="case-studies" className="scroll-mt-20">
        <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          <span className="h-4 w-4 rounded-full bg-primary" />
          Featured Case Studies
        </div>

        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Real business systems engineered for performance</h2>
          <p className="mt-2 text-base text-text-secondary">
            End-to-end architectures replacing fragmented tools with automated operations.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* PRIMARY CASE STUDY */}
          <Card className="border-border bg-card p-6 md:p-8 transition-colors hover:bg-muted/40">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="secondary" className="bg-sidebar text-xs text-muted-foreground">
                  {caseStudies[0].tag}
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary text-xs font-medium">
                  Primary Feature
                </Badge>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{caseStudies[0].title}</h3>
                <p className="mt-1 text-base text-text-secondary">{caseStudies[0].subtitle}</p>
              </div>

              {/* Problem Quote */}
              <div className="rounded-lg border border-border bg-sidebar p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Problem Statement</p>
                <p className="text-base text-foreground leading-relaxed">&ldquo;{caseStudies[0].problem}&rdquo;</p>
              </div>

              {/* Solution Architecture Grid */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Solution Architecture Built</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {caseStudies[0].solution?.map((sol, idx) => (
                    <div key={idx} className="rounded-lg border border-border bg-sidebar p-4">
                      <p className="text-sm font-semibold text-primary">{idx + 1}. {sol.label}</p>
                      <p className="text-sm text-text-secondary mt-1 leading-relaxed">{sol.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights & Link */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {caseStudies[0].highlights.map((h, hIdx) => (
                    <Badge key={hIdx} variant="secondary" className="bg-sidebar text-xs text-muted-foreground">
                      ✓ {h}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={caseStudies[0].ctaLink}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  {caseStudies[0].ctaText}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </Card>

          {/* SECONDARY CASE STUDIES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {caseStudies.slice(1).map((cs) => (
              <Card key={cs.id} className="border-border bg-card p-6 md:p-8 flex flex-col justify-between transition-colors hover:bg-muted/40">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-sidebar text-xs text-muted-foreground">
                    {cs.tag}
                  </Badge>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{cs.title}</h3>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed">{cs.subtitle}</p>
                  </div>

                  <div className="rounded-lg border border-border bg-sidebar p-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Problem</p>
                    <p className="text-sm text-foreground leading-relaxed">&ldquo;{cs.problem}&rdquo;</p>
                  </div>

                  <ul className="space-y-2">
                    {cs.solutionText?.map((txt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{txt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-border flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.highlights.slice(0, 2).map((h, hIdx) => (
                      <Badge key={hIdx} variant="secondary" className="bg-sidebar text-[11px] text-muted-foreground">
                        {h}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={cs.ctaLink}
                    className="group inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Details
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE SYSTEM ARCHITECTURE */}
      <section>
        <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          <span className="h-4 w-4 rounded-full bg-primary" />
          System Architecture
        </div>

        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">How The Business System Connects</h2>
          <p className="mt-2 text-base text-text-secondary">
            Here is how a modern frontend connects seamlessly with backend automations and ERP systems.
          </p>
        </div>

        <Card className="border-border bg-card p-6 md:p-8 space-y-6">
          {/* Step Selection Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pipelineSteps.map((s, idx) => {
              const isActive = activeStep === idx
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-start p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-primary bg-primary/10 shadow-sm"
                      : "border-border bg-sidebar hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      Step {s.step}
                    </span>
                    <span className={isActive ? "text-primary" : "text-muted-foreground"}>{s.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{s.title}</span>
                  <span className="text-xs text-muted-foreground mt-0.5">{s.action}</span>
                </button>
              )
            })}
          </div>

          {/* Active Step Details & Code Inspection */}
          <div className="rounded-lg border border-border bg-sidebar p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
                  0{pipelineSteps[activeStep].step}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    {pipelineSteps[activeStep].title}
                  </h3>
                  <p className="text-xs text-primary font-medium uppercase tracking-wider">
                    {pipelineSteps[activeStep].action}
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-card text-xs text-muted-foreground self-start sm:self-auto">
                Interactive Inspector
              </Badge>
            </div>

            <p className="text-base text-foreground font-medium">
              {pipelineSteps[activeStep].desc}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {pipelineSteps[activeStep].detail}
            </p>

            {/* Code / Data Payload Preview */}
            <div className="mt-4 rounded-lg border border-border bg-card p-4 overflow-x-auto">
              <div className="flex items-center justify-between mb-2 text-xs text-muted-foreground font-mono">
                <span>payload.json</span>
                <span>Sub-system Integration</span>
              </div>
              <pre className="text-xs text-muted-foreground font-mono leading-relaxed overflow-x-auto">
                {pipelineSteps[activeStep].codeSnippet}
              </pre>
            </div>
          </div>
        </Card>
      </section>

      {/* SECTION 5: SERVICES & SOLUTIONS */}
      <section>
        <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          <span className="h-4 w-4 rounded-full bg-primary" />
          Services & Capabilities
        </div>

        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Tailored Engineering & Automation Services</h2>
          <p className="mt-2 text-base text-text-secondary">
            Grow your traffic and streamline your operations with custom full-stack solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((srv, idx) => (
            <Card key={idx} className="border-border bg-card p-6 md:p-8 flex flex-col justify-between transition-colors hover:bg-muted/50">
              <CardHeader className="p-0 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-sidebar text-primary mb-4">
                  {srv.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">{srv.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                <ul className="space-y-2.5">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-base text-text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 6: WHY WORK WITH ME */}
      <section>
        <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          <span className="h-4 w-4 rounded-full bg-primary" />
          Why Work With Me
        </div>

        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
            Full-Stack Technical Depth + Business Outcome Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {whyPoints.map((pt, idx) => (
            <Card key={idx} className="border-border bg-card p-6 md:p-8 transition-colors hover:bg-muted/50">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary tracking-wider">{pt.number}</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-sidebar">
                    {pt.icon}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-foreground">{pt.title}</h3>
                <p className="text-base text-text-secondary leading-relaxed">{pt.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTION 7: CALL TO ACTION / CONTACT FORM */}
      <section id="contact" className="scroll-mt-20">
        <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          <span className="h-4 w-4 rounded-full bg-primary" />
          Let&apos;s Build Together
        </div>

        <Card className="border-border bg-card p-6 md:p-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
              Ready to Automate Your Business & Upgrade Your Web Platform?
            </h2>
            <p className="mt-2 text-base text-text-secondary leading-relaxed">
              Whether you need a high-performance Next.js application, an n8n automation engine, or a connected CRM/ERP pipeline, let&apos;s build it.
            </p>
          </div>

          <div className="max-w-2xl">
            {status && (
              <div
                className={`mb-6 flex items-start gap-3 rounded-lg border p-4 text-sm ${
                  status.type === "success"
                    ? "border-success/30 bg-success/10 text-success"
                    : "border-destructive/30 bg-destructive/10 text-destructive"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircleIcon className="h-5 w-5 shrink-0" />
                ) : (
                  <ExclamationTriangleIcon className="h-5 w-5 shrink-0" />
                )}
                <p className="leading-relaxed">{status.text}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="landing-name" className="mb-1 md:mb-2 block text-sm font-medium text-foreground">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="landing-name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-border bg-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="landing-email" className="mb-1 md:mb-2 block text-sm font-medium text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="landing-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-border bg-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="landing-projectType" className="mb-1 md:mb-2 block text-sm font-medium text-foreground">
                  Project Type <span className="text-destructive">*</span>
                </label>
                <Select
                  id="landing-projectType"
                  required
                  value={formData.projectType}
                  onValueChange={(value) => value && setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger id="landing-projectType">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full Next.js Web Application">Full Next.js Web Application</SelectItem>
                    <SelectItem value="n8n Automation Engine">n8n Automation Engine</SelectItem>
                    <SelectItem value="CRM / ERPNext Integration">CRM / ERPNext Integration</SelectItem>
                    <SelectItem value="WordPress Migration">WordPress Migration</SelectItem>
                    <SelectItem value="Other / Consult">Other / Consult</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="landing-details" className="mb-1 md:mb-2 block text-sm font-medium text-foreground">
                  Project Details <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="landing-details"
                  required
                  rows={4}
                  placeholder="Tell me about your business goals, current bottlenecks, or desired timeline..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="border-border bg-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 h-10 font-semibold cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <ArrowPathIcon className="size-4 animate-spin" />
                    Sending Inquiry...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <PaperAirplaneIcon className="size-4" />
                    Send Project Inquiry
                  </span>
                )}
              </Button>

              <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
                <span>Prefer direct email? <a href="mailto:ali.rami.6699@gmail.com" className="text-primary hover:underline">ali.rami.6699@gmail.com</a></span>
                <a
                  href="https://www.upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                >
                  Or hire me directly on Upwork &rarr;
                </a>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </div>
  )
}
