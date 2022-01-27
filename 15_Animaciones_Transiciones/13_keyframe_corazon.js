var root;

function inicializar() {
  let corazon = document.getElementById("corazon");

  let iteracion = 0;

  corazon.addEventListener("animationstart", () => {
    console.log("comenzar");
  });

  corazon.addEventListener("animationiteration", (event) => {
    let animationName = getComputedStyle(event.target).animationName;
    let dados = Math.random() * 100;
    if (iteracion == 1) {
      if (dados < 30) {
        corazon.style.animationName = "skipbeat";
        corazon.style.animationDuration = "2s";
      } else {
        if (animationName === "palpitar") {
          corazon.style.animationName = "rotar";
          corazon.style.animationDuration = "7s";
        } else {
          corazon.style.animationName = "palpitar";
          corazon.style.animationDuration = "7s";
        }
      }
      iteracion = 0;
    } else {
      iteracion++;
    }
  });

  corazon.addEventListener("animationend", () => {
    console.log("finalizar");
  });
}

document.addEventListener("DOMContentLoaded", inicializar);
