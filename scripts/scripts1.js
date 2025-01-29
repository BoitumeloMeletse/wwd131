// Set current year and last modified date
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Static values for temperature and wind speed
const temperature = 15; // in Celsius
const windSpeed = 10; // in km/h

// Calculate wind chill
function calculateWindChill(temp, wind) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16)
  ).toFixed(1);
}

// Update wind chill if conditions are met
const windChillElement = document.getElementById("wind-chill");
if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
} else {
  windChillElement.textContent = "N/A";
}
