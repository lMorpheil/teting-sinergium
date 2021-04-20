const totalPrice = document.querySelector('.price__total');
const priceCurrent = document.querySelector('.price__current');
const priceSave = document.querySelector('.price__save span');
const pricePercent = document.querySelector('.price__percent');

// С помощью регулярных выражений парсим число из HTML в нормальном виде
const regexp = /\d/g;
const total = totalPrice.innerHTML.match(regexp).join('');
const current = priceCurrent.innerHTML.match(regexp).join('');
const saving = total - current;
// Функция форматирования числа, для отделения на тысячных с помощью пробела
function spaceDigits(number) {
  return number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}
priceSave.innerHTML = `${spaceDigits(saving)} &#8381;`;
// Вычисляем проценты
const percent = ((total - current) * 100) / total;
pricePercent.innerHTML = `-${percent.toFixed(0)}%`;
