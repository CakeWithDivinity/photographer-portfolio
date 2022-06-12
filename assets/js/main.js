const IMAGES_MAX_COUNT = [33, 22, 25];
const categories = ['general', 'detail', 'portrait'];
const imageContainer = document.getElementById('image-list');

let selectedCategory;

function setSelectedCategory(id) {
  if(selectedCategory === id) {
    return;
  }

  selectedCategory = categories[id];
  const selects = document.querySelectorAll('.select');

  selects.forEach((select, selectId) => {
    if (select.classList.contains('active')) {
      select.classList.remove('active');
    }

    if (selectId === id) {
      select.classList.add('active');
    }
  });

  removeCurrentImagesFromContainer();
  loadImagesIntoContainer(`assets/images/${categories[id]}`, IMAGES_MAX_COUNT[id]);
}

function loadImagesIntoContainer(basePath, maxCount) {
  for (let i = 0; i < maxCount; i++) {
    const newImage = document.createElement('img');
    newImage.src = `${basePath}/${i}.jpg`;
    imageContainer.appendChild(newImage);
  }
}

function removeCurrentImagesFromContainer() {
  imageContainer.innerHTML = '';
}

document.querySelectorAll('.select').forEach((item, index) => {
  item.addEventListener('click', () => {
    console.log('foo');
    setSelectedCategory(index);
  })
})

setSelectedCategory(0);