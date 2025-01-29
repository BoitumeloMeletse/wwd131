// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("currentYear").textContent = currentYear;
    document.getElementById("lastModified").textContent = lastModified;

    const temperature = 5; // Example temperature in °C
    const windSpeed = 10; // Example wind speed in km/h

    function calculateWindChill(temp, speed) {
        return Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
    }

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById("windchill").textContent = `Wind Chill: ${windChill} °C`;
    } else {
        document.getElementById("windchill").textContent = "Wind Chill: N/A";
    }
});
