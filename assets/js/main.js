const IMAGES_MAX_COUNT = [33, 22, 25];
const categories = ['general', 'detail', 'portrait'];
const imageContainer = document.getElementById('image-list');
const imagePreview = document.getElementById('image-preview');

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

    newImage.onclick = (event) => {
      imagePreview.appendChild(newImage.cloneNode(false));
      imagePreview.classList.add('active');
      document.body.classList.add('scroll-disabled');
    }

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

imagePreview.addEventListener('click', () => {
  imagePreview.classList.remove('active');
  imagePreview.innerHTML = '';
  document.body.classList.remove('scroll-disabled');
})

setSelectedCategory(0);