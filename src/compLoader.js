import header from './compHeader';
import main from './compMain';
import footer from './compFooter';
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
  } else {
    childrenOfContent = [
      main,
      footer,
    ];
  }

  childrenOfContent.forEach((child) => {
    content.appendChild(child());
  });
}
