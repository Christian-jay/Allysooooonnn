function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💓"; // You can change to 💖, 💕, 💗 for variety

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-50px"; // Start from above the viewport
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random duration (2-5s)

    document.querySelector(".hearts-container").appendChild(heart)
    
}

// Generate hearts every 350ms
setInterval(createHeart, 350);

function addToInput(num) {
    document.getElementById("inputNum").value += num;
}

function submitInput() {
    let inputField = document.getElementById("inputNum");
    let inputtedVal = inputField.value;

    if (inputtedVal !== "02172005") {
        inputField.value = "Wrong!";

        // Remove "Wrong!" text after 2 seconds
        setTimeout(() => {
            inputField.value = "";
        }, 1000);
    } else {
        window.location.href = "index2.html"
    }
}

function deleteLast() {
    let input = document.getElementById("inputNum").value;
    document.getElementById("inputNum").value = input.slice(0, -1);
}