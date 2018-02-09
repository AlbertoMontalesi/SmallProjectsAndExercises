document.addEventListener("DOMContentLoaded", () => {

  const navButton = document.querySelector('button[aria-expanded]');

  // target is the element that was clicked, the button
  function toggleNav( {target }) {
    const expanded = target.getAttribute('aria-expanded') === 'true' || false;
    // set the aria expanded value to the opposite of what it was when it was clicked, from false to true
    navButton.setAttribute('aria-expanded', !expanded)
  }

  navButton.addEventListener('click', toggleNav);



});