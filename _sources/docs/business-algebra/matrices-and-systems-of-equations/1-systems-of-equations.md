# Systems of Equations

So far in this course, we've met equations like $y = 2x - 4$ .  We've seen that such equations can have many solutions.  For example, both $(x, y) = (0, -4)$ and $(x, y) = (2, 0)$ are solutions to this equation.  We often visualize the full set of solutions to the equation in the form of a graph:

<div id="calculator1" style="width: 90%; height: 300px; margin-left: auto; margin-right: auto;">
</div>

Now we want to think about balancing multiple equations at the same time.

## Linear Systems of Two Variables
When we have multiple constraints that we need to satisfy simultaneously, we typically write them with a curly brace, like this:

$$\begin{cases}
\ \ \ x + y = 4\\
-x + y = 0\\
\end{cases}$$

This is called a *system of equations*.

```{glossary}
system of equations
    A ***system of equations**** is a set of equations (usually grouped with a curly brace) that we want to simultaneously balance

solution
    A ***solution*** to a system of equations is an assignment of values for the variables ($x = ..., y = ...$) that will solve **all** of the equations in the system.
```

````{margin}
```{note}
The solution to the system here is $(x, y) = (2, 2)$.  We can check a solution by verifying that all of the equations in the system are balanced.
```
````

<script src="https://www.desmos.com/api/v1.6/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>

<script src="../../../scripts/Matrix Unit/1-systems-of-equations.js">
</script>