// Randomized Factoring Examples
// Requires some Ids and MathJax

// Functions
function randomCube (isSpecialized = true) {
    // Makes prompt, hint, and answers
    let m = Math.floor(Math.random() * 10 + 1); // 1 through 10
    let n = Math.floor(Math.random() * 10 + 1);
    let b = Math.sign(Math.random() - 0.5); // +1 or -1 randomly

    let prompt = `Factor \\(${forgetOne(m**3)}x^3 ${sign2pm(b)} ${n**3}\\).`;
    let hint = `Can you rewrite \\(${forgetOne(m**3)}x^3 ${sign2pm(b)} ${n**3}\\) as an \\(A^3 ${sign2pm(b)} B^3\\)?`;
    let localanswer = `We can rewrite \\(${forgetOne(m**3)}x^3 ${sign2pm(b)} ${n**3}\\) as a ${(b + 1) ? 'sum' : 'difference'} of cubes and then use the relevant factoring formula <a class="reference internal" href="#equation-sum-and-difference-of-cubes">(2)</a> above. \\[${forgetOne(m**3)}x^3 ${sign2pm(b)} ${n**3} = (${forgetOne(m)}x)^3 ${sign2pm(b)} (${n})^3 = (${forgetOne(m)}x ${sign2pm(b)} ${n})((${forgetOne(m)}x)^2 ${sign2pm(-b)} (${forgetOne(m)}x)(${n}) + (${n})^2)\\]`;
    let answer = ``;

    // Write to correct DOM elements
    if (isSpecialized) {
        document.getElementById('cube-prompt').innerHTML = prompt;
        document.getElementById('cube-hint').innerHTML = hint;
        document.getElementById('cube-answer').innerHTML = localanswer;
    } else {
        document.getElementById('all-prompt').innerHTML = prompt;
        document.getElementById('all-hint').innerHTML = hint;
        document.getElementById('all-answer').innerHTML = answer;
    }

    MathJax.typeset(['.random']);
}

function randomDoS (isSpecialized = true) {
    // Makes prompt, hint, and answers
    let m = Math.floor(Math.random() * 10 + 1); // 1 through 10
    let n = Math.floor(Math.random() * 10 + 1);

    let prompt = `Factor \\(${forgetOne(m*m)}x^2 - ${n*n}\\).`;
    let hint = `Can you rewrite \\(${forgetOne(m*m)}x^2 - ${n*n}\\) as an \\(A^2 - B^2\\)?`;
    let localanswer = `We can rewrite \\(${forgetOne(m*m)}x^2 - ${n*n}\\) as a difference of squares and then use the factoring formula <a class="reference internal" href="#equation-difference-of-squares">(1)</a> above. \\[${forgetOne(m*m)}x^2 - ${n*n} = (${forgetOne(m)}x)^2 - (${n})^2 = (${forgetOne(m)}x - ${n})(${m}x + ${n})\\]`;
    let answer = `We can rewrite \\(${forgetOne(m*m)}x^2 - ${n*n}\\) as a difference of squares and then use the factoring formula \\(A^2 - B^2 = (A - B)(A + B)\\). \\[${forgetOne(m*m)}x^2 - ${n*n} = (${forgetOne(m)}x)^2 - (${n})^2 = (${forgetOne(m)}x - ${n})(${forgetOne(m)}x + ${n})\\]`;
    
    // Write to correct DOM elements
    if (isSpecialized) {
        document.getElementById('difference-of-squares-prompt').innerHTML = prompt;
        document.getElementById('difference-of-squares-hint').innerHTML = hint;
        document.getElementById('difference-of-squares-answer').innerHTML = localanswer;
    } else {
        document.getElementById('all-prompt').innerHTML = prompt;
        document.getElementById('all-hint').innerHTML = hint;
        document.getElementById('all-answer').innerHTML = answer;
    }

    MathJax.typeset(['.random']);
}

function randomMonic (isSpecialized = true) {
    // Makes prompt, hint, and answers
    let m = Math.floor(Math.random() * 21 - 10); // -10 through 10
    let n = Math.floor(Math.random() * 21 - 10);

    let prompt = `Factor \\(x^2 ${middleTerm(m + n)} ${lastTerm(m*n)}\\).`;
    let hint = `Can you think of factors of \\(${m*n}\\) that add up to \\(${m + n}\\)?`;
    let localanswer = `This is a quadratic function (\\(ax^2 + bx + c\\)) with \\(a = 1\\), \\(b = ${m + n}\\), and \\(c = ${m*n}\\).  Since \\(a = 1\\), this quadratic is monic and we can try out the factoring trick above.  We just need to find factors of \\(c = ${m*n}\\) that add up to \\(b = ${m + n}\\).<br/><br/>
    
    The factors of \\(${m*n}\\) that add up to \\(${m + n}\\) are: \\(${m}, ${n}\\).<br/><br/>
    
    Therefore, \\(x^2 ${middleTerm(m + n)} ${lastTerm(m*n)} = (x ${lastTerm(m)})(x ${lastTerm(n)})\\).`;
    let answer = `This is a quadratic function (\\(ax^2 + bx + c\\)) with \\(a = 1\\), \\(b = ${m + n}\\), and \\(c = ${m*n}\\).  Since \\(a = 1\\), this quadratic is monic and we can try out the monic factoring trick.  We just need to find factors of \\(c = ${m*n}\\) that add up to \\(b = ${m + n}\\).<br/><br/>
    
    The factors of \\(${m*n}\\) that add up to \\(${m + n}\\) are: \\(${m}, ${n}\\).<br/><br/>
    
    Therefore, \\(x^2 ${middleTerm(m + n)} ${lastTerm(m*n)} = (x ${lastTerm(m)})(x ${lastTerm(n)})\\).`;
    
    // Write to correct DOM elements
    if (isSpecialized) {
        document.getElementById('monic-prompt').innerHTML = prompt;
        document.getElementById('monic-hint').innerHTML = hint;
        document.getElementById('monic-answer').innerHTML = localanswer;
    } else {
        document.getElementById('all-prompt').innerHTML = prompt;
        document.getElementById('all-hint').innerHTML = hint;
        document.getElementById('all-answer').innerHTML = answer;
    }

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

function forgetOne (n) {
    if (n == 1) {
        return '';
    } else {
        return n;
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
// Warning: interprets sd-btn-info buttons as randomizers
document.addEventListener('click', (e) => {
    const target = e.target.closest('.sd-btn-info');

    if (target.closest('#monic-generator')) {
        
        randomMonic();

    } else if (target.closest('#non-monic-generator')) {

    } else if (target.closest('#difference-of-squares-generator')) {
        
        randomDoS();

    } else if (target.closest('#cube-generator')) {

        randomCube();

    } else if (target.closest('#all-generator')) {

        let n = 3; // Number of randomizers implemented
        let c = Math.floor(Math.random() * n);

        switch (c) {
            case 0:
                randomMonic(false); // The false flag makes sure we write to the All tab
                break;
            case 1:
                randomDoS(false);
                break;
            case 2:
                randomCube(false);
                break;
        }
    }
});

// Old Event Listener
//document.getElementsByClassName('sd-btn-info').item(0).addEventListener('click', () => {randomMonic();});
// Warning: interprets first info button as randomizing