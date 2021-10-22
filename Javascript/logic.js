const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", function () {
  const character = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];

  let hex = "#";

  for (let i = 0; i < 6; i++) {
    let rand = Math.floor(Math.random() * character.length);

    hex += character[rand];
  }

  document.body.style.backgroundColor = hex;
  color.textContent = hex;
});
