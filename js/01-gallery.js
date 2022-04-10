import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

function createGallery({ preview, original, description }) {
  return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}

function addGallery(value) {
  const gallery = value.map(createGallery).join("");
  galleryContainer.innerHTML = gallery;
}
addGallery(galleryItems);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  createLightbox();
}

function createLightbox() {
  const instance = basicLightbox.create(
    `
        <img src="${event.target.dataset.source}">`,
    {
      onShow(instance) {
        window.addEventListener("keydown", RemoveEventListener);
      },

      onClose(instance) {
        window.removeEventListener("keydown", RemoveEventListener);
      },
    }
  );
  instance.show();

  function RemoveEventListener(event) {
    if (event.code !== "Escape") {
      return;
    }

    instance.close();
  }
}
