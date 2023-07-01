// Assumes vectoriouus and matrix-TeX have been loaded

var x = v.array([[1, 2, 3], [4, 5, 6]]);

// Currently a bit dumb - the top option is just listening for *any* click

document.addEventListener('click', (e) => {
    console.log(v.toArray(x));
    v.swap(x, 0, 1);
    console.log(v.toArray(x));
    document.getElementById('matrix-test').innerHTML = toLaTeX(v.toArray(x), split = true);
    MathJax.typeset(['.live']);
});

//document.getElementById('form1').addEventListener('submit', function () {updateChart(myChart);});

window.onload = function(){MathJax.typeset(['.live']);}
//document.addEventListener("load", MathJax.typeset(['.live'])); seems to go too fast for mathjax to load.