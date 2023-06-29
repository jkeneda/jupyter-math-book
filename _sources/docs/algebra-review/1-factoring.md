# Factoring Tricks

This page is designed to walk you through all of the factoring tricks we'll need.  Each tab discusses a new factoring trick, and you can find an exercise generator at the bottom of each tab.  Practice with each type of problem until you're comfortable with the relevant trick, and then move on to the next tab!

::::::{tab-set}

:::::{tab-item} Monic Quadratics ($1x^2 + bx + c$)

Note that if we {term}`FOIL` the expression $(x+m)(x+n)$, then we get:

$$(x+m)(x+n) = x^2 + nx + mx + mn = x^2 + \underbrace{(m+n)}_{b} x + \underbrace{(mn)}_{c}.$$

When factoring, we want to reverse this pattern.  That is, given an $x^2 + bx + c$, we'd like to find the numbers $m$ and $n$ so that $x^2 + bx + c = (x+m)(x+n)$.  But to go from the $ax^2 + bx + c$ form back to the {term}`factored form` $(x + m)(x + n)$, we need a few things to work out:
````{margin}
```{note}
A polynomial whose {term}`leading coefficient` is 1 is called {term}`monic`.  The word {term}`monic` comes from the Greek 'mono', meaning 'one'.
```
````
- The {term}`leading coefficient` $a$ needs to be 1.  In other words, this trick only works on things like $x^2 + bx + c$, not on $7x^2 + bx + c$ or $-2x^2 + bx + c$.
- We're looking for two numbers, $m$ and $n$, but they have to add up/multiply to the right things:
    - The **sum** of $m$ and $n$ needs to be $b$
    - The **product** of $m$ and $n$ needs to be $c$.

In other words, ***we're looking for factors of $c$ that add up to $b$***.

If we can find numbers $m, n$ with $m\cdot n = c$ and $m + n = b$, then the original function will factor like $x^2 + bx + c = (x + m)(x + n)$.

To make things more concrete, here's an example.

````{margin}
```{note}
We chose the numbers $2$ and $3$ (which end up next to the $x$'s in the {term}`factored form`) because we need **factors of $c$ that add up to $b$**.
```
````

```{prf:example}
Let's try to factor $x^2 + 5x + 6$.  This is a quadratic function in {term}`general form` with $a = 1$, $b = 5$, and $c = 6$.  Since $a = 1$, we can try out the factoring trick above.  We just need to find factors of $c = 6$ that add up to $b = 5$.

The factors of $6$ that add up to $5$ are $2, 3$ (when you multiply them, you get 6, and when you add them, you get 5).

Therefore, $x^2 + 5x + 6 = (x + 2)(x + 3)$.  We can {term}`FOIL` the right-hand side to check our answer, if we want.
```

````{exercise} Random Generator
:label: monic-generator
:nonumber:

<div class='random' id='monic-prompt'>Click the Randomize button to start!</div>

```{button-ref} #
:color: info
:class: sd-rounded-pill float-center

Reroll {octicon}`sync;1em;sd-text-light`
```

```{hint}
:class: dropdown

<div class='random' id='monic-hint'></div>
```
````

```{solution} monic-generator
:class: dropdown

<div class='random' id='monic-answer'>You need to generate an example with the Reroll button above first!</div>
```
:::::

:::::{tab-item} Non-Monic Quadratics

In this section, we'll discuss an extension of the trick for factoring monic quadratics.  What happens if $a \neq 1$?

```{mermaid}
    flowchart LR
    A[stuff] --> B[other stuff]
    B --> C[Factor by grouping.]
```
Find factors "$$m$$", $$n$$ of *ac* that add up to *b*.
Split up middle term *bx* into *mx + nx*.


More coming soon!

````{exercise} Random Generator
:label: non-monic-generator
:nonumber:

<div class='random' id='non-monic-prompt'>Click the Randomize button to start!</div>

```{button-ref} #
:color: info
:class: sd-rounded-pill float-center

Reroll {octicon}`sync;1em;sd-text-light`
```

```{hint}
:class: dropdown

<div class='random' id='non-monic-hint'></div>
```
````

```{solution} non-monic-generator
:class: dropdown

<div class='random' id='non-monic-answer'>You need to generate an example with the Reroll button above first!</div>
```
:::::

:::::{tab-item} Special Binomials

Here we'll discuss factoring tricks involving a {term}`difference of squares` or a {term}`sum/difference of cubes`.

::::{tab-set}
:::{tab-item} Difference of Squares

Differences of squares can be factored using:

```{math}
:label: difference-of-squares

A^2 - B^2 = (A - B)(A + B).
```

Here's an example.

````{margin}
```{note}
The main trick is trying to rewrite your original binomial as an $A^2 - B^2$.  Think carefully about what $A$ and $B$ are!
```
````

```{prf:example}
Let's try to factor $f(x) = 9x^2 - 16$.

The first thing to notice is that both $9$ and $16$ are squares: $3^2$ and $4^2$.  In fact, we can rewrite the original $f(x)$ as a difference of squares.

$$f(x) = 9x^2 - 16 = (3x)^2 - (4)^2.$$

Now, applying the factoring trick {eq}`difference-of-squares` above, we get $f(x) = (3x)^2 - (4)^2 = (3x - 4)(3x + 4)$.
```

````{exercise} Random Generator
:label: difference-of-squares-generator
:nonumber:

<div class='random' id='difference-of-squares-prompt'>Click the Randomize button to start!</div>

```{button-ref} #
:color: info
:class: sd-rounded-pill float-center

Reroll {octicon}`sync;1em;sd-text-light`
```
```{hint}
:class: dropdown

<div class='random' id='difference-of-squares-hint'></div>
```
````

```{solution} difference-of-squares-generator
:class: dropdown

<div class='random' id='difference-of-squares-answer'>You need to generate an example with the Reroll button above first!</div>
```
:::

:::{tab-item} Sum/Difference of Cubes

There are also factoring tricks for sums/differences of cubes.

```{math}
:label: sum-and-difference-of-cubes

A^3 + B^3 = (A + B)(A^2 - AB + B^2)
\\\\
A^3 - B^3 = (A - B)(A^2 + AB + B^2)
```

Here's an example.

````{margin}
```{note}
The main trick is trying to rewrite your original binomial as an $A^3 - B^3$.  Think carefully about what $A$ and $B$ are!
```
````

```{prf:example}
Let's try to factor $f(x) = 27x^3 + 64$.

The first thing to notice is that $27$ and $64$ are cubes: $27 = 3^3$ and $64 = 4^3$.  In fact, we can rewrite the original $f(x)$ as a sum of cubes.

$$f(x) = 27x^3 + 64 = (3x)^3 + (4)^3.$$

Now, applying the factoring trick {eq}`sum-and-difference-of-cubes` above (specifically, the top formula, since this is a sum of cubes), we get 

$$
\begin{align*}
f(x) = (3x)^3 + (4)^3 &= (3x + 4)((3x)^2 - (3x)(4) + (4)^2) && \text{(factoring trick)}\\ 
&= (3x + 4)(9x^2 - 12x + 16). && \text{(clean up)}
\end{align*}
$$

```

````{margin}
The following cubes might be helpful to you:
| $n$ | $n^3$|
|:---:|:----:|
| $1$ | $1$ |
| $2$ | $8$ |
| $3$ | $27$ |
| $4$ | $64$ |
| $5$ | $125$ |
| $6$ | $216$ |
| $7$ | $343$ |
| $8$ | $512$ |
| $9$ | $729$ |
| $10$ | $1000$ |
````

Try some for yourself.

````{exercise} Random Generator
:label: cube-generator
:nonumber:

<div class='random' id='cube-prompt'>Click the Randomize button to start!</div>

```{button-ref} #
:color: info
:class: sd-rounded-pill float-center

Reroll {octicon}`sync;1em;sd-text-light`
```

```{hint}
:class: dropdown

<div class='random' id='cube-hint'></div>
```
````

```{solution} cube-generator
:class: dropdown

<div class='random' id='cube-answer'>You need to generate an example with the Reroll button above first!</div>
```
:::
::::
:::::

:::::{tab-item} All

This exercise randomizer combines all of the randomizers from the previous tabs.  Are you ready to test yourself on *all* of the factoring tricks?

````{exercise} Random Generator
:label: all-generator
:nonumber:

<div class='random' id='all-prompt'>Click the Randomize button to start!</div>

```{button-ref} #
:color: info
:class: sd-rounded-pill float-center

Reroll {octicon}`sync;1em;sd-text-light`
```

```{hint}
:class: dropdown

<div class='random' id='all-hint'></div>
```
````

```{solution} all-generator
:class: dropdown

<div class='random' id='all-answer'>You need to generate an example with the Reroll button above first!</div>
```
:::::
::::::

```{warning}
The randomized solutions aren't smart enough (yet?) to spot common factors.  For example, if you were asked to factor $9x^2 - 9$, it's best to start by factoring out the common factor of $9$ to get $9(x^2 - 1)$, and then you can finish factoring the $x^2 - 1$ part using the {term}`difference of squares` trick.

The solutions for the randomizer will ignore any common factors like this - they're only going to use the factoring tricks provided on this page.
```

<script src="../../_static/1-factoring.js"></script>