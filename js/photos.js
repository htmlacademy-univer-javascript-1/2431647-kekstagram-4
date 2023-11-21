const container = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');

const createPhotoClickHandler = (properties) => (event) => {
  event.preventDefault();
  document.dispatchEvent(new CustomEvent('photosSelect', {detail: properties}));
};

const createPhotos = (imagesData) => imagesData.map((properties) => {
  const {url, description, likes, comments} = properties;
  const photo = template.cloneNode(true);
  photo.querySelector('.picture__img').src = url;
  photo.querySelector('.picture__img').alt = description;
  photo.querySelector('.picture__likes').textContent = likes;
  photo.querySelector('.picture__comments').textContent = comments.length;
  photo.addEventListener('click', createPhotoClickHandler(properties));

  return photo;
});

const renderPhotos = (imagesData) => {
  container.querySelectorAll('.picture').forEach((photo) => photo.remove());
  container.append(...createPhotos(imagesData));
};

export {renderPhotos};
