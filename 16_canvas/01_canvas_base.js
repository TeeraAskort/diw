let canvas;
let ctx;

function dibujar() {
  if (canvas.getContext) {
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 30, 30);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
  }
}

function dibujarOso() {
  let cvOso = document.querySelector("#oso");
  if (cvOso.getContext) {
    let ct = cvOso.getContext("2d");
    ct.fillStyle = "rgb(200, 100, 80)";
    ct.arc(70, 40, 25, 0, 2 * Math.PI);
    ct.fill();
    ct.beginPath();
    ct.moveTo(70, 90);
    ct.arc(70, 90, 40, 0, 2 * Math.PI);
    ct.fill();
    ct.beginPath();
    ct.moveTo(25, 70);
    ct.ellipse(25, 70, 20, 10, 45, 0, 2 * Math.PI);
    ct.fill();
    ct.beginPath();
    ct.moveTo(115, 70);
    ct.ellipse(115, 70, 20, 10, -45, 0, 2 * Math.PI);
    ct.fill();
  }
}

function inicializar() {
  canvas = document.querySelector("#tutorial");
  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
  }
  let boton = document.querySelector("#boton");
  boton.addEventListener("click", dibujar);

  let btnOso = document.querySelector("#btn-oso");
  btnOso.addEventListener("click", dibujarOso);
}

document.addEventListener("DOMContentLoaded", inicializar);
