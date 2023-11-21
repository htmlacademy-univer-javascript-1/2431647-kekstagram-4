import {renderPhotos} from './photos.js';
import {renderModal} from './modal.js';

const setupImageGallery = (imagesData) => {
  renderPhotos(imagesData);

  document.addEventListener('photoSelect', (event) => {
    renderModal(event.detail);
  });
};

export {setupImageGallery};
