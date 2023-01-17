const nameA = document.querySelector("#nameA").value;
const nameB = document.querySelector("#nameB").value;
const result = document.querySelector(".result");

const btn = document.querySelector("#btn");
const form = document.querySelector(".form");
const msg = document.querySelector('.msg');

const calculateLove = () => {
  ;
  //random love score
  let loveScore = Math.random(Math.floor * 100) + 1;

  if (nameA == " " && nameB == "") {
    return msg.textContent = "add your name";

   
  } else if (loveScore >= 90) {
    return result.textContent = "Your love is pure!";
  } else if (loveScore >= 60) {
    result.textContent = "Need some work!";
  }


  







};

calculateLove();

form.addEventListener("submit", calculateLove);
