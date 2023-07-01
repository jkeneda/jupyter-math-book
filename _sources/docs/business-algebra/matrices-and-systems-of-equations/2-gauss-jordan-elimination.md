# Gauss-Jordan Elimination

Gauss-Jordan Elimination is a method for reducing the matrices from systems of equations.  The reduced form allows us to solve the system.

## Translating from a System to a Matrix
Suppose we're given the system of equations

$$\begin{equation}
f(x) = \begin{cases} x & \text{if }x < 0 \\ x + 1 & \text{if }x \ge 0 \\ \end{cases}
\end{equation}
$$

$$
\left[\begin{array}{cc|c}
    \columncolor[rgb]{0, 1, 1} 1 & 1 & -1 \\
    2 & 3 & 0  \\
\end{array}\right]
$$

Here's one option for a div with an id, but you need to typeset onload:
<div class="live" id="matrix-test">
\begin{split}\left[\begin{array}{cc|c}
    \columncolor[rgb]{0, 1, 1} 1 & 2 & 3 \\
    4 & 5 & 6  \\
\end{array}\right]\end{split}
</div>
<script>window.onload = function(){MathJax.typeset(['.live']);}</script>

This one will be typeset on its own, and it can have an id via :name:.
```{div} live
:name: math-block-1

$$x + 2y
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