const daysWeek = document.querySelector("#form__box");
const inputItim = document.querySelector("#input");
const buttonyim = document.querySelector("#button");
const elText = document.querySelector(".text__itm");

daysWeek.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let value = Number(inputItim.value);
  switch (value) {
    case 1:
      elText.textContent = "dushanba";
      elText.style.color = " red";
      break;
    case 2:
      elText.textContent = "seshanba";
      elText.style.color = "aqua ";
      break;
    case 3:
      elText.textContent = "chorshanba";
      elText.style.color = "gold ";
      break;
    case 4:
      elText.style.color = " yellow";
      elText.textContent = "payshanba";
      break;
    case 5:
      elText.style.color = " blue";
      elText.textContent = "juma";
      break;
    case 6:
      elText.textContent = "shanba";
      elText.style.color = "white ";

      break;
    case 7:
      elText.style.color = "brown ";
      elText.textContent = "yakshnba";
      break;
    default:
      elText.style.color = "burlywood";
      elText.textContent = "1 dan yetigacha son kiriting";
      break;
  }
});
