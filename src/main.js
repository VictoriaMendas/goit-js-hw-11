import { getPhotos } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('form');
const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  galleryList.innerHTML = '';

  loader.classList.remove('is-hidden');

  const searchQuery = e.target.elements.search.value.trim();

  if (searchQuery === '') {
    loader.classList.add('is-hidden');
    return;
  }
  getPhotos(searchQuery)
    .then(res => {
      if (res.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      galleryList.innerHTML = createMarkup(res.hits);
      lightbox.refresh();
    })
    .catch(error =>
      iziToast.error({
        position: 'topLeft',
        message: 'Error. Please try again!!',
      })
    )
    .finally(() => loader.classList.add('is-hidden'));
}
