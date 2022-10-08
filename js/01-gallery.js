import { galleryItems } from './gallery-items.js';
// Change code below this line


//Создание и рендер разметки по массиву данных galleryItems и 
//предоставленному шаблону элемента галереи.
// description: 
// original: big
// preview: small
const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryImagesMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryImagesMarkup(galleryItems) {
return galleryItems 
.map(({ preview, original, description }) => {
    return `
<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
})
.join('');    
};

// Реализация клика именно по картинке
function onGalleryContainerClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    console.log(event.target);
}

// /Реализация делегирования на div.gallery и получение url большого изображения
//  Открытие модального окна по клику на элементе галереи

galleryContainer.addEventListener(`click`, onGalleryItemClick)
const instance = basicLightbox.create(`
   <img src="assets/images/image.png" width="800" height="600">
 `);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  galleryItems.map((item) => {
    if (item.original === event.target.dataset.source) {
      const instance = basicLightbox.create(` 
        <img src=${item.original} width="800" height="600">
    `);
    instance.show();
    }
   }
  )   
 }

//  Закрытие модального окна по нажатию клавиши Escape
//  Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно
//  У библиотеки basicLightbox есть метод для программного закрытия модального окна

function handleCloseModal() {
  window.removeEventListener('keydown', handleModalEscPress);
  galleryContainer.classList.remove('gallery');
};
 
  function handleModalEscPress() {
    if (key.code === 'Escape') {
      return;
    };
};

console.log(galleryItems);


