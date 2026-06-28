import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 className="mb-3 mt-6 text-base font-semibold text-foreground first:mt-0">
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p className="mb-2 leading-relaxed text-text-secondary last:mb-0">
            {children}
          </p>
        ),
        code: ({ children }) => (
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
            {children}
          </code>
        ),
        ul: ({ children }) => (
          <ul className="mb-2 list-disc pl-5 text-text-secondary last:mb-0">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-2 list-decimal pl-5 text-text-secondary last:mb-0">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="leading-relaxed">{children}</li>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
