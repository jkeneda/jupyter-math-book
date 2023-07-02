# Math Tests

Can I do Mermaid diagrams inside of tab environments?

:::::{tab-set}

::::{tab-item} Tab A
This is a tab.
```{mermaid}
    flowchart LR
        A["`Find factors $m$, *n* of *ac* that add up to *b*.`"] --> B[Split up middle term *bx* into *mx + nx*.]
        B --> C[Factor by grouping.]
```
::::

::::{tab-item} Tab B
There's content here!
::::
:::::

````{note}
```{mermaid}
    flowchart LR
        A["`Find factors $m$, *n* of *ac* that add up to *b*.`"] --> B[Split up middle term *bx* into *mx + nx*.]
        B --> C[Factor by grouping.]
```
````


You can do inline math: $e^{i\pi} = -1$ and display style math:  

$$a^2 + b^2 = c^2$$

```{youtube} jnxqHcObNK4
:url_parameters: ?start=30
```

$$\begin{equation}
f(x) = \begin{cases} x & \text{if }x < 0 \\ x + 1 & \text{if }x \ge 0 \\ \end{cases}
\end{equation}$$

$$\left[\begin{array}{cc|c}
    \columncolor[rgb]{0, 1, 1} 1 & 1 & -1 \\
    2 & 3 & 0  \\
\end{array}\right]$$

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

$$\begin{split}\left[\begin{array}{cc|c}
    \columncolor[rgb]{0, 1, 1} 1 & 2 & 3 \\
    4 & 5 & 6  \\
\end{array}\right]\end{split}$$
```

MathJax doesn't like bordermatrix, so here's a way of labeling:

$$\begin{matrix}
 & \begin{matrix}A&C&G&T\end{matrix} \\\\
\begin{matrix}A\\\\C\\\\G\\\\T\end{matrix} & 
  \begin{pmatrix}1&2&3&4\\\\3&4&5&6\\\\3&4&5&6\\\\3&4&5&6\end{pmatrix}\\\\
\end{matrix}$$