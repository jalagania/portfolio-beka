"use strict";

const skillLogo = document.querySelectorAll(".logo-skill");
const cardBox = document.querySelector(".card-box");
const btnAll = document.querySelector(".btn-all");
const btnJS = document.querySelector(".btn-js");
const btnReact = document.querySelector(".btn-react");
const buttons = document.querySelectorAll(".btn-filter");

for (let i = 0; i < projects.length; i++) {
  const html = `<div class="${projects[i].class}">
<div class="card-top">
  <img
    src="${projects[i].cover}"
    alt="project image"
    class="card-cover"
  />
</div>
<div class="card-bottom">
  <p class="title">${projects[i].title}</p>
  <div class="tools-used">
    <p class="html">${projects[i].tools.html}</p>
    <p class="css">${projects[i].tools.css}</p>
    <p class="p-js">${projects[i].tools.js}</p>
    <p class="p-react">${projects[i].tools.react}</p>
    <p class="api">${projects[i].tools.api}</p>
    <p class="json">${projects[i].tools.json}</p>
  </div>
  <div class="on-box">
    <div class="line"></div>
    <p class="on-text">ON</p>
    <div class="line"></div>
  </div>
  <div class="links-box">
    <a
      href="${projects[i].netlify}"
      target="_blank"
      ><img
        src="./images/netlify-logo.png"
        alt="netlify logo"
        class="link-logo" /></a
    ><a
      href="${projects[i].github}"
      target="_blank"
      ><img
        src="./images/github-logo.png"
        alt="github logo"
        class="link-logo"
    /></a>
  </div>
</div>
</div>`;

  cardBox.insertAdjacentHTML("beforeend", html);
}

const cards = document.querySelectorAll(".card");
const toolsArray = document.querySelectorAll(".tools-used");

toolsArray.forEach((tools) => {
  for (let tool of Array.from(tools.children)) {
    if (tool.textContent === "") {
      tool.remove();
    }
  }
});

skillLogo.forEach((logo) => {
  logo.addEventListener("mouseover", function () {
    logo.previousElementSibling.classList.remove("invisible");
  });

  logo.addEventListener("mouseleave", function () {
    logo.previousElementSibling.classList.add("invisible");
  });
});

btnAll.addEventListener("click", function (event) {
  cards.forEach((card) => card.classList.remove("hidden"));
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
});

btnJS.addEventListener("click", function (event) {
  for (let card of cards) {
    card.classList.remove("hidden");
    if (!card.classList.contains("js")) {
      card.classList.add("hidden");
    }
  }
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
});

btnReact.addEventListener("click", function (event) {
  for (let card of cards) {
    card.classList.remove("hidden");
    if (!card.classList.contains("react")) {
      card.classList.add("hidden");
    }
  }
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
});
