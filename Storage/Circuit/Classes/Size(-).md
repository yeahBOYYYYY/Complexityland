---
layout: page
title: Size(...)
name: $\text{Size}$(...)
---

### Definition

Let $S : \mathbb{N} \to \mathbb{N}$  be a function and let $L\subseteq \{0, 1\}^*$ then $L\in \text{Size}(S)$  iff there exists a family of circuits $\{\mathcal{C}_n\}$ such that $\text{Size}(\mathcal{C}_n) \le S(n)$ and $\{\mathcal{C}_n\}$ computes $L$.

### Claims

1. $\text{Size}(2^n) = \{0, 1\}^*$ ([Original paper](https://ia800405.us.archive.org/6/items/bstj28-1-59/bstj28-1-59.pdf)), moreover $\text{Size}(\Theta(\frac{2^n}{n}))=\{0,1\}^*$.
2. Let $S:\mathbb{N}\to\mathbb{N}$  be a function such that $n\le S(n)\le \frac{2^n}{n}$ then $\text{Size}(S)\subsetneq\text{Size}(S + 10n)$.

### Relations

...

## Size(poly)

### Definition

We define $\text{Size}(\text{poly})=\bigcup_{n=0}^{\infty}\text{Size}(n^c)$ where $\text{Size}(n^c)$ is the class [Size(...)](Size(...).md#Definition).

### Claims

...

### Relations

...