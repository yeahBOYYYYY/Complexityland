---
layout: page
title: Reg(...)
---

### Definition

Let $\Sigma$  be an alphabet and $L\subseteq\Sigma^*$ be a language then $L \in \text{Reg}(\Sigma)$  iff there exists a [deterministic finite automata](https://en.wikipedia.org/wiki/Deterministic_finite_automaton) over $\Sigma$ that accepts $L$.

#### [Regular Expressions](https://en.wikipedia.org/wiki/Regular_language)

Let $\Sigma$  be an alphabet will define regular expressions recursively,
* $\varnothing$ is a regular expression.
* Let $a\in \Sigma\cup\{\varepsilon\}$ then $a$ is a regular expression.
* Let $R_1, R_2$ be regular expressions then so is $R_1R_2$.
* Let $R_1, R_2$ be regular expressions then so is $R_1\cup R_2$.
* Let $R$ be a regular expression then so is $R^*$.

Now we can define a language of a regular expression,
* $L(\varnothing) = \varnothing$.
* Let $a\in \Sigma\cup\{\varepsilon\}$ then $L(a)=\{a\}$.
* Let $R_1, R_2$ be regular expressions then $L(R_1)L(R_2)$.
* Let $R_1, R_2$ be regular expressions then $L(R_1)\cup L(R_2)$.
* Let $R$ be a regular expression then $L(R^*) = L(R)^*$.

We define $\text{Reg}(\Sigma) = \{L(r)\mid r \text{ is a regular expression}\}$.
### Claims

1. Let $\Sigma$ be an alphabet and let $L\subseteq\Sigma^*$ then, $L\in\text{Reg}(\Sigma)$ iff there exists a [non-deterministic finite automata](https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton) over $\Sigma$ that accepts $L$.

### Relations

...