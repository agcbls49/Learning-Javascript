function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    // loop once from every dice rolled
    for (let i = 0; i < numOfDice; i++) {
        // give random number between 0 - 6
        const value = Math.floor(Math.random() * 6)+ 1;
        // push random number to array
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}