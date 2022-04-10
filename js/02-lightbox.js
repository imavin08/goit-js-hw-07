import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

function createGallery({ preview, original, description }) {
  return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

function addGallery(value) {
  const gallery = value.map(createGallery).join("");
  galleryContainer.innerHTML = gallery;

  makeNewGallery();
}

function makeNewGallery() {
  new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
  });
}

addGallery(galleryItems);
