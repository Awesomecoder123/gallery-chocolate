const displayImage = document.querySelector("#display img");
const fsImages = document.querySelectorAll("#film-strip img");

fsImages.forEach((fsImage) => {
  fsImage.addEventListener("click", (event) => {
    displayImage.src = event.target.src;
    displayImage.alt = event.target.alt;
  });
});
