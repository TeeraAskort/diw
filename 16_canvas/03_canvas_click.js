let canvas;
let ctx;
let rectangulo;
let posX;
let posY;

let cuadrados = [
  {
    color: "rgb(0, 150, 100)",
    posX: 20,
    posY: 20,
    width: 50,
    height: 70,
  },
  {
    color: "rgb(200, 150, 100)",
    posX: 200,
    posY: 200,
    width: 50,
    height: 70,
  },
  {
    color: "rgb(200, 200, 100)",
    posX: 100,
    posY: 100,
    width: 50,
    height: 70,
  },
  {
    color: "rgb(250, 100, 100)",
    posX: 20,
    posY: 150,
    width: 50,
    height: 70,
  },
];

function dibujar() {
  if (canvas.getContext) {
    ctx.clearRect(0, 0, 500, 500);
    cuadrados.forEach((cuadrado) => {
      ctx.fillStyle = cuadrado.color;
      ctx.beginPath();
      ctx.moveTo(cuadrado.posX, cuadrado.posY);
      ctx.fillRect(
        cuadrado.posX,
        cuadrado.posY,
        cuadrado.width,
        cuadrado.height
      );
    });
  }
}

function mousemove(event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (rectangulo) {
    rectangulo.posX = x + posX;
    rectangulo.posY = y + posY;
  }

  dibujar();
}

function mousedown(event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  cuadrados.forEach((cuadrado) => {
    if (
      x >= cuadrado.posX &&
      x <= cuadrado.posX + cuadrado.width &&
      y >= cuadrado.posY &&
      y <= cuadrado.posY + cuadrado.height
    ) {
      rectangulo = cuadrado;
      posX = rectangulo.posX - x;
      posY = rectangulo.posY - y;
    }
  });
}

function mouseup(event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (rectangulo) {
    rectangulo.posX = x + posX;
    rectangulo.posY = y + posY;
  }

  dibujar();
  rectangulo = undefined;
}

function inicializar() {
  canvas = document.querySelector("#canvas");
  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
    dibujar();
    canvas.addEventListener("mousedown", mousedown);
    canvas.addEventListener("mousemove", mousemove);
    canvas.addEventListener("mouseup", mouseup);
  }
}

document.addEventListener("DOMContentLoaded", inicializar);
