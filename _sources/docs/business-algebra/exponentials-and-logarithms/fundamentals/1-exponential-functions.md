# Exponential Functions

## Zoom In
To start our discussion of exponential functions, let's recall some definitions.
```{glossary}
exponent
    An **exponent** is another name for a power.  For example, the exponent in the expression $2^3$ is a $3$.

base
    The **base** of an exponential expression is the number on the ground floor.  The base of the exponential expression $4^7$ is a $4$.
```

So far, we've seen plenty of functions where our input $x$ forms the *base* of an exponential expression, where its exponent is held constant.  Take $f(x) = x^3$, for example.  We can plug in any $x$ we'd like, which allows us to change the base, but the power is always a 3.  In this section, we're meeting a new type of function called an {term}`exponential function`, where these roles are reversed: now the base will be fixed (in other words, constant), while the *exponent* is variable.

### Exponential Functions and their Graphs

```{prf:example}
Suppose you're offered the choice between these two options: 
    - You can receive \$1 million in your bank account **or** 
    - You can reset your bank account to a single penny (\$0.01), but the account doubles every day for the next 30 days (so on day two you'd have 2 pennies, on day three you'd have 4 pennies, etc.).  Which would *you* pick?

Here's a chart of the next 10 days for the doubling account:
| Day | Account Balance |
|:---:|:---------------:|
| 0 | \$0.01 |
| 1 | \$0.02 |
| 2 | \$0.04 |
| 3 | \$0.08 |
| 4 | \$0.16 |
| 5 | \$0.32 |
| 6 | \$0.64 |
| 7 | \$1.28 |
| 8 | \$2.56 |
| 9 | \$5.12 |
| 10 | \$10.24 |

So far, things aren't looking great for the people who chose the doubling account option...

Let's rethink the amount in the account over time.  The amount in the account after three days could be expressed as $\$0.08 = \$0.01\cdot 2 \cdot 2 \cdot 2$.  For every day, you get a new multiplier by 2.  In other words, after three days, we have $\$0.01 \cdot 2^3$ in the account.  More generally, after $n$ days, you have $\$0.01\cdot 2^n$ in the account.

Let $B = \$0.01\cdot 2^n$ represent the balance after $n$ days (we can write $B(n)$ instead of just $B$, to emphasize that we're thinking of $B$ as a *function* of $n$).  How much money would you have after 30 days?  Use the slider below to find out.

<div>
    <form id="form1" onsubmit="return false;">
        <div id="dayNumber"></div>
        <input type="range" id="dayRange" min="0" max="30" value="0"><br/>
        <div id="balance"></div>
    </form>
</div>
```

## Zoom Out

## Zoom Deep & Wide

<script src="../../../../scripts/1-exponential-functions.js">// handles events
</script>