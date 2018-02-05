document.addEventListener("DOMContentLoaded", () => {

  const gallery = document.querySelector(".gallery");
  const overlay = document.querySelector(".overlay");
  const overlayImage = overlay.querySelector("img");
  const overlayClose = overlay.querySelector(".close");


  function generateHTML([h, v]) {
    return `
      <div class="item h${h} v${v}">
        <img src="images/${randomNumber(10)}.jpg">
        <div class="item__overlay">
          <button> View -> </button>
        </div>
      </div>
    `;
  }

  function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
  }


  function handleClick(e) {
    // grab the src of the img
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    // open the overlay img
    overlay.classList.add('open');
  }

  // close the overlay
  function close() {
    overlay.classList.remove('open');
  }
  
  // generate arrays of random digits to use as the size of the pictures of the gallery
  const digits = Array.from({
    length: 50
  }, () => [randomNumber(4), randomNumber(4)]).
  concat([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
  ]);


  // take each of the arrays and destructure it into the h and v values of generateHTML
  const html = digits.map(generateHTML).join("");

  gallery.innerHTML = html;

  const items = document.querySelectorAll(".item");

  items.forEach(item => item.addEventListener('click', handleClick));

  // run the close function when people click the x button to close the overlay
  overlayClose.addEventListener('click', close);








});