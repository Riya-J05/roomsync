// what happens when submit btn inside form is clicked
document
  .getElementById("compatibilityForm")
  .addEventListener("submit", function (event) {
    // prevent form from being submitted and page reloading
    event.preventDefault();

    // get names of both the roomates
    const nameA = document.getElementById("nameA").value;
    const nameB = document.getElementById("nameB").value;
    console.log(nameA);

    // getting mcq choices of both the users
    // :checked - to give the selected option, not the first option!

    // 1 - sleep
    let sleepA = document.querySelector("input[name='sleepA']:checked");
    let sleepB = document.querySelector("input[name='sleepB']:checked");

    // 2 - cleaning habits
    let cleanFreqA = document.querySelector("input[name='cleanA']:checked");
    let cleanFreqB = document.querySelector("input[name='cleanB']:checked");

    // 3 - noise
    let noiseA = document.querySelector("input[name='noiseA']:checked");
    let noiseB = document.querySelector("input[name='noiseB']:checked");

    // 4 - guests
    let guestsA = document.querySelector("input[name='guestsA']:checked");
    let guestsB = document.querySelector("input[name='guestsB']:checked");

    // 5 - food
    let foodA = document.querySelector("input[name='foodA']:checked");
    let foodB = document.querySelector("input[name='foodB']:checked");

    // 6 - smoking
    let smokingA = document.querySelector("input[name='smokingA']:checked");
    let smokingB = document.querySelector("input[name='smokingB']:checked");

    // 7 - conflict
    let conflictA = document.querySelector("input[name='conflictA']:checked");
    let conflictB = document.querySelector("input[name='conflictB']:checked");

    // initialising score
    let score = 0;

    // comparing sleep
    if (sleepA.value === sleepB.value) {
      score += 10;
    } else {
      score += 0;
    }

    // comparing cleaning habits
    if (cleanFreqA.value === cleanFreqB.value) {
      score += 10;
    } else {
      score += 0;
    }

    // comparing noise
    if (noiseA.value === noiseB.value) {
      score += 10;
    } else {
      score += 0;
    }

    // comparing guests
    if (guestsA.value === guestsB.value) {
      score += 10;
    } else {
      score += 0;
    }

    // comparing food habits
    if (foodA.value === foodB.value) {
      score += 10;
    } else {
      score += 0;
    }

    // comparing smoking habits
    if (smokingA.value === smokingB.value) {
      score += 10;
    } else {
      score += 0;
    }

    // comparing conflict
    if (conflictA.value === conflictB.value) {
      score += 10;
    } else {
      score += 0;
    }

    // initialising and calculating max score
    // 7 ques which can have max score of 10!
    const totalQues = 7;
    const maxScore = totalQues * 10;

    // calculating compatibility score
    const compatibilityScore = Math.round((score / maxScore) * 100);

    // store needed data to local storage
    // names and compatibility score
    localStorage.setItem("nameA", nameA);
    localStorage.setItem("nameB", nameB);
    localStorage.setItem("compatibilityScore", compatibilityScore);

    // finally redirect users to results page
    window.location.href = "result.html";
  });
