window.addEventListener('DOMContentLoaded', () => {
  const basket = document.querySelector('.bag__button');
  if (basket) {
    basket.addEventListener('click', send_mail)
  }
  function send_mail(e) {
    e.preventDefault()
    let phone = document.querySelector('.order__input').value;
    let article = document.querySelector('.info__input').value;
    let size = document.querySelector('.size__button_active').value;
    let count = document.querySelector('.bag__input').value;

    let data = new FormData()
    data.append('phone', phone)
    data.append('article', article)
    data.append('size', size)
    data.append('count', count)

    console.log(data)
    fetch('./post.php',
      {
        method: "POST",
        body: data
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


})
