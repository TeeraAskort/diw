const root = document.documentElement;

// Con mousemove persigue al ratón

document.addEventListener("click", (evt) => {
  let x = evt.clientX + "px";
  let y = evt.clientY + "px";

  root.style.setProperty("--destinoX", x);
  root.style.setProperty("--destinoY", y);
});
