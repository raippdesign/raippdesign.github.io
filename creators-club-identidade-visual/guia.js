const status = document.querySelector(".toast");
let dismissTimer;

for (const button of document.querySelectorAll("[data-color]")) {
  button.addEventListener("click", async () => {
    const color = button.dataset.color;
    try {
      await navigator.clipboard.writeText(color);
      status.textContent = color + " copiado";
    } catch {
      status.textContent = "Código da cor " + color;
    }
    clearTimeout(dismissTimer);
    dismissTimer = setTimeout(() => {
      status.textContent = "";
    }, 2500);
  });
}
