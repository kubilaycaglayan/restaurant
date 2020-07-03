import { createElementWithText, createElement } from './myLib';

const contactInformation = {
  'Manager:': 'Degustator Definitive',
  'E-mail:': 'fusion-cuisine@eathere.com',
  'Address:': 'Neighborhood',
  'Telephone:': '0-555-666-26-32',
};

const contact = () => {
  const wrapper = createElement('div', 'table-wrapper w-50 mx-auto my-5');
  const contact = createElement('table', 'table text-white');
  const tbody = createElement('tbody', '');
  Object.keys(contactInformation).forEach((key) => {
    const tr = createElement('tr', '');
    const th = createElementWithText('th', '', key);
    th.scope = 'row';
    const td = createElementWithText('td', '', contactInformation[key]);
    tr.appendChild(th);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  contact.appendChild(tbody);
  wrapper.appendChild(contact);
  return wrapper;
};

export { contact as default };
