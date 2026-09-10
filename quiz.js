/* =========================
   FRAGEN
   ========================= */

const questions = [

    {
        question: "Wie viele Menschen versorgen die Stadtwerke Lübeck ungefähr?",
        answers: [
            "37.000",
            "370.000",
            "3,7 Millionen",
            "7.000"
        ],
        correct: 1
    },


    {
        question: "Wie viele Gemeinden umfasst das Versorgungsgebiet ungefähr?",
        answers: [
            "11",
            "50",
            "110",
            "500"
        ],
        correct: 2
    },


    {
        question: "Wie lang ist das Netz der Stadtwerke Lübeck ungefähr?",
        answers: [
            "676 km",
            "6.761 km",
            "67.610 km",
            "761 km"
        ],
        correct: 1
    },


    {
        question: "Welches Unternehmen steht unter anderem für Glasfaser, Smart City und Digitale Schule?",
        answers: [
            "SWL Mobil GmbH",
            "SWL Digital GmbH",
            "TraveNetz GmbH",
            "SWL Energie GmbH"
        ],
        correct: 1
    },


    {
        question: "Wie viele Schüler:innen werden durch die Digitale Schule ungefähr erreicht?",
        answers: [
            "3.000",
            "10.000",
            "30.000",
            "100.000"
        ],
        correct: 2
    },


    {
        question: "Welche Ausbildung gehört zum Bereich Anwendungsentwicklung?",
        answers: [
            "Fachinformatiker:in für Anwendungsentwicklung",
            "Kfz-Mechatroniker:in",
            "Fachkraft im Fahrbetrieb",
            "Umwelttechnolog:in für Wasserversorgung"
        ],
        correct: 0
    },


    {
        question: "Welchen Anteil der Busse sollen die Stadtwerke bis 2030 elektrisch betreiben?",
        answers: [
            "25 %",
            "50 %",
            "70 %",
            "100 %"
        ],
        correct: 2
    },


    {
        question: "Welches Thema gehört zur zukünftigen Wärmeversorgung Lübecks?",
        answers: [
            "Kommunale Wärmeplanung",
            "Ausbau von Kohlekraftwerken",
            "Abschaffung von Wärmenetzen",
            "Verzicht auf erneuerbare Energien"
        ],
        correct: 0
    },


    {
        question: "Welcher Bereich gehört zur SWL Digital GmbH?",
        answers: [
            "Glasfaser",
            "Trinkwasseraufbereitung",
            "Busreparatur",
            "Fahrkartenkontrolle"
        ],
        correct: 0
    },


    {
        question: "Wofür wird AI-PowerMatch eingesetzt?",
        answers: [
            "Für eine bessere Abstimmung von Energieverbrauch und erneuerbarer Energie",
            "Für die Fahrkartenkontrolle in Bussen",
            "Für die Reparatur von Glasfaserkabeln",
            "Für die Verwaltung von Parkplätzen"
        ],
        correct: 0
    }

];


/* =========================
   VARIABLEN
   ========================= */

let currentQuestion = 0;

let score = 0;


/* =========================
   HTML-ELEMENTE
   ========================= */

const questionElement =
    document.querySelector("#question");


const questionNumberElement =
    document.querySelector("#question-number");


const questionTotalElement =
    document.querySelector("#question-total");


const answerButtons =
    document.querySelectorAll(".answer-button");


const resultElement =
    document.querySelector("#quiz-result");


const nextButton =
    document.querySelector("#next-button");


const restartButton =
    document.querySelector("#restart-button");


/* Gesamtzahl der Fragen anzeigen */

questionTotalElement.textContent =
    questions.length;


/* =========================
   FRAGE ANZEIGEN
   ========================= */

function showQuestion() {

    const question =
        questions[currentQuestion];


    /* Frage anzeigen */

    questionElement.textContent =
        question.question;


    /* Fragennummer anzeigen */

    questionNumberElement.textContent =
        currentQuestion + 1;


    /* Ergebnis zurücksetzen */

    resultElement.textContent =
        "";


    /* Antwortbuttons vorbereiten */

    answerButtons.forEach(function(button, index) {

        button.textContent =
            question.answers[index];

        button.disabled =
            false;

        button.style.display =
            "block";

        button.classList.remove("correct");

        button.classList.remove("wrong");

    });


    /* Nächste Frage verstecken */

    nextButton.style.display =
        "none";

}


/* =========================
   ANTWORT PRÜFEN
   ========================= */

answerButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        const question =
            questions[currentQuestion];


        /* Alle Antworten deaktivieren */

        answerButtons.forEach(function(button) {

            button.disabled =
                true;

        });


        /* Prüfen, ob die Antwort richtig ist */

        if (index === question.correct) {

            button.classList.add("correct");

            resultElement.textContent =
                "✅ Richtig!";

            score++;

        }

        else {

            button.classList.add("wrong");

            resultElement.textContent =
                "❌ Leider falsch.";

            /* Richtige Antwort markieren */

            answerButtons[
                question.correct
            ].classList.add("correct");

        }


        /* Nächste Frage anzeigen */

        nextButton.style.display =
            "inline-block";

    });

});


/* =========================
   NÄCHSTE FRAGE
   ========================= */

nextButton.addEventListener("click", function() {

    currentQuestion++;


    /* Gibt es noch Fragen? */

    if (currentQuestion < questions.length) {

        showQuestion();

    }

    else {

        showResult();

    }

});


/* =========================
   ENDERGEBNIS
   ========================= */

function showResult() {

    questionElement.textContent =
        "Quiz beendet! 🎉";


    questionNumberElement.textContent =
        questions.length;


    resultElement.textContent =
        "Du hast " +
        score +
        " von " +
        questions.length +
        " Fragen richtig beantwortet.";


    /* Antwortbuttons ausblenden */

    answerButtons.forEach(function(button) {

        button.style.display =
            "none";

    });


    /* Nächste Frage ausblenden */

    nextButton.style.display =
        "none";


    /* Neustart anzeigen */

    restartButton.style.display =
        "inline-block";

}


/* =========================
   QUIZ NEUSTARTEN
   ========================= */

restartButton.addEventListener("click", function() {


    /* Werte zurücksetzen */

    currentQuestion =
        0;

    score =
        0;


    /* Neustart-Button verstecken */

    restartButton.style.display =
        "none";


    /* Quiz wieder anzeigen */

    showQuestion();

});


/* =========================
   QUIZ STARTEN
   ========================= */

showQuestion();