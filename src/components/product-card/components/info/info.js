const infoInput = document.querySelector('.info__input');

function updateClipboard() {
  navigator.clipboard.writeText(infoInput.value).then(() => {
    alert(`Скопировано ${infoInput.value}`);
  }).catch((err) => {
    console.log('Something went wrong', err);
  });
}
infoInput.addEventListener('click', updateClipboard);