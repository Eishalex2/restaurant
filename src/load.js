// Includes restaurant name and nav menu. Also automatically loads the
// home tab.

// things to think about: how to clear before loading separate tabs (done). How
// to "disable" the tab you're currently on.

import loadHome from "./home";
import loadContact from "./contact";

function createHeadline() {
  const name = document.createElement('h1');
  name.textContent = "My Wonderful Restaurant";

  return name;
}

function createNav() {
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = "Home";
  homeBtn.addEventListener('click', loadHome)
  nav.appendChild(homeBtn);

  const menuBtn = document.createElement('button');
  menuBtn.textContent = "Menu";
  nav.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener('click', loadContact);
  nav.appendChild(contactBtn);

  return nav;
}

function createTabContent() {
  const content = document.createElement('div');
  content.setAttribute('id', 'tab-content');

  return content;
}

function pageLoad() {
  const element = document.getElementById('content');

  element.appendChild(createHeadline());
  element.appendChild(createNav());
  element.appendChild(createTabContent());
  loadHome();
}

export default pageLoad;