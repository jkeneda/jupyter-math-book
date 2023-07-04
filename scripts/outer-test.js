// Testing random factoring examples

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

function randomizeExample () {
    let m = Math.floor(Math.random() * 20 - 10);
    let n = Math.floor(Math.random() * 20 - 10);
    //document.getElementById('outer-test-box').innerHTML = 'Factor <span class="math notranslate nohighlight"><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" style="font-size: 113.1%; position: relative;" tabindex="0" ctxtmenu_counter="17"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-msup><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: 0.363em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msup><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c35"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c36"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>' + (m + n) + '</mn><mi>x</mi><mo>+</mo><mn>' + (m*n) + '</mn></math></mjx-assistive-mml></mjx-container></span>';
    
    document.getElementById('outer-test-box').innerHTML = 'Factor <math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>' + (m + n) + '</mn><mi>x</mi><mo>+</mo><mn>' + (m*n) + '</mn></math>';
    // the above works, but it doesn't have cleaned-up behavior with negatives and zeros

    //document.getElementById('outer-test-box').innerHTML = MathJax.tex2chtml('\\sqrt{x^2+1}', {em: 12, ex: 6, display: false}).outerHTML;
}

document.getElementById('randomize-button').addEventListener('click', () => {randomizeExample(); MathJax.typeset();});
//document.onload = updateBalance();