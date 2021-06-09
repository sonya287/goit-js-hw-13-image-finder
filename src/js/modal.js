import * as basicLightbox from 'basiclightbox';
export default function (evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  const largeimage = evt.target.dataset.largeimage;
  basicLightbox
    .create(
      `
    <img src="${largeimage}" width="800" height="600">
`,
    )
    .show();
}