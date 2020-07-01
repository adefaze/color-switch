//code using click event
/*

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // get random number
  const randNum = getRandom();
  document.body.style.backgroundColor = colors[randNum];
  color.textContent = colors[randNum];
});

const getRandom = () => {
  return Math.floor(Math.random() * colors.length);
};
*/

//code for automatic slide

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const getRandom = () => {
  return Math.floor(Math.random() * colors.length);
};

function showSlides() {
  const randNum = getRandom();
  document.body.style.backgroundColor = colors[randNum];
  color.textContent = colors[randNum];

  setTimeout(showSlides, 2000);
}

showSlides();
