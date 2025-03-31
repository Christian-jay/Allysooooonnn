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
typeText("secondSleepText", 60);

document.getElementById("click-button").style.display = "none";

        function showStuff() {
            document.getElementById("click-button").style.display = "inline";
        }

        function buttonClick() {
            window.location = "index3.html"
        }

        setTimeout(showStuff, 1);//30000
