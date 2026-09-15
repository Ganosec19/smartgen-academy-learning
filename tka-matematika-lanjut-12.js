window.soalData = window.soalData || {};

window.soalData["TKA SMA Kelas 12"] = window.soalData["TKA SMA Kelas 12"] || {};

window.soalData["TKA SMA Kelas 12"]["Matematika Tingkat Lanjut"] = {
    pilihanGanda: [
        {
            tipe: "grup-stimulus",
            stimulus: "Perhatikan konsep bilangan kompleks dan bidang Gauss berikut!\n\nBilangan kompleks z = x + iy dapat direpresentasikan sebagai titik (x, y) pada bidang koordinat kartesius (bidang kompleks). Diberikan dua bilangan kompleks z1 = 3 + 4i dan z2 = 1 - 2i. Operasi aljabar pada bilangan kompleks mengikuti kaidah distributif dengan ketentuan khusus i^2 = -1.",
            gambar: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80",
            soalList: [
                {
                    q: "Berapakah hasil dari penjumlahan bilangan kompleks z1 + z2?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "4 + 2i",
                        "2 + 6i",
                        "5 - 2i",
                        "3 + 6i"
                    ],
                    correct: 0
                },
                {
                    q: "Pilihlah dua pernyataan yang benar mengenai sifat-sifat bilangan kompleks di atas! (Pilih dua jawaban benar)",
                    jenisSoal: "pg-kompleks",
                    options: [
                        "Modulus dari z1 = 3 + 4i adalah 5.",
                        "Konjugat dari z2 = 1 - 2i adalah 1 - 2i.",
                        "Nilai dari i^2 adalah -1.",
                        "Bagian imajiner dari z1 adalah 3."
                    ],
                    correct: [0, 2]
                },
                {
                    q: "Tentukan apakah pernyataan berikut Benar atau Salah mengenai konjugat dan modulus bilangan kompleks!",
                    jenisSoal: "tabel-matriks",
                    rows: [
                        { text: "Konjugat dari z1 = 3 + 4i adalah 3 - 4i." },
                        { text: "Modulus dari z2 = 1 - 2i adalah akar 3." }
                    ],
                    correct: ["benar", "salah"]
                }
            ]
        },
        {
            tipe: "grup-stimulus",
            stimulus: "Cermatilah konsep matriks transformasi geometri tingkat lanjut!\n\nSebuah bidang datar ditransformasikan oleh matriks T = [[2, 0], [0, 3]]. Matriks ini merepresentasikan suatu perbesaran skala (dilatasi) non-seragam pada sumbu koordinat.",
            gambar: null,
            soalList: [
                {
                    q: "Jika titik A(2, 1) ditransformasikan oleh matriks T, di manakah koordinat bayangan titik A'?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "(4, 3)",
                        "(2, 3)",
                        "(4, 1)",
                        "(3, 4)"
                    ],
                    correct: 0
                },
                {
                    q: "Isilah titik-titik di bawah ini dengan bilangan bulat:\nDeterminan dari matriks transformasi T tersebut adalah ...",
                    jenisSoal: "isian-singkat",
                    options: [],
                    correct: "6"
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan konsep polinomial di sebelah kiri dengan teorema yang sesuai di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Teorema Sisa", "Teorema Faktor", "Algoritma Pembagian"],
            pairs: [
                { question: "Jika suku banyak f(x) dibagi (x - k), maka sisa pembagiannya adalah f(k).", correctMatch: "Teorema Sisa" },
                { question: "Jika (x - k) adalah faktor dari f(x), maka nilai f(k) = 0.", correctMatch: "Teorema Faktor" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari limit x mendekati 0 dari (1 - cos 2x) / x^2?",
            jenisSoal: "pg-biasa",
            options: ["1", "2", "4", "0"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Jika akar-akar persamaan suku banyak x^3 - 6x^2 + 11x - 6 = 0 adalah x1, x2, x3, berapakah hasil dari x1 + x2 + x3?",
            jenisSoal: "pg-biasa",
            options: ["3", "6", "11", "-6"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai turunan tingkat tinggi berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Turunan kedua f''(x) menyatakan tingkat perubahan dari kemiringan fungsi." },
                { text: "Titik belok kurva terjadi pada saat nilai turunan pertama f'(x) = 0." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nNilai dari koefisien suku x^3 pada penjabaran (x + 2)^5 adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "40"
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara identitas trigonometri berikut yang benar untuk sudut rangkap?",
            jenisSoal: "pg-kompleks",
            options: [
                "sin 2x = 2 sin x cos x",
                "cos 2x = cos^2 x - sin^2 x",
                "tan 2x = (2 tan x) / (1 - tan^2 x)",
                "sin^2 x + cos^2 x = 0"
            ],
            correct: [0, 1, 2]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari integral parsial integral x * e^x dx?",
            jenisSoal: "pg-biasa",
            options: [
                "x * e^x - e^x + C",
                "x * e^x + e^x + C",
                "1/2 * x^2 * e^x + C",
                "x^2 * e^x - e^x + C"
            ],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nVektor satuan yang searah dengan vektor a = (3, 4) adalah ... (tuliskan format koordinat pecahan)",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "(3/5, 4/5)"
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis irisan kerucut di sebelah kiri dengan definisinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Parabola", "Elips", "Hiperbola"],
            pairs: [
                { question: "Tempat kedudukan titik yang jaraknya ke suatu titik fokus sama dengan jaraknya ke direktriks.", correctMatch: "Parabola" },
                { question: "Jumlah jarak dari dua titik fokus ke setiap titik pada kurva bernilai konstan.", correctMatch: "Elips" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah pusat dan jari-jari dari lingkaran dengan persamaan x^2 + y^2 - 6x + 8y - 11 = 0?",
            jenisSoal: "pg-biasa",
            options: [
                "Pusat (3, -4) dan jari-jari 6",
                "Pusat (-3, 4) dan jari-jari 6",
                "Pusat (3, -4) dan jari-jari 36",
                "Pusat (-3, -4) dan jari-jari 6"
            ],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah sifat-sifat matriks bujur sangkar berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Invers dari matriks perkalian (AB)^-1 setara dengan B^-1 * A^-1." },
                { text: "Determinan dari matriks transpos |A^T| bernilai berbeda dengan determinan aslinya |A|." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari turunan fungsi implisit untuk x^2 + y^2 = 25 pada titik (3, 4)?",
            jenisSoal: "pg-biasa",
            options: ["-3/4", "3/4", "-4/3", "4/3"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nSuku sisa pembagian polinomial x^3 - 2x^2 + 5 oleh (x - 2) adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "5"
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara rumus berikut yang merupakan identitas perkalian trigonometri yang benar?",
            jenisSoal: "pg-kompleks",
            options: [
                "2 sin A cos B = sin(A + B) + sin(A - B)",
                "2 cos A sin B = sin(A + B) - sin(A - B)",
                "2 cos A cos B = cos(A + B) + cos(A - B)",
                "2 sin A sin B = cos(A + B) + cos(A - B)"
            ],
            correct: [0, 1, 2]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari integral tentu batas 1 sampai e dari (1 / x) dx?",
            jenisSoal: "pg-biasa",
            options: ["0", "1", "e", "ln 2"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai transformasi rotasi matriks berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Rotasi sejauh 180 derajat mengubah tanda koordinat titik menjadi (-x, -y)." },
                { text: "Matriks identitas mengubah posisi seluruh titik menjadi titik asal (0,0)." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nNilai dari ekspresi bilangan kompleks i^2026 adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "-1"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah panjang proyeksi vektor a = (2, -1, 2) pada vektor b = (1, 2, 2)?",
            jenisSoal: "pg-biasa",
            options: ["4/3", "2/3", "1", "2"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan konsep kalkulus di sebelah kiri dengan aplikasinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Uji Turunan Kedua", "Aturan L'Hopital", "Integral Tentu"],
            pairs: [
                { question: "Menentukan kecekungan kurva dan titik balik ekstrim suatu fungsi.", correctMatch: "Uji Turunan Kedua" },
                { question: "Menyelesaikan bentuk tak tentu limit fungsi pecahan (0/0 atau tak hingga / tak hingga).", correctMatch: "Aturan L'Hopital" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari limit x mendekati 0 dari (tan 3x) / (sin 2x)?",
            jenisSoal: "pg-biasa",
            options: ["2/3", "3/2", "1", "6"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai sifat polinomial berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Derajat dari hasil kali dua buah polinomial adalah jumlah dari derajat masing-masing polinomial." },
                { text: "Sisa pembagian polinomial selalu memiliki derajat yang lebih tinggi daripada derajat pembaginya." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nJika diketahui matriks A = [[1, 2], [3, 4]], maka jumlah elemen diagonal utama matriks tersebut adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "5"
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara persamaan garis singgung lingkaran x^2 + y^2 = 25 di titik (3, 4) yang benar?",
            jenisSoal: "pg-biasa",
            options: [
                "3x + 4y = 25",
                "4x + 3y = 25",
                "3x - 4y = 25",
                "x + y = 25"
            ],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pilihlah dua nilai dari sudut istimewa yang menghasilkan nilai kosinus negatif di kuadran II dan III!",
            jenisSoal: "pg-kompleks",
            options: ["120 derajat", "240 derajat", "60 derajat", "300 derajat"],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah hasil dari turunan fungsi f(x) = (sin(2x))^3?",
            jenisSoal: "pg-biasa",
            options: [
                "6 * (sin(2x))^2 * cos(2x)",
                "3 * (sin(2x))^2 * cos(2x)",
                "2 * (sin(2x))^3",
                "6 * sin(2x) * (cos(2x))^2"
            ],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai operasi hitung matriks berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Dua buah matriks dapat dijumlahkan jika dan hanya jika keduanya memiliki ordo yang sama." },
                { text: "Operasi perkalian dua buah matriks bersifat komutatif (A * B = B * A)." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nBanyaknya akar real dari persamaan kuadrat x^2 + 4x + 5 = 0 adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "0"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari integral substitusi integral 2x * (x^2 + 3)^4 dx?",
            jenisSoal: "pg-biasa",
            options: [
                "1/5 * (x^2 + 3)^5 + C",
                "(x^2 + 3)^5 + C",
                "1/4 * (x^2 + 3)^4 + C",
                "10x * (x^2 + 3)^3 + C"
            ],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan konsep geometri analitik di sebelah kiri dengan definisinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Jarak Titik ke Garis", "Vektor Satuan", "Gradien Garis"],
            pairs: [
                { question: "Rumus jarak terpendek dari suatu titik koordinat ke sebuah garis lurus.", correctMatch: "Jarak Titik ke Garis" },
                { question: "Vektor yang panjang atau besarnya sama dengan satu satuan.", correctMatch: "Vektor Satuan" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari modulus bilangan kompleks z = (3 - 4i) / (1 + 2i)?",
            jenisSoal: "pg-biasa",
            options: ["1", "5", "akar 5", "25"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai trigonometri lanjut berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Nilai maksimum dari fungsi f(x) = 2 sin x + 3 adalah 5." },
                { text: "Periode dasar dari fungsi tangen tan x adalah 2 * pi." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nNilai dari determinan matriks identitas ordo 3 x 3 adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "1"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari integral tentu batas 0 sampai pi/2 dari cos x dx?",
            jenisSoal: "pg-biasa",
            options: ["0", "1", "-1", "pi/2"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Pilihlah dua aturan yang digunakan dalam penyelesaian limit fungsi tak tentu di ketakhinggaan!",
            jenisSoal: "pg-kompleks",
            options: [
                "Membagi pembilang dan penyebut dengan variabel pangkat tertinggi.",
                "Menggunakan aturan turunan L'Hopital.",
                "Menggunakan rumus keliling lingkaran.",
                "Mengabaikan seluruh suku konstanta dalam polinomial."
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah hasil dari perkalian silang (cross product) vektor satuan i x j dalam koordinat tiga dimensi?",
            jenisSoal: "pg-biasa",
            options: ["k", "-k", "1", "0"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai sifat suku banyak (polinomial) berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Suatu polinomial berderajat n paling banyak memiliki n buah akar real." },
                { text: "Grafik fungsi polinomial berderajat ganjil selalu memotong sumbu-X sekurang-kurangnya satu kali." }
            ],
            correct: ["benar", "benar"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nNilai dari konstanta C dalam integral tak tentu integral 5 dx adalah fungsi linear 5x + ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "C"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari (cos 75 derajat * cos 15 derajat) + (sin 75 derajat * sin 15 derajat)?",
            jenisSoal: "pg-biasa",
            options: ["0", "1/2", "1/2 akar 2", "1"],
            correct: 1
        }
    ]
};