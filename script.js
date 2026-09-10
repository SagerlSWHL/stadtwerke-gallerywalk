/* =========================
   JAVASCRIPT
   ========================= */


/* Meldung in der Browser-Konsole */

console.log("Stadtwerke Lübeck Gallery Walk gestartet!");



/* =========================
   SANFTES SCROLLEN
   ========================= */


/* Wir suchen den Button */
const startButton = document.querySelector(".start-button");


/* Wir prüfen, ob der Button existiert */
if (startButton) {

    /* Wir warten auf einen Klick */
    startButton.addEventListener("click", function (event) {

        /* Verhindert das sofortige Springen */
        event.preventDefault();


        /* Wir suchen den Bereich mit den Karten */
        const bereiche = document.querySelector("#bereiche");


        /* Scrollt sanft zu diesem Bereich */
        bereiche.scrollIntoView({

            behavior: "smooth"

        });

    });

}



/* =========================
   KARTEN ANIMATION
   ========================= */


/* Wir suchen alle Karten */
const cards = document.querySelectorAll(".card");


/* Jede Karte bekommt eine Verzögerung */
cards.forEach(function (card, index) {

    /* Anfangszustand */
    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";


    /* Nach einer kurzen Zeit erscheint die Karte */
    setTimeout(function () {

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

        card.style.transition = "0.5s";

    }, index * 100);

});