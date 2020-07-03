import { createElementWithText, createElement, createImage } from './functions';
import Dish2 from './dish4.png';
import Dish3 from './dish5.png';
import Dish4 from './dish2.png';
import Dish5 from './dish3.png';

const menu = () => {
  const menu = createElement('div', 'container-fluid menu');
  let row;
  [Dish2, Dish3, Dish4, Dish5].forEach((Dish, index) => {
    if (index % 2 === 0) {
      row = createElement('div', 'row mb-4 px-5 mx-3');
    }
    const col = createElement('div', 'col-md-6 text-center');
    const dishImage = createImage(Dish, `dish ${index}`, '');
    const title = createElementWithText('div', 'text-white lead pb-3', `Option ${index + 1}: Marinated with sauce.`);
    col.appendChild(title);
    col.appendChild(dishImage);
    row.appendChild(col);

    if (index % 2 === 1) {
      menu.appendChild(row);
    }
  });
  return menu;
};

export { menu as default };
