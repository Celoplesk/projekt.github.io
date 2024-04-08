var secretNumber;
var attemptsLeft;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 5;
    document.getElementById("attempts").textContent = "Počet pokusů zbývajících: " + attemptsLeft;
}

function checkGuess() {
    var guessInput = document.getElementById("guess");
    var guess = parseInt(guessInput.value);
    var message = document.getElementById("message");

    if (isNaN(guess)) {
        message.textContent = "Prosím, zadejte platné celé číslo.";
        return;
    }

    if (attemptsLeft === 0) {
        message.textContent = "Vyčerpali jste všechny pokusy. Hra končí. Hledané číslo bylo: " + secretNumber;
        guessInput.disabled = true;
        return;
    }

    attemptsLeft--;

    if (guess < secretNumber) {
        message.textContent = "Hledané číslo je větší než vaše uhádnuté číslo.";
    } else if (guess > secretNumber) {
        message.textContent = "Hledané číslo je menší než vaše uhádnuté číslo.";
    } else {
        message.textContent = "Skvělé! Uhodli jste číslo " + secretNumber + " správně!";
        guessInput.disabled = true;
    }

    document.getElementById("attempts").textContent = "Počet pokusů zbývajících: " + attemptsLeft;
}

startGame();
