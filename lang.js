// Taalkeuze voor de site: standaard Nederlands, Engels als optie.
// Toont/verbergt elementen op basis van hun lang-attribuut (zie styles.css).
(function () {
  var KEY = "pp-lang";
  function current() {
    var l = localStorage.getItem(KEY);
    return l === "en" ? "en" : "nl";
  }
  function apply(l) {
    var html = document.documentElement;
    html.setAttribute("data-lang", l);
    html.lang = l;
    var btns = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", String(btns[i].dataset.lang === l));
    }
  }
  // Direct toepassen (script staat in <head>) om een taal-flits te voorkomen.
  apply(current());
  document.addEventListener("DOMContentLoaded", function () {
    apply(current());
    var btns = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        localStorage.setItem(KEY, this.dataset.lang);
        apply(this.dataset.lang);
      });
    }
  });
})();
