const images = [
  { src: "imgs/artes.jpeg", caption: "Art, Feira Hippie" },
  { src: "imgs/parque.jpeg", caption: "Américo Renné Giannetti Park" },
  { src: "imgs/chris.jpeg", caption: "Chris MC" },
  { src: "imgs/nacional.jpeg", caption: "Stage" },
  { src: "imgs/viaduto.jpeg", caption: "Viaduct" },
  { src: "imgs/tag.jpeg", caption: "Tag" }
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
