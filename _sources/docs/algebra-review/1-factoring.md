# Factoring Polynomials

Here is an exercise generator.  Practice with each type of problem until you're comfortable with the relevant tricks.

::::{tab-set}

:::{tab-item} Monic Quadratics ($x^2 + bx + c$)
Note that if we {term}`FOIL` the expression $(x+m)(x+n)$, then we get:

$$(x+m)(x+n) = x^2 + nx + mx + mn = x^2 + \underbrace{(m+n)}_{b} x + \underbrace{(mn)}_{c}.$$

When factoring, we want to reverse this pattern.  Given an $x^2 + bx + c$, we'd like to find the numbers $m$ and $n$ so that $x^2 + bx + c = (x+m)(x+n)$.  To go from the right side to the left in the formula above, we need three things to work out:
- The {term}`leading coefficient` $a$ needs to be 1.  The trick only works on $x^2 + bx + c$, not on $7x^2 + bx + c$.
- The **sum** of $m$ and $n$ needs to be $b$
- The **product** of $m$ and $n$ needs to be $c$.

In other words, ***we're looking for factors of $c$ that add up to $b$***.

Here's an example.

```{prf:example}
:label: factoring-tricks

Let's try to factor $x^2 + 5x + 6$.  This is a quadratic function in {term}`general form` with $a = 1$, $b = 5$, and $c = 6$.  Since $a = 1$, we can try out the factoring trick above.  We just need to find factors of $c = 6$ that add up to $b = 5$.  The factors of $6$ that add up to $5$ are $2, 3$ (when you multiply them, you get 6, and when you add them, you get 5).

Therefore, $x^2 + 5x + 6 = (x + 2)(x + 3)$.
```

````{admonition} Exercise Generator
:class: tip

<div id="monic-div">Click the Randomize button to start.</div>

```{button-ref} #
:color: info
:class: sd-rounded-pill float-left

Reroll {octicon}`sync;1em;sd-text-info`
```

````

```{mermaid}
    flowchart TD
    A[Start] --> B{Is it?}
    B -- Yes --> C[OK]
    C --> D[Rethink]
    D --> B
    B -- No ----> E[End]
```
:::

:::{tab-item} Zoom Out
:::

:::{tab-item} Zoom Wide
more content
:::
::::

```{glossary}
FOIL
    **FOIL** stands for First, Outer, Inner, Last.  It represents the four products that you get when expanding a product of binomials: $(a+b)(c+d) = ac + ad + bc + bd$.
```

<script src="../../_static/1-factoring.js"></script>