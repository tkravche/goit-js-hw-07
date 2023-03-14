import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
let galleryList = '';
galleryItems.forEach(item => {
  galleryList += `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
});

galleryEl.insertAdjacentHTML('afterbegin', galleryList);

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source}>`
  );
  instance.show();

  window.addEventListener('keydown', onEscKeyDown);
  function onEscKeyDown(event) {
    if (event.code === 'Escape') {
      window.removeEventListener('keydown', onEscKeyDown);
      instance.close();
    }
  }
}
