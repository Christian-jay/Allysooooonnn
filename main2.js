function typeText(elementId, delay = 100) {
    let textDiv = document.getElementById(elementId);
    let text = textDiv.textContent;

    // Clear the original text
    textDiv.textContent = "";

    function type(index) {
        if (index < text.length) {
            textDiv.textContent += text[index]; // Add letter one by one
            setTimeout(() => type(index + 1), delay); // Adjust speed
        }
    }

    type(0);
}

// Start animation for both texts
typeText("sleepText", 1); // Adjust the speed as needed
typeText("secondSleepText", 1);
