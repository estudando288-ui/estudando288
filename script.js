(() => {
  "use strict";

  // 1. Animação de entrada escalonada: cada bloco entra 125 ms depois do anterior
  document.querySelectorAll("[data-reveal]").forEach((el, i) => {
    el.style.setProperty("--i", i);
  });

  // 2. Links externos abrem num novo separador, de forma segura
  document.querySelectorAll("a[href^='http']").forEach((a) => {
    if (a.hostname !== location.hostname) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });

  // 3. Se a foto não existir, mostra as iniciais em vez de uma imagem partida
  const avatar = document.querySelector(".avatar");
  const img = avatar && avatar.querySelector("img");

  if (img) {
    const showInitials = () => {
      img.remove();
      avatar.textContent = "E288";
    };
    if (img.complete && img.naturalWidth === 0) showInitials();
    img.addEventListener("error", showInitials, { once: true });
  }
})();
