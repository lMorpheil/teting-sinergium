

// window.addEventListener('DOMContentLoaded', () => {
const basket = document.querySelector('.bag__basket');
basket.addEventListener('click', sendServer);
function sendServer(e) {
  e.preventDefault();
  const phone = document.querySelector('.order__input').value;
  const article = document.querySelector('.info__input').value;
  const size = document.querySelector('.size__button_active').value;
  const count = document.querySelector('.bag__input').value;

  const data = new FormData();
  data.append('phone', phone);
  data.append('article', article);
  data.append('size', size);
  data.append('count', count);

  fetch('https://my-json-server.typicode.com/lMorpheil/serv',
    {
      method: 'POST',
      body: data,
    })
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject();
      }
      return response.json();
    })
    .then(function (data) {
      console.log(JSON.stringify(data))
      console.log(data)
    })
    .catch(() => console.log('ошибка'));
}
// })
