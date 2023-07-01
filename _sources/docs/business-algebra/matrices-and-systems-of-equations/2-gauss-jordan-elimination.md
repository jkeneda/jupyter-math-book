# Gauss-Jordan Elimination

Gauss-Jordan Elimination is a method for reducing the matrices from systems of equations.  The reduced form allows us to solve the system.

## Translating from a System to a Matrix
Suppose we're given the system of equations

$$\begin{cases}
x + y = 4\\
-x + y = 0\\
\end{cases}$$

When we translate 

$$\left[\begin{array}{cc|c}
    1 & 1 & -1 \\
    2 & 3 & 0  \\
\end{array}\right]$$

$$
\begin{array}{ccc}
x & y & c\\
\left[\begin{array}{cc|c}
    1 & 1 & -1 \\
    2 & 3 & 0  \\
\end{array}\right]
\end{array}
 $$

## Reducing the Matrix

```{div} live
:name: matrix-test

$$
\begin{split}\left[\begin{array}{cc|c}
    \columncolor[rgb]{0, 1, 1} 1 & 2 & 3 \\
    4 & 5 & 6  \\
\end{array}\right]\end{split}
$$
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