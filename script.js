const numberBox = document.getElementById("guess");

const outputBox = document.getElementById("output");

const newNumber = Math.ceil(Math.random()*100);

numberBox.addEventListener("change", checknumber);

function checknumber() {
    const guess = numberBox.value;

    if (guess > newNumber) {
        outputBox.innerText = "too high!";
    }

    else if (guess < newNumber) {
        outputBox.innerText = "too low!";
    }

    else if (guess == newNumber) {
        feedbackBox.innertext = "correct!";
    }
}

const numberBox2 = document.getElementById("square");

const outputBox2 = document.getElementById("output2");

numberBox2.addEventListener("change", checknumber2);

function checknumber2() {

    const newValue = (numberBox2.value)**2; 

    outputBox2.innerText = newValue;
   
}