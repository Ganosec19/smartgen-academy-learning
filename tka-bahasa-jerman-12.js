window.soalData = window.soalData || {};

window.soalData["TKA SMA Kelas 12"] = window.soalData["TKA SMA Kelas 12"] || {};

window.soalData["TKA SMA Kelas 12"]["Bahasa Jerman"] = {
    pilihanGanda: [
        {
            tipe: "soal-tunggal",
            q: "Ergänzen Sie das richtige Verb im Präsens:\n'Ich ... jeden Tag Deutsch.'",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "lernen"
        },
        {
            tipe: "soal-tunggal",
            q: "Ordnen Sie die Personalpronomen den entsprechenden Verbendungen im Präsens zu!",
            jenisSoal: "penjodohan",
            options: ["ich", "du", "er / sie / es"],
            pairs: [
                { question: "Endet in der Regel auf '-e' (Beispiel: ich lerne).", correctMatch: "ich" },
                { question: "Endet in der Regel auf '-st' (Beispiel: du lernst).", correctMatch: "du" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Bestimmen Sie, ob die folgenden Aussagen über deutsche Verben Richtig (Richtig) oder Falsch (Falsch) sind!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Das Modalverb 'möchten' drückt einen Wunsch oder Höflichkeit aus." },
                { text: "Im deutschen Aussagesatz steht das konjugierte Verb immer an letzter Stelle." }
            ],
            correct: ["richtig", "falsch"] // konjugiertes Verb steht an Position 2 im Hauptsatz
        },
        {
            tipe: "soal-tunggal",
            q: "Wählen Sie zwei trennbare Verben (trennbare Verben) im Deutschen!",
            jenisSoal: "pg-kompleks",
            options: [
                "aufstehen",
                "einkaufen",
                "besuchen",
                "verstehen"
            ],
            correct: [0, 1]
        },
        {
            tipe: "grup-stimulus",
            stimulus: "Lesen Sie den kurzen Text:\n'Mein Name ist Anna. Ich komme aus Deutschland und wohne in München. Ich spiele gern Klavier und in meiner Freizeit lese ich viele Bücher.'",
            gambar: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&auto=format&fit=crop&q=80",
            soalList: [
                {
                    q: "Wo wohnt Anna?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "In München",
                        "In Berlin",
                        "In Wien",
                        "In Zürich"
                    ],
                    correct: 0
                },
                {
                    q: "Wahr oder Falsch: Anna spielt gern Klavier.",
                    jenisSoal: "tabel-matriks",
                    rows: [
                        { text: "Anna spielt gern Klavier laut dem Text." },
                        { text: "Anna kommt aus Frankreich." }
                    ],
                    correct: ["richtig", "falsch"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Was bedeutet das deutsche Wort 'die Schule' auf Indonesisch?",
            jenisSoal: "pg-biasa",
            options: ["Sekolah", "Rumah", "Rumah sakit", "Perpustakaan"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Ordnen Sie die unbestimmten Artikel im Nominativ dem jeweiligen grammatischen Geschlecht zu!",
            jenisSoal: "penjodohan",
            options: ["ein (Maskulinum / Neutrum)", "eine (Femininum)"],
            pairs: [
                { question: "Artikel für feminine Nomen (Beispiel: ... Tasche).", correctMatch: "eine (Femininum)" },
                { question: "Artikel für maskuline oder neutrische Nomen (Beispiel: ... Tisch / ... Buch).", correctMatch: "ein (Maskulinum / Neutrum)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Ergänzen Sie das Präteritum des Verbs 'sein' für die 1. Person Singular (ich): 'Gestern ... ich zu Hause.'",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "war"
        },
        {
            tipe: "soal-tunggal",
            q: "Wählen Sie zwei unregelmäßige Verben (unregelmäßige Verben) im Perfekt mit Hilfsverb 'sein'!",
            jenisSoal: "pg-kompleks",
            options: [
                "gehen (ist gegangen)",
                "fahren (ist gefahren)",
                "machen (hat gemacht)",
                "spielen (hat gespielt)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "Bestimmen Sie, ob die Aussagen über deutsche Nomen Richtig oder Falsch sind!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Im Deutschen werden alle Nomen (Substantive) großgeschrieben." },
                { text: "Nomen im Deutschen haben kein grammatisches Geschlecht." }
            ],
            correct: ["richtig", "falsch"]
        },
        {
            tipe: "soal-tunggal",
            q: "Wie lautet der Plural des Nomens 'das Buch'?",
            jenisSoal: "pg-biasa",
            options: ["die Bücher", "die Buches", "die Bucher", "die Bucheren"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Ordnen Sie die W-Fragen (W-Fragen) ihrer Funktion zu!",
            jenisSoal: "penjodohan",
            options: ["Wer?", "Wo?", "Wann?"],
            pairs: [
                { question: "Fragt nach einer Person (Subject).", correctMatch: "Wer?" },
                { question: "Fragt nach einem Ort (Location).", correctMatch: "Wo?" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Ergänzen Sie den Akkusativartikel für ein maskulines Nomen: 'Ich sehe ... (der) Hund.'",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "den"
        },
        {
            tipe: "grup-stimulus",
            stimulus: "Lesen Sie die Einladung:\n'Liebe Maria, ich möchte dich am Samstag zu meiner Geburtstagsparty einladen. Wir feiern um 19 Uhr in meinem Haus. Bring bitte gute Laune mit!'",
            gambar: null,
            soalList: [
                {
                    q: "Wann findet die Party statt?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "Am Samstag um 19 Uhr",
                        "Am Sonntag am Morgen",
                        "Am Freitag zu Mittag",
                        "Am Montag um Mitternacht"
                    ],
                    correct: 0
                },
                {
                    q: "Wahr oder Falsch: Die Party ist eine Geburtstagsfeier.",
                    jenisSoal: "tabel-matriks",
                    rows: [
                        { text: "Es ist eine Geburtstagsparty." },
                        { text: "Die Party findet im Freien im Park statt." }
                    ],
                    correct: ["richtig", "falsch"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Wählen Sie zwei Präpositionen mit Dativ (Wechselpräpositionen oder feste Dativpräpositionen)!",
            jenisSoal: "pg-kompleks",
            options: [
                "mit",
                "nach",
                "durch",
                "ohne"
            ],
            correct: [0, 1] // durch dan ohne adalah Akkusativ
        },
        {
            tipe: "soal-tunggal",
            q: "Was bedeutet das deutsche Adjektiv 'schnell'?",
            jenisSoal: "pg-biasa",
            options: ["Cepat", "Lambat", "Besar", "Kecil"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Ordnen Sie die Komparationsformen (Gradation der Adjektive) zu!",
            jenisSoal: "penjodohan",
            options: ["gut", "besser", "am besten"],
            pairs: [
                { question: "Positiv (Grundform).", correctMatch: "gut" },
                { question: "Komparativ (Vergleichsform).", correctMatch: "besser" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Ergänzen Sie das Modalverb im Präteritum: 'Er ... gestern nicht kommen.' (können -> konnte)",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "konnte"
        },
        {
            tipe: "soal-tunggal",
            q: "Bestimmen Sie, ob die Aussagen über den Imperativ (Befehlsform) Richtig oder Falsch sind!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Die Imperativform für 'du' lässt gewöhnlich das Pronomen 'du' weg." },
                { text: "Der Imperativ hat keine Form für die Höflichkeitsform (Sie)." }
            ],
            correct: ["richtig", "falsch"]
        },
        {
            tipe: "soal-tunggal",
            q: "Wählen Sie zwei Länder, in denen Deutsch Amtssprache ist!",
            jenisSoal: "pg-kompleks",
            options: [
                "Österreich",
                "Die Schweiz",
                "Spanien",
                "Italien"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "Wie heißt das Gegenteil von 'groß' (besar) im Deutschen?",
            jenisSoal: "pg-biasa",
            options: ["klein", "alt", "neu", "gut"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Ordnen Sie die Familienmitglieder auf Deutsch zu!",
            jenisSoal: "penjodohan",
            options: ["der Vater", "die Mutter", "der Bruder"],
            pairs: [
                { question: "Ayah dalam bahasa Jerman.", correctMatch: "der Vater" },
                { question: "Ibu dalam bahasa Jerman.", correctMatch: "die Mutter" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Ergänzen Sie das Perfekt-Hilfsverb: 'Wir ... nach Berlin gefahren.'",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "sind"
        },
        {
            tipe: "soal-tunggal",
            q: "Bestimmen Sie, ob die Aussagen über Nebensätze (Nebensätze) Richtig oder Falsch sind!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "In einem Nebensatz mit 'weil' steht das konjugierte Verb am Ende des Satzes." },
                { text: "Nebensätze stehen im Deutschen immer allein ohne Hauptsatz." }
            ],
            correct: ["richtig", "falsch"]
        },
        {
            tipe: "soal-tunggal",
            q: "Wählen Sie zwei Farben (Farben) auf Deutsch!",
            jenisSoal: "pg-kompleks",
            options: [
                "blau",
                "rot",
                "schnell",
                "heute"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "Was bedeutet der deutsche Satz 'Guten Morgen!'?",
            jenisSoal: "pg-biasa",
            options: ["Selamat pagi!", "Selamat siang!", "Selamat sore!", "Selamat malam!"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Ordnen Sie die Wochentage zu!",
            jenisSoal: "penjodohan",
            options: ["Montag", "Dienstag", "Mittwoch"],
            pairs: [
                { question: "Hari Senin.", correctMatch: "Montag" },
                { question: "Hari Selasa.", correctMatch: "Dienstag" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Ergänzen Sie das Possessivpronomen: 'Das ist mein Bruder. ... Name ist Thomas.'",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "Sein"
        },
        {
            tipe: "soal-tunggal",
            q: "Bestimmen Sie, ob die Aussagen über das Passiv Richtig oder Falsch sind!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Das Passiv im Präsens wird mit dem Hilfsverb 'werden' und dem Partizip II gebildet." },
                { text: "Das Passiv betont immer den Täter (Akteur) anstelle der Handlung." }
            ],
            correct: ["richtig", "falsch"] // passiv betont die Handlung / das Objekt, nicht den Täter
        },
        {
            tipe: "soal-tunggal",
            q: "Wählen Sie zwei Tiere (Tiere) auf Deutsch!",
            jenisSoal: "pg-kompleks",
            options: [
                "der Hund",
                "die Katze",
                "der Tisch",
                "das Buch"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "Wie fragt man nach dem Befinden einer Person auf Deutsch?",
            jenisSoal: "pg-biasa",
            options: ["Wie geht es dir?", "Woher kommst du?", "Wie alt bist du?", "Was machst du?"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Ordnen Sie die Jahreszeiten (Jahreszeiten) zu!",
            jenisSoal: "penjodohan",
            options: ["der Sommer", "der Winter"],
            pairs: [
                { question: "Musim panas.", correctMatch: "der Sommer" },
                { question: "Musim dingin.", correctMatch: "der Winter" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Ergänzen Sie die Präposition: 'Ich warte ... den Bus.' (warten auf + Akkusativ)",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "auf"
        },
        {
            tipe: "soal-tunggal",
            q: "Bestimmen Sie, ob die Aussagen über Reflexivverben Richtig oder Falsch sind!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Reflexivverben werden im Deutschen mit einem Reflexivpronomen wie 'sich' verwendet." },
                { text: "Das Pronomen 'sich' verändert sich in der 1. Person Singular zu 'mich' (ich wasche mich)." }
            ],
            correct: ["richtig", "richtig"]
        },
        {
            tipe: "soal-tunggal",
            q: "Wählen Sie zwei Getränke (Getränke) auf Deutsch!",
            jenisSoal: "pg-kompleks",
            options: [
                "der Kaffee",
                "der Tee",
                "das Brot",
                "der Apfel"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "Was bedeutet der Ausdruck 'Auf Wiedersehen!'?",
            jenisSoal: "pg-biasa",
            options: ["Sampai jumpa lagi!", "Halo!", "Selamat pagi!", "Terima kasih!"],
            correct: 0
        }
    ]
};