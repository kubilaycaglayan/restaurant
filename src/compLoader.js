import header from './compHeader';
import main from './compMain';
import footer from './compFooter';
import { activateButton } from './compNav';
import menu from './compMenu';
import contact from './compContact';
import './style.sass';

const flush = function flush() {
  const children = document.getElementById('content').childNodes;
  if (children) {
    [...children].forEach((child, index) => {
      if (index !== 0) {
        child.remove();
      }
    });
  }
};

// eslint-disable-next-line no-unused-vars
const initializeHeader = (function initializeHeader() {
  const content = document.getElementById('content');
  content.appendChild(header());
}());

const pickTab = function pickTab(index) {
  let childrenOfContent;
  switch (index) {
    case 1:
      childrenOfContent = [menu];
      break;
    case 2:
      childrenOfContent = [contact];
      break;
    default:
      childrenOfContent = [main];
  }
  childrenOfContent.push(footer);
  return childrenOfContent;
};

const load = (index = 0) => {
  flush();
  const childrenOfContent = pickTab(index);

  const content = document.getElementById('content');
  childrenOfContent.forEach((child) => {
    content.appendChild(child());
  });

  activateButton(index);
};

export { load as default };
