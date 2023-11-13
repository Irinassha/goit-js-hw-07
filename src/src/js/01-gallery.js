import { galleryItems } from "./gallery-items.js";

const galleryUl = document.querySelector(".gallery");

const galleruImg = galleryItems
  .map(
    (galleryItem) =>
      ` <li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src= ${galleryItem.preview}
        data-source= ${galleryItem.original}
        alt= ${galleryItem.description}
      />
    </a>
  </li>
`
  )
  .join("");

galleryUl.innerHTML = galleruImg;

const onGalleryClic = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const dataSourceImg = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src=${dataSourceImg} width="100%" height="100%"/>`
  );
  instance.show();
};

galleryUl.addEventListener("click", onGalleryClic);
