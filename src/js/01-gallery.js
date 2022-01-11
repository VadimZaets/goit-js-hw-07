import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  list: document.querySelector(".gallery"),
};

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

refs.list.insertAdjacentHTML("beforeend", listImageElem);
refs.list.addEventListener("click", onGalleryItemsClick);

function onGalleryItemsClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName != "IMG") {
    return;
  } else {
    const instance = basicLightbox
      .create(
        `<img width="1400" height="900" src= "${evt.target.dataset.source}">`,
        {
          onShow: (instance) => {
            this.onInstanceclick = function (e) {
              if (e.code === "Escape") {
                instance.close();
              }
            };

            document.addEventListener("keydown", this.onInstanceclick);
          },

          onClose: (instance) => {
            document.removeEventListener("keydown", this.onInstanceclick);
          },
        }
      )
      .show();
  }
}
