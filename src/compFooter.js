export default function footer() {
  const footer = document.createElement('footer');
  const par = document.createElement('p');
  par.innerHTML = 'fusion-cuisine@eathere.com';
  footer.appendChild(par);
  footer.className = 'bg-danger p-2 pt-3 text-center text-white m-0';
  return footer;
}
