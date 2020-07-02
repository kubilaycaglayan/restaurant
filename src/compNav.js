import { createElement, createElementWithText, createImage } from './functions';

export default function navbar() {
  const navbar = createElement('navbar', 'try');
  navbar.innerHTML = 'Merhaba';
  return navbar;
}
