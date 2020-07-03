import { createElement, createElementWithText } from './myLib';

const navbar = () => {
  const navbar = createElement('div', 'try d-flex justify-content-center');
  const button1 = createElementWithText('div', 'button', 'Main');
  const button2 = createElementWithText('div', 'button', 'Menu');
  const button3 = createElementWithText('div', 'button', 'Contact');
  [button1, button2, button3].forEach((button) => {
    navbar.appendChild(button);
  });
  return navbar;
};

const activateButton = (index) => {
  [0, 1, 2].forEach((buttonNumber) => {
    let button;
    if (buttonNumber === index) {
      button = document.getElementsByClassName('button')[buttonNumber];
      button.className = 'button px-4 pt-2 text-danger bg-light lead';
    } else {
      button = document.getElementsByClassName('button')[buttonNumber];
      button.className = 'button px-4 pt-2 lead';
    }
  });
};

export {
  navbar,
  activateButton,
};
