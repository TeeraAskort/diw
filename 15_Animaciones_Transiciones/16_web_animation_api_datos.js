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

let tiempo = 5000;

let duracion = {
  duration: tiempo,
  iterations: Infinity,
};

let animacion;

function inicializa() {
  let principal = document.querySelector("#principal");
  animacion = principal.animate(expansion, duracion);
  let slider = document.querySelector("#slider");
  slider.addEventListener("change", () => {
    animacion.currentTime = (tiempo / 100) * slider.value;
  });
}

document.addEventListener("DOMContentLoaded", inicializa);
