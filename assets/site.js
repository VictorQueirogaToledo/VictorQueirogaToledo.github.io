/* ano do rodapé e título da janela por página */
(function () {
  "use strict";

  var ano = document.getElementById("ano");
  if (ano) {
    ano.textContent = String(new Date().getFullYear());
  }

  // "victor@infra: ~/pagina — bash — 100x40"
  var titulo = document.querySelector(".term-title");
  var atual = document.querySelector('.tabs a[aria-current="page"]');
  if (titulo && atual) {
    var caminho = atual.textContent.trim().replace(/^~\/(início)?/, "~/").replace(/\/$/, "");
    titulo.textContent = "victor@infra: " + (caminho === "~" ? "~" : caminho) + " — bash — 100×40";
  }
})();
