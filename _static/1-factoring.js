// Randomized Factoring Examples
// Requires some Ids and MathJax

// Functions

function randomDoS (isSpecialized = true) {
    // Makes prompt, hint, and answers
    let m = Math.floor(Math.random() * 10 + 1);
    let n = Math.floor(Math.random() * 10 + 1);

    let prompt = `Factor \\(${m*m}x^2 - ${n*n}\\).`;
    let hint = `Can you rewrite \\(${m*m}x^2 - ${n*n}\\) as an \\(A^2 - B^2\\)?`;
    let answer = `We can rewrite \\(${m*m}x^2 - ${n*n}\\) as a difference of squares and then use the factoring formula <a class="reference internal" href="#equation-difference-of-squares">(1)</a> above. \\[${m*m}x^2 - ${n*n} = (${m}x)^2 - (${n})^2 = (${m}x - ${n})(${m}x + ${n})\\]`;
    
    // Write to correct DOM elements
    if (isSpecialized) {
        document.getElementById('difference-of-squares-prompt').innerHTML = prompt;
        document.getElementById('difference-of-squares-hint').innerHTML = hint;
        document.getElementById('difference-of-squares-answer').innerHTML = answer;
    } else {
        document.getElementById('all-prompt').innerHTML = prompt;
        document.getElementById('all-hint').innerHTML = hint;
        document.getElementById('all-answer').innerHTML = answer;
    }

    MathJax.typeset(['.random']);
}
function randomMonic (isSpecialized = true) {
    // Makes prompt, hint, and answers
    let m = Math.floor(Math.random() * 20 - 10);
    let n = Math.floor(Math.random() * 20 - 10);

    let prompt = 'Factor \\(x^2 ' + middleTerm(m + n) +  lastTerm(m*n) + '\\).';
    let hint = 'Can you think of factors of \\(' + (m*n) + '\\) that add up to \\(' + (m + n) + '\\)?';
    let answer = 'This is a quadratic function (\\(ax^2 + bx + c\\)) with \\(a = 1\\), \\(b = ' + (m + n) + '\\), and \\(c = ' + (m*n) + '\\).  Since \\(a = 1\\), this quadratic is monic and we can try out the factoring trick above.  We just need to find factors of \\(c = ' + (m*n) + '\\) that add up to \\(b = ' + (m + n) + '\\).<br/><br/>The factors of \\(' + (m*n) + '\\) that add up to \\(' + (m + n) + '\\) are: \\(' + m + '\\), \\(' + n + '\\).<br/><br/>Therefore, \\(x^2 ' + middleTerm(m + n) + lastTerm(m*n) + ' = (x' + lastTerm(m) + ')(x' + lastTerm(n) +')\\).';
    
    // Write to correct DOM elements
    if (isSpecialized) {
        document.getElementById('monic-prompt').innerHTML = prompt;
        document.getElementById('monic-hint').innerHTML = hint;
        document.getElementById('monic-answer').innerHTML = answer;
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

    if (target.closest('#monic-generator')) {
        
        randomMonic();

    } else if (target.closest('#non-monic-generator')) {

    } else if (target.closest('#difference-of-squares-generator')) {
        
        randomDoS();

    } else if (target.closest('#all-generator')) {

        let n = 2; // Number of randomizers implemented
        let c = Math.floor(Math.random() * n);

        switch (c) {
            case 0:
                randomMonic(false); // The false flag makes sure we write to the All tab
                break;
            case 1:
                randomDoS(false);
                break;
        }
    }
});

// Old Event Listener
//document.getElementsByClassName('sd-btn-info').item(0).addEventListener('click', () => {randomMonic();});
// Warning: interprets first info button as randomizing