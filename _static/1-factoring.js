// Testing random factoring examples

function randomMonic () {
    let m = Math.floor(Math.random() * 20 - 10);
    let n = Math.floor(Math.random() * 20 - 10);
    
    document.getElementById('monic-div').innerHTML = 'Factor <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>x</mi><mn>2</mn></msup><mo>' + sign2pm(m + n) + '</mo><mn>' + Math.abs(m + n) + '</mn><mi>x</mi><mo>' + sign2pm(m*n) + '</mo><mn>' + Math.abs(m*n) + '</mn></math>';
    // the above works, but it doesn't have cleaned-up behavior with negatives and zeros
}

function sign2pm (a) {
    if (Math.sign(a) < 0) {
        return '-';
    } else {
        return '+';
    }
}

document.getElementById('randomize-button').addEventListener('click', () => {randomMonic(); MathJax.typeset([document.getElementById('monic-div')]);});