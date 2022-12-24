// Randomized Factoring Examples
// Requires some Ids and MathJax

// Functions

function randomMonic () {
    let m = Math.floor(Math.random() * 20 - 10);
    let n = Math.floor(Math.random() * 20 - 10);
    
    document.getElementById('prompt').innerHTML = 'Factor \\(x^2 ' + middleTerm(m + n) +  lastTerm(m*n) + '\\).';

    document.getElementById('hint').innerHTML = 'Can you think of factors of \\(' + (m*n) + '\\) that add up to \\(' + (m + n) + '\\)?';

    document.getElementById('answer').innerHTML = 'This is a quadratic function (\\(ax^2 + bx + c\\)) with \\(a = 1\\), \\(b = ' + (m + n) + '\\), and \\(c = ' + (m*n) + '\\).  Since \\(a = 1\\), this quadratic is monic and we can try out the factoring trick above.  We just need to find factors of \\(c = ' + (m*n) + '\\) that add up to \\(b = ' + (m + n) + '\\).<br/><br/>The factors of \\(' + (m*n) + '\\) that add up to \\(' + (m + n) + '\\) are: \\(' + m + '\\), \\(' + n + '\\).<br/><br/>Therefore, \\(x^2 ' + middleTerm(m + n) + lastTerm(m*n) + ' = (x' + lastTerm(m) + ')(x' + lastTerm(n) +')\\).';

    MathJax.typeset(['.random']);
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

// Delegated Event Listening (tip from https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript)
// Warning: interprets info buttons as randomizers

// Issue: currently randomizes in previous tab instead of current tab.  Might need to just do class selectors instead of id's?  It seems to find the initial prompt/hint/answer id's and bind to them.
document.addEventListener('click', (e) => {
    const target = e.target.closest('.sd-btn-info');

    if (target) {
        randomMonic();
    }
});

// Old Event Listener
//document.getElementsByClassName('sd-btn-info').item(0).addEventListener('click', () => {randomMonic();});
// Warning: interprets first info button as randomizing