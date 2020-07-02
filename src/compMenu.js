import { createElement, createElementWithText } from './functions';

export default function menu() {
  const myText = createElementWithText('p', 'bg-danger text-white', 'Amazing! Isn\'t it? This is your menu.');

  return myText;
}
