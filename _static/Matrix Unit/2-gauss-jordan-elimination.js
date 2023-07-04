// Assumes vectoriouus and matrix-TeX have been loaded

var x = v.array([[1, 2, 3], [4, 5, 6]]);

// Currently a bit dumb - the top option is just listening for *any* click, and it seems to fire twice

/*
document.addEventListener('click', () => {
    v.swap(x, 0, 1);
    document.getElementById('matrix-test').innerHTML = v.toLaTeX(v.toArray(x), split = true);
    MathJax.typeset(['.live']);
    console.log('Click event fired.');
});
*/

document.addEventListener('click', (e) => {
    const target = e.target.closest('.sd-btn-info');

    if (target.closest('#swap-rows')) {
        
        v.swap(x, 0, 1);
        document.getElementById('matrix-test').innerHTML = v.toLaTeX(v.toArray(x), split = true);
        MathJax.typeset(['.live']);
        console.log('Click event fired.');

    }
});