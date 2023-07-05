// Assumes vectorious.js and more-vectorious.js have been loaded - adds to exposed v

var x = v.array([[4, 5, 6], [1, 2, 3]]); // For gje1

v.printMatrix = function (x, id) {
    document.getElementById(id).firstChild.nextSibling.innerHTML = v.toLaTeX(v.toArray(x), split = true);
        // The Child shenanigans are necessary because the Jupyter Book typesetting will wrap the math in newlines and an extra div - we need to preserve it for spacing
        MathJax.typeset(['#' + id]);
}

document.addEventListener('click', (e) => {
    e.stopImmediatePropagation(); // Makes sure it only fires once instead of bubbling.
    
    if (e.target.closest('#swap-rows')) {
        x = v.swap(x, 0, 1);
        v.printMatrix(x, 'gje1');
    }
});