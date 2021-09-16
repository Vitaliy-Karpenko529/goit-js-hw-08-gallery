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

     const allGalleryRef = document.querySelector('.js-gallery');
     const changeImgRef = document.querySelector('.lightbox__image');
     const closeModalBtnRef = document.querySelector('[data-action="close-lightbox"]');
     const modalBackdropRef = document.querySelector('.lightbox__overlay');
     const modalWindowRef = document.querySelector('.js-lightbox');


// dynamick marcup + rendering
const galleryMarcup = createGalleryMarcup();
allGalleryRef.insertAdjacentHTML('beforeend', galleryMarcup);

function createGalleryMarcup() {
    return galleryItems.map(({ preview, original, description }) => {
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


function setImageAttr(src, alt) {
  changeImgRef.setAttribute("src", src);
  changeImgRef.setAttribute("alt", alt);
};


// event listener
allGalleryRef.addEventListener('click', onGalleryMarcupClick)
function onGalleryMarcupClick(evt) {

  evt.preventDefault();
  
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

    // modal open + event listener
    modalWindowRef.classList.add('is-open');
  setImageAttr(
    evt.target.dataset.source,
    evt.target.alt,
  );
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// modal close

closeModalBtnRef.addEventListener('click', onCloseModal);
modalBackdropRef.addEventListener('click', onCloseModal);
function onCloseModal(evt) {
    modalWindowRef.classList.remove('is-open');
     setImageAttr("", "")
    window.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
};