function inicializar() {
  let contenedor = document.querySelector("#contenedor");
  let arrayDivs = contenedor.querySelectorAll(".item");

  let style = window.getComputedStyle(arrayDivs[0]);
  let width = arrayDivs[0].offsetWidth - parseInt(style.paddingRight, 10);

  console.log(style.paddingRight);
  console.log(width);

  let spacing = "";

  let diferencias = [];
  arrayDivs.forEach((div) => {
    let geometria = div.getBoundingClientRect();
    let left = geometria.left;
    let right = geometria.right;
    diferencias.push({ x: Math.round(left), x_w: Math.round(right) });
  });

  console.log(diferencias);

  let result = [];
  let aux = 0;
  diferencias.forEach((dif, index) => {
    if (index == 0) {
      result.push(dif.x);
    } else {
      result.push(dif.x - aux);
    }
    aux = dif.x_w;
  });

  result.push(
    contenedor.getBoundingClientRect().right -
      diferencias[diferencias.length - 1].x_w
  );

  console.log(result);

  let maxDistance = 0;
  let minDistance = result[0];
  let average = 0;
  result.forEach((res) => {
    if (res > maxDistance) maxDistance = res;
    if (res < minDistance) minDistance = res;
    average += res;
  });
  average /= result.length;

  if (result[0] == 0 && maxDistance != 0 && result[result.length - 1] == 0) {
    spacing = "space-between";
  }
  if (
    result[0] == 0 &&
    average < maxDistance &&
    result[result.length - 1] == maxDistance
  ) {
    spacing = "flex-start/left";
  }
  if (
    result[0] == maxDistance &&
    average < maxDistance &&
    result[result.length - 1] == 0
  ) {
    spacing = "flex-end/right";
  }
  if (result[0] == result[result.length - 1] && maxDistance > average) {
    spacing = "space-around";
  }
  if (
    result[0] == maxDistance &&
    average == maxDistance &&
    result[result.length - 1] == maxDistance
  ) {
    spacing = "space-evenly";
  }
  if (
    result[0] == maxDistance &&
    minDistance != maxDistance &&
    result[result.length - 1] == maxDistance
  ) {
    spacing = "center";
  }

  console.log(maxDistance + " " + average);

  let resultado = document.querySelector("#resultado");
  resultado.innerHTML = spacing;
}

document.addEventListener("DOMContentLoaded", inicializar);
