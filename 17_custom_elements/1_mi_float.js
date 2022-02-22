class MiFloat extends HTMLElement {
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

    const texto = wrapper.appendChild(document.createElement("span"));
    texto.setAttribute("class", "texto");
    texto.innerHTML = this.innerHTML;

    const style = document.createElement("style");
    style.textContent = `
      .wrapper {
        position: relative;
      }

      .texto {
          width: fit-content;
          color: black;
          border: 1px solid blue;
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
      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    this.shadowRoot.append(style, wrapper);
  }
}

function inicializar() {
  customElements.define("mi-float", MiFloat);
}

document.addEventListener("DOMContentLoaded", inicializar);
