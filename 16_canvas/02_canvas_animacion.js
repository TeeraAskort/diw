let canvas;
let ctx;
let posX;
let sumar = true;
let width;

function dibujar() {
  if (posX > width - 30) {
    sumar = false;
  } else if (posX < 10) {
    sumar = true;
  }
  if (canvas.getContext) {
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(posX, 10, 20, 90);
    if (sumar) {
      posX += 2;
    } else {
      posX -= 2;
    }
    window.requestAnimationFrame(dibujar);
  }
}

function inicializar() {
  posX = 10;
  canvas = document.querySelector("#canvas");
  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
    width = canvas.width;
    dibujar();
  }
  let boton = document.querySelector("#boton");
  boton.addEventListener("click", dibujar);
}

document.addEventListener("DOMContentLoaded", inicializar);
