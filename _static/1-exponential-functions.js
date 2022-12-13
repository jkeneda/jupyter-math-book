// Penny doubling functions and event handling
function cashMoney (n) {
    return 0.01*(2**n)
}

function updateBalance () {
    document.getElementById('dayNumber').innerHTML = "Number of Days: " + document.getElementById('dayRange').value;
    document.getElementById('balance').innerHTML = "Account Balance: $" + cashMoney(document.getElementById('dayRange').value).toLocaleString();
}

document.getElementById('dayRange').addEventListener('change', () => {updateBalance();});