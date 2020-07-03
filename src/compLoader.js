import header from './compHeader';
import main from './compMain';
import footer from './compFooter';
import { activateButton } from './compNav';
import menu from './compMenu';
import contact from './compContact';
import './style.sass';

const flush = function flush(element) {
  const children = element.childNodes;
  if (children) {
    [...children].forEach((child, index) => {
      if (index !== 0) {
        child.remove();
      }
    });
  }
};

const loadMenu = function loadMenu() {
  const childrenOfContent = [
    menu,
  ];
  return childrenOfContent;
};

const loadMain = function loadMain() {
  const childrenOfContent = [
    main,
    footer,
  ];
  return childrenOfContent;
};

const loadContact = function loadContact() {
  const childrenOfContent = [
    contact,
  ];
  return childrenOfContent;
};


// eslint-disable-next-line no-unused-vars
export default function load(index = 0, initial = true) {
  const content = document.getElementById('content');
  flush(content);
  let childrenOfContent;
  if (initial === true) {
    childrenOfContent = [
      header,
      main,
      footer,
    ];
  } else if (index === 0) {
    childrenOfContent = loadMain();
  } else if (index === 1) {
    childrenOfContent = loadMenu();
  } else if (index === 2) {
    childrenOfContent = loadContact();
  }

  childrenOfContent.forEach((child) => {
    content.appendChild(child());
  });

  activateButton(index);
}
