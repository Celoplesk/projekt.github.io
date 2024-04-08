function checkGuess() {
    var guessInput = document.getElementById("guess");
    var guess = parseInt(guessInput.value);
    var message = document.getElementById("message");

    if (isNaN(guess)) {
        message.textContent = "Prosím, zadejte platné celé číslo.";
        return;
    }

    var secretNumber = Math.floor(Math.random() * 100) + 1;
    var attempts = 1;

    if (guess < secretNumber) {
        message.textContent = "Hledané číslo je větší než vaše uhádnuté číslo.";
    } else if (guess > secretNumber) {
        message.textContent = "Hledané číslo je menší než vaše uhádnuté číslo.";
    } else {
        message.textContent = "Skvělé! Uhodli jste číslo " + secretNumber + " správně! Počet pokusů: " + attempts + ".";
        guessInput.disabled = true;
    }
}
