function capitalizeFirstLetter(el) {
  const text = el.innerText;
  el.innerText = text.charAt(0).toUpperCase() + text.slice(1);
}

export default {
  mounted(el) {
    capitalizeFirstLetter(el);
  },
  updated(el) {
    capitalizeFirstLetter(el);
  },
}