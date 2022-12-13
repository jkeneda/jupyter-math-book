// Penny doubling functions and event handling
function cashMoney (n) {
    return 0.01*(2**n)
}

function updateBalance () {
    document.getElementById('dayNumber').innerHTML = `Number of Days: 
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <mi>n</mi>
                    <mo>=</mo>
                    <mn>` + document.getElementById('dayRange').value + `</mn>
                </math>`;
  
    document.getElementById('balance').innerHTML = `Account Balance:
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <mi>B</mi>
                    <mo stretchy="false">(</mo>
                    <mi>n</mi>
                    <mo stretchy="false">)</mo>
                    <mo>=</mo>
                    <mi mathvariant="normal">$</mi>
                    <mn>` + cashMoney(document.getElementById('dayRange').value).toLocaleString() + `</mn>
                </math>`;
}

document.getElementById('dayRange').addEventListener('change', () => {updateBalance();});