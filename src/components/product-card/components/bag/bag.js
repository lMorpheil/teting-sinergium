const bagButtons = document.querySelectorAll('.bag__button');
const bagInput = document.querySelector('.bag__input');
const [minus, plus] = bagButtons;

function decries() {
  let digits = +bagInput.value;
  if (digits > 0) {
    digits -= 1;
  }
  bagInput.value = digits;
}
function incries() {
  let digits = +bagInput.value;
  if (digits < 6) {
    digits += 1;
  }
  bagInput.value = digits;
}
minus.addEventListener('click', decries);
plus.addEventListener('click', incries);
