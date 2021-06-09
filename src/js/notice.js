import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';
const noticeError = function () {
  error({
    text: 'Invalid query. Please try again!',
    sticker: false,
    delay: 2000,
  });
};
const requestError = function () {
  error({
    text: 'Bad request. Try again later!',
    sticker: false,
    delay: 3000,
  });
};
export default { noticeError, requestError };