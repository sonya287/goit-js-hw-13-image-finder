import 'material-design-icons/iconfont/material-icons.css';
import './styles/style.css';
import refs from './js/refs';
import 'basiclightbox/src/styles/main.scss';
import openModal from './js/modal';
import serch from './js/searchImage';

refs.searchForm.addEventListener('submit', serch.searchImage);

serch.infinityScroll();

refs.imageList.addEventListener('click', openModal);