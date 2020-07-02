import { createElement, createElementWithText } from './functions';

const navbar = function navbar() {
  const navbar = createElement('navbar', 'try d-flex justify-content-center');
  const button1 = createElementWithText('div', 'button px-2', 'Main');
  const button2 = createElementWithText('div', 'button px-2', 'Menu');
  const button3 = createElementWithText('div', 'button px-2', 'Contact');
  [button1, button2, button3].forEach((button) => {
    navbar.appendChild(button);
  });
  return navbar;
}

const activateButton = function activateButton(index) {
  [0,1,2].forEach((buttonNumber) => {
    let button;
    if (buttonNumber === index) {
      button = document.getElementsByClassName('button')[buttonNumber];
      button.className = 'button px-2 text-white'
    } else {
      button = document.getElementsByClassName('button')[buttonNumber];
      button.className = 'button px-2'
    }
  })
}

export {
  navbar as navbar,
  activateButton as activateButton,
}