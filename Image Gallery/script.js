// script.js for Wonders of the World Gallery

// 🌗 Toggle Light/Dark Mode
function toggleMode() {
  document.body.classList.toggle("light");
  const modeBtn = document.querySelector(".navbar button");
  modeBtn.textContent = document.body.classList.contains("light") ? "🌞" : "🌗";
}

// 📂 Expand/Collapse Album
function toggleAlbum(heading) {
  const albumImages = heading.nextElementSibling;
  if (albumImages.style.display === "flex") {
    albumImages.style.display = "none";
  } else {
    albumImages.style.display = "flex";
  }
}

// 🔍 Open Image in Lightbox
function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  lightbox.style.display = "flex";
  lightboxImg.src = imgElement.src;
  lightboxCaption.innerText = imgElement.alt;
  document.body.style.overflow = 'hidden';
}

// ❌ Close Lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.body.style.overflow = 'auto';
}

// 💡 Optional: ESC key closes lightbox
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeLightbox();
  }
});
