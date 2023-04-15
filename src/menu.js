// includes menu items

function createMenuItem(name, description) {
  const menuItem = document.createElement('div');
  
  const menuName = document.createElement('h3');
  menuName.textContent = name;

  const menuDescription = document.createElement('p');
  menuDescription.textContent = description;

  menuItem.appendChild(menuName);
  menuItem.appendChild(menuDescription);

  return menuItem;
}

function createMenu() {
  const menuInfo = document.createElement('div');

  const breakfast = document.createElement('section');

  const twoEggs = createMenuItem("Two Eggs Any Style", "Served with your choice of bacon, sausage, or a side salad. Comes with hash browns and toast.");
  const sandwich = createMenuItem("Famous Breakfast Sandwich", "One egg and hash browns with your choice of meat sandwiched in between two slices of toasty sourdough bread.");
  const pancakes = createMenuItem("Pancakes", "Choice of plain, blueberry, or chocolate chip.");

  breakfast.appendChild(twoEggs);
  breakfast.appendChild(sandwich);
  breakfast.appendChild(pancakes);

  const drinks = document.createElement('section');

  const orangeJuice = createMenuItem("Orange Juice", "");
  const hotChocolate = createMenuItem("Hot Chocolate", "");
  const tea = createMenuItem("Tea", "Choices are Chamomile, Earl Grey, and Matcha");

  drinks.appendChild(orangeJuice);
  drinks.appendChild(hotChocolate);
  drinks.appendChild(tea);

  menuInfo.appendChild(breakfast);
  menuInfo.appendChild(drinks);

  return menuInfo;
}

function loadMenu() {
  const menuTab = document.getElementById('tab-content');
  menuTab.textContent = "";

  menuTab.appendChild(createMenu());

  return menuTab;
}

export default loadMenu;