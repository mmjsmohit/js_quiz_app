const correctAnswers = ["A", "A", "A", "A", "A"];
const formEl = document.querySelector(".quiz-form");
const scoreEl = document.getElementById("score");
const reloadEl = document.querySelector("reload");
const questionsEl = document.querySelectorAll(".question");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    formEl.q1.value,
    formEl.q2.value,
    formEl.q3.value,
    formEl.q4.value,
    formEl.q5.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1;
      questionsEl[index].classList.add("correct");
    } else {
      questionsEl[index].classList.add("wrong");
      //Append the correct answer below the question element if the answer is wrong
      questionsEl[index].insertAdjacentHTML(
        "beforeend",
        `<p class="correct-answer">The correct answer is ${correctAnswers[index]}</p>`
      );
    }
  });
  //Show the result on page
  scoreEl.textContent = score;

  scrollTo(0, 0);
  const resultEl = document.querySelector(".result");
  resultEl.classList.remove("hide");
  //Update the result text with the score
  console.log(userAnswers);
});
