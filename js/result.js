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

// let score = parseInt(localStorage.getItem("score")); // or however you're storing it

// const highImg = document.getElementById("high-img");
// const mediumImg = document.getElementById("medium-img");
// const lowImg = document.getElementById("low-img");

// if (score >= 75) {
//   highImg.style.display = "block";
// }
// else if (score >= 40) {
//   mediumImg.style.display = "block";
// }
// else {
//   lowImg.style.display = "block";
// }
