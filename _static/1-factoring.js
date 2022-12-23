// Testing random factoring examples

function randomMonic () {
    let m = Math.floor(Math.random() * 20 - 10);
    let n = Math.floor(Math.random() * 20 - 10);
    
    document.getElementById('monic-div').innerHTML = 'Factor <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>x</mi><mn>2</mn></msup>' + middleTerm(m+n) + lastTerm(m*n) + '</math>';
}

function sign2pm (a) {
    if (Math.sign(a) < 0) {
        return '<mo>-</mo>';
    } else if (Math.sign(a) > 0) {
        return '<mo>+</mo>';
    } else {
        return '';
    }
}

function middleTerm (b) {
    if (b == 0) {
        return '';
    } else if (Math.abs(b) !== 1) {
        return sign2pm(b) + '<mn>' + Math.abs(b) + '</mn>' + '<mi>x</mi>';
    } else {
        return sign2pm(b) + '<mi>x</mi>';
    }
}

function lastTerm (b) {
    if (b == 0) {
        return '';
    } else {
        return sign2pm(b) + '<mn>' + Math.abs(b) + '</mn>';
    }
}

document.getElementsByClassName('sd-sphinx-override sd-btn sd-text-wrap sd-btn-primary sd-rounded-pill float-left').addEventListener('click', () => {randomMonic(); MathJax.typeset([document.getElementById('monic-div')]);});
// Warning: interprets buttons as randomizing