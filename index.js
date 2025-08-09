// Weather App
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
// use api key from openweathermap
const apiKey = "";

// once the submit button is clicked it will refresh the page so to 
// prevent that use preventDefault()
weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;

    if(city){
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error) {
            displayError(error);
        }
    } 
    else {
        displayError("Please Enter a City");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if(!response) {
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}

function displayWeatherInfo(data) {
    // using object destructuring 
    // use console.log(data) to check for data types. the data is one giant object
    // which has nested objects and nested arrays. after destructuring then city,
    // temp and so on are now variables to be used.
    const {name: city, 
        main: {temp, humidity}, 
        weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    // create the elements for the card to display
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    // default is in kelvin so need to convert and round by 1 decimal point
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    // add the css styling
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    // display the content
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
    switch(true) {
        case (weatherId >= 200 && weatherId < 300): 
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400): 
            return "🌦️";
        case (weatherId >= 500 && weatherId < 600): 
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700): 
            return "❄️";
        case (weatherId >= 700 && weatherId < 800): 
            return "🌁";
        case (weatherId === 800): 
            return "☀️";
        case (weatherId >= 801 && weatherId < 810): 
            return "☁️";
        default:
            return "❓";
    }
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add(".errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}