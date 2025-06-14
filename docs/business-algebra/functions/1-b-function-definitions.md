# Functions Defined by Equations

So far, we've been describing functions by just making a large list of their inputs and their outputs, either in the form of a table/picture or as a list of ordered pairs.  But when you're working with numerical functions, there's often a simple formula that describes how to produce the output from a given input.

## Zoom In

Let's begin with an example that shows why we might want to write functions in a compact way.

```{prf:example}
:label: square-pen-example

Suppose a farmer wants to build a square pen.  They're interested in knowing how many acres the pen will enclose based on the length of its sides.  One way to answer that question is by making a table of possible side lengths and the corresponding pen area:

| Side Length | Pen Area |
|:-----------|:---------------------------|
| 50 yards | 2500 square yards (0.52 acres)  |
| 60 yards | 3600 square yards (0.74 acres) |
| 70 yards | 4900 square yards (1.01 acres) |
| 80 yards | 6400 square yards (1.32 acres) |
| 90 yards | 8100 square yards (1.67 acres) |
| 100 yards | 10,000 square yards (2.07 acres) |
```

The table from this example might be helpful in some cases, but it's missing a lot of information.  What if they want to know about a pen with a side length of 65 yards?  Or 200 yards?

### Defining Functions by Using Equations

Instead of working with tables like the one above, it's much more efficient to use an algebraic expression to represent the *general relationship* between the input and the output.  If we make a square pen whose sides are $x$ yards long, then the area of the pen will be $x*x = x^2$ square yards (hence the name of the expression: "$x$ squared").

To represent this relationship compactly, we can write something like:

$$y = x^2$$

or

$$A(x) = x^2 \text{ square yards},$$

where the input is thought of as "$x$ yards", and the output (denoted as $y$ or $A(x)$, depending on whether we want to give a name to the function) is measured in square yards.

#### What if we want to work in different units?

Let's say that you're measuring the area of an entire (square) ranch.  In that case, even if the side length $x$ was measured in yards, it might make more sense to measure our output in terms of acres than square yards.  One acre is 4,840 square yards.  So if we want the output to be measured in acres instead, all we have to do is take our original outputs and convert them to acres by multiplying by the conversion rate $\frac{1 \text{ acre}}{4,840 \text{ square yards}}$:

$$\require{cancel}A^*(x) = x^2 \cancel{\text{ square yards}} \cdot \frac{1 \text{ acre}}{4,840 \cancel{\text{ square yards}}} = \frac{x^2}{4,840} \text{ acres}.$$

So the functions $A$ and $A^*$ will take any side length $x$ (in yards) and produce the corresponding pen area in square yards or acres, respectively.

### Function Notation

To elaborate on the notation in the last example, let's look at the ingredients that we'll be using to define functions by formulas/equations.

````{prf:example}
:label: shipping-cost-example

Suppose you're running a small candlemaking business.  For each online order, you ship the candles using a Small Flat Rate Box from the USPS.  Each box costs \$8.25.

Let's say that you have 10 orders to ship, and you want to know how much money to bring to the post office.  You need 10 boxes at \$8.25 each, so you should bring $\$8.50 \times 10= \$82.50$.

Each day, you have a different number of orders.  To speed up the process of computing shipping costs, we want an efficient function/formula that relates the number of orders to the total shipping costs.  The function should work like this:

$$10 \text{ orders } \rightarrow \fbox{ function } \rightarrow \$82.50$$

We plug in the number of orders and it spits out our total shipping costs.  

Since the number of orders changes each day, we'll use the variable $x$ to stand in for the number of orders.  It's traditional to use $x$ to stand for the *input* to a function and $y$ to stand for the *output* to a function.

Since each order costs \$8.25 in shipping, we see that the total shipping costs for $x$ orders should be $\$8.25 \times x$.  This gives us the following situation:

$$x \text{ orders } \rightarrow \fbox{ function } \rightarrow \$8.25x$$

We can express the above function more compactly using **function notation**.  Function notation replaces a diagram like
 
$$x \text{ orders } \rightarrow \fbox{ function } \rightarrow y = \$8.25 x$$

with a compact formula like:

```{math}
:label: function-notation-example

y = \$8.25x
```

This formula contains the same information - it says that the output (shipping cost) is \$8.25 times the input (number of orders).  From now on we'll write functions this way.  The notation $y = f(x)$, where $f(x)$ is some expression in $x$, is called *function notation*.
````

```{prf:example}
The function that's being used in the {prf:ref}`square pen example <square-pen-example>` above is written

$$y = x^2$$

in function notation.
```

```{prf:remark}
Function notation implicitly thinks of $x$ as our input (also called the *independent variable*) and $y$ as our output (or *dependent variable*).  An expression like $y = x^2$ tells us how the function relates its inputs to its outputs.
```

#### Functions in math vs. computer science

Let's return to the {prf:ref}`shipping cost example <shipping-cost-example>` above.  If we were writing code in a programming language, we might write something like:

``` javascript
function shippingCost(orderNumber) {
    return 8.25 * orderNumber
}
```

In math, we do the same thing, but because we're doing computations by hand, we like to abbreviate everything.  Instead of using an input like "orderNumber", we use the shorthand $x$.  Instead of using a function name like "shippingCost", we might use $f$ or $g$ to stand for the function.

For example, the function above could be written as $f(x) = 8.25 x$.  It could also be written as $g(x) = 8.25 x$ or $y = 8.25 x$, depending on what we'd like to name the function/output.

When you see something like $h(x) = -20x + 5$, you should think "$h$ is a function that takes the input $x$ (the inputs are listed in parentheses) and spits out the output -20 times $x$ plus 5".

## Zoom Out

## Zoom Deep & Wide
