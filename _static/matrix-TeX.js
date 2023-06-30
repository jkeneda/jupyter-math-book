// Takes a javascript array of arrays and outputs the TeX to typeset that array
function toLaTeX(matrix, matrixType = "") {
    var TeX = ``;
    TeX += `\\begin{${matrixType}matrix}\n`;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            TeX += matrix[i][j];
            if (j + 1 < matrix[i].length) {
                TeX += ` & `;
            } else {
                TeX += ` \\\n`;
            }
        }
    }
    TeX += `\\end{${matrixType}matrix}`;
    return TeX;
}

var x = v.array([[1, 2, 3], [4, 5, 6]]);

document.getElementById('matrix-text').innerHTML = toLaTex(v.toArray(x));

MathJax.typeset(['.live']);