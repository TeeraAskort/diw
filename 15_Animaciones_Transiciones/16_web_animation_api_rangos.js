let expansion = [
  {
    width: "20em",
  },
  {
    width: "30em",
    offset: 0.2,
  },
  {
    width: "70em",
  },
];

let duracion = {
  duration: 10000,
  iterations: Infinity,
};

let animacion;

function inicializa() {
  let principal = document.querySelector("#principal");
  animacion = principal.animate(expansion, duracion);
  let slider = document.querySelector("#slider");
  slider.addEventListener("change", () => {
    let tiempo = animacion.effect.getComputedTiming().duration;
    animacion.currentTime = (tiempo / 100) * slider.value;
  });
}

document.addEventListener("DOMContentLoaded", inicializa);
