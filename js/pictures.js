const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPicture = (photoData) => {
  const { url, description, comments, likes } = photoData;
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture_img').src = url;
  pictureElement.querySelector('.picture_img').alt = description;
  pictureElement.querySelector('.picture_comments').textContent = comments.length;
  pictureElement.querySelector('.picture_likes').textContent = likes;

  return pictureElement;
};

const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const renderPictures = (photoDataArray) => {
  photoDataArray.forEach((photoData) => {
    const picture = renderPicture(photoData);
    fragment.appendChild(picture);
  });

  picturesContainer.appendChild(fragment);
};

export { renderPictures };
