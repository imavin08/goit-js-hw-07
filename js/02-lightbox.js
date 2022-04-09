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
  let newgallery = new SimpleLightbox(".gallery a");
  newgallery.on("show.simplelightbox");
}

addGallery(galleryItems);
