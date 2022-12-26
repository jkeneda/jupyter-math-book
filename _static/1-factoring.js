// Randomized Factoring Examples
// Requires some Ids and MathJax

// To-do:
// - Randomizers still have some degenerate cases, with m or n = 0, or with a nontrivial GCF.

// Functions
function randomCube (isSpecialized = true) {
    // Makes prompt, hint, and answers
    let m = Math.floor(Math.random() * 10 + 1); // 1 through 10
    let n = Math.floor(Math.random() * 10 + 1);
    let b = Math.sign(Math.random() - 0.5); // +1 or -1 randomly

    let prompt = `Factor \\(${forgetOne(m**3)}x^3 ${sign2pm(b)} ${n**3}\\).`;
    let hint = `Can you rewrite \\(${forgetOne(m**3)}x^3 ${sign2pm(b)} ${n**3}\\) as an \\(A^3 ${sign2pm(b)} B^3\\)?${isSpecialized ? ' See the table to the right for help.' : ''}`;
    let localanswer = `We can rewrite \\(${forgetOne(m**3)}x^3 ${sign2pm(b)} ${n**3}\\) as a ${(b + 1) ? 'sum' : 'difference'} of cubes and then use the relevant factoring formula <a class="reference internal" href="#equation-sum-and-difference-of-cubes">(2)</a> above. \\[${forgetOne(m**3)}x^3 ${sign2pm(b)} ${n**3} = (${forgetOne(m)}x)^3 ${sign2pm(b)} (${n})^3 = (${forgetOne(m)}x ${sign2pm(b)} ${n})((${forgetOne(m)}x)^2 ${sign2pm(-b)} (${forgetOne(m)}x)(${n}) + (${n})^2).\\]  Technically, the last expression is a factored form for \\(f(x)\\), which is what we wanted, but it's typical to clean this last part up: \\[f(x) = (${forgetOne(m)}x ${sign2pm(b)} ${n})(${forgetOne(m**2)}x^2 ${sign2pm(-b)} ${forgetOne(m*n)}x + ${n**2}).\\]`;
    let answer = `We can rewrite \\(${forgetOne(m**3)}x^3 ${sign2pm(b)} ${n**3}\\) as a ${(b + 1) ? 'sum' : 'difference'} of cubes and then use the relevant factoring formula. \\[${forgetOne(m**3)}x^3 ${sign2pm(b)} ${n**3} = (${forgetOne(m)}x)^3 ${sign2pm(b)} (${n})^3 = (${forgetOne(m)}x ${sign2pm(b)} ${n})((${forgetOne(m)}x)^2 ${sign2pm(-b)} (${forgetOne(m)}x)(${n}) + (${n})^2).\\]  Technically, the last expression is a factored form for \\(f(x)\\), which is what we wanted, but it's typical to clean this last part up: \\[f(x) = (${forgetOne(m)}x ${sign2pm(b)} ${n})(${forgetOne(m**2)}x^2 ${sign2pm(-b)} ${forgetOne(m*n)}x + ${n**2}).\\]`;

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
    let localanswer = `We can rewrite \\(${forgetOne(m*m)}x^2 - ${n*n}\\) as a difference of squares and then use the factoring formula <a class="reference internal" href="#equation-difference-of-squares">(1)</a> above. \\[${forgetOne(m*m)}x^2 - ${n*n} = (${forgetOne(m)}x)^2 - (${n})^2 = (${forgetOne(m)}x - ${n})(${forgetOne(m)}x + ${n})\\]`;
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

function randomNonMonic (isSpecialized = true) {
    // Makes prompt, hint, and answers
    // Idea: c = mn, so that ac = amn.  Then b = am + n.
    let a = Math.floor(Math.random() * 4 + 2); // 2 through 5
    let m = Math.floor(Math.random() * 11 - 5); // -5 through 5
    let n = Math.floor(Math.random() * 13 - 6); // -6 through 6

    let prompt = `Factor \\(${a}x^2 ${middleTerm(a*m + n)} ${lastTerm(m*n)}\\).`;

    let hint = `Can you think of factors of \\(ac = ${a*m*n}\\) that add up to \\(b = ${a*m + n}\\)?`;

    let localanswer = `This is a quadratic function (\\(ax^2 + bx + c\\)) with \\(a = ${a}\\), \\(b = ${a*m + n}\\), and \\(c = ${m*n}\\).  Unfortunately, since \\(a = ${a}\\), this quadratic isn't monic, so we'll have to use the non-monic factoring trick above.  We just need to find factors of \\(ac = ${a*m*n}\\) that add up to \\(b = ${a*m + n}\\), and then we'll use them to split up the middle term in such a way that we can factor by grouping.<br/><br/>
    
    The factors of \\(${a*m*n}\\) that add up to \\(${a*m + n}\\) are: \\(${a*m}, ${n}\\).<br/><br/>
    
    Therefore, 
    \\[\\begin{align*}
    ${a}x^2 ${middleTerm(a*m + n)} ${lastTerm(m*n)} &= \\underbrace{${a}x^2 ${middleTerm(a*m)}} \\underbrace{${middleTerm(n)} ${lastTerm(m*n)}} && \\text{(split up middle term)}\\\\ 
    &= ${a}x(x ${lastTerm(m)}) ${lastTerm(n)}(x ${lastTerm(m)}) && \\text{(factor by grouping)}\\\\
    &= (${a}x ${lastTerm(n)})(x ${lastTerm(m)}).
    \\end{align*}
    \\]`;

    let answer = `This is a quadratic function (\\(ax^2 + bx + c\\)) with \\(a = ${a}\\), \\(b = ${a*m + n}\\), and \\(c = ${m*n}\\).  Unfortunately, since \\(a = ${a}\\), this quadratic isn't monic, so we'll have to use the non-monic factoring trick.  We just need to find factors of \\(ac = ${a*m*n}\\) that add up to \\(b = ${a*m + n}\\), and then we'll use them to split up the middle term in such a way that we can factor by grouping.<br/><br/>
    
    The factors of \\(${a*m*n}\\) that add up to \\(${a*m + n}\\) are: \\(${a*m}, ${n}\\).<br/><br/>
    
    Therefore, 
    \\[\\begin{align*}
    ${a}x^2 ${middleTerm(a*m + n)} ${lastTerm(m*n)} &= \\underbrace{${a}x^2 ${middleTerm(a*m)}} \\underbrace{${middleTerm(n)} ${lastTerm(m*n)}} && \\text{(split up middle term)}\\\\ 
    &= ${a}x(x ${lastTerm(m)}) ${lastTerm(n)}(x ${lastTerm(m)}) && \\text{(factor by grouping)}\\\\
    &= (${a}x ${lastTerm(n)})(x ${lastTerm(m)}).
    \\end{align*}
    \\]`;
    
    // Write to correct DOM elements
    if (isSpecialized) {
        document.getElementById('non-monic-prompt').innerHTML = prompt;
        document.getElementById('non-monic-hint').innerHTML = hint;
        document.getElementById('non-monic-answer').innerHTML = localanswer;
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

        randomNonMonic();

    } else if (target.closest('#difference-of-squares-generator')) {
        
        randomDoS();

    } else if (target.closest('#cube-generator')) {

        randomCube();

    } else if (target.closest('#all-generator')) {

        let n = 4; // Number of randomizers implemented
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
            case 3:
                randomNonMonic(false);
                break;
        }
    }
});