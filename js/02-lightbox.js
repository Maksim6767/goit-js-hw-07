import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// /Создание и рендер разметки по массиву данных galleryItems и 
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
    <a class="gallery__item" href='${original}'>
    <img class="gallery__image" src='${preview}' alt='${description}' />
    </a>`
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

//Инициализация объекта
const captionOptions = {
    captionSelector: 'img',//установить элемент, в котором находится заголовок. Установите для самого A-Tag значение «self» или используйте обратный вызов, который возвращает элемент.
    captionType: 'attr',//как получить подпись. Вы можете выбирать между attr, data или text
    captionsData: 'alt',//получить заголовок из данного атрибута
    captionPosition: 'bottom',//положение подписи. Возможны следующие варианты: верх, низ или снаружи
    captionDelay: 250,//добавляет задержку перед отображением заголовка (в мс)
    //enableKeyboard: true,//разрешить навигацию со стрелками на клавиатуре и закрыть клавишей ESC
    uniqueImages: true,//нужно ли делать изображения уникальными или нет
   };

const galleryImgA = document.querySelector('.gallery a');

galleryImgA.addEventListener(`click`, elementCaptionOptions);
function elementCaptionOptions() {
    let captionOptionsElement = {};
    return captionOptionsElement;
};

let simpleLightboxGallery = new SimpleLightbox('.gallery a', captionOptions);
simpleLightboxGallery.on('show.simplelightbox', function () {
    open
});