var currentNumberWraper = document.getElementById("currentNumber");
var currentNumber = 0;

document.getElementById("incrementar").addEventListener("click", function() {
    if (currentNumber < 10) {
        currentNumber += 1;
        currentNumberWraper.innerHTML = currentNumber;
        if (currentNumber >= 0) {
            currentNumberWraper.style.color = 'black';
        }
    }
});

document.getElementById("decrementar").addEventListener("click", function() {
    if (currentNumber > -10) {
        currentNumber -= 1;
        currentNumberWraper.innerHTML = currentNumber;
        if (currentNumber < 0) {
            currentNumberWraper.style.color = 'red';
        }
    }
});

/*
function increment() {
}

function decrement() {
}
*/