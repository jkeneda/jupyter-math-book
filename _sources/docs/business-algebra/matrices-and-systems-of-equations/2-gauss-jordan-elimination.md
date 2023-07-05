# Gauss-Jordan Elimination

Gauss-Jordan Elimination is a method for reducing the matrices from systems of equations.  The reduced form allows us to solve the system.

## Translating from a System to a Matrix (and vice versa)
Suppose we're given the system of equations

$$\begin{cases}
\ \ \ x + y = 4\\
-x + y = 0\\
\end{cases}$$

When we translate an equation like $x + y = 4$ into a matrix row, we think of it in terms of its {term}`coefficients<coefficient>`.  But sometimes the coefficients aren't written explicitly.  If we want to grab the coefficients on $x$ and $y$, we should think of the equation as $1x + 1y = 4$.  We then form a column for each variable, and we leave the right-hand side constants in the matrix as an augmented column.  The matrix below is just a way of rewriting the system above.

$$\begin{array}{c}
\ \  x \quad\ y \quad\;\! \ \ \\
\left[\begin{array}{cc|c}
    1 & 1 & 4 \\
    -1 & 1 & 0  \\
\end{array}\right]\\\\
\end{array}$$

````{margin}
```{note}
Some equations are especially tricky to translate.  For example, if a term/variable is *missing entirely*, then its coefficient is 0.

$$\begin{array}{c}
\begin{cases}
\, x = 2\\
\, y = 7\\
\end{cases} \\\\
\big\Updownarrow \\\\
\begin{cases}
\, 1x + 0y = 2\\
\, 0x + 1y = 7\\
\end{cases} \\\\
\big\Updownarrow \\\\
\left[\begin{array}{cc|c}
    1 & 0 & 2 \\
    0 & 1 & 7 \\
\end{array}\right]\\\\
\end{array}$$

```
````

In other words, we have:

```{admonition} Translating Back and Forth
$$\begin{array}{ccc}
\begin{cases}
\ \ \ x + y = 4\\
-x + y = 0\\
\end{cases} &
\iff &
\begin{array}{c}
\ \  x \quad\ y \quad\;\! \ \ \\
\left[\begin{array}{cc|c}
    1 & 1 & 4 \\
    -1 & 1 & 0  \\
\end{array}\right]\\\\
\end{array}
\end{array}$$
```

From now on, we'll leave off the $x$ and $y$'s above the matrix.  Usually, we'll just write the translation as $\left[\begin{array}{cc|c}
    1 & 1 & 4 \\
    -1 & 1 & 0  \\
\end{array}\right]$, with the understanding that the columns correspond to the variables (in alphabetical order).

```{warning}
Sometimes, we have to rearrange the equation we start with until it has the appropriate format for the matrix.  For example, if we start with the equation $2x = 3y$, we would need to rearrange the equation to get the variables together (maybe subtract $3y$ from both sides to get $2x - 3y = 0$).  The corresponding matrix row would look like $[2 \ -3\ |\ 0]$.
```

## Reducing the Matrix

In this chapter, the goal is to find the $x$- and $y$-values that simultaneously balance the system of equations we started with.  Gauss-Jordan Elimination is an approach that allows us to solve the system by using a few row operations to reduce the system's matrix until it is of the form $\left[\begin{array}{cc|c}
    1 & 0 & a \\
    0 & 1 & b  \\
\end{array}\right]$.  We can then translate the matrix into our answer: $x = a$ and $y = b$.

To get to a matrix that looks like the one above, we are only allowed to do row operations that preserve the original solution set.  There are three such row operations.  Let's explore the first one.

### Row Swapping

We are allowed to swap rows, because that's the same thing as swapping the equations in the system.  This doesn't affect the solution set.

`````{admonition} Try it yourself!
:class: tip

```{div}
:name: gje1

$$\begin{split}\left[\begin{array}{cc|c}
    4 & 5 & 6 \\
    1 & 2 & 3 \\
\end{array}\right]\end{split}$$
```

````{div}
:name: swap-rows

```{button-ref} #
:color: info
:class: sd-rounded-pill float-center

Swap Rows {octicon}`sync;1em;sd-text-light`
```
````
`````

Typically, we use this row operation to get a 1 where we want it in the matrix.  The next operation can also be used to force a specific entry to become a 1.

### Multiplying/Dividing a Row by a Number

We are also allowed to multiply/divide a row by a **non-zero** number.  This is analogous to multiplying/dividing both sides of an equation by the number, which doesn't change its solution set.  For example, $2x = 6$ means the same thing as $x = 3$.  We can go back and forth between these formats by multiplying/dividing by 2, but this doesn't change the $x$-value that we're looking for.



<script src="../../../scripts/vectorious.js">
</script>
<script src="../../../scripts/matrix-TeX.js">
</script>
<script src="../../../scripts/Matrix Unit/2-gauss-jordan-elimination.js">
</script>