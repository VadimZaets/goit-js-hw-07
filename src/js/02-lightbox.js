import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListElem = document.querySelector(".gallery");

const listImageElem = creatImageElemMarkup(galleryItems);

function creatImageElemMarkup(galleryItems) {
  return galleryItems
    .map(
      (galleryItem) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
    )
    .join("");
}

galleryListElem.insertAdjacentHTML("beforeend", listImageElem);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
