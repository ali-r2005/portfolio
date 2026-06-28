---
title: "What's New in Next.js 16"
date: '2026-05-10'
excerpt: 'Exploring the latest features including Turbopack by default, React 19 integration, and the new caching model.'
coverImage: 'https://picsum.photos/seed/nextjs16/800/400'
---

## Overview

Next.js 16 brings significant improvements to the developer experience and runtime performance. Let's break down the key changes.

## Turbopack is Default

Both development and production builds now use Turbopack by default, resulting in dramatically faster cold starts and hot reloads. The webpack fallback is still available with the --webpack flag.

## React 19

Full integration with React 19's View Transitions, improved Server Components, and the new Activity component for managing concurrent rendering.

## Caching Model

The new `cacheComponents: true` flag replaces the experimental PPR and dynamicIO configurations, making partial prerendering easier to adopt.
