let marcaDOM = null;
let modeloDOM = null;
let imagenDOM = null;
let imgMostrar = null;

function changePlaceholder() {
  let value = modeloDOM.value;
  if (value === "citroen") {
    modeloDOM.placeholder = "C3";
  } else if (value === "peugeot") {
    modeloDOM.placeholder = "308";
  } else if (value === "ford") {
    modeloDOM.placeholder = "Focus";
  } else if (value === "seat") {
    modeloDOM.placeholder = "ibiza";
  }
}

function muestraImagen() {
  imgMostrar = document.createElement("img");
  imgMostrar.src = imagenDOM.files[0].mozFullPath;
  imgMostrar.width = "200px";
  imgMostrar.height = "200px";
  document.body.appendChild(imgMostrar);
}

modeloDOM = document.querySelector("#modelo");
marcaDOM = document.querySelector("#marca");
marcaDOM.addEventListener("change", changePlaceholder);
imagenDOM = document.querySelector("#imagen");
imagenDOM.addEventListener("change", muestraImagen);
