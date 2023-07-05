// Assumes vectorious and matrix-TeX have been loaded

var x = v.array([[1, 2, 3], [4, 5, 6]]);

document.addEventListener('click', (e) => {
    e.stopImmediatePropagation(); // Makes sure it only fires once instead of bubbling.
    
    if (e.target.closest('#swap-rows')) {
        x = v.swap(x, 0, 1);
        document.getElementById('matrix-test').firstChild.innerHTML = "\n" + v.toLaTeX(v.toArray(x), split = true) + "\n";
        // The firstChild is because the Jupyter Book typesetting will wrap the math in an extra div - we need to preserve it for spacing
        MathJax.typeset(['#matrix-test']);
    }
});