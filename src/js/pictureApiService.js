export default class PictureSearch {
  constructor() {
    this.searchVal = '';
    this.page = 1;
  }
  fetchPicture() {
    const URL = 'https://pixabay.com/api/';
    const options = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      q: this.searchVal,
      page: this.page,
      per_page: '12',
      key: '21324374-26e3d3b86bafb4c298c1385cf',
    });
    return fetch(`${URL}/?${options}`)
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}