class MiFloat extends HTMLElement {
  posX = 0;
  avant = true;

  texto = "";
  estilo = "";

  moverImagen() {
    const rect = this.texto.getBoundingClientRect();
    const width = rect.width;
    if (this.avant) {
      this.posX += 10;
    } else {
      this.posX -= 10;
    }

    if (this.posX > width || this.posX < 0) {
      this.avant = !this.avant;
    }

    this.setStyle(rect);
  }

  setStyle() {
    this.estilo.textContent = `
      .wrapper {
        position: relative;
      }

      .texto {
          width: fit-content;
          color: black;
          border: 1px solid blue;
          position:relative;
      }

     .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon {
        width: 1.2rem;
        left: ${this.posX}px;
        position: absolute;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;
  }

  constructor() {
    super();

    console.log("Hola");

    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const icon = wrapper.appendChild(document.createElement("span"));
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    const img = icon.appendChild(document.createElement("img"));
    img.src = this.getAttribute("img");

    const info = wrapper.appendChild(document.createElement("span"));
    info.setAttribute("class", "info");
    info.textContent = this.getAttribute("data-text");

    this.texto = wrapper.appendChild(document.createElement("span"));
    this.texto.setAttribute("class", "texto");
    this.texto.innerHTML = this.innerHTML;

    const rect = this.texto.getBoundingClientRect();

    this.estilo = document.createElement("style");
    this.setStyle();

    this.shadowRoot.append(this.estilo, wrapper, icon);

    setInterval(
      (function (elemento) {
        return () => {
          elemento.moverImagen();
        };
      })(this),
      100
    );
  }
}

function inicializar() {
  customElements.define("mi-float", MiFloat);
}

document.addEventListener("DOMContentLoaded", inicializar);
