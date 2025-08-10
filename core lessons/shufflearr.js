const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(cards);

// Fisher-Yates Algorithm to shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        // use destructuring to swap elements
        [array[i], array[random] = array[random], random[i]];
    }
}