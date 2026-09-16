window.soalData = window.soalData || {};

window.soalData["TKA SD Kelas 6"] = {
    "Sesi 1 (Literasi & Numerasi Dasar)": {
        pilihanGanda: [
            // --- STIMULUS 1: AIR BERSIH (SINKRON DENGAN WACANA KEBUTUHAN CAIRAN) ---
            {
                tipe: "grup-stimulus",
                stimulus: "Wacana Konsumsi Air Bersih:\nKetersediaan air bersih sangat penting bagi kesehatan tubuh manusia. Setiap anak disarankan untuk mencukupi kebutuhan cairan tubuh dengan meminum air putih minimal 8 gelas atau setara dengan 2 liter setiap harinya agar terhindar dari dehidrasi.",
                bannerIcon: "fa-solid fa-glass-water",
                bannerTitle: "Ilustrasi Kontekstual: Kebutuhan Cairan & Hidrasi Tubuh",
                soalList: [
                    {
                        q: "Berdasarkan wacana dan ilustrasi di atas, berapa liter minimal anjuran konsumsi air putih untuk seorang anak setiap harinya?",
                        options: ["1,0 Liter", "1,5 Liter", "2,0 Liter", "2,5 Liter"],
                        correct: 2,
                        jenisSoal: "pg-biasa"
                    },
                    {
                        q: "Pilih dua dampak negatif yang dapat terjadi jika tubuh seseorang mengalami kekurangan cairan (dehidrasi):",
                        options: [
                            "Tubuh merasa cepat lemas, pusing, dan kurang konsentrasi.",
                            "Kinerja fisik dan konsentrasi belajar meningkat drastis.",
                            "Kulit dan bibir menjadi kering serta terasa sangat haus.",
                            "Suhu tubuh menjadi sangat dingin di bawah normal."
                        ],
                        correct: [0, 2],
                        jenisSoal: "pg-kompleks"
                    }
                ]
            },
            // --- STIMULUS 2: BELANJA BUKU (SINKRON DENGAN ILUSTRASI PERLENGKAPAN SEKOLAH) ---
            {
                tipe: "grup-stimulus",
                stimulus: "Ilustrasi Belanja Buku Tulis:\nBudi pergi ke toko buku untuk membeli perlengkapan sekolah menggunakan uang tabungannya. Ia membeli 3 buku tulis dengan harga masing-masing Rp4.500 dan 2 buah pulpen dengan harga masing-masing Rp3.000.",
                bannerIcon: "fa-solid fa-cart-shopping",
                bannerTitle: "Ilustrasi Kontekstual: Transaksi Belanja & Keuangan",
                soalList: [
                    {
                        q: "Berapakah total harga belanjaan yang harus dibayar oleh Budi di kasir?",
                        options: ["Rp16.500", "Rp18.500", "Rp19.500", "Rp21.000"],
                        correct: 2,
                        jenisSoal: "pg-biasa"
                    },
                    {
                        q: "Jika Budi membayar dengan selembar uang pecahan Rp25.000, berapakah uang kembalian yang akan diterimanya?",
                        options: ["Rp3.500", "Rp4.500", "Rp5.500", "Rp6.500"],
                        correct: 2,
                        jenisSoal: "pg-biasa"
                    }
                ]
            },
            // --- SOAL-SOAL NUMERASI & LITERASI LANJUTAN ---
            {
                q: "Hasil dari operasi hitung pecahan: $2\\frac{1}{2} + 1\\frac{1}{4} - \\frac{3}{4}$ adalah...",
                options: ["2", "$2\\frac{1}{4}$", "$2\\frac{1}{2}$", "3"],
                correct: 3,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan operasi hitung pecahan di sebelah kiri dengan hasil nilai desimal yang tepat di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Pecahan $\\frac{1}{2}$", correctMatch: "0,5" },
                    { question: "Pecahan $\\frac{3}{4}$", correctMatch: "0,75" },
                    { question: "Pecahan $\\frac{2}{5}$", correctMatch: "0,4" },
                    { question: "Pecahan $\\frac{1}{4}$", correctMatch: "0,25" }
                ],
                options: ["0,2", "0,25", "0,4", "0,5", "0,75"]
            },
            {
                q: "Sebuah lapangan berbentuk persegi memiliki panjang sisi 25 meter. Berapakah luas total dari lapangan tersebut?",
                options: ["100 meter persegi", "500 meter persegi", "625 meter persegi", "750 meter persegi"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi kebenaran dari sifat-sifat bangun datar berikut pada tabel:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Persegi panjang memiliki 4 sisi dan keempat sudutnya siku-siku." },
                    { text: "Segitiga sama sisi memiliki tiga sisi yang panjangnya berbeda." },
                    { text: "Lingkaran memiliki simetri putar dan simetri lipat tak terhingga." }
                ],
                correct: ["benar", "salah", "benar"]
            },
            {
                q: "KPK dari bilangan 12 dan 18 adalah...",
                options: ["24", "36", "48", "72"],
                correct: 1,
                jenisSoal: "isian-singkat",
                correctMatch: "36"
            },
            {
                q: "FPB dari bilangan 48 dan 72 adalah...",
                options: ["12", "16", "24", "36"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Ibu membeli 4 kg gula pasir. Sebanyak $\\frac{3}{4}$ bagian digunakan untuk membuat kue, dan sisanya disimpan di dalam toples. Berapa kg gula pasir yang disimpan di dalam toples?",
                options: ["1 kg", "2 kg", "$2\\frac{1}{4}$ kg", "$3\\frac{1}{4}$ kg"],
                correct: 3,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan satuan ukuran panjang di sebelah kiri dengan kesetaraan nilai meter yang tepat di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "2,5 Kilometer (km)", correctMatch: "2.500 Meter" },
                    { question: "45 Hektometer (hm)", correctMatch: "4.500 Meter" },
                    { question: "150 Sentimeter (cm)", correctMatch: "1,5 Meter" }
                ],
                options: ["15 Meter", "1,5 Meter", "2.500 Meter", "4.500 Meter"]
            },
            {
                q: "Hasil dari operasi hitung campuran: $200 + 50 \\times 3 - 120$ adalah...",
                options: ["130", "180", "230", "280"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Sebuah tangki air berbentuk kubus memiliki panjang rusuk 50 cm. Berapakah volume air dalam liter yang dapat ditampung tangki tersebut?",
                options: ["25 liter", "50 liter", "125 liter", "250 liter"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi pernyataan mengenai skala denah dan peta berikut:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Skala 1 : 1.000.000 berarti 1 cm pada peta mewakili 10 km pada jarak sebenarnya." },
                    { text: "Jarak sebenarnya dihitung dengan rumus Jarak Peta dibagi Skala." },
                    { text: "Ukuran pada peta selalu lebih besar daripada ukuran benda di dunia nyata." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            {
                q: "Suhu di dalam ruang pendingin mula-mula adalah -5°C. Ketika mesin pendingin dimatikan, suhunya naik 3°C setiap 12 menit. Berapakah suhu ruangan setelah 36 menit?",
                options: ["+2°C", "+4°C", "+6°C", "+9°C"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan operasi hitung bilangan bulat di sebelah kiri dengan hasil akhir yang tepat di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "-45 + 75 - 10", correctMatch: "20" },
                    { question: "12 × (-4) + 50", correctMatch: "2" },
                    { question: "-80 ÷ (-4) + 15", correctMatch: "35" }
                ],
                options: ["-20", "2", "20", "35"]
            },
            {
                q: "Berapakah hasil dari akar kuadrat $\\sqrt{576}$?",
                options: ["22", "24", "26", "28"],
                correct: 1,
                jenisSoal: "isian-singkat",
                correctMatch: "24"
            },
            {
                q: "Sebuah roda sepeda memiliki jari-jari 21 cm ($\\pi = \\frac{22}{7}$). Berapakah keliling dari roda sepeda tersebut?",
                options: ["66 cm", "132 cm", "154 cm", "264 cm"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pilih dua pernyataan yang benar mengenai ciri-ciri bilangan prima:",
                options: [
                    "Bilangan prima terkecil adalah angka 2.",
                    "Semua bilangan ganjil sudah pasti merupakan bilangan prima.",
                    "Bilangan prima hanya memiliki tepat dua faktor pembagi yaitu 1 dan bilangan itu sendiri.",
                    "Angka 9 termasuk ke dalam kelompok bilangan prima."
                ],
                correct: [0, 2],
                jenisSoal: "pg-kompleks"
            },
            {
                q: "Pasangkan pecahan senilai di sebelah kiri dengan bentuk pecahan paling sederhana di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Pecahan $\\frac{18}{24}$", correctMatch: "$\\frac{3}{4}$" },
                    { question: "Pecahan $\\frac{15}{45}$", correctMatch: "$\\frac{1}{3}$" },
                    { question: "Pecahan $\\frac{28}{42}$", correctMatch: "$\\frac{2}{3}$" }
                ],
                options: ["$\\frac{1}{3}$", "$\\frac{2}{3}$", "$\\frac{3}{4}$", "$\\frac{4}{5}$"]
            },
            {
                q: "Hasil dari penjumlahan bentuk persen dan desimal: $45\\% + 0,35$ adalah...",
                options: ["0,45", "0,70", "0,80", "1,15"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi kebenaran dari pernyataan pengukuran berat berikut:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "1 ton setara dengan 1.000 kilogram." },
                    { text: "1 kuintal setara dengan 100 kilogram." },
                    { text: "1 ons setara dengan 1.000 gram." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            {
                q: "Sebuah taman berbentuk lingkaran berdiameter 14 meter ($\\pi = \\frac{22}{7}$). Berapakah luas permukaan taman tersebut?",
                options: ["154 meter persegi", "308 meter persegi", "616 meter persegi", "1.232 meter persegi"],
                correct: 0,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Berapakah hasil dari perpangkatan: Nilai dari $12^2 - 8^2$ adalah...",
                options: ["40", "64", "80", "144"],
                correct: 2,
                jenisSoal: "isian-singkat",
                correctMatch: "80"
            },
            {
                q: "Pasangkan bentuk waktu di sebelah kiri dengan jumlah detik yang setara di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "2 Jam", correctMatch: "7.200 Detik" },
                    { question: "45 Menit", correctMatch: "2.700 Detik" },
                    { question: "1,5 Jam", correctMatch: "5.400 Detik" }
                ],
                options: ["1.800 Detik", "2.700 Detik", "5.400 Detik", "7.200 Detik"]
            },
            {
                q: "Data nilai ulangan matematika Andi: 80, 75, 90, 85, 80, 95, 70. Berapakah nilai rata-rata (mean) dari data tersebut?",
                options: ["80", "82", "85", "88"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Tentukan nilai modus (data yang paling sering muncul) dari deretan angka berikut: 6, 8, 7, 9, 8, 6, 8, 10, 5:",
                options: ["6", "7", "8", "9"],
                correct: 2,
                jenisSoal: "isian-singkat",
                correctMatch: "8"
            },
            {
                q: "Sebuah tabung memiliki jari-jari alas 7 cm dan tinggi 10 cm ($\\pi = \\frac{22}{7}$). Berapakah volume tabung tersebut?",
                options: ["1.230 cm³", "1.540 cm³", "2.150 cm³", "3.080 cm³"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi pernyataan terkait operasi hitung bilangan berpangkat tiga berikut:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Nilai dari $3^3$ adalah 27." },
                    { text: "Akar pangkat tiga dari 1.000 adalah 10." },
                    { text: "Hasil dari $5^3 - 4^3$ adalah 9." }
                ],
                correct: ["benar", "salah", "benar"]
            },
            {
                q: "Uang tabungan Ali dan Boni berbanding 3 : 5. Jika jumlah uang tabungan mereka berdua adalah Rp400.000, berapakah jumlah uang tabungan Boni?",
                options: ["Rp150.000", "Rp200.000", "Rp250.000", "Rp300.000"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan jenis sudut di sebelah kiri dengan besar sudut derajat yang sesuai di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Sudut Siku-siku", correctMatch: "90 Derajat" },
                    { question: "Sudut Lurus", correctMatch: "180 Derajat" },
                    { question: "Sudut Lancip", correctMatch: "Kurang dari 90 Derajat" }
                ],
                options: ["45 Derajat", "90 Derajat", "180 Derajat", "Kurang dari 90 Derajat"]
            },
            {
                q: "Jarak kota A ke kota B pada peta adalah 5 cm. Jika skala peta tersebut adalah 1 : 200.000, berapakah jarak sebenarnya antara kedua kota tersebut?",
                options: ["5 km", "10 km", "15 km", "20 km"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Berapakah hasil dari operasi pembagian pecahan: $\\frac{3}{4} \\div \\frac{1}{2}$ dalam bentuk pecahan paling sederhana?",
                options: ["$\\frac{1}{2}$", "$\\frac{3}{8}$", "$1\\frac{1}{2}$", "2"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Tentukan hasil akhir dari operasi hitung desimal: $3,75 + 1,25 \\times 2$ adalah...",
                options: ["6,25", "7,50", "8,25", "10,00"],
                correct: 0,
                jenisSoal: "pg-biasa"
            }
        ]
    },
    "Sesi 2 (Sains IPA & Penalaran Logika)": {
        pilihanGanda: [
            // --- STIMULUS SAINS: RANGKAIAN LISTRIK (SINKRON DENGAN EKSPERIMEN LAMPU SERI-PARALEL) ---
            {
                tipe: "grup-stimulus",
                stimulus: "Eksperimen Rangkaian Listrik Sederhana:\nSiswa kelas 6 merakit sebuah rangkaian lampu hias baterai. Dalam percobaan tersebut, tiga buah lampu dirangkai secara seri dan dihubungkan ke sumber arus searah.",
                bannerIcon: "fa-solid fa-lightbulb",
                bannerTitle: "Ilustrasi Kontekstual: Eksperimen Rangkaian Listrik",
                soalList: [
                    {
                        q: "Apa yang akan terjadi pada kedua lampu lainnya jika salah satu lampu pada rangkaian seri tersebut putus atau dilepaskan?",
                        options: [
                            "Kedua lampu lain tetap menyala terang.",
                            "Kedua lampu lain ikut padam secara bersamaan.",
                            "Kedua lampu lain menyala semakin sangat terang.",
                            "Hanya lampu di dekat kutub positif saja yang padam."
                        ],
                        correct: 1,
                        jenisSoal: "pg-biasa"
                    },
                    {
                        q: "Pilih dua keuntungan utama jika rangkaian lampu rumah tangga dipasang secara paralel:",
                        options: [
                            "Jika satu lampu padam, lampu di ruangan lain tetap menyala.",
                            "Pemasangan kabel jauh lebih rumit dan boros biaya.",
                            "Setiap lampu mendapat tegangan listrik yang sama besar secara mandiri.",
                            "Arus listrik total menjadi lebih kecil dibanding seri."
                        ],
                        correct: [0, 2],
                        jenisSoal: "pg-kompleks"
                    }
                ]
            },
            // --- SOAL-SOAL SAINS & IPA LANJUTAN ---
            {
                q: "Pasangkan nama hewan di sebelah kiri dengan jenis penyesuaian diri (adaptasi) atau perlindungan tubuhnya di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Cicak", correctMatch: "Melakukan autotomi (memotong ekor)" },
                    { question: "Landak", correctMatch: "Memiliki rambut duri tajam di punggung" },
                    { question: "Bunglon", correctMatch: "Melakukan mimikri (mengubah warna kulit)" },
                    { question: "Cumi-cumi", correctMatch: "Menyemprotkan cairan tinta hitam pekat" }
                ],
                options: [
                    "Melakukan autotomi (memotong ekor)",
                    "Memiliki rambut duri tajam di punggung",
                    "Melakukan mimikri (mengubah warna kulit)",
                    "Menyemprotkan cairan tinta hitam pekat",
                    "Mengeluarkan bau menyengat dari tubuh"
                ]
            },
            {
                q: "Bagian organ tumbuhan yang berfungsi utama sebagai tempat berlangsungnya proses pembuatan makanan (fotosintesis) adalah...",
                options: ["Akar", "Batang", "Daun", "Bunga"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi kebenaran pernyataan terkait tata surya dan benda langit berikut:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Planet Venus dikenal sebagai bintang kejora karena tampak bersinar terang di pagi hari." },
                    { text: "Planet Saturnus merupakan planet terbesar di dalam sistem tata surya kita." },
                    { text: "Bumi melakukan rotasi dari arah barat ke timur selama 24 jam." }
                ],
                correct: ["benar", "salah", "benar"]
            },
            {
                q: "Perubahan wujud benda dari wujud cair menjadi gas disebut sebagai...",
                options: ["Mencair", "Menguap", "Mengembun", "Menyublim"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan peristiwa perubahan wujud benda di sebelah kiri dengan nama prosesnya di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Terbentuknya titik air di luar gelas es", correctMatch: "Mengembun" },
                    { question: "Kapur barus habis di dalam lemari", correctMatch: "Menyublim" },
                    { question: "Pembuatan agar-agar cair menjadi padat", correctMatch: "Membeku" }
                ],
                options: ["Mencair", "Mengembun", "Menyublim", "Membeku"]
            },
            {
                q: "Sumber energi alternatif ramah lingkungan yang memanfaatkan tiupan angin untuk memutar turbin generator listrik disebut sebagai...",
                options: ["Pembangkit Listrik Tenaga Surya", "Pembangkit Listrik Tenaga Bayu (PLTB)", "Pembangkit Listrik Tenaga Panas Bumi", "Pembangkit Listrik Tenaga Nuklir"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Berapakah hasil dari akar kuadrat $\\sqrt{196}$?",
                options: ["12", "13", "14", "16"],
                correct: 2,
                jenisSoal: "isian-singkat",
                correctMatch: "14"
            },
            {
                q: "Alat optik sederhana yang digunakan oleh kapten kapal selam di dalam air untuk mengamati keadaan di atas permukaan laut adalah...",
                options: ["Mikroskop", "Periskop", "Lup", "Teleskop"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan organ pernapasan manusia di sebelah kiri dengan fungsinya di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Hidung", correctMatch: "Menyaring debu dan melembabkan udara masuk" },
                    { question: "Alveolus", correctMatch: "Tempat pertukaran gas oksigen dan karbon dioksida" },
                    { question: "Diafragma", correctMatch: "Otot utama pengatur proses pernapasan perut" }
                ],
                options: [
                    "Menyaring debu dan melembabkan udara masuk",
                    "Tempat pertukaran gas oksigen dan karbon dioksida",
                    "Otot utama pengatur proses pernapasan perut",
                    "Saluran utama penghubung tenggorokan ke paru-paru"
                ]
            },
            {
                q: "Gaya yang menyebabkan buah kelapa yang sudah tua pasti akan jatuh terpental langsung menuju ke permukaan tanah adalah...",
                options: ["Gaya Gesek", "Gaya Otot", "Gaya Gravitasi Bumi", "Gaya Magnet"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi kebenaran pernyataan mengenai ekosistem dan simbiosis berikut:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Hubungan antara lebah dan bunga mawar adalah contoh simbiosis mutualisme." },
                    { text: "Benalu yang hidup menumpang pada pohon mangga merugikan inangnya." },
                    { text: "Bakteri pengurai bertindak sebagai produsen utama di dalam rantai makanan." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            {
                q: "Planet yang dikenal memiliki julukan sebagai planet merah di dalam tata surya kita adalah...",
                options: ["Merkurius", "Venus", "Mars", "Jupiter"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan jenis gaya di sebelah kiri dengan contoh pemanfaatannya di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Gaya Pegas", correctMatch: "Permainan anak panah dan busur" },
                    { question: "Gaya Gesek", correctMatch: "Rem sepeda saat ditekan untuk berhenti" },
                    { question: "Gaya Magnet", correctMatch: "Paku besi yang menempel pada batang magnet" }
                ],
                options: [
                    "Permainan anak panah dan busur",
                    "Rem sepeda saat ditekan untuk berhenti",
                    "Paku besi yang menempel pada batang magnet",
                    "Bola yang ditendang melambung ke udara"
                ]
            },
            {
                q: "Berapakah hasil dari perpangkatan: Nilai dari $15^2$ adalah...",
                options: ["125", "215", "225", "255"],
                correct: 2,
                jenisSoal: "isian-singkat",
                correctMatch: "225"
            },
            {
                q: "Proses pergiliran keturunan antara fase generatif dan fase vegetatif pada tumbuhan paku dan lumut disebut sebagai...",
                options: ["Metamorfosis", "Metagenesis", "Fotosintesis", "Polinasi"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi pernyataan berikut terkait sifat-sifat magnet:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Magnet memiliki dua kutub yaitu kutub utara dan kutub selatan." },
                    { text: "Kutub magnet yang senama bila didekatkan akan saling tarik-menarik." },
                    { text: "Kekuatan gaya magnet terbesar terletak pada bagian ujung-ujung kutubnya." }
                ],
                correct: ["benar", "salah", "benar"]
            },
            {
                q: "Hewan yang mengalami metamorfosis sempurna dalam siklus hidupnya adalah...",
                options: ["Belalang", "Kecoa", "Kupu-kupu", "Capung"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan jenis sumber daya alam di sebelah kiri dengan kelompoknya di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Minyak bumi dan batubara", correctMatch: "Sumber daya alam yang dapat habis (tidak terbarui)" },
                    { question: "Air dan sinar matahari", correctMatch: "Sumber daya alam yang tidak dapat habis (terbarui)" },
                    { question: "Tanah humus dan hasil hutan", correctMatch: "Sumber daya alam hayati daratan" }
                ],
                options: [
                    "Sumber daya alam yang dapat habis (tidak terbarui)",
                    "Sumber daya alam yang tidak dapat habis (terbarui)",
                    "Sumber daya alam hayati daratan",
                    "Sumber daya alam buatan pabrik"
                ]
            },
            {
                q: "Alat yang berfungsi untuk mengubah energi gerak (mekanik) menjadi energi listrik adalah...",
                options: ["Setrika", "Generator / Dinamo", "Kipas angin", "Lampu pijar"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Berapakah hasil dari akar kuadrat $\\sqrt{441}$?",
                options: ["19", "21", "23", "27"],
                correct: 1,
                jenisSoal: "isian-singkat",
                correctMatch: "21"
            },
            {
                q: "Evaluasi kebenaran pernyataan mengenai organ pencernaan manusia berikut:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Pencernaan mekanis dan kimiawi pertama kali terjadi di dalam rongga mulut." },
                    { text: "Usus halus berfungsi sebagai tempat penyerapan sari-sari makanan secara maksimal." },
                    { text: "Lambung berfungsi untuk menyerap air sisa pencernaan sebelum dibuang." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            {
                q: "Bagian bunga yang berfungsi sebagai alat kelamin jantan (penghasil serbuk sari) adalah...",
                options: ["Putik", "Benang sari", "Mahkota bunga", "Kelopak bunga"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan lapisan bumi di sebelah kiri dengan karakteristiknya di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Kerak Bumi", correctMatch: "Lapisan terluar tempat tinggal makhluk hidup" },
                    { question: "Mantel Bumi", correctMatch: "Lapisan tebal berisi magma cair panas" },
                    { question: "Inti Bumi", correctMatch: "Pusat bumi berbahan logam berat padat dan cair" }
                ],
                options: [
                    "Lapisan terluar tempat tinggal makhluk hidup",
                    "Lapisan tebal berisi magma cair panas",
                    "Pusat bumi berbahan logam berat padat dan cair",
                    "Lapisan udara pelindung radiasi matahari"
                ]
            },
            {
                q: "Benda-benda yang dapat ditarik dengan kuat oleh magnet disebut sebagai kelompok benda...",
                options: ["Diamagnetik", "Paramagnetik", "Feromagnetik", "Isolator"],
                correct: 2,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi pernyataan terkait pemanfaatan sumber energi panas bumi (geotermal) berikut:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Energi panas bumi berasal dari aktivitas panas di dalam lapisan perut bumi." },
                    { text: "Pemanfaatan panas bumi sangat ramah lingkungan dan mengurangi emisi gas rumah kaca." },
                    { text: "Energi panas bumi termasuk jenis sumber daya alam hayati yang berasal dari tumbuhan." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            {
                q: "Berapakah hasil dari operasi hitung pecahan: $\\frac{3}{4} \\times \\frac{2}{3}$ dalam bentuk paling sederhana?",
                options: ["$\\frac{1}{2}$", "$\\frac{5}{7}$", "$\\frac{6}{12}$", "$\\frac{9}{12}$"],
                correct: 0,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Pasangkan jenis penyakit pada organ tubuh manusia di sebelah kiri dengan penyebab utamanya di sebelah kanan:",
                jenisSoal: "penjodohan",
                pairs: [
                    { question: "Anemia", correctMatch: "Kekurangan kadar hemoglobin atau sel darah merah" },
                    { question: "Rabun Jauh (Miopi)", correctMatch: "Ketidakmampuan mata melihat benda jarak jauh dengan jelas" },
                    { question: "Diare", correctMatch: "Infeksi saluran pencernaan akibat bakteri atau makanan kotor" }
                ],
                options: [
                    "Kekurangan kadar hemoglobin atau sel darah merah",
                    "Ketidakmampuan mata melihat benda jarak jauh dengan jelas",
                    "Infeksi saluran pencernaan akibat bakteri atau makanan kotor",
                    "Kekurangan vitamin D pada pertumbuhan tulang"
                ]
            },
            {
                q: "Pilih dua contoh pemanfaatan perubahan wujud zat menguap dalam kehidupan sehari-hari:",
                options: [
                    "Proses pembuatan garam dapur di tambak pesisir pantai.",
                    "Terbentuknya es batu di dalam freezer kulkas.",
                    "Menjemur pakaian basah hingga kering di bawah terik matahari.",
                    "Terbentuknya embun pagi pada permukaan daun tanaman."
                ],
                correct: [0, 2],
                jenisSoal: "pg-kompleks"
            },
            {
                q: "Berapakah nilai dari hasil operasi hitung akar pangkat tiga $\\sqrt[3]{1728}$?",
                options: ["10", "12", "14", "16"],
                correct: 1,
                jenisSoal: "isian-singkat",
                correctMatch: "12"
            },
            {
                q: "Sebuah balok memiliki panjang 15 cm, lebar 8 cm, dan tinggi 10 cm. Berapakah volume dari balok tersebut?",
                options: ["1.000 cm³", "1.200 cm³", "1.500 cm³", "1.800 cm³"],
                correct: 1,
                jenisSoal: "pg-biasa"
            },
            {
                q: "Evaluasi pernyataan mengenai sifat-sifat cahaya berikut:",
                jenisSoal: "tabel-matriks",
                rows: [
                    { text: "Cahaya merambat melalui garis lurus." },
                    { text: "Cahaya dapat dipantulkan dan dibiaskan saat melewati medium berbeda." },
                    { text: "Cahaya memerlukan medium udara atau zat padat agar dapat merambat di ruang hampa." }
                ],
                correct: ["benar", "benar", "salah"]
            },
            {
                q: "Berapakah hasil akhir dari operasi hitung perkalian desimal: $2,5 \\times 0,4$ adalah...",
                options: ["0,10", "1,00", "10,0", "100"],
                correct: 1,
                jenisSoal: "isian-singkat",
                correctMatch: "1,00"
            }
        ]
    }
};
