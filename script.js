const apiKey = 'YOUR_API_KEY_HERE';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather`;

function fetchWeatherData(city) {
  fetch(`${apiUrl}?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const location = data.name;

      document.getElementById('weather-data').innerHTML = `Temperature: ${temperature}°C`;
      document.getElementById('weather-description').innerHTML = `Description: ${description}`;
      document.getElementById('location').innerHTML = `Location: ${location}`;
    })
    .catch(error => console.error(error));
}

// Call the function when the user submits a city
document.getElementById('city-form').addEventListener('submit', event => {
  event.preventDefault();
  const city = document.getElementById('city-input').value;
  fetchWeatherData(city);
});