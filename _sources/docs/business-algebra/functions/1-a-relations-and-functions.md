# Relations and Functions

In this section, we introduce *relations* and *functions*, which are used to model relationships between two sets.

## Relationships between inputs and outputs

In many situations, we have one piece of information and we want to use it to find another, *related* piece of information.  For example, your payroll office might need to find an employee's salary information.  If they know the employee, then they can use a table of salary information to look up the corresponding salary.  In situations like this, we could think of the table as having a bunch of possible "inputs" (the employee of interest) and a bunch of corresponding "outputs" (their salary).

In this set of notes, we want to explore input-output relationships more carefully.  By the end of this set of notes, we'll see *functions*, which are a special type of input-output relation.  Functions are the most useful relations for computation, because they're very predictable.

It's very important in mathematics to have clear, unambiguous definitions for our terms.  In these notes, definitions will look like this:

:::{glossary}
relation (informal)
    A **relation** has a set of inputs and a set of outputs.  For each input, the relation returns *at least one* output.
:::

The definition of a relation is very broad.  Many things are relations.  Here are a couple of examples.

::::{prf:example}
:label: pets

People and their pets:

| Person | Pets |
| :---  | ---: |
| Jill  | Jack |
|       | Lola |
|       | Stevie |
| | |
| Josh | Curie |
| | |
| Kenzie | Ellie |
|       | Josie |
|       | Lux |
| | |
| Sheyleah | Mittens |

We can interpret the above table as a relation if we think of the person as the "input" and their pets as the "outputs".  For example, the input *Jill* produces the outputs *Jack*, *Lola*, and *Stevie*.  The input *Josh* produces Josh's only pet, *Curie*.
::::

::::{prf:example}
:label: medals

Total medals per country in the Tokyo 2020 Olympic Games:

| Country | Medals |
| :---   |  ---: |
| USA     | 113    |
| China   | 88     |
| Russia  | 71     |
| Great Britain | 65 |
| Japan | 58 |
| Australia | 46 |
| Italy | 40 |
| Germany | 37 |
| Netherlands | 36 |
| France | 33 |


The above table represents a relation if we think of the country as the "input" and its number of medals as the "output".
::::

Before we discuss the types of relations that will be useful in business algebra, we need to make some formal definitions of the sets and types of relations we'll be using.

## Sets

Every relation has a *set* of inputs and a *set* of outputs.  A relation represents a connection between two sets.  But what are these sets?

:::{glossary}
set
    A **set** is a collection of objects (usually called the *elements* of the set).  In this class, those elements can be basically anything: names, countries, images, text, or (most typically) numbers.
:::

::::{prf:example}
The set of Jill's pets from {prf:ref}`pets` could be written like $\{\text{Jack}, \text{Lola}, \text{Stevie}\}$.  If a set is made up of just a few elements, we can use a comma-separated list of the elements - surrounded with curly braces - to denote the whole set.
::::

Often, we want to work with sets of numbers.  For example, if we wanted to work with the **integers**, we could write $\{..., -3, -2, -1, 0, 1, 2, 3, 4, ...\}$.  But this quickly becomes irritating to write, so we have a few abbreviations for common sets.

| Name of Set | Shorthand | Corresponding Set |
|:-----------|-----------|-------------------:|
| the integers | $\mathbb{Z}$ | $\{..., -3, -2, -1, 0, 1, 2, 3, ...\}$ |
| the reals | $\mathbb{R}$ or $(-\infty, \infty)$ | all real numbers (like $0, -0.\overline{333}, \pi, \frac{5}{7}, \sqrt{2}$, etc.) |

You can think of the real numbers as being the complete number line - everything between negative and positive infinity.

## Domains and Ranges

To better analyze relations, we have terminology to separate the set of "inputs" from the set of "outputs".

:::{glossary}
domain
    The **domain** of a relation is its set of inputs.  It is sometimes denoted $D$ for short.

range
    The **range** of a relation is its set of outputs.  It is sometimes denoted $R$ for short.
:::

Note that the domain and range are properties of a specific relation, and that relation should be clear from context.  A question like "What's the domain?" only makes sense if we're discussing a particular relation already, in the same way that "What's their age?" only makes sense if we're discussing a particular person already.

::::{prf:example}
:label: top-3

Let's return to the {prf:ref}`Olympic <medals>` example.  If we look at the relation determined by the top 3 countries by medal count, we get:

| Country | Medals |
| :---  |  ---: |
| USA     | 113    |
| China   | 88     |
| Russia  | 71     |

The *domain* of this relation is $D = \{\text{USA}, \text{China}, \text{Russia}\}$, and the *range* of this relation is $R = \{113, 88, 71\}$.
::::

:::{prf:remark}
Sets don't care about the order of their elements, and they ignore repeated elements.  So all of the following sets are identical:

$$
\{113, 88, 71\} = \{71, 88, 113\} = \{71, 71, 88, 88, 88, 113\}
$$

Any of these would be valid answers to "What's the range of the relation above?", but the first one is the most obvious/simple to write, so we usually just go with that one.
:::

## Relations
It is typical to use the ordered pair notation $(x, y)$ to say "the input $x$ corresponds to the output $y$" in the context of a given relation.  So, for example, we could represent the USA's medal count as the ordered pair $(\text{USA}, 113)$.  The input is *always* on the left, and the output is *always* on the right.  With this notation, we can revise our definition of relation to be a little more precise now:

:::{glossary}
relation
    A relation is a collection of ordered pairs $(x, y)$, where $x$ belongs to the domain and $y$ belongs to the range of the relation.
:::

::::{prf:example}
:label: short-olympics

The relation from {prf:ref}`top-3` could be rewritten this way: 

$$
\{(\text{USA}, 113), (\text{China}, 88), (\text{Russia}, 71)\}
$$

Note the curly braces.  We can still use set notation for relations: a relation is technically the *set of its input/output pairs*.
::::

As in the definition of *relation* above, we often use **variables** as temporary stand-ins for values that we haven't yet decided on.

:::{glossary}
variable
    A **variable** (often $x$, $y$, or $n$) is a shorthand expression of indeterminate value.  Its specific, concrete value can be specified or computed later.
:::

:::{remark}
For example, the {prf:ref}`previous example <short-olympics>` can be thought of as a set of $(x, y)$ pairs.  The possible concrete values for $x$ (which make up the domain) are USA, China, or Russia, and the possible values for $y$ (which make up the range) are 113, 88, or 71.  If you specify a value for $x$, then the corresponding $y$-value can be looked up from the table.
:::

Now we're ready to discuss the most useful type of relations: functions.

## Functions

A *function* is a special type of relation.  So it still has a domain (set of inputs) and a range (set of outputs).  But it follows one additional rule: every input has *exactly one* output.  Functions are very predictable - one thing goes in, and one thing comes out.

:::{glossary}
function
    A **function** is a relation such that each input corresponds to *exactly one* output.
:::

In other words: for a relation to be a *function*, ***every $x$ produces only one $y$***.

::::{prf:example}
:class: dropdown

Let's return to the first {prf:ref}`relation <pets>` we looked at to see why it's **not** a function:

| Person | Pets |
| :---  | ---: |
| Jill  | Jack |
|       | Lola |
|       | Stevie |
| | |
| Josh | Curie |
| | |
| Kenzie | Ellie |
|       | Josie |
|       | Lux |
| | |
| Sheyleah | Mittens |

This is **not** a function, because some of its inputs have more than one output.  For example, the input Jill has three different outputs, and a function should produce exactly one output for Jill.  Functions are useful because they are unambiguous.  If I say something like "Jill's pet", it's still unclear which of her three pets I'm referring to.  We won't be able to do much math if we work with relations that are ambiguous like this.  We need the fact that functions are predictable/unambiguous if we're going to use them algebraically.

Even if we removed Jill and her pets from the table, the relation above would *still* not represent a function.  Can you see why?  Expand the Details section below to see the answer.
<details>
<pre>
The input Kenzie still produces more than one output.
</pre>
</details>
::::

::::{prf:remark}
Note that it's okay for a function to have multiple inputs that produce the same output.  For example, the following **does** represent a function:

|Input|Output|
|:---|---:|
| 1 | 7 |
| 2 | 7 |
| 3 | 7 |

This still satisfies the definition of a function, even though the output is always 7, because each input does have only one output.  We just care about the outputs being predictable - it doesn't matter if a particular output is repeated.
::::

## Practice: Is it a function?

Is this relation a function?

$$
\{(1, 1), (2, 2), (3, 3), (4, 4)\}
$$

<details>
<pre>
Yes, each input corresponds to just a single output.
</pre>
</details>
<br>

How about this one?

$$\{(1, 1), (2, 1), (3, 4), (4, 4)\}$$

<details>
<pre>
Yes, this is still a function.  No x has multiple y's.
Pick any input you'd like.  Is its output predictable?
The inputs 1 and 2 always cause an output of 1, and the inputs 3 and 4 always cause an output of 4.
It's okay that some outputs are repeats.  We just need unambiguous outputs for a given input.
</pre>
</details>
<br>

Lastly, is this relation a function?

$$\{(1, 1), (1, 2), (1, 3), (1, 4)\}$$

<details>
<pre>
No, this is not a function.  The input 1 has multiple outputs.
So if we give this relation an input of 1, we don't know what the output will be.
The output could be 1, 2, 3, or 4.  This violates the definition of a function.
</pre>
</details>
<br>
