import welcome from './compHeader';
import main from './compMain';
import footer from './compFooter';

const content = document.getElementById('content');
const childrenOfContent = [
  welcome,
  main,
  footer,
];

childrenOfContent.forEach((child) => {
  content.appendChild(child());
});
