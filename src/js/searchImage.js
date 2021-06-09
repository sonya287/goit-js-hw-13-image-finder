import refs from './refs';
import PictureSearch from './pictureApiService';
import imageTemp from '../templates/image.hbs';
import notice from './notice';

const pictureSearch = new PictureSearch();

const clearImageList = function () {
  refs.imageList.innerHTML = '';
};

const imagesRender = function imagesRender(image) {
  refs.imageList.insertAdjacentHTML('beforeend', imageTemp(image));
};

const loadMore = function () {
  pictureSearch.fetchPicture().then(imagesRender);
};

const searchImage = function (evt) {
  evt.preventDefault();

  pictureSearch.searchVal = evt.currentTarget.elements.query.value;

  pictureSearch.resetPage();

  pictureSearch
    .fetchPicture()
    .then(resalt => {
      if (pictureSearch.searchVal.trim() === '') {
        return notice.noticeError();
      }
      clearImageList();
      imagesRender(resalt);
    })
    .catch(error => {
      return notice.requestError();
    });
};
const infinityScroll = function () {
  const options = {
    rootMargin: '250px',
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && pictureSearch.searchVal !== '') {
        loadMore();
      }
    });
  }, options);

  observer.observe(refs.scroll);
};

export default { searchImage, loadMore, infinityScroll };