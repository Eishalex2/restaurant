// Includes restaurant name and nav menu. Also automatically loads the
// home tab.

// things to think about: how to clear before loading separate tabs. How
// to "disable" the tab you're currently on.

import loadHome from "./home";

function createHeadline() {
  const name = document.createElement('h1');
  name.textContent = "My Wonderful Restaurant";

  return name;
}

function createNav() {
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = "Home";
  nav.appendChild(homeBtn);

  const menuBtn = document.createElement('button');
  menuBtn.textContent = "Menu";
  nav.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.textContent = "Contact";
  nav.appendChild(contactBtn);

  return nav;
}

function pageLoad() {
  const element = document.getElementById('content');

  element.appendChild(createHeadline());
  element.appendChild(createNav());
  element.appendChild(loadHome());
}

export default pageLoad;