// includes contact info. Phone, address, hours
function createContact() {
  const contactInfo = document.createElement('div');

  const address = document.createElement('p');
  address.textContent = "861 Canal Dr, Fairport, NY";

  const phone = document.createElement('p');
  phone.textContent = "(616) 896-1512";

  const hours = document.createElement('p');
  hours.textContent = "Tuesday-Sunday: 7 am - 2 pm";

  contactInfo.appendChild(address);
  contactInfo.appendChild(phone);
  contactInfo.appendChild(hours);

  return contactInfo;
}

function loadContact() {
  const contactTab = document.getElementById('tab-content');
  contactTab.textContent = "";

  contactTab.appendChild(createContact());

  return contactTab;
}

export default loadContact;