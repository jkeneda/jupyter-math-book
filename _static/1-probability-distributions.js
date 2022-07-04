// Must load Chart.js and distributions.js before this will work

var myChart = makeNormalizedChart('myChart', document.getElementById('textBox').value); // Initialize chart

// Refresh event handling
// const refreshButton = document.getElementById('refreshButton');
function updateChart (myChart) {
    myChart.data = makeData(normalizeDice(textToDice(document.getElementById('textBox').value)), document.getElementById('textBox').value);
    myChart.update();
}
// refreshButton.addEventListener('click', function () {updateChart(myChart);});

// Sample event handling
const sampleButton = document.getElementById('sampleButton');
sampleButton.addEventListener('click', function () {
    updateChart(myChart);
    document.getElementById('log').innerHTML = log()});

// Form submission event handling
const form = document.getElementById('form1');
form.addEventListener('submit', function () {updateChart(myChart);});