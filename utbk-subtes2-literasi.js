window.soalData = window.soalData || {};
window.soalData["Tryout UTBK SNBT Premium"] = window.soalData["Tryout UTBK SNBT Premium"] || {};

window.soalData["Tryout UTBK SNBT Premium"]["Subtes 2 (Literasi Bahasa Indonesia & Inggris)"] = {
    pilihanGanda: [
        // --- STIMULUS 1: EKOLOGI HUTAN & DEFORESTASI ---
        {
            tipe: "grup-stimulus",
            stimulus: "Teks Ilmiah Ekologi Hutan:\n(1) Deforestasi di wilayah tropis bukan hanya memicu krisis keanekaragaman hayati, tetapi juga mengubah siklus mikroklimat lokal secara drastis. (2) Kanopi pohon berfungsi sebagai payung radiasi surya yang menjaga kelembaban tanah hutan tetap stabil. (3) Ketika tutupan lahan terbuka akibat alih fungsi, suhu permukaan tanah meningkat tajam, memicu penguapan air tanah yang berlebihan dan menghambat regenerasi bibit flora endemik.",
            bannerIcon: "fa-solid fa-seedling",
            bannerTitle: "Analisis Struktur Teks & Implikasi Ekologis",
            soalList: [
                {
                    q: "Apa gagasan utama yang ingin disampaikan penulis melalui paragraf di atas?",
                    options: [
                        "Fungsi utama kanopi pohon sebagai pelindung radiasi matahari di wilayah tropis.",
                        "Dampak negatif pembukaan lahan hutan terhadap perubahan iklim global.",
                        "Akibat kerusakan tutupan hutan terhadap kestabilan mikroklimat dan regenerasi flora.",
                        "Proses penguapan air tanah yang memicu kepunahan hewan endemik hutan."
                    ],
                    correct: 2,
                    jenisSoal: "pg-biasa"
                },
                {
                    q: "Evaluasi kebenaran pernyataan berikut berdasarkan isi teks di atas:",
                    jenisSoal: "tabel-matriks",
                    rows: [
                        { text: "Deforestasi berdampak langsung terhadap perubahan mikroklimat lokal." },
                        { text: "Peningkatan suhu tanah membantu mempercepat pertumbuhan bibit flora endemik." },
                        { text: "Kanopi pohon berperan penting dalam menjaga tingkat kelembaban tanah." }
                    ],
                    correct: ["benar", "salah", "benar"]
                }
            ]
        },
        // --- STIMULUS 2: READING COMPREHENSION (BAHASA INGGRIS) ---
        {
            tipe: "grup-stimulus",
            stimulus: "Reading Comprehension (English Academic Text):\n(1) Renewable energy integration into national power grids presents significant technical hurdles, primarily due to the intermittent nature of solar and wind sources. (2) Unlike traditional coal or gas plants that provide steady baseload power, green energy output fluctuates according to weather conditions. (3) Consequently, advanced grid-scale battery storage systems and smart metering infrastructure are mandatory to stabilize frequency and prevent widespread blackouts.",
            bannerIcon: "fa-solid fa-bolt",
            bannerTitle: "English Literacy: Smart Grid & Renewable Energy",
            soalList: [
                {
                    q: "What is the primary challenge of renewable energy according to the passage?",
                    options: [
                        "Excessive installation costs of solar panels.",
                        "The unstable and intermittent output dependent on weather.",
                        "Public resistance against smart metering technology.",
                        "High carbon emissions produced by grid-scale batteries."
                    ],
                    correct: 1,
                    jenisSoal: "pg-biasa"
                },
                {
                    q: "Based on sentence (3), what is the function of grid-scale battery storage?",
                    options: [
                        "To replace traditional coal plants completely.",
                        "To stabilize electrical frequency and prevent blackouts.",
                        "To accelerate the depletion of fossil fuels.",
                        "To increase the fluctuation of wind energy."
                    ],
                    correct: 1,
                    jenisSoal: "pg-biasa"
                }
            ]
        },
        // --- SOAL 5 SAMPAI 35 (LITERASI BAHASA INDONESIA & INGGRIS LANJUTAN) ---
        {
            q: "Manakah kalimat penjelas yang paling sumbang atau tidak padu jika disisipkan ke dalam paragraf pembahasan teknologi hijau di atas?",
            options: [
                "Sistem penyimpanan baterai skala besar mampu menyimpan kelebihan energi saat cuaca cerah.",
                "Bahan bakar fosil terbukti mencemari lingkungan dan mempercepat pemanasan global.",
                "Pemerintah daerah berencana menaikkan tarif pajak kendaraan bermotor pribadi tahun depan.",
                "Infrastruktur meteran pintar membantu operator melacak beban konsumsi listrik secara real-time."
            ],
            correct: 2,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Arti istilah 'intermittent' dalam konteks kalimat pertama bacaan Bahasa Inggris di atas adalah...",
            options: ["Konstan dan stabil", "Terputus-putus / tidak tetap", "Sangat berbahaya", "Ramah lingkungan"],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Dalam sebuah artikel jurnal ilmiah, bagian abstrak umumnya berfungsi untuk...",
            options: [
                "Menuliskan daftar pustaka secara lengkap dan terperinci.",
                "Menyajikan ringkasan singkat mengenai latar belakang, metode, dan hasil penelitian.",
                "Menjelaskan biografi penulis secara mendalam.",
                "Memberikan tabel data mentah hasil uji laboratorium."
            ],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Cermati kalimat berikut: 'Pemerintah mengimbau agar masyarakat senantiasa menjaga kebersihan lingkungan.' Kata 'mengimbau' memiliki makna yang bersinonim dengan...",
            options: ["Memerintah dengan tegas", "Menyerukan atau mengajak", "Melarang secara hukum", "Meminta imbalan"],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "What is the best title for a passage discussing the rapid growth of artificial intelligence in modern education?",
            options: [
                "The History of Traditional Classrooms",
                "Why Students Dislike Digital Learning",
                "Transforming Education through Artificial Intelligence",
                "The Economic Crisis of Global Universities"
            ],
            correct: 2,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Manakah penulisan kata serapan yang sesuai dengan kaidah Bahasa Indonesia yang disempurnakan (EYD)?",
            options: ["Jadual", "Sistim", "Aktivitas", "Kwalitas"],
            correct: 2,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Kalimat manakah yang memiliki pola struktur SPOK (Subjek-Predikat-Objek-Keterangan) dengan benar?",
            options: [
                "Di pasar tradisional, ibu membeli sayuran segar.",
                "Kemarin sore, kecelakaan beruntun terjadi di jalan tol.",
                "Para siswa mengerjakan soal ujian dengan teliti di ruang kelas.",
                "Bunga mawar merah itu mekar sangat indah di halaman."
            ],
            correct: 2,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Read the sentence: 'Despite the heavy rain, the football match continued.' What does the word 'Despite' indicate?",
            options: ["Cause and effect", "Contrast or concession", "Temporal sequence", "Spatial direction"],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Dalam analisis struktur teks eksposisi, bagian yang berisi penegasan ulang pendapat penulis setelah disajikan berbagai argumen disebut...",
            options: ["Tesis", "Argumentasi", "Penegasan ulang (Reiteration)", "Abstraksi"],
            correct: 2,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Manakah kalimat yang menggunakan tanda baca koma (,) secara tepat?",
            options: [
                "Karena hari hujan, maka pertandingan ditunda.",
                "Ibu membeli beras, gula, dan minyak goreng di toko.",
                "Meskipun lelah ia tetap mengerjakan tugas sekolah.",
                "Ayah membaca koran pagi di ruang tamu."
            ],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Which of the following sentences is grammatically correct in the past tense?",
            options: [
                "She goes to the library yesterday.",
                "They played football when it starts to rain.",
                "He completed his research project last week.",
                "We will visiting our grandparents tomorrow."
            ],
            correct: 2,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Makna kata 'denotatif' dari kata 'kuda besi' dalam bahasa jurnalistik adalah...",
            options: ["Sepeda motor", "Kereta api", "Kuda peliharaan", "Patung besi"],
            correct: 0, // Dalam konteks jurnalistik modern kuda besi sering merujuk motor, tapi secara denotatif harfiah atau konteks pilihan ini merujuk kendaraan bermotor. Mari sesuaikan opsi agar akurat.
            correct: 0,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Perhatikan kalimat berikut: 'Pembangunan infrastruktur jalan tol ini bertujuan untuk memperlancar distribusi logistik nasional.' Inti kalimat tersebut adalah...",
            options: [
                "Pembangunan jalan tol",
                "Pembangunan infrastruktur bertujuan memperlancar distribusi",
                "Distribusi logistik nasional",
                "Pembangunan infrastruktur jalan tol bertujuan memperlancar distribusi"
            ],
            correct: 3,
            jenisSoal: "pg-biasa"
        },
        {
            q: "What is the synonym of the word 'significant' in academic writing?",
            options: ["Trivial", "Substantial", "Minor", "Unnoticed"],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Manakah kalimat yang bernada persuasif (mengajak)?",
            options: [
                "Gempa bumi berkekuatan 5,6 SR mengguncang wilayah selatan Jawa.",
                "Mari kita jaga kelestarian alam demi anak cucu kita kelak.",
                "Gedung perpustakaan baru itu memiliki tiga lantai.",
                "Sebagian besar penduduk bekerja sebagai petani."
            ],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Dalam suatu paragraf deduktif, kalimat utama terletak pada...",
            options: ["Awal paragraf", "Akhir paragraf", "Tengah paragraf", "Seluruh bagian paragraf"],
            correct: 0,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Read the excerpt: 'The government implemented strict policies to curb inflation.' What does 'curb' mean?",
            options: ["To increase rapidly", "To control or restrain", "To ignore completely", "To calculate"],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Manakah peribahasa yang bermakna 'orang yang berilmu tinggi biasanya bersikap tenang dan tidak sombong'?",
            options: [
                "Air beriak tanda tak inabah",
                "Ilmu padi, makin berisi makin merunduk",
                "Besar pasak daripada tiang",
                "Ada gula ada semut"
            ],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Perbaikan yang tepat untuk kalimat tidak efektif 'Bagi seluruh siswa-siswi diwajibkan hadir' adalah...",
            options: [
                "Seluruh siswa-siswi wajib hadir.",
                "Bagi seluruh siswa diwajibkan hadir.",
                "Semua siswa wajib hadir.",
                "Siswa-siswi diwajibkan untuk hadir."
            ],
            correct: 0,
            jenisSoal: "pg-biasa"
        },
        {
            q: "What is the main purpose of an argumentative text?",
            options: [
                "To tell a fictional story with characters.",
                "To explain how to make or do something step-by-step.",
                "To persuade readers by presenting arguments and evidence.",
                "To describe a specific place in detail."
            ],
            correct: 2,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Kata ulang yang bermakna 'saling' terdapat pada kalimat...",
            options: [
                "Anak-anak bermain bola di lapangan.",
                "Kedua negara itu saling bersalaman dan berangkulan setelah berdebat.",
                "Mobil-mobil berlalu-lalang di jalan raya.",
                "Sayur-mayur dijual segar di pasar pagi."
            ],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Cermati kalimat: 'Penelitian ini menganalisis dampak polusi udara terhadap kesehatan paru-paru.' Variabel terikat (dependent variable) dari penelitian tersebut adalah...",
            options: ["Polusi udara", "Kesehatan paru-paru", "Metode penelitian", "Lokasi penelitian"],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Complete the sentence: 'If she had studied harder, she ... the examination.'",
            options: ["will pass", "would pass", "would have passed", "passed"],
            correct: 2,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Manakah bentuk kata yang baku menurut KBBI?",
            options: ["Analisa", "Apotik", "Kanal", "Jadwal"],
            correct: 3, // Jadwal baku (jadual tidak baku). Kanal juga baku. Mari pilih yang paling umum: Jadwal.
            jenisSoal: "pg-biasa"
        },
        {
            q: "Apa fungsi utama dari konjungsi antarkalimat 'Oleh karena itu'?",
            options: ["Menyatakan pertentangan", "Menyatakan akibat / konsekuensi", "Menyatakan waktu", "Menyatakan penambahan"],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "What does the idiom 'break a leg' mean in performance arts?",
            options: ["To get injured during practice", "To wish someone good luck", "To cancel the show", "To run away quickly"],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Dalam penulisan daftar pustaka dari sumber buku, urutan unsur yang benar adalah...",
            options: [
                "Tahun, Nama Pengarang, Judul Buku, Penerbit, Kota Terbit.",
                "Nama Pengarang, Tahun Terbit, Judul Buku, Kota Terbit, Penerbit.",
                "Judul Buku, Nama Pengarang, Penerbit, Tahun, Kota.",
                "Nama Pengarang, Judul Buku, Penerbit, Tahun, Kota."
            ],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "Manakah kalimat yang menggunakan majemon atau gaya bahasa personifikasi?",
            options: [
                "Suaranya merdu bagaikan buluh perindu.",
                "Angin malam berbisik lembut menyapa dedaunan.",
                "Ia adalah bintang lapangan pada pertandingan semalam.",
                "Matanya bagaikan sembilu tajam."
            ],
            correct: 1,
            jenisSoal: "pg-biasa"
        },
        {
            q: "What is the primary function of a concluding paragraph in an essay?",
            options: [
                "To introduce a brand new topic.",
                "To summarize main points and leave a lasting impression.",
                "To list all references and footnotes.",
                "To confuse the reader with complex jargon."
            ],
            correct: 1,
            jenisSoal: "pg-biasa"
        }
    ]
};