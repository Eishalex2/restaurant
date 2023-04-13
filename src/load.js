import Image from './headline-image.jpg';

function createHeadline() {
  const headline = document.createElement('h1');
  headline.textContent = "My Wonderful Restaurant";
  return headline;
}

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

function pageLoad() {
  const element = document.getElementById('content');

  element.appendChild(createHeadline());
  element.appendChild(createImage());
  element.appendChild(createDescription());
}

export default pageLoad;