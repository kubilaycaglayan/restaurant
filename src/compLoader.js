import header from './compHeader';
import main from './compMain';
import footer from './compFooter';
import './style.sass';

export default function load() {
  const content = document.getElementById('content');
  const childrenOfContent = [
    header,
    main,
    footer,
  ];

  childrenOfContent.forEach((child) => {
    content.appendChild(child());
  });
}
