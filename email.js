// Bouwt het contact-e-mailadres pas in de browser op. Het staat hier
// base64-gecodeerd, dus niet als platte tekst of in een data-attribuut in de
// HTML. Spam-bots die geen JavaScript draaien (de overgrote meerderheid) vinden
// zo geen adres meer. Geen waterdichte bescherming, wel effectief tegen bulk-scraping.
(function () {
  var encoded = "aW5mb0Bwb2xkZXJwaWpwbGlqbi5ubA==";

  function build() {
    var addr = atob(encoded);
    var spans = document.querySelectorAll(".pp-email");
    for (var i = 0; i < spans.length; i++) {
      var a = document.createElement("a");
      a.href = "mailto:" + addr;
      a.textContent = addr;
      spans[i].innerHTML = "";
      spans[i].appendChild(a);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
