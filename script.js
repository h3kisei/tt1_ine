const imageWrapper = document.querySelector(".image__wrapper");
const imageItems = document.querySelectorAll(".image__wrapper > *");
const imageLength = imageItems.length;
const perView = 3;
let totalScroll = 0;
const delay = 2000;

imageWrapper.style.setProperty("--per-view", perView);
for (let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML("beforeend", imageItems[i].outerHTML);
}

let autoScroll = setInterval(scrolling, delay);

function scrolling() {
  totalScroll++;
  if (totalScroll == imageLength + 1) {
    clearInterval(autoScroll);
    totalScroll = 1;
    imageWrapper.style.transition = "0s";
    imageWrapper.style.left = "0";
    autoScroll = setInterval(scrolling, delay);
  }
  const widthEl =
    document.querySelector(".image__wrapper > :first-child").offsetWidth + 24;
  imageWrapper.style.left = `-${totalScroll * widthEl}px`;
  imageWrapper.style.transition = ".3s";
}

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next__share"),
  prev = document.getElementById("prev__share");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});

console.log(carousel.scrollWidth);
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

function scrollToTop() {
  window.scrollTo(100, 100);
}

var nav;
var menu;

function declare() {
  nav = document.querySelector(".nav__a");
  menu = document.querySelector(".menu");
}

const main = document.querySelector("main");

declare();

function events() {
  menu.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

events();

$(document).ready(function () {
  $("[data-toggle=popover]").popover({
    trigger: "click",
    placement: "bottom",
    html: true,
    content: function () {
      var anchorText = $(this).text();
      $("#popover-content")
        .find("input[id=txtContent]")
        .attr("value", anchorText);
      return $("#popover-content").html();
    },
  });
});
