require('webpack-jquery-ui');
require('magnific-popup');
import '/node_modules/magnific-popup/dist/magnific-popup.css';

const buttons = Array.from(document.querySelectorAll('.picture__button'));
const images = Array.from(document.querySelectorAll('.picture__img'));
const buttonParent = document.querySelector('.picture__button-block');
const imageLink = document.querySelector('.image__link');

const imagesPath = images.map((item) => {
  const path = item.src;
  return path;
});
images.forEach((item, index) => {
  if (index !== 0) {
    item.remove();
  }
});
buttons.forEach((button, index) => {
  button.style.backgroundImage = `url(${imagesPath[index]})`;
});
function moveImage(event) {
  if (event.target && event.target.matches('.picture__button')) {
    buttons.forEach((button, index) => {
      button.classList.remove('picture__button_active');
      if (event.target === button) {
        images[0].src = imagesPath[index];
        imageLink.href = imagesPath[index];
      }
    });
    event.target.classList.add('picture__button_active');
  }
}
buttonParent.addEventListener('click', moveImage);

$('.image__link').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  mainClass: 'mfp-no-margins mfp-with-zoom',
  image: {
    verticalFit: true,
  },
  zoom: {
    enabled: true,
    duration: 300,
  },
});
