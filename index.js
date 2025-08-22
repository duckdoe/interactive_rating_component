const ratingState = document.querySelector("#rating_state_container");
const ratingBtns = document.querySelectorAll("#rating_state_buttons button");
const thankYouState = document.querySelector("#thank_you_state");
const submitRating = document.querySelector("#submit_rating");

ratingBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    for (let btn of Array.from(ratingBtns)) {
      if (btn !== e.target) {
        btn.classList.remove("active");
      }
    }
    button.classList.add("active");
  });
});

function showState(previousState, newState) {
  previousState.style.display = "none";
  newState.style.display = "block";
}

submitRating.addEventListener("click", function () {
  showState(ratingState, thankYouState);
  const ratingText = document.querySelector(".rating");
  ratingText.textContent = getRating();
  window.removeEventListener("click", showState);
});

function getRating() {
  for (let button of Array.from(ratingBtns)) {
    if (button.classList.contains("active")) {
      return button.textContent;
    }
  }
  return 0;
}
