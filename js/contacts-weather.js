const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&appid=f1ae10a3adc804510ad4b24e3ac6f7dc';

async function updateWeatherWidget() {
    try {
        const response = await fetch(apiUrl);
        const weather = await response.json();

        const temperatureCelsius = Math.round(weather.main.temp - 273.15);
        const description = weather.weather[0].description;
        let weatherIcon = '';

        if (description.includes('cloud') || description.includes('clouds')) {
            weatherIcon = '<img src="images/cloud-icon.png" alt="Cloudy">';
        } else if (description.includes('sun') || description.includes('clear')) {
            weatherIcon = '<img src="images/sun-icon.png" alt="Sunny">';
        } else if (description.includes('rain') || description.includes('drizzle')) {
            weatherIcon = '<img src="images/rain-icon.png" alt="Rainy">';
        } else if (description.includes('mist') || description.includes('fog') || description.includes('haze') || description.includes('smoke') || description.includes('dust')) {
            weatherIcon = '<img src="images/fog-icon.png" alt="Foggy">';
        } else if (description.includes('snow')) {
            weatherIcon = '<img src="images/snow-icon.png" alt="Snowy">';
        } else if (description.includes('thunderstorm')) {
            weatherIcon = '<img src="images/thunderstorm-icon.png" alt="Thunderstorm">';
        }

        const weatherWidget = document.getElementById('contacts__weather-widget');
        weatherWidget.innerHTML = `
      <p class="weather-info">${weatherIcon} now ${temperatureCelsius}°C - ${description}</p>
    `;
    } catch (error) {
        console.error('Error:', error);
    }
}

updateWeatherWidget();