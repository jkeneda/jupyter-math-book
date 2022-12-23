// Randomized Factoring Examples
// Requires some Ids and MathJax

function randomMonic () {
    let m = Math.floor(Math.random() * 20 - 10);
    let n = Math.floor(Math.random() * 20 - 10);
    
    document.getElementById('monic-prompt').innerHTML = 'Factor \\(x^2 ' + middleTerm(m+n) +  lastTerm(m*n) + '\\).';

    

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

document.getElementsByClassName('sd-btn-info').item(0).addEventListener('click', () => {randomMonic();});
// Warning: interprets first info button as randomizing

document.getElementsByClassName('sd-btn-info').item(0).addEventListener('click', () => {document.getElementById('hidden-div').innerHTML = 'worked';});