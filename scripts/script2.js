document.addEventListener("DOMContentLoaded", () => {
  const temperature = 10; // Celsius
  const windSpeed = 5; // km/h

  // Calculate wind chill using the formula
  const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);

  // Display the calculated wind chill
  document.getElementById("wind-chill").textContent = `${windChill.toFixed(1)}°C`;
});
