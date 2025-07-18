const images = [
  { src: "imgs/protesto.jpeg", caption: "Protest, downtown" },
  { src: "imgs/carimbo.jpeg", caption: "Carimbo drink, Mercado Central" },
  { src: "imgs/taco.jpeg", caption: "Taco, Mercado Central" },
  { src: "imgs/mural.jpeg", caption: "Mural" },
  { src: "imgs/poster.jpeg", caption: "Postel" },
  { src: "imgs/house.jpeg", caption: "Mira Club, downtown" },
  { src: "imgs/vista.jpeg", caption: "Mira view, downtown" }
];

let currentIndex = 0;

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const imgElement = document.getElementById("carousel-image");
  const captionElement = document.getElementById("carousel-caption");

  imgElement.src = images[currentIndex].src;
  captionElement.textContent = images[currentIndex].caption;
}

// Inicializa o carrossel com a primeira imagem
window.onload = () => {
  const imgElement = document.getElementById("carousel-image");
  const captionElement = document.getElementById("carousel-caption");

  imgElement.src = images[currentIndex].src;
  captionElement.textContent = images[currentIndex].caption;
};
