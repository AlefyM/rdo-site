document.getElementById("rdoForm").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("previewSection").style.display = "block";
  document.getElementById("previewContent").innerHTML = "<p>Pré-visualização gerada com sucesso.</p>";
});
