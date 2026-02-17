enum Weather {
    Sunny = "It's a bright and sunny day! ☀️",
    Rainy = "Don't forget your umbrella! ☔️",
    Cloudy = "Looks like it might rain later. ☁️",
    Snowy = "Time for a snowball fight! ❄️",
    Stormy = "Stay inside, it's dangerous out there! ⛈️",
    Windy = "Hold on to your hat! 💨"
}

function displayWeatherMessage(weather?: Weather): void {
    switch (weather) {
        case Weather.Sunny:
            console.log(Weather.Sunny);
            break;
        case Weather.Rainy:
            console.log(Weather.Rainy);
            break;
        case Weather.Cloudy:
            console.log(Weather.Cloudy);
            break;
        case Weather.Snowy:
            console.log(Weather.Snowy);
            break;
        case Weather.Stormy:
            console.log(Weather.Stormy);
            break;
        case Weather.Windy:
            console.log(Weather.Windy);
            break;
        default:
            console.log("Unknown weather condition.");
    }
}


displayWeatherMessage(Weather.Snowy);
displayWeatherMessage(Weather.Sunny);
displayWeatherMessage(Weather.Windy);
displayWeatherMessage(Weather.Cloudy);
displayWeatherMessage();
displayWeatherMessage(Weather.Rainy);
displayWeatherMessage(Weather.Stormy);
