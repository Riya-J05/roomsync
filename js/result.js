// accessing compatibility score
let score = parseInt(localStorage.getItem("compatibilityScore"));

// accessing roomates 1 name
let nameA = localStorage.getItem("nameA");

// accessing roomate 2 name
let nameB = localStorage.getItem("nameB");

// displaying both roomates names
document.getElementById("nameA").textContent = nameA;
document.getElementById("nameB").textContent = nameB;

// displaying compatibility score
document.getElementById("compatibility-score").textContent = score;

// initialising images
const highImg = document.getElementById("high-img");
const mediumImg = document.getElementById("medium-img");
const lowImg = document.getElementById("low-img");

// initialising message
const message = document.getElementById("compatibility-message");

// displaying diff images and msgs based on score!
if (score >= 75) {
  // displaying img
  highImg.style.display = "block";

  // displaying msg
  message.textContent =
    "You two are seriously in sync! Your habits and lifestyles align beautifully. Living together will likely feel natural, easy, and drama-free. Just keep communicating and you’re golden ✨";
} else if (score >= 40) {
  // displaying img
  mediumImg.style.display = "block";

  // displaying msg
  message.textContent =
    "You have a decent balance! While not everything matches perfectly, with mutual respect and a little compromise, you can make this work smoothly. A few conversations now can prevent big issues later 🤝";
} else {
  // displaying img
  lowImg.style.display = "block";

  // displaying msg
  message.textContent =
    "You two might need some honest discussions before moving in. Differences aren’t bad — but clarity is key. Set boundaries, communicate clearly, and decide if adjustments feel comfortable for both of you 💬";
}
