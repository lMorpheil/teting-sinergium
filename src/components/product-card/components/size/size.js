const buttons = Array.from(document.querySelectorAll('.size__button'));
function handlerClickSizeButton() {
  const checkButton = !this.matches('.size__button_disabled') && !this.matches('.size__button_resize');
  buttons.forEach((element) => {
    if (checkButton) {
      element.classList.remove('size__button_active');
    }
  });
  if (checkButton) {
    this.classList.add('size__button_active');
  }
}
buttons.forEach((element) => {
  element.addEventListener('click', handlerClickSizeButton);
});
const modalButton = document.querySelector('.size__button_resize');
const modalWindow = document.querySelector('.modal');
const modalWindowButton = document.querySelector('.modal__button');

function showModal() {
  modalWindow.classList.add('modal_active');
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = '15px';
}
function hiddenModal() {
  modalWindow.classList.remove('modal_active');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}
modalButton.addEventListener('click', showModal);
modalWindowButton.addEventListener('click', hiddenModal)