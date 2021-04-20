const tabs = Array.from(document.querySelectorAll('.description__title'));
const tabContent = Array.from(document.querySelectorAll('.description__specification'));
const tabParent = document.querySelector('.description__paragraph');

function hiddenTabContent() {
  tabContent.forEach((item) => {
    item.classList.add('description__specification_hidden');
  });
  tabs.forEach((item) => {
    item.classList.remove('description__title_active');
  });
}
function showTabContent(i = 0) {
  tabContent[i].classList.remove('description__specification_hidden');
  tabs[i].classList.add('description__title_active');
}
hiddenTabContent();
showTabContent();
function tabActivated(event) {
  if (event.target && event.target.matches('.description__title')) {
    tabs.forEach((item, index) => {
      if (event.target === item) {
        hiddenTabContent();
        showTabContent(index);
      }
    });
  }
}
tabParent.addEventListener('click', tabActivated);
