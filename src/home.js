// home tab. Includes picture and description

import Image from './headline-image.jpg';

function createImage() {
  const image = document.createElement('img');
  image.classList.add('image');
  image.src = Image;
  image.alt = "Restaurant";
  return image;
}

function createDescription() {
  const description = document.createElement('p');
  description.textContent = "This restaurant is so great. Wow! You should definitely eat here. The baklava is divine.";
  return description;
}

function loadHome() {
  const homeTab = document.getElementById('tab-content');
  homeTab.textContent = "";

  homeTab.appendChild(createImage());
  homeTab.appendChild(createDescription());

  return homeTab;
}

export default loadHome;