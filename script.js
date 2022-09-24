"use strict";

const skillLogo = document.querySelectorAll(".logo-skill");
const cards = document.querySelectorAll(".card");
const btnAll = document.querySelector(".btn-all");
const btnJS = document.querySelector(".btn-js");
const btnReact = document.querySelector(".btn-react");

skillLogo.forEach((logo) => {
  logo.addEventListener("mouseover", function () {
    logo.previousElementSibling.classList.remove("invisible");
  });

  logo.addEventListener("mouseleave", function () {
    logo.previousElementSibling.classList.add("invisible");
  });
});

btnAll.addEventListener("click", function () {
  cards.forEach((card) => card.classList.remove("hidden"));
});

btnJS.addEventListener("click", function () {
  for (let card of cards) {
    card.classList.remove("hidden");
    if (!card.classList.contains("js")) {
      card.classList.add("hidden");
    }
  }
});

btnReact.addEventListener("click", function () {
  for (let card of cards) {
    card.classList.remove("hidden");
    if (!card.classList.contains("react")) {
      card.classList.add("hidden");
    }
  }
});
