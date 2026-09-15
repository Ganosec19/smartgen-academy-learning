window.soalData = window.soalData || {};

window.soalData["TKA SMA Kelas 12"] = window.soalData["TKA SMA Kelas 12"] || {};

window.soalData["TKA SMA Kelas 12"]["Biologi"] = {
    pilihanGanda: [
        {
            tipe: "grup-stimulus",
            stimulus: "Perhatikan wacana mengenai struktur dan fungsi organel sel tumbuhan berikut!\n\nSel tumbuhan memiliki beberapa organel khas yang tidak ditemukan pada sel hewan, salah satunya adalah kloroplas yang berfungsi sebagai tempat berlangsungnya proses fotosintesis. Selain itu, terdapat vakuola sentral yang berukuran besar untuk menjaga turgor sel serta dinding sel yang memberikan kekakuan struktural.",
            gambar: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=600&auto=format&fit=crop&q=80",
            soalList: [
                {
                    q: "Berdasarkan fungsinya, di manakah letak pigmen hijau daun (klorofil) yang menangkap energi cahaya matahari pada kloroplas?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "Bagian membran tilakoid / grana",
                        "Cairan stroma kloroplas",
                        "Bagian matriks mitokondria",
                        "Sistem retikulum endoplasma kasar"
                    ],
                    correct: 0
                },
                {
                    q: "Pilihlah dua organel sel yang memiliki membran ganda dan mengandung DNA sendiri di dalam sel eukariotik! (Pilih dua jawaban benar)",
                    jenisSoal: "pg-kompleks",
                    options: [
                        "Mitokondria",
                        "Kloroplas",
                        "Ribosom",
                        "Badan Golgi"
                    ],
                    correct: [0, 1]
                },
                {
                    q: "Tentukan apakah pernyataan berikut Benar atau Salah mengenai perbedaan sel tumbuhan dan sel hewan!",
                    jenisSoal: "tabel-matriks",
                    rows: [
                        { text: "Dinding sel tumbuhan tersusun atas selulosa yang memberikan kekuatan mekanik." },
                        { text: "Sel hewan memiliki dinding sel yang kaku di bagian terluar membran plasmanya." }
                    ],
                    correct: ["benar", "salah"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan tahapan respirasi seluler di sebelah kiri dengan tempat terjadinya di dalam sel eukariotik di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Glikolisis", "Siklus Krebs", "Transpor Elektron"],
            pairs: [
                { question: "Berlangsung di dalam sitoplasma / sitosol sel tanpa memerlukan oksigen bebas.", correctMatch: "Glikolisis" },
                { question: "Berlangsung di dalam matriks mitokondria menghasilkan NADH, FADH2, dan ATP.", correctMatch: "Siklus Krebs" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini dengan istilah ilmiah:\nUnit fungsional terkecil dari materi genetik yang menentukan sifat herediter pada makhluk hidup disebut ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "gen"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah jumlah kromosom tubuh (autosom) pada sel somatis / tubuh manusia normal?",
            jenisSoal: "pg-biasa",
            options: ["44 buah (22 pasang)", "46 buah (23 pasang)", "22 buah", "23 buah"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai pembelahan sel mitosis berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Pembelahan mitosis menghasilkan dua sel anak yang bersifat identik dengan sel induknya (diploid)." },
                { text: "Mitosis terjadi pada proses pembentukan sel kelamin (gamet) seperti sperma dan ovum." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara enzim pencernaan berikut yang dihasilkan oleh pankreas dan berfungsi memecah protein?",
            jenisSoal: "pg-kompleks",
            options: [
                "Tripsin",
                "Pepsins", // Pepsina di lambung
                "Kimotripsin",
                "Amilase ludah"
            ],
            correct: [0, 2]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nProses perpindahan molekul zat dari konsentrasi tinggi ke konsentrasi rendah melalui membran semipermeabel disebut ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "osmosis"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah jumlah ATP bersih yang dihasilkan dari pemecahan 1 molekul glukosa melalui jalur respirasi anaerob (fermentasi alkohol/asam laktat)?",
            jenisSoal: "pg-biasa",
            options: ["2 ATP", "38 ATP", "32 ATP", "36 ATP"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jaringan tumbuhan di sebelah kiri dengan fungsi utamanya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Xilem", "Floem", "Meristem"],
            pairs: [
                { question: "Mengangkut air dan mineral dari akar ke seluruh bagian tumbuhan.", correctMatch: "Xilem" },
                { question: "Mengangkut hasil fotosintesis dari daun ke seluruh bagian tumbuhan.", correctMatch: "Floem" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai hukum pewarisan sifat Mendel berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Hukum I Mendel (Segregasi Bebas) menyatakan pemisahan alel secara bebas saat pembentukan gamet." },
                { text: "Hukum II Mendel berlaku untuk persilangan monohibrid dengan satu sifat beda saja." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nBagian neuron / sel saraf yang berfungsi menghantar impuls saraf menjauhi badan sel ke neuron lain adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "akson"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah rasio fenotip pada keturunan kedua (F2) dari persilangan dihibrid dominan penuh berdasarkan hukum Mendel?",
            jenisSoal: "pg-biasa",
            options: ["9 : 3 : 3 : 1", "3 : 1", "1 : 2 : 1", "1 : 1 : 1 : 1"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara komponen berikut yang menyusun struktur molekul nukleotida pada DNA?",
            jenisSoal: "pg-kompleks",
            options: [
                "Gugus fosfat",
                "Gula pentosa deoksiribosa",
                "Basa nitrogen (Adenin, Timin, Sitosin, Guanin)",
                "Asam lemak rantai panjang"
            ],
            correct: [0, 1, 2]
        },
        {
            tipe: "grup-stimulus",
            stimulus: "Cermatilah konsep ekosistem dan aliran energi berikut!\n\nDalam suatu ekosistem padang rumput, rumput bertindak sebagai produsen utama yang dimakan oleh belalang (konsumen tingkat I). Belalang kemudian dimangsa oleh katak, lalu katak dimangsa oleh ular, dan terakhir ular dimangsa oleh burung elang sebagai puncak rantai makanan.",
            gambar: null,
            soalList: [
                {
                    q: "Berdasarkan rantai makanan tersebut, organisme manakah yang menduduki tingkat trofik ketiga?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "Katak",
                        "Belalang",
                        "Ular",
                        "Rumput"
                    ],
                    correct: 0
                },
                {
                    q: "Tentukan apakah pernyataan berikut mengenai piramida ekologi tersebut Benar atau Salah!",
                    jenisSoal: "tabel-matriks",
                    rows: [
                        { text: "Jumlah energi terbesar dalam ekosistem terdapat pada tingkat trofik produsen (rumput)." },
                        { text: "Biomasa konsumen puncak (elang) selalu lebih besar daripada biomasa produsen di bawahnya." }
                    ],
                    correct: ["benar", "salah"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan hormon tumbuhan (fitohormon) di sebelah kiri dengan fungsi fisiologisnya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Auksin", "Giberelin", "Etilen"],
            pairs: [
                { question: "Memacu pemanjangan sel batang dan merangsang pembentukan akar serta dominansi apikal.", correctMatch: "Auksin" },
                { question: "Merangsang pematangan buah serta pembungaan pada tumbuhan.", correctMatch: "Etilen" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nOrganel sel yang berperan sebagai pusat pencernaan seluler karena mengandung enzim hidrolitik adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "lisosom"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah jumlah kromosom yang terdapat pada sel kelamin (gamet) manusia normal?",
            jenisSoal: "pg-biasa",
            options: ["23 buah tunggal (haploid)", "46 buah (diploid)", "44 buah", "24 buah"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai mekanisme pertahanan tubuh (imunitas) berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Limfosit T matang di dalam kelenjar timus dan berperan dalam imunitas seluler." },
                { text: "Antibodi diproduksi oleh sel darah merah untuk membunuh bakteri patogen." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara penyakit berikut yang ditularkan melalui infeksi virus?",
            jenisSoal: "pg-kompleks",
            options: [
                "Demam Berdarah Dengue (DBD)",
                "Tuberkulosis (TBC)",
                "COVID-19",
                "Influenza"
            ],
            correct: [0, 2, 3] // TBC oleh bakteri
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nBagian mata manusia yang berfungsi mengatur jumlah cahaya yang masuk dengan cara memperbesar atau memperkecil pupil adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "iris"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah hasil akhir dari proses glikolisis pemecahan 1 molekul glukosa selain molekul ATP?",
            jenisSoal: "pg-biasa",
            options: ["2 molekul asam piruvat dan 2 NADH", "6 molekul CO2 dan 6 H2O", "1 molekul alkohol", "2 molekul asetil KoA"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis jaringan hewan di sebelah kiri dengan letak atau fungsinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Jaringan Epitel", "Jaringan Otot Rangka", "Jaringan Saraf"],
            pairs: [
                { question: "Melapisi permukaan tubuh dan organ dalam serta berfungsi sebagai proteksi.", correctMatch: "Jaringan Epitel" },
                { question: "Menggerakkan tulang secara sadar di bawah kendali sistem saraf pusat.", correctMatch: "Jaringan Otot Rangka" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai enzim pencernaan manusia berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Enzim pepsin di lambung bekerja secara optimal pada suasana asam." },
                { text: "Enzim ptialin di dalam air liur mulut berfungsi mencerna lemak jenuh." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nAlat ekskresi pada cacing tanah yang berfungsi menyaring sisa metabolisme nitrogen disebut ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "nefridia"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah jumlah ruang jantung pada hewan amfibi (seperti katak)?",
            jenisSoal: "pg-biasa",
            options: ["3 ruang (2 serambi, 1 bilik)", "4 ruang", "2 ruang", "1 ruang"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara organel berikut yang tidak memiliki membran pembatas?",
            jenisSoal: "pg-kompleks",
            options: [
                "Ribosom",
                "Sentriol",
                "Mitokondria",
                "Lisosom"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai mutasi genetik berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Mutasi titik (point mutation) melibatkan perubahan pada satu pasang basa nitrogen DNA." },
                { text: "Semua jenis mutasi genetik selalu berdampak fatal dan mematikan organisme." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nTeori evolusi yang menyatakan bahwa jerapah berleher panjang karena menjangkau pohon tinggi dipelopori oleh ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "Lamarck"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah jumlah total keping katup (kleup) bikuspidalis / mitral pada jantung manusia normal?",
            jenisSoal: "pg-biasa",
            options: ["2 daun katup", "3 daun katup", "4 daun katup", "1 daun katup"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan konsep bioteknologi di sebelah kiri dengan contoh aplikasinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Bioteknologi Konvensional", "Bioteknologi Modern", "Kultur Jaringan"],
            pairs: [
                { question: "Memanfaatkan mikroorganisme secara langsung seperti pembuatan tempe dan tape.", correctMatch: "Bioteknologi Konvensional" },
                { question: "Memanfaatkan rekayasa genetika dan teknik DNA rekombinan.", correctMatch: "Bioteknologi Modern" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai metabolisme tumbuhan berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Reaksi terang fotosintesis menghasilkan oksigen, NADPH, dan ATP." },
                { text: "Reaksi gelap (siklus Calvin) memerlukan cahaya matahari secara langsung di dalam tilakoid." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nJaringan pada tumbuhan yang aktif membelah secara terus-menerus terdapat pada bagian ujung akar dan batang disebut jaringan ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "meristem"
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara vitamin berikut yang larut di dalam lemak (vitamin liposolubel)?",
            jenisSoal: "pg-kompleks",
            options: [
                "Vitamin A",
                "Vitamin D",
                "Vitamin C",
                "Vitamin K"
            ],
            correct: [0, 1, 3] // C larut air
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah jumlah kromosom pada sel gamet lalat buah (Drosophila melanogaster) jika jumlah kromosom tubuhnya 8 buah?",
            jenisSoal: "pg-biasa",
            options: ["4 buah", "8 buah", "16 buah", "2 buah"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai sistem pernapasan manusia berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Pertukaran gas oksigen dan karbon dioksida di dalam paru-paru terjadi melalui proses difusi di alveolus." },
                { text: "Bronkiolus adalah cabang utama tenggorokan yang langsung berhubungan dengan rongga hidung." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nNama kelenjar endokrin yang dijuluki sebagai 'master of glands' karena mengontrol kerja kelenjar lain adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "hipofisis"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah pH normal darah manusia dalam kondisi fisiologis yang sehat?",
            jenisSoal: "pg-biasa",
            options: ["7,35 - 7,45", "6,50 - 6,80", "8,00 - 8,50", "5,00 - 5,50"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis interaksi antarspesies di sebelah kiri dengan penjelasannya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Mutualisme", "Komensalisme", "Parasitisme"],
            pairs: [
                { question: "Hubungan antarorganisme yang saling menguntungkan kedua belah pihak.", correctMatch: "Mutualisme" },
                { question: "Hubungan di mana satu pihak diuntungkan sementara pihak lain dirugikan.", correctMatch: "Parasitisme" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai struktur DNA dan RNA berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "DNA memiliki bentuk rantai ganda (double helix), sedangkan RNA berantai tunggal." },
                { text: "Basa nitrogen Timin (T) pada DNA digantikan oleh Urasil (U) pada molekul RNA." }
            ],
            correct: ["benar", "benar"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nAlat ekskresi utama pada manusia yang berfungsi menyaring darah dan menghasilkan urine adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "ginjal"
        }
    ]
};