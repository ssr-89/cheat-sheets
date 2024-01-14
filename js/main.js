"use strict"
const anchors = document.querySelectorAll(".js-scroll-link");
for (let t of anchors)
  t.addEventListener("click", function (e) {
    e.preventDefault();
    const o = t.getAttribute("href").substr(1);
    document
      .getElementById(o)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });