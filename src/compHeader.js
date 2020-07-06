import { createElement, createElementWithText } from './myLib';
import { navbar } from './compNav';

const header = () => {
  const header = createElement('div', 'header pt-3 text-center text-white fixed-top');
  const h1 = createElementWithText('h1', '', 'Welcome To The Michelin\'s Place');
  header.appendChild(h1);
  header.appendChild(navbar());
  return header;
};

export { header as default };
