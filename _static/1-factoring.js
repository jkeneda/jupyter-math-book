// Testing random factoring examples

function randomMonic () {
    let m = Math.floor(Math.random() * 20 - 10);
    let n = Math.floor(Math.random() * 20 - 10);
    
    document.getElementById('monic-div').innerHTML = 'Factor \\(x^2 ' + middleTerm(m+n) +  lastTerm(m*n) + '\\).';
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

document.getElementsByClassName('sd-btn').item(0).addEventListener('click', () => {randomMonic(); MathJax.typeset([document.getElementById('monic-div')]);});
// Warning: interprets first button as randomizing

document.getElementsByClassName('sd-sphinx-override sd-btn sd-text-wrap sd-btn-info sd-rounded-pill float-left').item(0).addEventListener('click', () => {document.getElementById('hidden-div').innerHTML = 'worked';});