window.soalData = window.soalData || {};

window.soalData["TKA SMA Kelas 12"] = window.soalData["TKA SMA Kelas 12"] || {};

window.soalData["TKA SMA Kelas 12"]["Fisika"] = {
    pilihanGanda: [
        {
            tipe: "grup-stimulus",
            stimulus: "Perhatikan fenomena gerak harmonik sederhana pada bandul matematis berikut!\n\nSebuah bandul dengan panjang tali L digetarkan di suatu tempat yang memiliki percepatan gravitasi bumi g. Periode getaran bandul T dirumuskan sebagai T = 2 * pi * akar(L / g). Jika panjang tali diperpanjang menjadi 4 kali semula, pengaruhnya terhadap periode bandul dapat dianalisis secara matematis.",
            gambar: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
            soalList: [
                {
                    q: "Berapakah perbandingan periode bandul akhir terhadap periode bandul awal jika panjang tali diperpanjang 4 kali semula?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "Menjadi 2 kali lipat",
                        "Menjadi 4 kali lipat",
                        "Tetap tidak berubah",
                        "Menjadi setengah kali lipat"
                    ],
                    correct: 0
                },
                {
                    q: "Pilihlah dua pernyataan yang benar mengenai faktor yang mempengaruhi periode bandul matematis! (Pilih dua jawaban benar)",
                    jenisSoal: "pg-kompleks",
                    options: [
                        "Periode berbanding lurus dengan akar panjang tali.",
                        "Periode berbanding terbalik dengan akar percepatan gravitasi.",
                        "Massa beban bandul mempengaruhi besar kecilnya periode getaran secara signifikan.",
                        "Sudut simpangan awal yang besar mengubah frekuensi bandul secara mutlak."
                    ],
                    correct: [0, 1]
                },
                {
                    q: "Tentukan apakah pernyataan berikut Benar atau Salah berdasarkan persamaan bandul matematis!",
                    jenisSoal: "tabel-matriks",
                    rows: [
                        { text: "Frekuensi getaran berbanding terbalik dengan periode getaran (f = 1 / T)." },
                        { text: "Percepatan gravitasi tidak mempengaruhi nilai periode bandul sama sekali." }
                    ],
                    correct: ["benar", "salah"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan besaran fisika di sebelah kiri dengan satuan internasionalnya (SI) di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Daya Listrik", "Kuat Arus Listrik", "Fluks Magnetik"],
            pairs: [
                { question: "Besaran daya listrik dalam rangkaian arus searah maupun bolak-balik.", correctMatch: "Daya Listrik" },
                { question: "Besaran pokok arus listrik dalam sistem internasional.", correctMatch: "Kuat Arus Listrik" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini dengan satuan yang tepat:\nSatuan internasional untuk hambatan listrik adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "ohm"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah besar gaya Coulomb antara dua buah muatan listrik masing-masing 2 micro coulomb dan 3 micro coulomb yang terpisah sejauh 3 cm di dalam vakum? (K = 9 x 10^9 N m^2 / C^2)",
            jenisSoal: "pg-biasa",
            options: ["60 Newton", "40 Newton", "20 Newton", "10 Newton"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai hukum termodinamika berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Hukum pertama termodinamika merupakan bentuk lain dari hukum kekekalan energi." },
                { text: "Proses isotermal adalah proses termodinamika yang terjadi pada tekanan tetap." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara gelombang berikut yang tergolong ke dalam gelombang elektromagnetik?",
            jenisSoal: "pg-kompleks",
            options: [
                "Sinar gamma",
                "Gelombang bunyi di udara",
                "Sinar ultraviolet",
                "Gelombang air laut"
            ],
            correct: [0, 2]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nKecepatan rambat seluruh gelombang elektromagnetik di dalam vakum / ruang hampa bernilai sama dengan kecepatan ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "cahaya"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah besar energi foton dari suatu gelombang elektromagnetik yang memiliki frekuensi 5 x 10^14 Hz? (Konstanta Planck h = 6,63 x 10^-34 J s)",
            jenisSoal: "pg-biasa",
            options: ["3,315 x 10^-19 Joule", "6,63 x 10^-19 Joule", "1,5 x 10^-19 Joule", "5 x 10^-19 Joule"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis cermin atau lensa di sebelah kiri dengan sifat pembentukan bayangannya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Cermin Cembung", "Lensa Cekung", "Cermin Cekung"],
            pairs: [
                { question: "Selalu menghasilkan bayangan maya, tegak, dan diperkecil untuk semua posisi benda.", correctMatch: "Cermin Cembung" },
                { question: "Bersifat menyebarkan cahaya (divergen) dan membentuk bayangan maya tegak.", correctMatch: "Lensa Cekung" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah sifat-sifat radiasi benda hitam berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Hukum pergeseran Wien menyatakan bahwa panjang gelombang radiasi maksimum berbanding terbalik dengan suhu mutlak benda." },
                { text: "Energi radiasi total per satuan waktu berbanding lurus dengan pangkat empat suhu mutlak (Hukum Stefan-Boltzmann)." }
            ],
            correct: ["benar", "benar"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nAlat ukur listrik yang digunakan untuk mengukur kuat arus listrik dalam rangkaian tertutup adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "amperemeter"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah besar hambatan pengganti total jika tiga buah resistor masing-masing 2 ohm, 3 ohm, dan 6 ohm dirangkai secara paralel?",
            jenisSoal: "pg-biasa",
            options: ["1 ohm", "2 ohm", "3 ohm", "11 ohm"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara besaran berikut yang merupakan besaran vektor dalam mekanika?",
            jenisSoal: "pg-kompleks",
            options: [
                "Kecepatan (Velocity)",
                "Percepatan (Acceleration)",
                "Kelajuan (Speed)",
                "Usaha (Work)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "grup-stimulus",
            stimulus: "Cermatilah konsep induksi elektromagnetik pada transformator!\n\nSebuah trafo ideal memiliki jumlah lilitan primer Np = 200 lilitan dan lilitan sekunder Ns = 800 lilitan. Trafo ini dihubungkan dengan sumber tegangan bolak-balik Vp = 110 Volt.",
            gambar: null,
            soalList: [
                {
                    q: "Berapakah besar tegangan sekunder (Vs) yang dihasilkan oleh transformator tersebut?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "440 Volt",
                        "220 Volt",
                        "110 Volt",
                        "55 Volt"
                    ],
                    correct: 0
                },
                {
                    q: "Tentukan apakah pernyataan berikut mengenai jenis transformator tersebut Benar atau Salah!",
                    jenisSoal: "tabel-matriks",
                    rows: [
                        { text: "Trafo di atas dikategorikan sebagai trafo step-up karena jumlah lilitan sekunder lebih besar dari primer." },
                        { text: "Daya pada kumparan primer trafo ideal lebih kecil daripada daya sekunder." }
                    ],
                    correct: ["benar", "salah"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan konsep relativitas khusus Einstein di sebelah kiri dengan penjelasannya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Kontraksi Panjang", "Dilatasi Waktu", "Massa Relativistik"],
            pairs: [
                { question: "Pemendekan ukuran benda dalam arah gerak ketika bergerak mendekati kecepatan cahaya.", correctMatch: "Kontraksi Panjang" },
                { question: "Berlakunya selang waktu yang lebih lama bagi pengamat yang bergerak dibandingkan pengamat diam.", correctMatch: "Dilatasi Waktu" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nTeori kuantum Planck menyatakan bahwa pancaran energi gelombang elektromagnetik berupa paket-paket energi diskrit yang disebut ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "foton"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah besar gaya Lorentz yang dialami oleh kawat penghantar sepanjang 2 meter yang dialiri arus 5 Ampere di dalam medan magnet homogen sebesar 0,4 Tesla yang tegak lurus terhadap kawat?",
            jenisSoal: "pg-biasa",
            options: ["4 Newton", "2 Newton", "1 Newton", "8 Newton"],
            correct: 1
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai hukum Kepler tentang gerak planet berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Hukum I Kepler menyatakan bahwa lintasan orbit planet berbentuk elips dengan matahari berada di salah satu titik fokusnya." },
                { text: "Kuadrat periode revolusi planet berbanding lurus dengan pangkat tiga jarak rata-rata planet ke matahari (Hukum III Kepler)." }
            ],
            correct: ["benar", "benar"]
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara fenomena berikut yang membuktikan sifat gelombang dari cahaya?",
            jenisSoal: "pg-kompleks",
            options: [
                "Interferensi cahaya pada celah ganda Young",
                "Difraksi cahaya pada celah sempit",
                "Efek fotolistrik",
                "Polarisasi cahaya"
            ],
            correct: [0, 1, 3]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nSatuan internasional untuk fluks magnetik adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "weber"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah besar momentum linier dari sebuah elektron yang bergerak dengan kecepatan tertentu jika diketahui massa elektron m dan kecepatan v?",
            jenisSoal: "pg-biasa",
            options: ["p = m * v", "p = m * g * h", "p = 1/2 * m * v^2", "p = F * t"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan konsep fisika inti di sebelah kiri dengan definisinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Defek Massa", "Energi Ikat Inti", "Radioaktivitas"],
            pairs: [
                { question: "Selisih antara massa nukleon pembentuk dengan massa inti atom yang sebenarnya.", correctMatch: "Defek Massa" },
                { question: "Peluruhan inti atom yang tidak stabil secara spontan memancarkan radiasi.", correctMatch: "Radioaktivitas" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai hukum Archimedes berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Gaya ke atas (gaya apung) yang dialami benda di dalam zat cair sama dengan berat zat cair yang dipindahkan oleh benda tersebut." },
                { text: "Benda akan tenggelam jika massa jenis benda lebih kecil daripada massa jenis zat cair." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nAlat optik yang digunakan untuk melihat benda-benda sangat kecil di laboratorium mikrobiologi adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "mikroskop"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah besar tekanan hidrostatis pada kedalaman 1 meter di dalam air jika massa jenis air 1000 kg/m^3 dan gravitasi 10 m/s^2?",
            jenisSoal: "pg-biasa",
            options: ["10.000 Pascal", "1.000 Pascal", "100 Pascal", "100.000 Pascal"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara besaran berikut yang termasuk ke dalam besaran pokok dalam sistem internasional?",
            jenisSoal: "pg-kompleks",
            options: [
                "Panjang (Meter)",
                "Waktu (Sekon)",
                "Gaya (Newton)",
                "Suhu (Kelvin)"
            ],
            correct: [0, 1, 3]
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah sifat-sifat gelombang bunyi berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Gelombang bunyi merambat lebih cepat di dalam zat padat dibandingkan di dalam udara." },
                { text: "Gelombang bunyi dapat merambat melalui ruang hampa udara (vakum)." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nGejala kenaikan atau penurunan permukaan zat cair melalui pipa kapiler disebut gejala ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "kapilaritas"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nilai dari tetapan gravitasi universal (G) dalam satuan SI secara standar?",
            jenisSoal: "pg-biasa",
            options: ["6,67 x 10^-11 N m^2 / kg^2", "9 x 10^9 N m^2 / C^2", "3 x 10^8 m/s", "1,6 x 10^-19 C"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan konsep gelombang stasioner di sebelah kiri dengan penjelasannya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Ujung Terikat", "Ujung Bebas", "Frekuensi Dasar"],
            pairs: [
                { question: "Pantulan gelombang pada ujung tali terikat yang mengalami fase berlawanan (bergeser setengah gelombang).", correctMatch: "Ujung Terikat" },
                { question: "Frekuensi natural terendah yang dihasilkan oleh dawai atau pipa organa.", correctMatch: "Frekuensi Dasar" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai efek Doppler berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Frekuensi bunyi yang diterima pendengar akan lebih tinggi jika sumber bunyi bergerak mendekati pendengar." },
                { text: "Efek Doppler tidak berlaku untuk gelombang cahaya di ruang angkasa." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nAlat ukur panjang yang memiliki ketelitian hingga 0,01 cm adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "jangka sorong"
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara faktor berikut yang mempengaruhi besar kapasitas kapasitor keping sejajar?",
            jenisSoal: "pg-kompleks",
            options: [
                "Luas penampang keping kawat (A)",
                "Jarak antar keping (d)",
                "Jenis bahan dielektrik di antara keping",
                "Warna luar wadah kapasitor"
            ],
            correct: [0, 1, 2]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah besar energi kinetik rata-rata gas ideal monoatomik pada suhu mutlak T?",
            jenisSoal: "pg-biasa",
            options: ["Ek = 3/2 * k * T", "Ek = 1/2 * m * v^2", "Ek = m * g * h", "Ek = 3 * R * T"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai induksi magnetik di sekitar kawat lurus berarus berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Besar induksi magnetik berbanding lurus dengan kuat arus listrik yang mengalir pada kawat." },
                { text: "Besar induksi magnetik berbanding lurus dengan jarak titik pengamatan ke kawat." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nSatuan internasional untuk besaran frekuensi gelombang adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "hertz"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah besar gaya sentripetal yang bekerja pada sebuah benda bermassa m yang berputar melingkar dengan kecepatan v pada jari-jari R?",
            jenisSoal: "pg-biasa",
            options: ["Fs = (m * v^2) / R", "Fs = m * g * h", "Fs = m * a", "Fs = 1/2 * k * x^2"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis rangkaian arus bolak-balik (AC) di sebelah kiri dengan karakteristik impedansinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Rangkaian Resistor Murni", "Rangkaian Induktor Murni", "Keadaan Resonansi Seri"],
            pairs: [
                { question: "Impedansi total rangkaian bernilai minimum dan sama dengan hambatan murni R (XL = XC).", correctMatch: "Keadaan Resonansi Seri" },
                { question: "Arus dan tegangan bolak-balik berada dalam satu fase yang sama tanpa pergeseran sudut.", correctMatch: "Rangkaian Resistor Murni" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai efek fotolistrik berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Efek fotolistrik membuktikan bahwa cahaya memiliki sifat sebagai partikel (foton)." },
                { text: "Elektron dapat lepas dari permukaan logam jika frekuensi cahaya yang datang lebih kecil daripada frekuensi ambang logam." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nNama alat yang digunakan untuk mendeteksi keberadaan muatan listrik pada suatu benda adalah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "elektroskop"
        }
    ]
};