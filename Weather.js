const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const message = document.querySelector("#message");
const weatherCard = document.querySelector("#weatherCard");
const cityName = document.querySelector("#cityName");
const country = document.querySelector("#country");
const weatherIcon = document.querySelector("#img");
const temperature = document.querySelector("#temperature");
const condition = document.querySelector("#condition");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const feelsLike = document.querySelector("#feelsLike");

async function getWeather(city) {

    try {
        message.innerText = "Loading...";
        weatherCard.style.display = "none";

        const geoURL =
        `${GEO_URL}?name=${city}&count=1&language=en&format=json`;
        const geoResponse = await fetch(geoURL);
        const geoData = await geoResponse.json();

        if (!geoData.results) {
            message.innerText = "City not found!";
            return;
        }

        const location = geoData.results[0];
        const latitude = location.latitude;
        const longitude = location.longitude;
        const weatherURL =
            `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}` +
            `&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code` +
            `&timezone=auto`;
        const weatherResponse = await fetch(weatherURL);
        const weatherData = await weatherResponse.json();

        cityName.innerText = location.name;
        country.innerText = location.country;
        temperature.innerText = weatherData.current.temperature_2m + "°C";
        humidity.innerText = weatherData.current.relative_humidity_2m + "%";
        wind.innerText = weatherData.current.wind_speed_10m + " km/h";
        feelsLike.innerText = weatherData.current.apparent_temperature + "°C";

        const code = weatherData.current.weather_code;
        condition.innerText = getCondition(code);
        weatherIcon.src = getIcon(code);
        weatherCard.style.display = "block";
        message.innerText = "";
    }

    catch (error) {
        console.log(error);
        message.innerText = "Something went wrong!";
        weatherCard.style.display = "none";
    }
}
function getCondition(code) {
    if (code === 0) {
        return "Clear Sky";
    }
    if (code === 1 || code === 2) {
        return "Partly Cloudy";
    }
    if (code === 3) {
        return "Cloudy";
    }
    if (code === 45 || code === 48) {
        return "Foggy";
    }
    if (code >= 51 && code <= 67) {
        return "Rain";
    }
    if (code >= 71 && code <= 77) {
        return "Snow";
    }
    if (code >= 80 && code <= 82) {
        return "Rain Showers";
    }
    if (code >= 95) {
        return "Thunderstorm";
    }
    return "Unknown";

}
function getIcon(code) {
    if (code === 0) {
        return "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    }
    if (code === 1 || code === 2) {
        return "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
    }
    if (code === 3) {
        return "https://cdn-icons-png.flaticon.com/512/414/414927.png";
    }
    if (code >= 51 && code <= 67) {
        return "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
    }
    if (code >= 71 && code <= 77) {
        return "https://cdn-icons-png.flaticon.com/512/2315/2315309.png";
    }
    if (code >= 95) {
        return "https://cdn-icons-png.flaticon.com/512/1146/1146860.png";
    }
    return "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
}
searchBtn.addEventListener("click", function () {
    const city = cityInput.value.trim();
    if (city === "") {
        message.innerText = "Please enter a city!";
        return;
    }
    getWeather(city);
});

cityInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});