"use strict";

const downloadLink = document.querySelector(".download_link");
const downloadIcon = document.querySelector(".download-icon");
const downloadText = document.querySelector(".download-text");

const addColor = function (event) {
  const link = event.target.closest(".download_link");
  if (link) {
    downloadText.classList.add("download-color");
    downloadIcon.classList.add("download-color");
  }
};

const removeColor = function (event) {
  const link = event.target.closest(".download_link");
  if (link) {
    downloadText.classList.remove("download-color");
    downloadIcon.classList.remove("download-color");
  }
};

downloadLink.addEventListener("mouseover", function (e) {
  addColor(e);
});

downloadLink.addEventListener("mouseout", function (e) {
  removeColor(e);
});
