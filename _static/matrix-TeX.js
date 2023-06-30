// Depends on Vectorious (exposed v in browser)

// Takes a javascript array of arrays and outputs the TeX to typeset that array
// When not split, matrixType will change the parentheses/brackets around the matrix
// Split matrices will have an augmented column and will be bracketed
function toLaTeX(matrix, split = false, matrixType = "") {
    var TeX = ``;
    if (split) {
        var columns = matrix[0].length
        if (columns < 2) {
            return toLaTeX(matrix, split = false, matrixType);
        }
        TeX += `\\begin{split}\n \\left[\\begin{array}{`; //Ready for column split description, e.g. cc|c
        for (var i = 1; i < columns; i++) {
            TeX += `c`;
        }
        TeX += `|c}\n`
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                TeX += matrix[i][j];
                if (j + 1 < matrix[i].length) {
                    TeX += ` & `;
                } else {
                    TeX += ` \\\\\n`;
                }
            }
        }
        TeX += `\\end{array}\\right]\n\\end{split}`
    } else {
        TeX += `\\begin{${matrixType}matrix}\n`;
        if (matrix[0][0] == undefined) { // implies we were given a row matrix
            for (var j = 0; j < matrix.length; j++) {
                TeX += matrix[j];
                if (j + 1 < matrix.length) {
                        TeX += ` & `;
                } else {
                    TeX += ` \\\\\n`;
                }
            }
        } else {
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    TeX += matrix[i][j];
                    if (j + 1 < matrix[i].length) {
                        TeX += ` & `;
                    } else {
                        TeX += ` \\\\\n`;
                    }
                }
            }
        }
        TeX += `\\end{${matrixType}matrix}`;
    }
    return TeX;
}

document.addEventListener('click', (e) => {
    const target = e.target.closest('.sd-btn-info');

    var x = v.array([[1, 2, 3], [4, 5, 6]]);

    v.swap(x, 0, 1);

    document.getElementById('matrix-test').innerHTML = toLaTeX(v.toArray(x), split = true);

    MathJax.typeset(['.live']);
});