// Insert the current year into the footer
const currentYearSpan = document.getElementById('currentyear');
const year = new Date().getFullYear();
currentYearSpan.textContent = year;

// Display last modified date in the footer
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;
