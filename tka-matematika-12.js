window.soalData = window.soalData || {};

window.soalData["TKA SMA Kelas 12"] = window.soalData["TKA SMA Kelas 12"] || {};

window.soalData["TKA SMA Kelas 12"]["Matematika"] = {
    pilihanGanda: [
        {
            tipe: "grup-stimulus",
            stimulus: "Perhatikan wacana dan fungsi pertumbuhan populasi berikut!\n\nSebuah kota mengalami pertumbuhan jumlah penduduk yang dimodelkan oleh fungsi eksponensial P(t) = 100.000 x (1,03)^t, dengan t adalah waktu dalam tahun sejak tahun 2020. Model ini mengasumsikan tingkat pertumbuhan konstan sebesar 3% per tahun.",
            gambar: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop&q=80",
            soalList: [
                {
                    q: "Berdasarkan model tersebut, berapa perkiraan jumlah penduduk kota pada tahun 2023 (t = 3)? (Petunjuk: (1,03)^3 setara dengan 1,0927)",
                    jenisSoal: "pg-biasa",
                    options: [
                        "103.000 jiwa",
                        "106.090 jiwa",
                        "109.270 jiwa",
                        "112.550 jiwa"
                    ],
                    correct: 2
                },
                {
                    q: "Pilihlah dua pernyataan yang benar berkaitan dengan fungsi pertumbuhan penduduk di atas! (Pilih dua jawaban benar)",
                    jenisSoal: "pg-kompleks",
                    options: [
                        "Jumlah penduduk pada tahun 2020 adalah 100.000 jiwa.",
                        "Grafik fungsi P(t) merupakan fungsi turun (decreasing).",
                        "Laju pertumbuhan penduduk bersifat eksponensial terhadap waktu.",
                        "Jumlah penduduk akan melipatganda setiap tepat 1 tahun."
                    ],
                    correct: [0, 2]
                },
                {
                    q: "Tentukan apakah pernyataan berikut Benar atau Salah berdasarkan model matematika tersebut!",
                    jenisSoal: "tabel-matriks",
                    rows: [
                        { text: "Nilai awal penduduk pada saat t = 0 adalah 100.000." },
                        { text: "Faktor pengali pertumbuhan setiap tahunnya adalah 0,03." }
                    ],
                    correct: ["benar", "salah"]
                }
            ]
        },
        {
            tipe: "grup-stimulus",
            stimulus: "Cermatilah konsep turunan fungsi aljabar!\n\nSebuah peluru ditembakkan ke atas. Tinggi peluru h (dalam meter) sebagai fungsi waktu t (dalam detik) dirumuskan oleh h(t) = 40t - 5t^2.",
            gambar: null,
            soalList: [
                {
                    q: "Berapakah tinggi maksimum yang dapat dicapai oleh peluru tersebut?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "60 meter",
                        "75 meter",
                        "80 meter",
                        "100 meter"
                    ],
                    correct: 2
                },
                {
                    q: "Isilah titik-titik di bawah ini dengan bilangan bulat yang tepat!\nKecepatan sesaat peluru pada saat t = 2 detik adalah ... meter per detik.",
                    jenisSoal: "isian-singkat",
                    options: [],
                    correct: "20"
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan konsep matriks di sebelah kiri dengan sifat operasional yang tepat di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Matriks Identitas", "Determinan Matriks", "Matriks Transpose"],
            pairs: [
                { question: "Matriks persegi yang elemen diagonal utamanya bernilai 1 dan lainnya 0.", correctMatch: "Matriks Identitas" },
                { question: "Pertukaran baris menjadi kolom pada suatu matriks.", correctMatch: "Matriks Transpose" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari limit fungsi trigonometri berikut: Limit x mendekati 0 dari (sin 4x) / (2x)?",
            jenisSoal: "pg-biasa",
            options: ["1", "2", "4", "8"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Jika diketahui suku ke-3 suatu barisan aritmetika adalah 11 dan suku ke-7 adalah 27, berapa suku ke-10 barisan tersebut?",
            jenisSoal: "pg-biasa",
            options: ["35", "39", "43", "47"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai sifat-sifat integral berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Integral tak tentu dari suatu fungsi selalu menyertakan konstanta integrasi (+C)." },
                { text: "Luas daerah di bawah sumbu-X bernilai positif jika dihitung menggunakan integral biasa." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini dengan nilai bilangan bulat:\nNilai dari faktorial 5! (5 faktorial) adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "120"
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara aturan berikut yang berlaku dalam segitiga sembarang?",
            jenisSoal: "pg-kompleks",
            options: [
                "Aturan Sinus: a / sin A = b / sin B = c / sin C",
                "Aturan Cosinus: a^2 = b^2 + c^2 - 2bc cos A",
                "Luas segitiga = sisi a + sisi b + sisi c",
                "Jumlah seluruh sudut dalam segitiga adalah 180 derajat"
            ],
            correct: [0, 1, 3]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari logaritma 2 log 8 + 3 log 9?",
            jenisSoal: "pg-biasa",
            options: ["3", "5", "6", "8"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nPusat lingkaran yang memiliki persamaan (x - 2)^2 + (y + 3)^2 = 25 adalah titik koordinat ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "(2, -3)"
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan ukuran pemusatan data di sebelah kiri dengan definisinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Modus", "Median", "Rata-rata (Mean)"],
            pairs: [
                { question: "Nilai yang paling sering muncul atau memiliki frekuensi tertinggi dalam suatu data.", correctMatch: "Modus" },
                { question: "Nilai tengah dari data yang telah diurutkan dari terkecil ke terbesar.", correctMatch: "Median" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Dalam sebuah kantong terdapat 4 kelereng merah dan 3 kelereng biru. Jika diambil 2 kelereng sekaligus secara acak, berapa peluang terambil kedua kelereng berwarna merah?",
            jenisSoal: "pg-biasa",
            options: ["2/7", "3/7", "1/7", "4/7"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai vektor di ruang dimensi tiga berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Dua vektor dikatakan saling tegak lurus jika hasil kali titik (dot product) keduanya bernilai nol." },
                { text: "Panjang vektor a = (3, 4, 12) adalah 15." }
            ],
            correct: ["benar", "benar"]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari turunan pertama fungsi f(x) = 3x^3 - 5x^2 + 7 pada saat x = 2?",
            jenisSoal: "pg-biasa",
            options: ["14", "16", "20", "24"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nSuku ke-n dari barisan geometri 2, 4, 8, 16, ... dirumuskan sebagai Un = 2 pangkat ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "n"
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara transformasi geometri berikut yang mempertahankan bentuk bangun?",
            jenisSoal: "pg-kompleks",
            options: [
                "Translasi (Pergeseran)",
                "Rotasi (Perputaran)",
                "Refleksi (Pencerminan)",
                "Dilatasi skala pembesaran"
            ],
            correct: [0, 1, 2]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah hasil dari integral tertentu batas 0 sampai 2 dari fungsi 3x^2 dx?",
            jenisSoal: "pg-biasa",
            options: ["6", "8", "12", "16"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah sifat-sifat eksponensial berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "a^m x a^n = a^(m+n)" },
                { text: "(a^m)^n = a^(m+n)" }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nNilai dari sin 30 derajat + cos 60 derajat adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "1"
        },
        {
            tipe: "soal-tunggal",
            q: "Jika matriks A = [[2, 1], [4, 3]], berapakah nilai determinan dari matriks A (|A|)?",
            jenisSoal: "pg-biasa",
            options: ["2", "4", "6", "10"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis fungsi di sebelah kiri dengan grafiknya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Fungsi Linear", "Fungsi Kuadrat", "Fungsi Eksponensial"],
            pairs: [
                { question: "Grafik berupa garis lurus dengan kemiringan (gradien) m.", correctMatch: "Fungsi Linear" },
                { question: "Grafik berbentuk kurva parabola melengkung.", correctMatch: "Fungsi Kuadrat" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah simpangan baku dari data tunggal: 2, 4, 6, 8, 10?",
            jenisSoal: "pg-biasa",
            options: ["Akar 2", "Akar 5", "2", "5"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai kaidah pencacahan berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Permutasi memperhatikan urutan susunan unsur." },
                { text: "Kombinasi memperhatikan urutan susunan unsur." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nBanyak cara menyusun 3 pengurus (Ketua, Sekretaris, Bendahara) dari 5 orang calon adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "60"
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara rumus suku ke-n berikut yang menyatakan barisan aritmetika?",
            jenisSoal: "pg-biasa",
            options: ["Un = 2^n + 1", "Un = 3n - 1", "Un = n^2 + 2", "Un = 2^n"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Pilihlah dua nilai sudut yang menghasilkan nilai sinus bernilai positif di kuadran I dan II!",
            jenisSoal: "pg-kompleks",
            options: ["30 derajat", "150 derajat", "210 derajat", "300 derajat"],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari limit x menuju tak hingga dari (3x^2 - 5x) / (6x^2 + 1)?",
            jenisSoal: "pg-biasa",
            options: ["0", "1/2", "3/2", "Tak hingga"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai turunan fungsi trigonometri berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Turunan dari sin x adalah cos x." },
                { text: "Turunan dari cos x adalah sin x." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nJumlah deret geometri tak hingga dengan suku pertama a = 12 dan rasio r = 1/3 adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "18"
        },
        {
            tipe: "soal-tunggal",
            q: "Jika vektor a = (2, -1, 3) dan b = (4, 2, -1), berapakah hasil perkalian titik (dot product) a . b?",
            jenisSoal: "pg-biasa",
            options: ["3", "5", "7", "9"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan komponen statistika di sebelah kiri dengan definisinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Jangkauan (Range)", "Simpangan Rata-rata", "Rata-rata Hitung"],
            pairs: [
                { question: "Selisih antara nilai data terbesar dan nilai data terkecil.", correctMatch: "Jangkauan (Range)" },
                { question: "Jumlah seluruh nilai data dibagi dengan banyaknya data.", correctMatch: "Rata-rata Hitung" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari cos 0 derajat + tan 45 derajat?",
            jenisSoal: "pg-biasa",
            options: ["0", "1", "2", "Akar 2"],
            correct: 2
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai fungsi invers berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Fungsi invers dari f(x) = 2x + 4 adalah f^-1(x) = (x - 4) / 2." },
                { text: "Semua jenis fungsi matematika pasti memiliki fungsi invers." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nJika f(x) = 3x - 5 dan g(x) = 2x + 1, maka nilai dari (f o g)(2) adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "10"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari integral (4x^3 - 6x + 2) dx?",
            jenisSoal: "pg-biasa",
            options: [
                "x^4 - 3x^2 + 2x + C",
                "12x^2 - 6 + C",
                "4x^4 - 6x^2 + 2x + C",
                "x^4 - 6x^2 + 2x + C"
            ],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pilihlah dua sifat logaritma yang benar di bawah ini!",
            jenisSoal: "pg-kompleks",
            options: [
                "^a log (b x c) = ^a log b + ^a log c",
                "^a log (b - c) = ^a log b - ^a log c",
                "^a log (b^n) = n x ^a log b",
                "^a log b = ^b log a"
            ],
            correct: [0, 2]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai suku ke-5 dari barisan geometri yang suku pertamanya 3 dan rasio 2?",
            jenisSoal: "pg-biasa",
            options: ["24", "48", "96", "192"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai barisan dan deret berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Jumlah n suku pertama deret aritmetika dirumuskan Sn = (n/2)(2a + (n-1)b)." },
                { text: "Rasio pada deret geometri selalu bernilai negatif." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nNilai dari 2^3 x 2^2 adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "32"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah kemiringan (gradien) garis yang melalui titik koordinat (1, 2) dan (3, 8)?",
            jenisSoal: "pg-biasa",
            options: ["2", "3", "4", "6"],
            correct: 1
        }
    ]
};