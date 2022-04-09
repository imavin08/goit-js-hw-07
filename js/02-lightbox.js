import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

function createGallery({ preview, original, description }) {
  return `
    <li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
}

function addGallery(value) {
  const gallery = value.map(createGallery).join("");
  galleryContainer.innerHTML = gallery;
}
addGallery(galleryItems);

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  openGallery();
}

function openGallery() {
  let newGallery = new SimpleLightbox(".gallery a", () => {
    newGallery.on();
  });
}
