export default function header() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Welcome To The Michelin\'s Place';
  h1.className = 'display-4';
  header.appendChild(h1);
  header.className = 'bg-danger py-5 text-center text-white';
  return header;
}
