//code using click event
/* 
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    randNum = getRandom();
    hexColor += hex[randNum];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

const getRandom = () => {
  return Math.floor(Math.random() * hex.length);
};

*/

//code using timer

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const getRandom = () => {
  return Math.floor(Math.random() * hex.length);
};

const showSlides = () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    randNum = getRandom();
    hexColor += hex[randNum];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;

  setTimeout(showSlides, 2000);
};

showSlides();
