const message =
  "Merci d'avoir contacté le Royaume, les petites mains de Colchis vous répondront très prochainement!.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
