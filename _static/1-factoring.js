// Randomized Factoring Examples
// Requires some Ids and MathJax

// Functions

function randomMonic () {
    let m = Math.floor(Math.random() * 20 - 10);
    let n = Math.floor(Math.random() * 20 - 10);
    
    document.getElementById('monic-prompt').innerHTML = 'Factor \\(x^2 ' + middleTerm(m+n) +  lastTerm(m*n) + '\\).';

    document.getElementById('monic-answer').innerHTML = 'This is a quadratic function in {term}`general form` with $a = 1$, $b = 5$, and $c = 6$.  Since $a = 1$, we can try out the factoring trick above.  We just need to find factors of $c = 6$ that add up to $b = 5$.  The factors of $6$ that add up to $5$ are $2, 3$ (when you multiply them, you get 6, and when you add them, you get 5).  Therefore, $x^2 + 5x + 6 = (x + 2)(x + 3)$.';

    MathJax.typeset([document.getElementById('monic-prompt'), document.getElementById('monic-answer')]);
}

function sign2pm (a) {
    if (Math.sign(a) < 0) {
        return '-';
    } else if (Math.sign(a) > 0) {
        return '+';
    } else {
        return '';
    }
}

function middleTerm (b) {
    if (b == 0) {
        return '';
    } else if (Math.abs(b) !== 1) {
        return sign2pm(b) + Math.abs(b) + 'x';
    } else {
        return sign2pm(b) + 'x';
    }
}

function lastTerm (b) {
    if (b == 0) {
        return '';
    } else {
        return sign2pm(b) + Math.abs(b);
    }
}

// Event Listeners

document.getElementsByClassName('sd-btn-info').item(0).addEventListener('click', () => {randomMonic();});
// Warning: interprets first info button as randomizing