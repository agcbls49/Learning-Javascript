// fetch - function used for making HTTP requests to fetch resources.
// (JSON style data, images, files). Simplifies asynchronous data fetching in
// Javascript and used for interacting with APIs to retrieve and send data
// asynchronously over the web. fetch(url, {options}) fetch(method: "GET") or 
// "POST", "PUT" to replace data, "DELETE" to delete but default is "GET".

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => console.log(response))
    .catch(error => console.error(error));

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    // gets the response 404 for not found and 200 for OK
    .then(response => response.json())
    // get the api data so you can check for name, weight etc.
    .then(data => console.log(data))
    .catch(error => console.error(error));

// can only fetch one at a time
// fetch for name which is pikachu
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.error(error));

// fetch for weight
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => console.log(data.weight))
    .catch(error => console.error(error));

// fetch the id
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => console.log(data.id))
    .catch(error => console.error(error));

// error handling for checking status code/response and non existent data
fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
    .then(response => {
        if(!response.ok) {
            // adding string message is optional
            throw new Error("Could not fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error))

// using async and await
async function fetchData() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion")
        
        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }
        // returns a promise
        const data = await response.json();
        console.log(data);
    } 
    catch(error) {
        console.error(error);
    }
}

fetchData();

// code for the search pokemon using api functionality
async function fetchData() {
    try {
        // make the inputted search term lowercase
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        // pass that search term into the api link
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        
        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }
        // returns a promise
        const data = await response.json();

        // get the image from the api link
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById('pokemonSprite');
        imgElement.src = pokemonSprite;
        // show image sprite on the HTML web page
        imgElement.style.display = "block";
    } 
    catch(error) {
        console.error(error);
    }
}

fetchData();