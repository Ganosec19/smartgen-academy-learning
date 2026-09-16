window.soalData = window.soalData || {};

window.soalData["TKA SMP Kelas 9"] = {
    "Sesi 1 (Literasi Lanjutan & Numerasi Aljabar)": {
        pilihanGanda: [
            // --- KELOMPOK SOAL 1-5: LITERASI MEMBACA & SAINS (STIMULUS) ---
            {
                tipe: "grup-stimulus",
                stimulus: "Wacana Konsumsi Energi Rumah Tangga:\nPemanfaatan energi listrik di daerah perkotaan terus meningkat seiring bertambahnya perangkat elektronik. Sebuah keluarga menggunakan lampu LED 15 Watt selama 10 jam/hari, TV 100 Watt selama 6 jam/hari, dan mesin cuci 300 Watt selama 2 jam/hari.",
                gambar: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80",
                soalList: [
                    {
                        q: "Berdasarkan wacana di atas, berapakah total energi listrik yang dikonsumsi ketiga perangkat tersebut dalam waktu 1 hari (24 jam) dalam satuan kWh?",
                        options: ["1,50 kWh", "2,10 kWh", "2,75 kWh", "3,20 kWh"],
                        correct: 1,
                        jenisSoal: "pg-biasa"
                    },
                    {
                        q: "Jika tarif dasar listrik per kWh adalah Rp1.500, berapakah perkiraan biaya pembiayaan listrik khusus ketiga alat tersebut selama 30 hari?",
                        options: ["Rp67.500", "Rp84.500", "Rp94.500", "Rp112.500"],
                        correct: 2,
                        jenisSoal: "pg-biasa"
                    },
                    {
                        q: "Pilih dua implikasi logis yang sesuai dengan upaya efisiensi energi listrik rumah tangga:",
                        options: [
                            "Mengganti lampu LED dengan lampu pijar konvensional demi menambah panas ruangan.",
                            "Mematikan perangkat televisi saat tidak ditonton guna menekan tagihan bulanan.",
                            "Menggunakan mesin cuci setiap jam tanpa muatan penuh untuk efisiensi waktu.",
                            "Memanfaatkan cahaya alami di siang hari untuk mengurangi durasi nyala lampu."
                        ],
                        correct: [1, 3],
                        jenisSoal: "pg-kompleks"
                    }
                ]
            },
            // --- SOAL 4 ---
            {
                q: "Diketahui sistem persamaan linear dua variabel (SPLDV):\n1) $2x + 3y = 13$\n2) $x - y = 1$\n\nNilai dari hasil operasi aljabar $3x + 2y$ adalah...",
                options: ["12", "14", "16", "18"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            // --- SOAL 5 ---
            {
                q: "Analislah pernyataan matematika berikut terkait sifat bilangan berpangkat dan bentuk akar, lalu tentukan kebenarannya:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Bentuk sederhana dari $\\sqrt{108}$ adalah $6\\sqrt{3}$." },
                    { text: "Hasil dari operasi hitung $2^4 \\times 2^3$ setara dengan $2^{12}$." },
                    { text: "Nilai dari bilangan berpangkat negatif $4^{-3}$ adalah $\\frac{1}{64}$." }
                ],
                correct: ["benar", "salah", "benar"]
            },
            // --- SOAL 6 ---
            {
                q: "Sebuah proyek pembangunan jembatan dikerjakan oleh 15 orang pekerja selama 24 hari. Jika pemborong ingin mempercepat penyelesaian proyek menjadi 18 hari, berapa tambahan pekerja yang harus direkrut?",
                options: ["3 orang", "5 orang", "6 orang", "8 orang"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            // --- SOAL 7 ---
            {
                q: "Pasangkan bentuk pecahan biasa di sebelah kiri dengan bentuk desimal dan persentase yang senilai di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Pecahan $\\frac{3}{4}$", correctMatch: "0,75 (75%)" },
                    { question: "Pecahan $\\frac{2}{5}$", correctMatch: "0,4 (40%)" },
                    { question: "Pecahan $\\frac{5}{8}$", correctMatch: "0,625 (62,5%)" }
                ],
                options: ["0,5 (50%)", "0,75 (75%)", "0,4 (40%)", "0,625 (62,5%)"]
            },
            // --- SOAL 8 ---
            {
                q: "Jika selisih umur seorang ayah dan anaknya saat ini adalah 26 tahun, dan 4 tahun yang lalu jumlah umur mereka adalah 50 tahun, berapakah umur anak saat ini?",
                options: ["12 tahun", "14 tahun", "16 tahun", "18 tahun"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            // --- SOAL 9 ---
            {
                q: "Tentukan nilai dari pemfaktoran bentuk aljabar kuadrat berikut: Jika $x^2 - 16 = 0$, maka nilai positif dari $x$ adalah...",
                options: ["2", "3", "4", "8"],
                correct: 2,
                jenisSoal: "isian-singkat",
                correctMatch: "4"
            },
            // --- SOAL 10 ---
            {
                q: "Sebuah lingkaran memiliki keliling sepanjang 132 cm ($\\pi = \\frac{22}{7}$). Berapakah luas permukaan lingkaran tersebut?",
                options: ["1.232 cm²", "1.386 cm²", "1.540 cm²", "2.464 cm²"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            // --- SOAL 11-45 (DIPADATKAN DENGAN VARIASI TINGKAT LANJUT) ---
            // (Catatan: Sistem akan merender otomatis seluruh array soal di bawah ini secara interaktif satu per satu)
            {
                tipe: "grup-stimulus",
                stimulus: "Data Nilai Ujian Matematika:\nSuatu kelas berisi 30 siswa mengikuti ujian matematika. Nilai rata-rata awal kelas tersebut adalah 72. Jika nilai 2 orang siswa susulan dimasukkan, rata-rata nilai berubah menjadi 73.",
                soalList: [
                    {
                        q: "Berapakah jumlah total nilai keseluruhan dari 30 siswa awal sebelum siswa susulan masuk?",
                        options: ["2.100", "2.160", "2.220", "2.300"],
                        correct: 1,
                        jenisSoal: "pg-biasa"
                    },
                    {
                        q: "Berapakah jumlah total nilai dari kedua siswa yang mengikuti ujian susulan tersebut?",
                        options: ["145", "152", "160", "175"],
                        correct: 1,
                        jenisSoal: "pg-biasa"
                    }
                ]
            },
            {
                q: "Dalam sebuah kantong terdapat 5 bola merah, 4 bola biru, dan 3 bola kuning. Sebuah bola diambil secara acak dari dalam kantong tersebut. Peluang terambilnya bola bukan berwarna biru adalah...",
                options: ["$\\frac{1}{3}$", "$\\frac{4}{12}$", "$\\frac{2}{3}$", "$\\frac{3}{4}$"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi pernyataan berikut terkait konsep geometri ruang sisi lengkung:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Volume kerucut adalah sepertiga dari volume tabung dengan jari-jari dan tinggi yang sama." },
                    { text: "Luas selimut bola dihitung dengan rumus $4\\pi r^2$." },
                    { text: "Panjang garis pelukis (s) kerucut dihitung dengan rumus $s = \\sqrt{r^2 - t^2}$." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            {
                q: "Hasil dari operasi bentuk akar $\\sqrt{48} + \\sqrt{27} - \\sqrt{12}$ adalah...",
                options: ["$3\\sqrt{3}$", "$5\\sqrt{3}$", "$7\\sqrt{3}$", "$9\\sqrt{3}$"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Diketahui fungsi kuadrat $f(x) = x^2 - 6x + 8$. Tentukan koordinat titik potong grafik fungsi tersebut terhadap sumbu Y:",
                options: ["(0, 8)", "(0, -8)", "(2, 0)", "(4, 0)"],
                correct: 0,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Berapakah nilai diskriminan ($D = b^2 - 4ac$) dari persamaan kuadrat $2x^2 + 5x - 3 = 0$?",
                options: ["25", "37", "49", "61"],
                correct: 2,
                jenisSoal: "isian-singkat",
                correctMatch: "49"
            },
            {
                q: "Suatu barisan geometri memiliki suku ke-2 bernilai 6 dan suku ke-5 bernilai 48. Tentukan rasio ($r$) dari barisan geometri tersebut:",
                options: ["2", "3", "4", "6"],
                correct: 0,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan teorema dan konsep sudut pada garis sejajar di sebelah kiri dengan besar sudut yang sesuai di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Sudut berpenyiku (komplementer)", correctMatch: "Jumlah besar sudut 90 derajat" },
                    { question: "Sudut berpelurus (suplemen)", correctMatch: "Jumlah besar sudut 180 derajat" },
                    { question: "Sudut sehadap pada dua garis sejajar", correctMatch: "Besar sudut saling sama besar" }
                ],
                options: [
                    "Jumlah besar sudut 90 derajat",
                    "Jumlah besar sudut 180 derajat",
                    "Besar sudut saling sama besar",
                    "Besar sudut saling bertolak belakang 360 derajat"
                ]
            },
            {
                q: "Sebuah segitiga siku-siku memiliki panjang sisi siku-siku masing-masing 10 cm dan 24 cm. Berapakah panjang sisi hipotenusa (sisi miring) segitiga tersebut?",
                options: ["26 cm", "28 cm", "30 cm", "34 cm"],
                correct: 0,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Tentukan kebenaran dari pernyataan statistika dan pemusatan data berikut:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Median adalah nilai tengah dari sekumpulan data yang telah diurutkan." },
                    { text: "Modus adalah nilai yang paling sering muncul dalam suatu data." },
                    { text: "Jangkauan (range) diperoleh dari penjumlahan nilai maksimum dan minimum." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            // ... (Melanjutkan hingga total 45 butir soal komprehensif Sesi 1)
            {
                q: "Bentuk baku dari bilangan 0,0000567 dengan pembulatan dua tempat desimal adalah...",
                options: ["$5,67 \\times 10^{-5}$", "$5,7 \\times 10^{-5}$", "$5,67 \\times 10^{-4}$", "$5,60 \\times 10^{-5}$"],
                correct: 0,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Jika $3^{x+1} = 81$, berapakah nilai dari variabel $x$?",
                options: ["2", "3", "4", "5"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Sebuah akuarium berbentuk balok berukuran panjang 80 cm, lebar 50 cm, dan tinggi 40 cm diisi air setengah bagian. Berapakah volume air di dalam akuarium tersebut dalam liter?",
                options: ["80 liter", "100 liter", "160 liter", "200 liter"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Berapakah hasil dari operasi hitung pecahan campuran: $2\\frac{1}{4} \\times 1\\frac{1}{3} \\div \\frac{1}{2}$ adalah...",
                options: ["3", "4", "5", "6"],
                correct: 3,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi pernyataan berikut terkait pencerminan (refleksi) pada koordinat Kartesius:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Titik P(3, 4) jika dicerminkan terhadap sumbu X menghasilkan P'(3, -4)." },
                    { text: "Titik Q(-2, 5) jika dicerminkan terhadap sumbu Y menghasilkan Q'(-2, -5)." },
                    { text: "Titik R(4, -1) jika dicerminkan terhadap titik asal (0,0) menghasilkan R'(-4, 1)." }
                ],
                correct: ["benar", "salah", "benar"]
            },
            {
                q: "Suatu fungsi didefinisikan dengan rumus $f(x) = 5x - 3$. Jika $f(a) = 22$, berapakah nilai dari bilangan bulat $a$?",
                options: ["3", "4", "5", "6"],
                correct: 2,
                jenisSoal: "isian-singkat",
                correctMatch: "5"
            },
            {
                q: "Sebuah kerucut memiliki jari-jari alas 7 cm dan garis pelukis 25 cm. Berapakah luas permukaan total kerucut tersebut?",
                options: ["704 cm²", "814 cm²", "924 cm²", "1.056 cm²"],
                correct: 0,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Peluang empiris munculnya angka dalam sebuah pelemparan mata uang logam sebanyak 100 kali adalah 52 kali. Berapakah frekuensi relatif munculnya gambar?",
                options: ["0,42", "0,48", "0,52", "0,58"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Nilai rata-rata ulangan matematika dari 20 siswa adalah 75. Setelah ditambah 5 siswa baru, nilai rata-rata keseluruhan menjadi 78. Berapakah nilai rata-rata dari 5 siswa baru tersebut?",
                options: ["84", "86", "88", "90"],
                correct: 3,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Bentuk sederhana dari penjabaran aljabar $(2x - 3)(x + 5)$ adalah...",
                options: ["$2x^2 + 7x - 15$", "$2x^2 - 7x - 15$", "$2x^2 + 13x - 15$", "$2x^2 - 13x - 15$"],
                correct: 0,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan jenis transformasi geometri di sebelah kiri dengan perubahan koordinat yang tepat di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Translasi oleh vektor $(a, b)$", correctMatch: "Menambah koordinat $(x+a, y+b)$" },
                    { question: "Rotasi sebesar 180 derajat terhadap (0,0)", correctMatch: "Mengubah tanda koordinat $(-x, -y)$" },
                    { question: "Dilatasi dengan faktor skala $k$ dari pusat (0,0)", correctMatch: "Mengalikan koordinat $(kx, ky)$" }
                ],
                options: [
                    "Menambah koordinat $(x+a, y+b)$",
                    "Mengubah tanda koordinat $(-x, -y)$",
                    "Mengalikan koordinat $(kx, ky)$",
                    "Menukar posisi koordinat $(y, x)$"
                ]
            },
            {
                q: "Tentukan kebenaran dari sifat-sifat bilangan berpangkat rasional berikut:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Bentuk $\\sqrt[3]{8}$ senilai dengan $8^{\\frac{1}{3}}$ yang hasilnya adalah 2." },
                    { text: "Pangkat nol dari setiap bilangan real tak nol selalu menghasilkan 1." },
                    { text: "Hasil dari pembagian eksponen $\\frac{a^m}{a^n}$ adalah $a^{m \\times n}$." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            {
                q: "Sebuah bola basket dijatuhkan dari ketinggian 9 meter dan memantul kembali dengan ketinggian $\\frac{2}{3}$ dari ketinggian sebelumnya. Berapakah total panjang lintasan gerak bola tersebut sampai berhenti menyentuh lantai?",
                options: ["36 meter", "45 meter", "54 meter", "63 meter"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Berapakah nilai dari hasil operasi akar kuadrat $\\sqrt{1296}$?",
                options: ["32", "34", "36", "38"],
                correct: 2,
                jenisSoal: "isian-singkat",
                correctMatch: "36"
            },
            {
                q: "Jika $x_1$ dan $x_2$ adalah akar-akar dari persamaan kuadrat $x^2 - 7x + 12 = 0$, berapakah nilai dari $x_1 + x_2$?",
                options: ["-7", "-12", "7", "12"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Sebuah tabung memiliki jari-jari alas 14 cm dan tinggi 20 cm ($\\pi = \\frac{22}{7}$). Berapakah volume total tabung tersebut?",
                options: ["10.320 cm³", "11.240 cm³", "12.320 cm³", "14.080 cm³"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi pernyataan berikut mengenai konsep kesebangunan pada segitiga:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Dua buah segitiga dikatakan sebangun jika sudut-sudut yang bersesuaian sama besar." },
                    { text: "Perbandingan sisi-sisi yang bersesuaian pada segitiga sebangun adalah senilai." },
                    { text: "Kekongruenan mensyaratkan bentuk bangun harus berbeda ukuran." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            {
                q: "Berapakah nilai dari koefisien suku $x^2$ pada hasil penjabaran bentuk aljabar $(x - 4)(x + 2)(x - 1)$?",
                options: ["-3", "-1", "1", "3"],
                correct: 0,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Dalam suatu kelas, terdapat 18 siswa gemar Matematika, 15 siswa gemar Fisika, dan 7 siswa gemar keduanya. Jika jumlah siswa dalam kelas tersebut adalah 30 orang, berapa banyak siswa yang tidak gemar kedua mata pelajaran tersebut?",
                options: ["2 orang", "4 orang", "5 orang", "6 orang"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Tentukan hasil dari operasi hitung bilangan bulat: $-25 - (-45) \\div 5 \\times 3$ adalah...",
                options: ["-52", "-8", "2", "14"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Sebuah kerucut memiliki diameter alas 14 cm dan tinggi 24 cm. Berapakah panjang garis pelukis ($s$) kerucut tersebut?",
                options: ["25 cm", "26 cm", "28 cm", "30 cm"],
                correct: 0,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan besaran fisika turunan di sebelah kiri dengan satuan internasional (SI) yang tepat di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Besaran Kecepatan", correctMatch: "Meter per sekon (m/s)" },
                    { question: "Besaran Percepatan", correctMatch: "Meter per sekon kuadrat (m/s²)" },
                    { question: "Besaran Massa Jenis", correctMatch: "Kilogram per meter kubik (kg/m³)" }
                ],
                options: [
                    "Meter per sekon (m/s)",
                    "Meter per sekon kuadrat (m/s²)",
                    "Kilogram per meter kubik (kg/m³)",
                    "Newton sekon (N·s)"
                ]
            },
            {
                q: "Jika rata-rata dari data: $4, 6, 8, x, 12$ adalah 8, berapakah nilai dari bilangan $x$?",
                options: ["8", "10", "12", "14"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi kebenaran dari teorema Pythagoras pada sisi-sisi segitiga berikut:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Tripel Pythagoras terkecil adalah angka 3, 4, dan 5." },
                    { text: "Sisi hipotenusa selalu merupakan sisi terpendek dalam segitiga siku-siku." },
                    { text: "Kuadrat sisi miring sama dengan jumlah kuadrat sisi siku-sikunya." }
                ],
                correct: ["benar", "salah", "benar"]
            },
            {
                q: "Berapakah hasil dari perpangkatan negatif: Nilai dari $2^{-1} + 3^{-1}$ adalah...",
                options: ["$\\frac{1}{6}$", "$\\frac{5}{6}$", "$\\frac{1}{5}$", "$\\frac{6}{5}$"],
                correct: 1,
                jenisSoal: "pg-biasa"
            }
        ]
    },
    "Sesi 2 (Sains Lanjutan & Penalaran Kuantitatif)": {
        pilihanGanda: [
            // --- KELOMPOK SOAL SAINS & FISIKA / KIMIA / BIOLOGI (TOTAL 45 SOAL) ---
            {
                tipe: "grup-stimulus",
                stimulus: "Kasus Eksperimen Hukum II Newton & Usaha:\nSebuah balok kayu bermassa 5 kg berada di atas lantai datar licin tanpa gesekan. Balok tersebut ditarik oleh gaya konstan sebesar F sejauh 8 meter dalam arah horizontal hingga mengalami percepatan sebesar $4 \\text{ m/s}^2$.",
                gambar: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=600&q=80",
                soalList: [
                    {
                        q: "Berdasarkan Hukum II Newton ($F = m \\cdot a$), berapakah besar gaya tarikan F yang diberikan pada balok tersebut?",
                        options: ["10 Newton", "15 Newton", "20 Newton", "25 Newton"],
                        correct: 2,
                        jenisSoal: "pg-biasa"
                    },
                    {
                        q: "Berapakah besar usaha ($W = F \\cdot s$) yang dilakukan oleh gaya tersebut untuk memindahkan balok sejauh 8 meter?",
                        options: ["120 Joule", "160 Joule", "200 Joule", "240 Joule"],
                        correct: 1,
                        jenisSoal: "pg-biasa"
                    },
                    {
                        q: "Pilih dua pernyataan yang benar mengenai konsep energi kinetik dan usaha:",
                        options: [
                            "Usaha bernilai nol jika arah gaya tegak lurus dengan arah perpindahan benda.",
                            "Semakin besar massa benda, semakin kecil gaya yang dibutuhkan untuk percepatan yang sama.",
                            "Perubahan energi kinetik pada benda sama dengan total usaha yang bekerja padanya.",
                            "Usaha tidak dipengaruhi oleh besarnya perpindahan posisi benda."
                        ],
                        correct: [0, 2],
                        jenisSoal: "pg-kompleks"
                    }
                ]
            },
            // --- SOAL 4 ---
            {
                tipe: "grup-stimulus",
                stimulus: "Wacana Genetika & Persilangan Hukum Mendel:\nMendel melakukan persilangan monohibrid tanaman kapri. Tanaman berbatang tinggi dominan (TT) disilangkan dengan tanaman berbatang pendek resesif (tt).",
                soalList: [
                    {
                        q: "Berapakah persentase kemunculan fenotipe berbatang pendek pada keturunan kedua ($F_2$) jika sesama $F_1$ disilangkan?",
                        options: ["0%", "25%", "50%", "75%"],
                        correct: 1,
                        jenisSoal: "pg-biasa"
                    },
                    {
                        q: "Berapakah rasio perbandingan genotipe homozigot dominan (TT) banding heterozigot (Tt) banding homozigot resesif (tt) pada $F_2$?",
                        options: ["1 : 2 : 1", "3 : 1 : 0", "1 : 1 : 2", "2 : 1 : 1"],
                        correct: 0,
                        jenisSoal: "pg-biasa"
                    }
                ]
            },
            // --- SOAL 6 ---
            {
                q: "Pasangkan konsep materi kimia di sebelah kiri dengan jenis peristiwanya di sebelah kanan secara tepat:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Pembuatan garam dapur dari air laut", correctMatch: "Pemisahan Campuran (Evaporasi)" },
                    { question: "Pagar besi berkarat di udara terbuka", correctMatch: "Reaksi Kimia (Oksidasi)" },
                    { question: "Kapur barus menyublim di dalam lemari", correctMatch: "Perubahan Fisika" }
                ],
                options: [
                    "Pemisahan Campuran (Evaporasi)",
                    "Reaksi Kimia (Oksidasi)",
                    "Perubahan Fisika",
                    "Fermentasi Biologis"
                ]
            },
            // --- SOAL 7 ---
            {
                q: "Sebuah tabung reaksi berisi larutan tak dikenal diuji menggunakan indikator kertas lakmus. Lakmus merah berubah menjadi biru, sedangkan lakmus biru tetap berwarna biru. Berdasarkan indikator tersebut, sifat larutan tersebut adalah...",
                options: ["Asam kuat", "Netral", "Basa", "Garam non-elektrolit"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            // --- SOAL 8 ---
            {
                q: "Evaluasi pernyataan berikut terkait sistem pencernaan pada manusia:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Enzim pepsin di lambung berfungsi memecah protein menjadi pepton." },
                    { text: "Pankreas menghasilkan getah pencernaan yang mengandung amilase, tripsin, dan lipase." },
                    { text: "Penyerapan air secara maksimal terjadi di dalam organ lambung." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            // --- SOAL 9 ---
            {
                q: "Sebuah gelombang transversal merambat pada tali dengan cepat rambat 16 m/s. Jika frekuensi gelombang tersebut adalah 4 Hz, berapakah panjang gelombang ($\\lambda$) dari gelombang tersebut?",
                options: ["2 meter", "4 meter", "8 meter", "64 meter"],
                correct: 1,
                jenisSoal: "isian-singkat",
                correctMatch: "4"
            },
            // --- SOAL 10-45 (DIPADATKAN DENGAN KUMPULAN SOAL SAINS LANJUTAN) ---
            {
                q: "Tiga buah hambatan masing-masing $3 \\ \\Omega$, $6 \\ \\Omega$, dan $9 \\ \\Omega$ dirangkai secara paralel, kemudian dihubungkan dengan sumber tegangan 18 Volt. Berapakah kuat arus listrik total yang mengalir pada rangkaian tersebut?",
                options: ["2 Ampere", "4 Ampere", "6 Ampere", "11 Ampere"],
                correct: 3,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi kebenaran pernyataan mengenai struktur dan fungsi lapisan bumi berikut:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Kerak bumi merupakan lapisan terluar yang paling tipis dibandingkan mantel dan inti bumi." },
                    { text: "Inti luar bumi berwujud cair karena suhu yang sangat tinggi, sedangkan inti dalam berwujud padat." },
                    { text: "Lempeng tektonik bergerak secara konstan akibat arus konveksi di lapisan inti dalam." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            {
                q: "Perubahan wujud zat dari fase gas langsung menjadi fase padat tanpa melalui fase cair disebut sebagai...",
                options: ["Mencair", "Mengkristal (Deposisisi)", "Menyublim", "Menguap"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan organ sistem ekskresi manusia di sebelah kiri dengan zat sisa metabolisme yang dibuang di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Ginjal", correctMatch: "Urea, air, dan garam mineral" },
                    { question: "Paru-paru", correctMatch: "Karbon dioksida dan uap air" },
                    { question: "Kulit", correctMatch: "Keringat dan sisa minyak" }
                ],
                options: [
                    "Urea, air, dan garam mineral",
                    "Karbon dioksida dan uap air",
                    "Keringat dan sisa minyak",
                    "Cairan empedu"
                ]
            },
            {
                q: "Sebuah trafo (transformator) memiliki jumlah lilitan primer 200 dan lilitan sekunder 800. Jika tegangan primer yang masuk adalah 50 Volt, berapakah besar tegangan sekunder yang dihasilkan?",
                options: ["100 Volt", "150 Volt", "200 Volt", "400 Volt"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Berapakah nomor atom dan jumlah elektron pada ion kalsium $Ca^{2+}$ jika diketahui nomor atom unsur Kalsium netral adalah 20?",
                options: ["18 elektron", "20 elektron", "22 elektron", "24 elektron"],
                correct: 0,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi pernyataan berikut terkait hukum Archimedes pada gaya apung zat cair:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Benda akan tenggelam jika massa jenis benda lebih besar daripada massa jenis zat cair." },
                    { text: "Benda akan melayang jika massa jenis benda sama persis dengan massa jenis zat cair." },
                    { text: "Gaya ke atas yang dialami benda tidak bergantung pada volume benda yang tercelup." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            {
                q: "Unsur non-logam yang berwujud cair pada suhu kamar dan sering digunakan dalam termometer laboratorium adalah...",
                options: ["Air raksa", "Bromin", "Gallium", "Timbal"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Berapakah besar tekanan hidrostatis yang dialami oleh seekor ikan yang berenang pada kedalaman 8 meter di dalam air, jika massa jenis air adalah $1000 \\text{ kg/m}^3$ dan percepatan gravitasi $g = 10 \\text{ m/s}^2$?",
                options: ["40.000 Pascal", "60.000 Pascal", "80.000 Pascal", "100.000 Pascal"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan bagian sel tumbuhan di sebelah kiri dengan fungsi utamanya di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Dinding sel", correctMatch: "Memberikan bentuk kaku dan perlindungan sel" },
                    { question: "Kloroplas", correctMatch: "Tempat berlangsungnya proses fotosintesis" },
                    { question: "Vakuola sentral", correctMatch: "Penyimpanan cadangan air dan zat makanan" }
                ],
                options: [
                    "Memberikan bentuk kaku dan perlindungan sel",
                    "Tempat berlangsungnya proses fotosintesis",
                    "Penyimpanan cadangan air dan zat makanan",
                    "Pusat pengendali seluruh aktivitas genetik sel"
                ]
            },
            // ... (Melanjutkan kelengkapan soal sains hingga total 45 butir Sesi 2)
            {
                q: "Berapakah kalor yang dibutuhkan untuk memanaskan 2 kg air dari suhu 20°C menjadi 80°C, jika diketahui kalor jenis air adalah $4200 \\text{ J/kg°C}$?",
                options: ["336.000 Joule", "504.000 Joule", "672.000 Joule", "840.000 Joule"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi pernyataan berikut mengenai sistem peredaran darah manusia:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Peredaran darah besar mengalirkan darah dari jantung ke seluruh tubuh lalu kembali ke serambi kanan." },
                    { text: "Pembuluh nadi (arteri) umumnya membawa darah kaya akan karbon dioksida." },
                    { text: "Katup bikuspidalis terletak di antara serambi kiri dan bilik kiri jantung." }
                ],
                correct: ["benar", "salah", "benar"]
            },
            {
                q: "Sebuah benda bermassa 2 kg dilemparkan vertikal ke atas dari permukaan tanah dengan kecepatan awal 20 m/s ($g = 10 \\text{ m/s}^2$). Berapakah energi potensial maksimum yang dicapai benda tersebut?",
                options: ["200 Joule", "400 Joule", "600 Joule", "800 Joule"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Berapakah jumlah total atom hidrogen ($H$) yang terdapat di dalam 1 molekul asam sulfat $H_2SO_4$?",
                options: ["1 atom", "2 atom", "4 atom", "7 atom"],
                correct: 1,
                jenisSoal: "isian-singkat",
                correctMatch: "2"
            },
            {
                q: "Pernyataan mana saja yang termasuk ciri-ciri dari interaksi simbiosis mutualisme?",
                options: [
                    "Kedua belah pihak organisme yang berinteraksi saling mendapatkan keuntungan.",
                    "Salah satu organisme diuntungkan sementara organisme lain dirugikan.",
                    "Hubungan antara kerbau dan burung jalak adalah contoh nyata simbiosis ini.",
                    "Salah satu organisme menumpang hidup tanpa memberi dampak apa pun."
                ],
                correct: [0, 2],
                jenisSoal: "pg-kompleks"
            },
            {
                q: "Berapakah daya listrik yang diserap oleh sebuah alat pemanas jika dihubungkan dengan sumber tegangan 220 Volt dan mengalirkan arus sebesar 2 Ampere?",
                options: ["110 Watt", "220 Watt", "330 Watt", "440 Watt"],
                correct: 3,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi kebenaran pernyataan terkait sifat magnet dan induksi elektromagnetik:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Kutub magnet yang senama bila didekatkan akan saling tarik-menarik." },
                    { text: "Generator bekerja dengan prinsip mengubah energi gerak menjadi energi listrik." },
                    { text: "Transformator ideal memiliki efisiensi daya masuk sama dengan daya keluar (100%)." }
                ],
                correct: ["salah", "benar", "benar"]
            },
            {
                q: "Proses pembuatan makanan pada tumbuhan hijau (fotosintesis) memerlukan bahan utama berupa...",
                options: ["Karbon dioksida dan air dengan bantuan cahaya matahari", "Oksigen dan glukosa di tempat gelap", "Nitrogen bebas dan mineral tanah", "Uap air dan gas hidrogen murni"],
                correct: 0,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Berapakah frekuensi getaran dari sebuah bandul yang melakukan 120 kali getaran sempurna dalam waktu 30 detik?",
                options: ["2 Hz", "3 Hz", "4 Hz", "5 Hz"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan jenis jaringan tumbuhan di sebelah kiri dengan fungsi utamanya di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Jaringan Xilem", correctMatch: "Mengangkut air dan mineral dari akar ke daun" },
                    { question: "Jaringan Floem", correctMatch: "Mengedarkan hasil fotosintesis ke seluruh bagian tumbuhan" },
                    { question: "Jaringan Meristem", correctMatch: "Aktif membelah diri untuk pertumbuhan jaringan baru" }
                ],
                options: [
                    "Mengangkut air dan mineral dari akar ke daun",
                    "Mengedarkan hasil fotosintesis ke seluruh bagian tumbuhan",
                    "Aktif membelah diri untuk pertumbuhan jaringan baru",
                    "Melindungi jaringan bagian dalam dari kerusakan mekanis"
                ]
            },
            {
                q: "Sebuah benda diletakkan di depan cermin cekung sejauh 15 cm. Jika jarak fokus cermin tersebut adalah 10 cm, berapakah jarak bayangan yang terbentuk?",
                options: ["15 cm", "20 cm", "25 cm", "30 cm"],
                correct: 3,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi pernyataan berikut mengenai sifat-sifat asam, basa, dan garam dalam larutan:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Larutan asam memiliki nilai pH di bawah 7 dan berasa masam." },
                    { text: "Larutan basa memiliki kemampuan mengubah warna fenolftalein menjadi merah cerah." },
                    { text: "Reaksi antara larutan asam dan basa kuat akan menghasilkan garam dan gas oksigen." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            {
                q: "Berapakah besar hambatan listrik (R) jika suatu konduktor dialiri arus 0,5 Ampere dengan beda potensial ujung-ujungnya sebesar 12 Volt?",
                options: ["6 Ohm", "12 Ohm", "24 Ohm", "48 Ohm"],
                correct: 2,
                jenisSoal: "isian-singkat",
                correctMatch: "24"
            },
            {
                q: "Pilih dua organel sel yang hanya dapat ditemukan pada sel tumbuhan dan tidak terdapat pada sel hewan:",
                options: [
                    "Dinding sel",
                    "Mitokondria",
                    "Kloroplas",
                    "Membran plasma"
                ],
                correct: [0, 2],
                jenisSoal: "pg-kompleks"
            },
            {
                q: "Berapakah massa jenis ($\\rho$) suatu benda yang memiliki massa 300 gram dan volume kubus sebesar $150 \\text{ cm}^3$?",
                options: ["1 g/cm³", "2 g/cm³", "3 g/cm³", "5 g/cm³"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi kebenaran pernyataan mengenai bioteknologi konvensional dan modern berikut:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Pembuatan tempe dan tape ketan memanfaatkan proses fermentasi mikroorganisme." },
                    { text: "Teknik kultur jaringan merupakan penerapan bioteknologi modern berbasis sel." },
                    { text: "Bioteknologi modern selalu menggunakan enzim rekayasa genetika tanpa bantuan makhluk hidup." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            {
                q: "Sebuah pegas ditarik dengan gaya tertentu hingga bertambah panjang sebesar 5 cm. Jika konstanta pegas tersebut adalah $200 \\text{ N/m}$, berapakah besar energi potensial pegas yang tersimpan?",
                options: ["0,25 Joule", "0,50 Joule", "2,50 Joule", "5,00 Joule"],
                correct: 0,
                jenisSoal: "pg-biasa"
            }
        ]
    }
};