import React from "react"

interface TechIconProps {
  name: string
  className?: string
}

export function TechIcon({ name, className = "size-4 shrink-0" }: TechIconProps) {
  switch (name.toLowerCase()) {
    case "react":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      )

    case "next.js":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.5l-6-8.5v8.5H9V6.5h1.8l5.7 8.2V6.5H18v11h-1.5z" />
        </svg>
      )

    case "typescript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7 8h6M10 8v8M14.5 15.5c.8.6 1.8.8 2.7.4.9-.4 1.3-1.3 1.3-2.1 0-1.7-2.5-1.9-2.5-3.3 0-.6.5-1.1 1.2-1.1.7 0 1.4.3 1.8.8m-4.5 5.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )

    case "tailwind css":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
        </svg>
      )

    case "html/css":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3zm15.1 5.3H8.3l.3 2.8h9.2l-.8 8.1-4.7 1.3-4.7-1.3-.3-3.7h2.6l.2 1.8 2.2.6 2.2-.6.3-3.1H7.8L7 4.7h11.3l-.2 2.6z" />
        </svg>
      )

    case "redux":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a4 4 0 00-3.8 2.8A5 5 0 004 9.5a5 5 0 002.2 4.2A4 4 0 004 17a4 4 0 004 4 4 4 0 003.5-2 5 5 0 008.5-4 5 5 0 00-2-8.5A4 4 0 0016 2a4 4 0 00-4 0zm0 2c1.1 0 2 .9 2 2a2 2 0 01-1 1.7 5 5 0 00-2 0A2 2 0 0110 6c0-1.1.9-2 2-2zm-5 6a3 3 0 013 3 3 3 0 01-1.2 2.4A4 4 0 008 13a4 4 0 00-3-1 3 3 0 012-2zm10 0a3 3 0 012 2 4 4 0 00-3 1 4 4 0 00-.8 2.4A3 3 0 0114 13a3 3 0 013-3z" />
        </svg>
      )

    case "node.js":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l10 5.8v11.5L12 25.1 2 19.3V7.8L12 2zm0 2.3L4 8.9v9.3l8 4.6 8-4.6V8.9l-8-4.6z" />
          <path d="M12 7.5a4.5 4.5 0 00-4.5 4.5c0 2.5 2 3.5 4.5 4 2.5.5 3 .9 3 1.8 0 .8-.7 1.4-1.7 1.4s-1.8-.4-2.3-1l-1.3 1.2c.9 1.1 2.2 1.6 3.6 1.6 2.1 0 3.7-1.2 3.7-3.1 0-2.3-1.8-3.3-4.3-3.8-2.5-.5-3.1-.8-3.1-1.7 0-.7.6-1.3 1.6-1.3 1 0 1.8.4 2.3.9l1.2-1.3C14 8 13.1 7.5 12 7.5z" />
        </svg>
      )

    case "go":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 10.5h6a1.5 1.5 0 010 3h-6a1.5 1.5 0 010-3zm2-4h4a1.5 1.5 0 010 3h-4a1.5 1.5 0 010-3zm1 8h3a1.5 1.5 0 010 3h-3a1.5 1.5 0 010-3zM15 7a5 5 0 100 10 5 5 0 004.8-3.6H15v-2.8h7.4A7.5 7.5 0 1115 4.5c2.3 0 4.4.9 5.9 2.5l-2 2A4.8 4.8 0 0015 7z" />
        </svg>
      )

    case "python":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.9 2C8.6 2 6.7 3.4 6.7 5.7V8h5.6v.8H4.7C2.4 8.8 1 10.7 1 14c0 3.3 1.4 5.2 3.7 5.2h1.6v-2.4c0-2.3 2-4.2 4.3-4.2h5.6v-1.9c0-2.3-1.9-3.7-5.2-3.7h-1.1V5.7c0-2.3 2-3.7 5.3-3.7H11.9zm-2.4 1.8a1 1 0 110 2 1 1 0 010-2z" />
          <path d="M12.1 22c3.3 0 5.2-1.4 5.2-3.7V16h-5.6v-.8h7.6c2.3 0 3.7-1.9 3.7-5.2 0-3.3-1.4-5.2-3.7-5.2h-1.6v2.4c0 2.3-2 4.2-4.3 4.2H7.8v1.9c0 2.3 1.9 3.7 5.2 3.7h1.1v1.9c0 2.3-2 3.7-5.3 3.7h3.3zm2.4-1.8a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      )

    case "rust":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1a11 11 0 1011 11A11 11 0 0012 1zm0 2.5a8.5 8.5 0 018.5 8.5c0 1.9-.6 3.6-1.7 5l-2.4-1.4a6 6 0 00.6-2.1h-2a4 4 0 00-4-4V7.5h2V5h-6v2.5h2v2a4 4 0 00-4 4H5a6 6 0 00.6 2.1l-2.4 1.4A8.5 8.5 0 0112 3.5zm-2 9a2 2 0 114 0 2 2 0 01-4 0z" />
        </svg>
      )

    case "postgresql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 3.7 2 6.9 5 8.6v-2.4c-1.8-1.4-3-3.6-3-6.2 0-4.4 3.6-8 8-8s8 3.6 8 8c0 2.6-1.2 4.8-3 6.2v2.4c3-1.7 5-4.9 5-8.6 0-5.5-4.5-10-10-10zm-1 5a4 4 0 00-4 4c0 1.8 1.1 3.3 2.7 3.8L9 19h2v-4.1a4 4 0 003-3.9 4 4 0 00-3-4z" />
        </svg>
      )

    case "redis":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.5 7.5L12 2.8l9.5 4.7L12 12.2 2.5 7.5zm0 5L12 17.2l9.5-4.7v2.5L12 19.7 2.5 15v-2.5zm0 4.5L12 21.7l9.5-4.7v2.5L12 24.2 2.5 19.5V17z" />
        </svg>
      )

    case "docker":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13.5h2.2v-2.2H3v2.2zm2.8 0H8v-2.2H5.8v2.2zm2.8 0h2.2v-2.2H8.6v2.2zm2.8 0h2.2v-2.2h-2.2v2.2zm-2.8-2.8h2.2V8.5H8.6v2.2zm2.8 0h2.2V8.5h-2.2v2.2zm2.8 0h2.2V8.5H14.2v2.2zM23 12c-.5-1.1-1.6-1.5-2.6-1.4-.4-1.2-1.5-2.1-2.9-2.1h-.8c-.3-1.8-1.8-3.2-3.7-3.2v1.5c1 0 1.9.8 2 1.7h-7V11H2c-1.1 0-2 .9-2 2 0 4.4 3.6 8 8 8 5.5 0 10.1-4 10.9-9.3.8.4 1.8.3 2.6-.4.9-.8 1.5-2 1.5-3.3z" />
        </svg>
      )

    case "kubernetes":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2.5 7.5v11L12 24l9.5-5.5v-11L12 2zm0 2.8l7 4v8.4l-7 4-7-4V8.8l7-4zm0 2.2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      )

    case "aws":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.8 11.2c-.8.5-1.5 1.1-1.5 2.1 0 1.2.9 2 2.2 2 1.3 0 2.2-.8 2.7-1.6v1.4h2V8.9h-2v1.3c-.6-.7-1.5-1.1-2.5-1.1-2.2 0-3.6 1.7-3.6 3.8 0 1 .4 1.8 1 2.3l1.7-1.4zm2.1.8c0 .8-.5 1.4-1.3 1.4s-1.3-.6-1.3-1.4c0-.8.5-1.4 1.3-1.4s1.3.6 1.3 1.4zm6.6 3.1h2.2l2.3-7.5h-2.1l-1.4 5.3-1.4-5.3h-2.1l2.5 7.5zm-13 4.2c5.8 3.5 13.5 3.5 19 0l.5.9c-5.8 3.8-14.2 3.8-20 0l.5-.9zm18.8-.2c.7-.3 1.9-.9 2.7-1.7-.1.9-.4 2.1-.9 2.8-.4-.2-1.1-.6-1.8-1.1z" />
        </svg>
      )

    case "ci/cd":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M6 9v6" />
          <path d="M9 6h5a4 4 0 014 4v5" />
        </svg>
      )

    case "terraform":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 2.5L1.5 6.3v7.4L8 10V2.5zm.8 7.5l6.5-3.8V2.5l-6.5 3.7v3.8zm0 1.6v7.4l6.5 3.8v-7.5l-6.5-3.7zm7.3-4.2l6.4 3.7v7.4l-6.4-3.7V7.4z" />
        </svg>
      )

    case "linux":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C9.5 2 8 4 8 7c0 1.2.3 2.5.8 3.5C7.2 11.2 6 13 6 15.5c0 2.5 1.5 4.5 4 5.2-.8.5-1.5 1-2 1.3h8c-.5-.3-1.2-.8-2-1.3 2.5-.7 4-2.7 4-5.2 0-2.5-1.2-4.3-2.8-5C15.7 9.5 16 8.2 16 7c0-3-1.5-5-4-5zm-1.5 5a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2zm-1.5 2c.8 0 1.5.5 1.5 1.2H10.5c0-.7.7-1.2 1.5-1.2z" />
        </svg>
      )

    case "grpc":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7.8v8.4L12 22l10-5.8V7.8L12 2zm0 2.4l7.6 4.4v6.4L12 19.6l-7.6-4.4V8.8L12 4.4zm-2 5.6v4h4v-2h-2v-2h2V10h-4z" />
        </svg>
      )

    case "websocket":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 16l-4-4 4-4" />
          <path d="M17 8l4 4-4 4" />
          <path d="M3 12h18" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )

    case "graphql":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a1.5 1.5 0 00-1.3.8l-7.8 4.5a1.5 1.5 0 00-.7 1.3v9a1.5 1.5 0 00.7 1.3l7.8 4.5a1.5 1.5 0 001.5 0l7.8-4.5a1.5 1.5 0 00.7-1.3v-9a1.5 1.5 0 00-.7-1.3L13.3 2.8A1.5 1.5 0 0012 2zm0 2.3l6.5 3.8v7.6L12 19.5 5.5 15.7V8.1L12 4.3zM12 7l4.3 7.5H7.7L12 7z" />
        </svg>
      )

    case "webassembly":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="3" width="20" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M5 8l2.5 8L9.5 11l2 5 2.5-8M17 11h3m-3 2.5h3m-3-5h3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case "crdt":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <path d="M8.5 7.5l7 0" />
          <path d="M7.5 8.5l3.5 7" />
          <path d="M16.5 8.5l-3.5 7" />
        </svg>
      )

    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
  }
}

