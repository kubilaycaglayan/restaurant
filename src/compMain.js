import MichelinStar from './michelin.png';
import Dish from './dish1.png';

function createElement(element, className) {
  const elm = document.createElement(element);
  elm.className = className;
  return elm;
}

function createElementWithText(element, className, text) {
  const elm = document.createElement(element);
  elm.className = className;
  elm.innerHTML = text;
  return elm;
}

function createImage(src, alt, className) {
  const myImage = new Image();
  myImage.src = src;
  myImage.alt = alt;
  myImage.className = className;
  return myImage;
}

export default function main() {
  const childrenOfMain = [];

  const main = createElement('main', 'bg-danger text-center');

  const michelinStar = createImage(MichelinStar, 'single michelin star', 'w-25 rounded');
  childrenOfMain.push(michelinStar);

  const section = createElement('section', 'text-white lead');
  childrenOfMain.push(section);

  const par1 = createElementWithText('p', '', 'In our wonderful restaurant, you will find unique fusion tastes from different cultures.');

  const par2 = createElementWithText('p', '', ' Once you eat here, you will never forget this experience.');

  const par3 = createElementWithText('p', '', ' To order your meal, you can scan the qr code in your table, and follow the instructions.');

  [par1, par2, par3].forEach((par) => {
    section.appendChild(par);
  });

  const dish = createImage(Dish, 'fusion dish', 'w-50');
  childrenOfMain.push(dish);

  childrenOfMain.forEach((child) => {
    main.appendChild(child);
  });

  return main;
}
