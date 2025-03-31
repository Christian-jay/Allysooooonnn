function yesButton() {
    document.getElementById("gifImage").src = "Assets/Happy Happy Sticker Sticker by Japan.gif";
}

function moveButton() {
    document.getElementById("gifImage").src = "Assets/Sticker ねこ Sticker by Japan.gif";

    let button = document.getElementById("noButton");

    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    let randomX = Math.floor(Math.random() * (screenWidth - 100)); 
    let randomY = Math.floor(Math.random() * (screenHeight - 50));

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

// document.addEventListener("DOMContentLoaded", function () {
//     let noButton = document.getElementById("noButton");

//     noButton.style.position = "absolute"; // Ensure it moves properly

//     noButton.addEventListener("mouseover", function () {
//         let screenWidth = window.innerWidth - noButton.clientWidth;
//         let screenHeight = window.innerHeight - noButton.clientHeight;

//         let randomX = Math.random() * screenWidth;
//         let randomY = Math.random() * screenHeight;

//         noButton.style.left = `${randomX}px`;
//         noButton.style.top = `${randomY}px`;
//     });
// });