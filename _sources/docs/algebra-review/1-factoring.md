# Factoring Polynomials

Here is an exercise generator.  Practice with each type of problem until you're comfortable with the relevant tricks.

::::{tab-set}

:::{tab-item} Monic Quadratics ($1x^2 + bx + c$)
Note that if we {term}`FOIL` the expression $(x+m)(x+n)$, then we get:

$$(x+m)(x+n) = x^2 + nx + mx + mn = x^2 + \underbrace{(m+n)}_{b} x + \underbrace{(mn)}_{c}.$$

When factoring, we want to reverse this pattern.  Given an $x^2 + bx + c$, we'd like to find the numbers $m$ and $n$ so that $x^2 + bx + c = (x+m)(x+n)$.  To go from the right side to the left in the formula above, we need three things to work out:
- The {term}`leading coefficient` $a$ needs to be 1.  A polynomial whose {term}`leading coefficient` is 1 is called {term}`monic`.  The word comes from the Greek 'mono', meaning 'one'.  In other words, this trick only works on things like $x^2 + bx + c$, not on $7x^2 + bx + c$ or $-2x^2 + bx + c$.
- The **sum** of $m$ and $n$ needs to be $b$
- The **product** of $m$ and $n$ needs to be $c$.

In other words, ***we're looking for factors of $c$ that add up to $b$***.

Here's an example.

```{prf:example}
:label: factoring-tricks

Let's try to factor $x^2 + 5x + 6$.  This is a quadratic function in {term}`general form` with $a = 1$, $b = 5$, and $c = 6$.  Since $a = 1$, we can try out the factoring trick above.  We just need to find factors of $c = 6$ that add up to $b = 5$.  The factors of $6$ that add up to $5$ are $2, 3$ (when you multiply them, you get 6, and when you add them, you get 5).

Therefore, $x^2 + 5x + 6 = (x + 2)(x + 3)$.
```

````{admonition} Experiment
:class: tip

<div id='monic-prompt'>Click the Randomize button to start!</div>

```{button-ref} #
:color: info
:class: sd-rounded-pill float-center

Reroll {octicon}`sync;1em;sd-text-light`
```

```{admonition} Answer
:class: note, dropdown

<div id='monic-answer'>You need to generate an example with the Reroll button above first!</div>
```
````
:::

:::{tab-item} Non-Monic Quadratics
In this section, we'll discuss an extension of the trick for factoring monic quadratics.  What happens if $a \neq 1$?
:::

:::{tab-item} Special Binomials
Here we'll discuss factoring tricks involving a {term}`difference of squares` or sums/differences of cubes.
:::
::::

```{glossary}
difference of squares
    A **difference of squares** is a difference where both terms are squares: $A^2 - B^2$.  In this case, we can always factor, since $A^2 - B^2 = (A - B)(A + B)$.
FOIL
    **FOIL** stands for First, Outer, Inner, Last.  It represents the four products that you get when expanding a product of binomials: $(a+b)(c+d) = ac + ad + bc + bd$.
monic
    A polynomial is called **monic** if its {term}`leading coefficient` is 1.  For quadratics of the form $ax^2 + bx + c$, this means $a = 1$.
```

<script src="../../_static/1-factoring.js"></script>