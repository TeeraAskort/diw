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

function inicializa() {
  let principal = document.querySelector("#principal");
  principal.animate(expansion, duracion);
}

document.addEventListener("DOMContentLoaded", inicializa);
