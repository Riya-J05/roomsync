document
  .getElementById("compatibilityForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    /* -----------------------------
       1️⃣ GET NAMES
    ----------------------------- */
    const nameA = document.getElementById("nameA").value;
    const nameB = document.getElementById("nameB").value;

    /* -----------------------------
       2️⃣ GET ALL RADIO VALUES
    ----------------------------- */

    function getValue(name) {
      return document.querySelector(`input[name="${name}"]:checked`).value;
    }

    const answersA = [
      getValue("sleepA"),
      getValue("noiseSleepA"),
      getValue("cleanFreqA"),
      getValue("dishesA"),
      getValue("noiseA"),
      getValue("quietA"),
      getValue("guestsA"),
      getValue("guestNoticeA"),
      getValue("foodA"),
      getValue("foodShareA"),
      getValue("smokingA"),
      getValue("conflictA"),
      getValue("commA"),
    ];

    const answersB = [
      getValue("sleepB"),
      getValue("noiseSleepB"),
      getValue("cleanFreqB"),
      getValue("dishesB"),
      getValue("noiseB"),
      getValue("quietB"),
      getValue("guestsB"),
      getValue("guestNoticeB"),
      getValue("foodB"),
      getValue("foodShareB"),
      getValue("smokingB"),
      getValue("conflictB"),
      getValue("commB"),
    ];

    /* -----------------------------
       3️⃣ SCORING SYSTEM
    ----------------------------- */

    let score = 0;

    function compareAnswers(answerA, answerB) {
      return answerA === answerB ? 10 : 0;
    }

    for (let i = 0; i < answersA.length; i++) {
      score += compareAnswers(answersA[i], answersB[i]);
    }

    const maxScore = answersA.length * 10;

    /* -----------------------------
       4️⃣ CALCULATE PERCENTAGE
    ----------------------------- */

    const percentage = Math.round((score / maxScore) * 100);

    /* -----------------------------
       5️⃣ STORE DATA
    ----------------------------- */

    localStorage.setItem("nameA", nameA);
    localStorage.setItem("nameB", nameB);
    localStorage.setItem("compatibilityScore", percentage);

    /* -----------------------------
       6️⃣ REDIRECT TO RESULTS PAGE
    ----------------------------- */

    window.location.href = "result.html";
  });
