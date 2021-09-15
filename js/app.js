const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
// reference
const refs = {
    allGallery: document.querySelector('.js-gallery'),
    changeImg: document.querySelector('.lightbox__image'),
    closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
    modalBackdrop: document.querySelector('.lightbox__overlay'),
    modalWindow: document.querySelector('.js-lightbox'),

}
// dynamick marcup + rendering
const galleryMarcup = createGalleryMarcup(galleryItems);
refs.allGallery.insertAdjacentHTML('beforeend', galleryMarcup);

function createGalleryMarcup(items) {
    return items.map(({ preview, original, description }) => {
        return `
         <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
        `;
    })
        .join('');
}

// event listener
refs.allGallery.addEventListener('click', onGalleryMarcupClick)
function onGalleryMarcupClick(evt) {
    const isImgGalleryEl = evt.target.classList.contains('gallery__image');
    if (!isImgGalleryEl) {
        return;
    }
 evt.preventDefault();

    // modal open + event listener
    refs.modalWindow.classList.add('is-open');
    refs.changeImg.alt = evt.target.alt;
    refs.changeImg.src = evt.target.dataset.source;
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// modal close

refs.closeModalBtn.addEventListener('click', closeModal);
refs.modalBackdrop.addEventListener('click', closeModal);
function closeModal(evt) {
    refs.modalWindow.classList.remove('is-open');
    refs.changeImg.alt = "";
    refs.changeImg.src = "";
    window.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
};