import { createElement, createElementWithText } from './functions';

export default function navbar() {
  const navbar = createElement('navbar', 'try d-flex justify-content-center');
  const button1 = createElementWithText('div', 'button px-2', 'Main');
  const button2 = createElementWithText('div', 'button px-2', 'Contact');
  const button3 = createElementWithText('div', 'button px-2', 'Menu');
  [button1, button2, button3].forEach((button) => {
    navbar.appendChild(button);
  });
  return navbar;
}
