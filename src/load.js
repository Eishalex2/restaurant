import Image from './headline-image.jpg';

function createHeadline() {
  const headline = document.createAttribute('h1');
  headline.textContent = 'My Wonderful Restaurant';

  return headline;
}

function createImage() {
  const image = new Image();
  image.src = Image;
  image.alt = "Generic restaurant";

  return image;
}

function createDescription() {
  const description = document.createAttribute('p');
  description.textContent = "This restaurant is so great. Wow! Definitely come eat here.";

  return description;
}

function pageLoad() {
  const element = document.createAttribute('div');
  document.body.appendChild(element);

  element.appendChild(createHeadline);
  element.appendChild(createImage);
  element.appendChild(createDescription);
}

export default pageLoad;