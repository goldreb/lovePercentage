const result = document.querySelector(".result");

const btn = document.querySelector("#btn");
const form = document.querySelector(".form");
const errorA = document.querySelector(".nameAError");
const errorB = document.querySelector(".nameBError");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  loveInput();
});

const loveInput = () => {
  const nameA = document.querySelector("#nameA").value;
  const nameB = document.querySelector("#nameB").value;

  errorA.style.display = "none";
  errorB.style.display = "none";

  if (nameA == "" || nameA.length < 2) {
    errorA.style.display = "block";
    errorA.innerHTML = "Do not leave blank";
  } else if (!isNaN(nameA)) {
    errorA.style.display = "block";
    errorA.innerHTML = "Number name not allowed";
  } else if (nameB == "" || nameB.length < 2) {
    errorB.style.display = "block";
    errorB.innerHTML = "Do not leave blank";
  } else if (!isNaN(nameB)) {
    errorB.style.display = "block";
    errorB.innerHTML = "Number name not allowed";
  } else {
    lovePercentage();

    
  }
};

const lovePercentage = () => {
  let loveRandom = Math.floor(Math.random() * 100);

  if (loveRandom <= 50) {
    result.innerHTML = `${loveRandom}%. You are not compatible! Don't dream on it. `;
  } else if (loveRandom <= 70) {
    result.innerHTML = `${loveRandom} % You have a chance!`;
  } else if (loveRandom <= 90) {
    result.innerHTML = `${loveRandom}% Match made in heaven!`;
  }
};

