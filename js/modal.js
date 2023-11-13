import {renderComments} from './comments.js';

const modal = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');

const closeModal = () => {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
  closeButton.removeEventListener('click', onCancelButtonClick);
};

function onDocumentKeyDown (event) {
  if (event.key === 'Escape'){
    closeModal();
  }
}

function onCancelButtonClick () {
  closeModal();
}

const openModal = () => {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
  closeButton.addEventListener('click', onCancelButtonClick);

};

const renderModal = (properties) => {
  const {url, description, likes, comments} = properties;
  modal.querySelector('.big-picture__img img').src = url;
  modal.querySelector('.big-picture__img img').alt = description;
  modal.querySelector('.likes-count').textContent = likes;
  modal.querySelector('.social__caption').textContent = description;
  renderComments(comments);
  openModal();
};

export {renderModal};
