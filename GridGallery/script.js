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








});