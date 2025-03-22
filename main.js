function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️"; // You can change to 💖, 💕, 💗 for variety

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-50px"; // Start from above the viewport
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random duration (2-5s)

    document.querySelector(".hearts-container").appendChild(heart)
    
}

// Generate hearts every 500ms
setInterval(createHeart, 150);

function addToInput(num) {
    document.getElementById("inputNum").value += num;
}

function submitInput() {
    document.getElementById("inputNum").value = "";
}

function deleteLast() {
    let input = document.getElementById("inputNum").value;
    document.getElementById("inputNum").value = input.slice(0, -1);
}