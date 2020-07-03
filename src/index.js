import load from './compLoader';

load();

const buttons = document.getElementsByClassName('button');

[...buttons].forEach((button, index) => {
  button.addEventListener('click', load.bind(this, index));
});
