export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-real-time-apps-with-crdts",
    title: "Building Real-Time Apps with CRDTs",
    date: "2026-06-15",
    excerpt: "A deep dive into conflict-free replicated data types and how they power modern collaborative applications.",
    content: `
## Introduction

CRDTs (Conflict-free Replicated Data Types) are a class of data structures that allow multiple users to edit the same data concurrently without conflicts. In this post, we'll explore how they work and how to implement them.

## How CRDTs Work

Unlike traditional conflict resolution strategies like OT (Operational Transformation), CRDTs are designed to be mathematically conflict-free. Each operation is commutative, meaning the order of operations doesn't matter.

## Practical Example

Let's build a simple collaborative text editor using a CRDT library. We'll use the popular automerge library to handle the underlying data structures.

First, install the library:
`,
  },
  {
    slug: "rust-vs-go-for-backend-development",
    title: "Rust vs Go for Backend Development in 2026",
    date: "2026-05-28",
    excerpt: "Comparing performance, ergonomics, and ecosystem of the two most popular systems programming languages for backend services.",
    content: `
## Why Compare?

Both Rust and Go have become dominant players in backend development. Go offers simplicity and fast compilation, while Rust provides memory safety and zero-cost abstractions.

## Performance

Rust consistently edges out Go in raw performance benchmarks, but Go's garbage collector has improved significantly in recent releases.

## Developer Experience

Go's simplicity makes it easier to onboard new developers, while Rust's learning curve is steeper but rewards with stronger guarantees. The tooling for both has matured considerably.

## Ecosystem

Both have mature web frameworks, database drivers, and tooling. Go's standard library is particularly strong for network services, while Rust's crate ecosystem continues to grow rapidly.
`,
  },
  {
    slug: "mastering-nextjs-16",
    title: "What's New in Next.js 16",
    date: "2026-05-10",
    excerpt: "Exploring the latest features including Turbopack by default, React 19 integration, and the new caching model.",
    content: `
## Overview

Next.js 16 brings significant improvements to the developer experience and runtime performance. Let's break down the key changes.

## Turbopack is Default

Both development and production builds now use Turbopack by default, resulting in dramatically faster cold starts and hot reloads. The webpack fallback is still available with the --webpack flag.

## React 19

Full integration with React 19's View Transitions, improved Server Components, and the new Activity component for managing concurrent rendering.

## Caching Model

The new \`cacheComponents: true\` flag replaces the experimental PPR and dynamicIO configurations, making partial prerendering easier to adopt.
`,
  },
]
