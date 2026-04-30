let images = ["1.jpg","2.jpg","3.jpg","6.jpg","7.jpg","8.jpg"];
let index = 0;
let zoomLevel = 1;

/* PAGE SWITCH */
function showGallery() {
  document.getElementById("home").style.display = "none";
  document.getElementById("gallery-page").style.display = "block";
}

function goHome() {
  document.getElementById("gallery-page").style.display = "none";
  document.getElementById("home").style.display = "flex";
}

/* OPEN IMAGE */
function openImage(i) {
  index = i;
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = images[index];
}

/* CLOSE */
function closeImage() {
  document.getElementById("lightbox").style.display = "none";
  zoomLevel = 1;
  document.getElementById("lightbox-img").style.transform = "scale(1)";
}

/* NEXT PREV */
function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById("lightbox-img").src = images[index];
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[index];
}

/* ZOOM */
function zoomIn() {
  zoomLevel += 0.2;
  document.getElementById("lightbox-img").style.transform =
    "scale(" + zoomLevel + ")";
}

function zoomOut() {
  if (zoomLevel > 1) {
    zoomLevel -= 0.2;
    document.getElementById("lightbox-img").style.transform =
      "scale(" + zoomLevel + ")";
  }
}

/* CLICK ZOOM */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lightbox-img").addEventListener("click", function () {
    if (zoomLevel === 1) {
      zoomLevel = 2;
    } else {
      zoomLevel = 1;
    }
    this.style.transform = "scale(" + zoomLevel + ")";
  });
});