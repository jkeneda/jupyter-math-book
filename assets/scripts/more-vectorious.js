// Designed (by me) to work with Vectorious (exposed v in browser)

// Takes a JavaScript array (of arrays) and outputs the TeX (with escaped slashes, etc.) to typeset that array
// When not split, matrixType will change the parentheses/brackets around the matrix
// Split matrices will have an augmented column and will be bracketed

v.toLaTeX = function (vmatrix, split = false, matrixType = "") {
    let TeX = ``;
    let matrix = v.toArray(vmatrix); // If we're passed a Vectorious matrix, cast to array of arrays

    // First, deal with the possibility of being handed a single row matrix
    if (matrix[0][0] == undefined) {
        if (matrix.length < 2) {
            split = false; // Don't allow splitting in the event of a single column
        }
        if (split) {
            TeX += `\\begin{split}\n \\left[\\begin{array}{`; //Ready for column split description, e.g. cc|c
            for (var i = 1; i < matrix.length; i++) {
                TeX += `c`;
            }
            TeX += `|c}\n`;
            TeX += makeTeXRow(matrix);
            TeX += `\\end{array}\\right]\n\\end{split}`;
        } else {
            TeX += `\\begin{${matrixType}matrix}\n`;
            TeX += makeTeXRow(matrix);
            TeX += `\\end{${matrixType}matrix}`;
        }
    } else {
    // Next, handle non-row matrices
        var columns = matrix[0].length
        if (columns < 2) {
            split = false;
        }
        if (split) {
            TeX += `\\begin{split}\n \\left[\\begin{array}{`; //Ready for column split description, e.g. cc|c
            for (var i = 1; i < columns; i++) {
                TeX += `c`;
            }
            TeX += `|c}\n`;
            for (var i = 0; i < matrix.length; i++) {
                TeX += makeTeXRow(matrix[i]);
            }
            TeX += `\\end{array}\\right]\n\\end{split}`;
        } else {
            TeX += `\\begin{${matrixType}matrix}\n`;
            for (var i = 0; i < matrix.length; i++) {
                TeX += makeTeXRow(matrix[i]);
            }
            TeX += `\\end{${matrixType}matrix}`;
        }
    }
    return TeX;

    function makeTeXRow(rowMatrix) {
        let TeX = ``;
        for (let j = 0; j < rowMatrix.length; j++) {
            TeX += rowMatrix[j];
            if (j + 1 < rowMatrix.length) {
                    TeX += ` & `;
            } else {
                TeX += ` \\\\\n`;
            }
        }
        return TeX;
    }
}

v.scalarMult = function (vmatrix, row, scalar) {
    vmatrix.row_add(row, row, scalar - 1);
    // vmatrix = v.map(vmatrix, row => v.map(row, value => value.toPrecision(3))); // Not working yet
    return vmatrix;
}