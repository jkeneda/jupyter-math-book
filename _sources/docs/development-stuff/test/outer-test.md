# Outer Test

::::{tab-set}

:::{tab-item} Zoom In
This is the zoomed-in content.

```{prf:example}
:label: factoring-tricks

This is an example.

<div id="outer-test-box"></div>
```

<div id="outer-test-box-2"></div>

```{mermaid}
    flowchart TD
    A[Start] --> B{Is it?}
    B -- Yes --> C[OK]
    C --> D[Rethink]
    D --> B
    B -- No ----> E[End]
```
```{include} inner-test-1.md
```
:::

:::{tab-item} Zoom Out
```{include} inner-test-2.md
```
:::

:::{tab-item} Zoom Wide
more content
:::
::::
<script src="../../_static/outer-test.js"></script>