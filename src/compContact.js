import { createElementWithText } from './functions';

export default function contact() {
  const myContact = createElementWithText('p', 'bg-danger text-white', 'Amazing! Isn\'t it? This is your contact.');

  return myContact;
}
