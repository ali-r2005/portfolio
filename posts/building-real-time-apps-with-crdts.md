---
title: 'Building Real-Time Apps with CRDTs'
date: '2026-06-15'
excerpt: 'A deep dive into conflict-free replicated data types and how they power modern collaborative applications.'
coverImage: 'https://picsum.photos/seed/crdt/800/400'
---

## Introduction

CRDTs (Conflict-free Replicated Data Types) are a class of data structures that allow multiple users to edit the same data concurrently without conflicts. In this post, we'll explore how they work and how to implement them.

## How CRDTs Work

Unlike traditional conflict resolution strategies like OT (Operational Transformation), CRDTs are designed to be mathematically conflict-free. Each operation is commutative, meaning the order of operations doesn't matter.

## Practical Example

Let's build a simple collaborative text editor using a CRDT library. We'll use the popular automerge library to handle the underlying data structures.

First, install the library and set up the basics. Then we'll wire up real-time sync using WebSockets.
