const footer = () => {
  const footer = document.createElement('div');
  const par = document.createElement('p');
  par.innerHTML = 'fusion-cuisine@eathere.com';
  footer.appendChild(par);
  footer.className = 'p-2 pt-3 text-center text-white m-0';
  return footer;
};

export { footer as default };
