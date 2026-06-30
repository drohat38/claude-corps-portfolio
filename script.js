// Minimal progressive enhancement: keep the footer year current.
// No framework, no tracking, no external requests.
(function () {
  var el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
})();
