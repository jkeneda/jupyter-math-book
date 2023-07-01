// Currently a bit dumb - the top option is just listening for any click

document.addEventListener('click', (e) => {
    const target = e.target.closest('.sd-btn-info');

    var x = v.array([[1, 2, 3], [4, 5, 6]]);

    v.swap(x, 0, 1);

    document.getElementById('matrix-test').innerHTML = toLaTeX(v.toArray(x), split = true);
    MathJax.typeset(['.live']);
});

//document.getElementById('form1').addEventListener('submit', function () {updateChart(myChart);});

//document.addEventListener("load", MathJax.typeset(['.live'])); // Seems to go too fast for mathjax to load.
window.onload = MathJax.typeset(['.live']);