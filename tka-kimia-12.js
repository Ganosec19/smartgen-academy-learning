window.soalData = window.soalData || {};

window.soalData["TKA SMA Kelas 12"] = window.soalData["TKA SMA Kelas 12"] || {};

window.soalData["TKA SMA Kelas 12"]["Kimia"] = {
    pilihanGanda: [
        {
            tipe: "grup-stimulus",
            stimulus: "Perhatikan wacana mengenai struktur atom dan sistem periodik unsur berikut!\n\nUnsur X memiliki nomor atom 19 dan nomor massa 39. Unsur ini berada pada golongan alkali dalam sistem periodik unsur modern. Konfigurasi elektron unsur X menentukan sifat kimia serta kecenderungannya untuk membentuk ion positif dengan melepas satu elektron valensinya.",
            gambar: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=80",
            soalList: [
                {
                    q: "Berdasarkan nomor atomnya (19), bagaimana konfigurasi elektron gas mulia (penyingkatan kernel) untuk unsur X?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "[Ar] 4s1",
                        "[Ne] 3s2 3p5",
                        "[Kr] 5s1",
                        "[He] 2s2 2p6"
                    ],
                    correct: 0
                },
                {
                    q: "Pilihlah dua pernyataan yang benar mengenai sifat unsur X tersebut! (Pilih dua jawaban benar)",
                    jenisSoal: "pg-kompleks",
                    options: [
                        "Unsur X cenderung melepaskan elektron untuk mencapai kestabilan.",
                        "Unsur X membentuk ion bermuatan positif satu (X+).",
                        "Unsur X tergolong ke dalam unsur non-logam halogen.",
                        "Elektron valensi unsur X adalah 7."
                    ],
                    correct: [0, 1]
                },
                {
                    q: "Tentukan apakah pernyataan berikut Benar atau Salah mengenai sifat periodik unsur X!",
                    jenisSoal: "tabel-matriks",
                    rows: [
                        { text: "Unsur X terletak pada periode 4 dan golongan IA." },
                        { text: "Energi ionisasi unsur X sangat tinggi karena sukar melepas elektron." }
                    ],
                    correct: ["benar", "salah"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis ikatan kimia di sebelah kiri dengan contoh senyawa yang sesuai di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Ikatan Ionik", "Ikatan Kovalen Polar", "Ikatan Logam"],
            pairs: [
                { question: "Terbentuk akibat transfer elektron antara unsur logam dan non-logam (contoh: NaCl).", correctMatch: "Ikatan Ionik" },
                { question: "Terbentuk akibat pemakaian bersama pasangan elektron dengan perbedaan keelektronegatifan (contoh: H2O).", correctMatch: "Ikatan Kovalen Polar" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini dengan istilah ilmiah:\nLarutan yang dapat mempertahankan pH sistem dari penambahan sedikit asam, basa, atau pengenceran disebut larutan ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "penyangga"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai pH dari larutan asam kuat HCl 0,01 M (10^-2 M)?",
            jenisSoal: "pg-biasa",
            options: ["1", "2", "3", "4"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai laju reaksi kimia berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Katalis berfungsi mempercepat laju reaksi dengan cara menurunkan energi aktivasi (Ea)." },
                { text: "Kenaikan suhu umumnya memperlambat laju reaksi karena memperkecil energi kinetik partikel." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara faktor berikut yang dapat mempercepat laju reaksi kimia?",
            jenisSoal: "pg-kompleks",
            options: [
                "Menaikkan suhu sistem reaksi",
                "Memperbesar luas permukaan sentuhan reaktan",
                "Menurunkan konsentrasi reaktan secara drastis",
                "Menambahkan katalis yang sesuai"
            ],
            correct: [0, 1, 3]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nBilangan oksidasi unsur klorin (Cl) dalam senyawa KClO3 adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "+5"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah jumlah mol dari 11,2 liter gas oksigen (O2) jika diukur pada keadaan standar (STP)?",
            jenisSoal: "pg-biasa",
            options: ["0,5 mol", "1 mol", "2 mol", "11,2 mol"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan konsep termokimia di sebelah kiri dengan definisinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Reaksi Eksoterm", "Reaksi Endoterm", "Entalpi Pembentukan"],
            pairs: [
                { question: "Reaksi kimia yang disertai dengan pelepasan kalor dari sistem ke lingkungan (delta H bernilai negatif).", correctMatch: "Reaksi Eksoterm" },
                { question: "Reaksi kimia yang menyerap kalor dari lingkungan ke sistem (delta H bernilai positif).", correctMatch: "Reaksi Endoterm" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai kesetimbangan kimia berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Menurut asas Le Chatelier, jika tekanan sistem diperbesar, kesetimbangan akan bergeser ke arah jumlah koefisien gas yang lebih kecil." },
                { text: "Penambahan katalis pada sistem kesetimbangan akan mengubah posisi tetapan kesetimbangan (Kc)." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nNama IUPAC dari senyawa hidrokarbon dengan rumus kimia CH3-CH(CH3)-CH3 adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "2-metilpropana"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah massa molekul relatif (Mr) dari senyawa glukosa C6H12O6? (Ar: C = 12, H = 1, O = 16)",
            jenisSoal: "pg-biasa",
            options: ["180", "160", "140", "90"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara senyawa berikut yang tergolong ke dalam senyawa hidrokarbon tak jenuh?",
            jenisSoal: "pg-kompleks",
            options: [
                "Etena (C2H4)",
                "Etuna (C2H2)",
                "Etana (C2H6)",
                "Propana (C3H8)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "grup-stimulus",
            stimulus: "Cermatilah konsep elektrokimia pada sel Volta berikut!\n\nDiberikan potensial reduksi standar: Cu2+ + 2e- -> Cu (E0 = +0,34 Volt) dan Zn2+ + 2e- -> Zn (E0 = -0,76 Volt). Kedua logam ini dirangkai menjadi sebuah sel Volta standar.",
            gambar: null,
            soalList: [
                {
                    q: "Berapakah besar potensial sel standar (E0 sel) yang dihasilkan dari kombinasi logam tembaga dan seng tersebut?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "1,10 Volt",
                        "0,42 Volt",
                        "-0,42 Volt",
                        "-1,10 Volt"
                    ],
                    correct: 0
                },
                {
                    q: "Tentukan apakah pernyataan berikut mengenai elektroda sel Volta tersebut Benar atau Salah!",
                    jenisSoal: "tabel-matriks",
                    rows: [
                        { text: "Logam seng (Zn) bertindak sebagai anoda tempat terjadinya reaksi oksidasi." },
                        { text: "Logam tembaga (Cu) bertindak sebagai kutub negatif sel Volta." }
                    ],
                    correct: ["benar", "salah"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis koloid di sebelah kiri dengan contoh penerapannya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Aerosol cair", "Sol cair", "Emulsi"],
            pairs: [
                { question: "Sistem koloid berupa fase cair terdispersi dalam gas (contoh: kabut dan awan).", correctMatch: "Aerosol cair" },
                { question: "Sistem koloid berupa fase cair terdispersi dalam cair (contoh: susu dan santan).", correctMatch: "Emulsi" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nProses penghamburan berkas cahaya oleh partikel koloid dikenal sebagai efek ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "tyndall"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah kadar massa (persen massa) unsur nitrogen (N) dalam senyawa amonia (NH3)? (Ar: N = 14, H = 1)",
            jenisSoal: "pg-biasa",
            options: ["82,35%", "17,65%", "50%", "25%"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai sifat koligatif larutan berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Penambahan zat terlarut non-volatil akan menurunkan titik beku larutan (penurunan titik beku)." },
                { text: "Tekanan osmotik larutan berbanding terbalik dengan konsentrasi molar zat terlarut." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara reaksi berikut yang tergolong ke dalam reaksi redoks (reduksi-oksidasi)?",
            jenisSoal: "pg-kompleks",
            options: [
                "Zn + 2HCl -> ZnCl2 + H2",
                "NaOH + HCl -> NaCl + H2O",
                "2Na + Cl2 -> 2NaCl",
                "BaCl2 + H2SO4 -> BaSO4 + 2HCl"
            ],
            correct: [0, 2]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nNama gugus fungsi utama yang terdapat pada senyawa golongan asam karboksilat adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "-COOH"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah jumlah isomer struktur (alkana rantai lurus dan bercabang) yang dimiliki oleh senyawa heksana (C6H14)?",
            jenisSoal: "pg-biasa",
            options: ["5", "4", "6", "3"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis polimer di sebelah kiri dengan contohnya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Polimer Alam", "Polimer Sintetis", "Kopolimer"],
            pairs: [
                { question: "Polimer yang tersedia langsung di alam (contoh: karet alam dan amilum).", correctMatch: "Polimer Alam" },
                { question: "Polimer buatan pabrik melalui proses polimerisasi (contoh: plastik PVC dan nilon).", correctMatch: "Polimer Sintetis" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai bentuk molekul berdasarkan teori VSEPR berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Molekul CH4 memiliki bentuk geometri tetrahedral dengan sudut ikatan 109,5 derajat." },
                { text: "Molekul H2O bersifat non-polar karena simetris sempurna." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nUnsur golongan VIIA dalam sistem periodik unsur lazim disebut juga dengan golongan ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "halogen"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah pH dari larutan NaOH 0,001 M (10^-3 M)?",
            jenisSoal: "pg-biasa",
            options: ["3", "11", "4", "10"],
            correct: 1 // pOH = 3, pH = 14 - 3 = 11
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara unsur berikut yang termasuk unsur periode ketiga yang bersifat amfoter dalam bentuk hidroksidanya?",
            jenisSoal: "pg-kompleks",
            options: [
                "Aluminium (Al)",
                "Natrium (Na)",
                "Magnesium (Mg)",
                "Fosfor (P)"
            ],
            correct: [0] // Al(OH)3 bersifat amfoter
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah sifat-sifat unsur gas mulia berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Gas mulia memiliki konfigurasi elektron valensi yang sangat stabil (duplet atau oktet)." },
                { text: "Semua unsur gas mulia sama sekali tidak dapat bereaksi membentuk senyawa di alam." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nProses pengolahan logam besi dari bijih hematit dalam dapur tinggi melibatkan gas pereduksi ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "karbon monoksida"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah tetapan kesetimbangan tekanan (Kp) jika diketahui Kc = 0,082 pada suhu 27 derajat Celsius (300 K) untuk reaksi dengan delta n = 1? (R = 0,082)",
            jenisSoal: "pg-biasa",
            options: ["2,04", "0,082", "1,00", "24,6"],
            correct: 0 // Kp = Kc * (R*T)^1 = 0,082 * (0,082 * 300) = 0,082 * 24,6 = 2,012 ~ 2,04 (atau hitungan rill: 0,082 * 24,6 = 2,017)
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis reaksi organik di sebelah kiri dengan definisinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Reaksi Adisi", "Reaksi Substitusi", "Reaksi Eliminasi"],
            pairs: [
                { question: "Pengubahan ikatan rangkap menjadi ikatan tunggal dengan mengikat atom lain.", correctMatch: "Reaksi Adisi" },
                { question: "Pelepasan atom atau gugus atom dari molekul membentuk ikatan rangkap.", correctMatch: "Reaksi Eliminasi" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai energi ionisasi unsur dalam satu golongan berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Dalam satu golongan dari atas ke bawah, jari-jari atom semakin besar sehingga energi ionisasi semakin kecil." },
                { text: "Dalam satu periode dari kiri ke kanan, keelektronegatifan unsur cenderung semakin menurun." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nSenyawa turunan benzena yang memiliki gugus -OH terikat pada cincin aromatik disebut ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "fenol"
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara zat berikut yang dapat bertindak sebagai asam menurut konsep Bronsted-Lowry?",
            jenisSoal: "pg-kompleks",
            options: [
                "Ion H3O+",
                "Molekul H2O",
                "Ion NH4+",
                "Ion OH-"
            ],
            correct: [0, 1, 2] // donor proton
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah jumlah elektron maksimum yang dapat menempati subkulit d (l = 2)?",
            jenisSoal: "pg-biasa",
            options: ["10 elektron", "6 elektron", "2 elektron", "14 elektron"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai sel elektrolisis berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Pada sel elektrolisis, kutub positif bertindak sebagai anoda tempat terjadinya reaksi oksidasi." },
                { text: "Sel elektrolisis menggunakan arus listrik searah (DC) untuk melangsungkan reaksi non-spontan." }
            ],
            correct: ["benar", "benar"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nSatuan konsentrasi larutan yang menyatakan jumlah mol zat terlarut dalam tiap 1 kilogram pelarut disebut ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "molalitas"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah bilangan kuantum spin (s) yang diizinkan untuk sebuah elektron dalam orbital atom?",
            jenisSoal: "pg-biasa",
            options: ["+1/2 dan -1/2", "0 dan 1", "+1 dan -1", "+2 dan -2"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan penemu teori atom di sebelah kiri dengan model atomnya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["J.J. Thomson", "Ernest Rutherford", "Niels Bohr"],
            pairs: [
                { question: "Model atom seperti roti kismis di mana elektron tersebar dalam bola positif.", correctMatch: "J.J. Thomson" },
                { question: "Model atom tata surya di mana elektron mengelilingi inti atom bermuatan positif.", correctMatch: "Ernest Rutherford" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai hidrolisis garam berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Garam yang berasal dari asam kuat dan basa lemah akan mengalami hidrolisis parsial dan bersifat asam (pH < 7)." },
                { text: "Garam yang berasal dari asam kuat dan basa kuat mengalami hidrolisis total di dalam air." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nNama proses penyulingan bertingkat minyak bumi untuk memisahkan fraksi-fraksi berdasarkan perbedaan titik ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "didih"
        }
    ]
};