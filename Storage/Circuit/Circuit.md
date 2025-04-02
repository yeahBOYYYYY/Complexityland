---
layout: page
title: Circuit
---

### Definition

**Definition** Let $\Sigma$ be an alphabet let $\mathcal{B}\subseteq \bigcup_{n=1}^{\infty}(\Sigma^n \to \Sigma)$ let $n \in \mathbb{N}_{+}$ let 
$k_{1} \ldots k_{n} \in \mathbb{N}_{+}$ let $f_{1}\ldots f_{n}\in\mathcal{B}$ such that $f_i:\Sigma^{k_i}\to\Sigma$ for all $i\in[n]$ and let $x_{1}\ldots x_{m},y_{1}\ldots y_{k}\in\Sigma$ then a directed graph $G$ on $\left\{ f_{1}\ldots f_{n},x_{1}\ldots x_{m},y_{1}\ldots y_{k}\right\}$ that satisfies

- G doesn't contain directed loops.
- $\deg^{-}(x_i) = 0$ for all $i\in\left[m\right]$.
- $\deg^{-}(f_i) = k_i$ for all $i\in\left[n\right]$.
- $\deg^{-}(y_i) = 1$ for all $i\in\left[k\right]$.


**Definition** Let $\Sigma$ be an alphabet let $\mathcal{C}$ be a circuit and let $x\in\Sigma^n$ then $\mathcal{C}(x)$ is the result of computing the circuit $\mathcal{C}$ layer by layer on $x$ as an input and the output is the corresponding $y$.

### Claims

...

## Uniform Circuit

### Definition

...

### Claims

...
