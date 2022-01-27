// let expansion = [{}, {}, {}];
let expansion = [
  {
    width: "20em",
  },
  {
    width: "30em",
    offset: 0.25,
  },
  {
    width: "60em",
  },
];

let duracion = {
  duration: 5000,
  iterations: Infinity,
};

let animacion;

function accFre(event) {
  let speed = 1.3;
  if (event.target.id === "acelerar") {
    animacion.playbackRate *= speed;
  } else {
    animacion.playbackRate /= speed;
  }
}

function inicializa() {
  let principal = document.querySelector("#principal");
  animacion = principal.animate(expansion, duracion);
  document.querySelector("#acelerar").addEventListener("click", accFre);
  document.querySelector("#frenar").addEventListener("click", accFre);
  document.querySelector("#pausar").addEventListener("click", () => {
    animacion.pause();
  });
  document.querySelector("#avanzar").addEventListener("click", () => {
    animacion.play();
  });
  document.querySelector("#reverse").addEventListener("click", () => {
    animacion.reverse();
  });
  document.querySelector("#cancelar").addEventListener("click", () => {
    animacion.cancel();
  });
  document.querySelector("#finalizar").addEventListener("click", () => {
    animacion.finish();
  });
}

document.addEventListener("DOMContentLoaded", inicializa);
