// Update the last modified date
document.addEventListener('DOMContentLoaded', function() {
  const now = new Date();
  const formattedDate = now.toLocaleString();
  document.getElementById('lastModified').textContent = `Last Modified: ${formattedDate}`;
});

// Fetch and display weather data (Optional)
async function fetchWeather() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Pretoria,za&units=metric&appid=YOUR_API_KEY');
    if (!response.ok) {
      throw new Error('Weather data not available');
    }
    const data = await response.json();
    document.getElementById('weather').textContent = `Weather: ${data.weather[0].description}, ${data.main.temp}°C`;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Set dynamic background image
document.addEventListener('DOMContentLoaded', function() {
  const backgroundImage = document.querySelector('.background-image');
  if (backgroundImage) {
    backgroundImage.style.backgroundImage = 'url("images/Johannesburg-Skyline.jpg")';
  }
});