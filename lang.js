// Taalkeuze voor de site: standaard Engels, Nederlands voor Nederlandstalige
// browsers. Een eigen keuze (klik op de toggle) blijft bewaard en heeft voorrang.
// Toont/verbergt elementen op basis van hun lang-attribuut (zie styles.css).
(function () {
  var KEY = "pp-lang";
  function detect() {
    // Geen opgeslagen keuze: kijk naar de browsertalen. Nederlands → nl,
    // al het overige → en (standaard Engels).
    var langs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < langs.length; i++) {
      if (/^nl/i.test(langs[i] || "")) return "nl";
    }
    return "en";
  }
  function current() {
    var l = localStorage.getItem(KEY);
    if (l === "en" || l === "nl") return l;
    return detect();
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
