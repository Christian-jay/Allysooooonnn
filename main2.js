// Get the text from the div
let sleepTextDiv = document.getElementById("sleepText");
let sleepText = sleepTextDiv.textContent;

// Clear the original text
sleepTextDiv.textContent = "";

// Function to display each letter one by one
function typeText(index) {
    if (index < sleepText.length) {
        sleepTextDiv.textContent += sleepText[index]; // Add letter one by one
        setTimeout(() => typeText(index + 1), 1); // Adjust speed (100ms per letter)
    }
}

// Start animation
typeText(0);
