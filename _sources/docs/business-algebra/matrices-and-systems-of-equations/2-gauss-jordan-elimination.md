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
\ \:\! x \quad\  \:\! y \quad\;\! c\\
\left[\begin{array}{cc|c}
    1 & 1 & 4 \\
    -1 & 1 & 0  \\
\end{array}\right]
\end{array}$$

In other words, we have:

```{admonition} Translating Back and Forth
$$\begin{array}{ccc}
\begin{cases}
\ \ \ x + y = 4\\
-x + y = 0\\
\end{cases} &
\iff &
\begin{array}{c}
\ \:\! x \quad\  \:\! y \quad\;\! c\\
\left[\begin{array}{cc|c}
    1 & 1 & 4 \\
    -1 & 1 & 0  \\
\end{array}\right]\\\\
\end{array}
\end{array}$$
```



## Reducing the Matrix

```{div} live
:name: matrix-test

$$\begin{split}\left[\begin{array}{cc|c}
    \columncolor[rgb]{0, 1, 1} 1 & 2 & 3 \\
    4 & 5 & 6  \\
\end{array}\right]\end{split}$$
```

```{button-ref} #
:color: info
:class: sd-rounded-pill float-center

Swap Rows {octicon}`sync;1em;sd-text-light`
```

<script src="../../../_static/vectorious.js">
</script>
<script src="../../../_static/matrix-TeX.js">
</script>
<script src="../../../_static/Matrix Unit/2-gauss-jordan-elimination.js">
</script>