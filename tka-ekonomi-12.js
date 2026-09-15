window.soalData = window.soalData || {};

window.soalData["TKA SMA Kelas 12"] = window.soalData["TKA SMA Kelas 12"] || {};

window.soalData["TKA SMA Kelas 12"]["Ekonomi"] = {
    pilihanGanda: [
        {
            tipe: "grup-stimulus",
            stimulus: "Perhatikan wacana mengenai masalah pokok ekonomi dan biaya peluang (opportunity cost) berikut!\n\nBapak Ahmad memiliki sebidang tanah warisan yang dapat digunakan untuk membuka usaha bengkel, mendirikan toko kelontong, atau disewakan kepada pihak lain dengan pendapatan Rp3.000.000 per bulan. Jika Pak Ahmad akhirnya memilih untuk membuka usaha bengkel sendiri dengan estimasi laba bersih Rp4.500.000 per bulan, analisis pilihan ekonomi perlu dilakukan secara cermat.",
            gambar: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80",
            soalList: [
                {
                    q: "Berdasarkan ilustrasi di atas, berapakah besarnya biaya peluang (opportunity cost) yang dikorbankan oleh Pak Ahmad?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "Rp3.000.000 per bulan",
                        "Rp4.500.000 per bulan",
                        "Rp7.500.000 per bulan",
                        "Rp1.500.000 per bulan"
                    ],
                    correct: 0
                },
                {
                    q: "Pilihlah dua pernyataan yang benar mengenai konsep biaya peluang dalam ilmu ekonomi! (Pilih dua jawaban benar)",
                    jenisSoal: "pg-kompleks",
                    options: [
                        "Biaya peluang adalah pengorbanan yang dilakukan karena memilih suatu alternatif terbaik.",
                        "Biaya peluang selalu dihitung berdasarkan seluruh jumlah alternatif yang ditinggalkan sekaligus.",
                        "Biaya peluang muncul akibat kelangkaan sumber daya yang dihadapi manusia.",
                        "Biaya peluang tidak berpengaruh terhadap pengambilan keputusan bisnis."
                    ],
                    correct: [0, 2]
                },
                {
                    q: "Tentukan apakah pernyataan berikut Benar atau Salah mengenai masalah pokok ekonomi!",
                    jenisSoal: "tabel-matriks",
                    rows: [
                        { text: "Inti dari masalah ekonomi adalah keterbatasan sumber daya dibandingkan dengan kebutuhan manusia yang tidak terbatas." },
                        { text: "Pertanyaan 'What, How, dan For Whom' merupakan bagian dari masalah ekonomi klasik." }
                    ],
                    correct: ["benar", "salah"] // What, How, For Whom adalah ekonomi modern
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan bentuk pasar di sebelah kiri dengan ciri utamanya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Pasar Monopoli", "Pasar Persaingan Sempurna", "Pasar Oligopoli"],
            pairs: [
                { question: "Hanya terdapat satu penjual tunggal yang menguasai seluruh penawaran komoditas tanpa pesaing.", correctMatch: "Pasar Monopoli" },
                { question: "Terdapat sedikit perusahaan raksasa yang saling mempengaruhi kebijakan harga pasar.", correctMatch: "Pasar Oligopoli" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini dengan istilah ekonomi:\nIlmu ekonomi yang membahas perilaku unit-unit ekonomi secara individual seperti rumah tangga konsumen dan perusahaan disebut ilmu ekonomi ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "mikro"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah besar koefisien elastisitas permintaan jika persentase perubahan jumlah permintaan lebih besar daripada persentase perubahan harga (E > 1)?",
            jenisSoal: "pg-biasa",
            options: ["Elastis", "Inelastis", "Elastis uniter", "Inelastis sempurna"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai kebijakan fiskal dan moneter berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Kebijakan fiskal berkaitan langsung dengan pengaturan anggaran pendapatan dan belanja negara (APBN)." },
                { text: "Bank sentral menaikkan suku bunga acuan sebagai langkah untuk mengatasi kelesuan ekonomi (deflasi)." }
            ],
            correct: ["benar", "salah"] // menaikkan suku bunga untuk inflasi
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara komponen berikut yang dihitung dalam pendekatan pengeluaran untuk mengukur Pendapatan Nasional (GDP)?",
            jenisSoal: "pg-kompleks",
            options: [
                "Konsumsi rumah tangga (C)",
                "Investasi perusahaan (I)",
                "Pengeluaran pemerintah (G)",
                "Gaji pegawai swasta secara personal"
            ],
            correct: [0, 1, 2]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nSelisih antara ekspor dan impor suatu negara dicatat dalam neraca perdagangan internasional sebagai komponen ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "neto"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah fungsi utama dari bank sentral dalam perekonomian suatu negara?",
            jenisSoal: "pg-biasa",
            options: [
                "Menjaga kestabilan nilai rupiah serta mengatur kelancaran sistem pembayaran.",
                "Memberikan pinjaman modal jangka pendek bagi pedagang asongan secara langsung.",
                "Menerima simpanan tabungan harian masyarakat umum di loket cabang.",
                "Menetapkan harga jual sembako di pasar tradisional."
            ],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis inflasi di sebelah kiri dengan tingkat keparahannya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Inflasi Ringan", "Inflasi Sedang", "Inflasi Hiperinflasi"],
            pairs: [
                { question: "Laju inflasi berada di bawah 10 persen per tahun.", correctMatch: "Inflasi Ringan" },
                { question: "Laju inflasi berkisar antara 10 hingga 30 persen per tahun.", correctMatch: "Inflasi Sedang" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai fungsi permintaan dan penawaran berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Kurva permintaan memiliki kemiringan (slope) negatif karena hubungan antara harga dan jumlah permintaan berbanding terbalik." },
                { text: "Hukum penawaran menyatakan bahwa semakin tinggi harga suatu barang, semakin sedikit jumlah barang yang ditawarkan." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nTitik potong antara kurva permintaan dan kurva penawaran di pasar disebut sebagai harga dan kuantitas ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "ekuilibrium"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah rumus untuk menghitung Produk Nasional Bruto (PNB / GNP) dari Produk Domestik Bruto (PDB / GDP)?",
            jenisSoal: "pg-biasa",
            options: [
                "GDP + Pendapatan netto terhadap luar negeri",
                "GDP - Pajak tidak langsung",
                "NNP - Pajak tak langsung",
                "Personal Income - Pajak langsung"
            ],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara instrumen berikut yang tergolong ke dalam kebijakan moneter kuantitatif oleh bank sentral?",
            jenisSoal: "pg-kompleks",
            options: [
                "Operasi pasar terbuka (Open market operation)",
                "Politik tingkat diskonto (Discount rate)",
                "Kebijakan moral suasion",
                "Ketentuan cadangan wajib minimum (Reserve requirement)"
            ],
            correct: [0, 1, 3]
        },
        {
            tipe: "grup-stimulus",
            stimulus: "Cermatilah konsep laporan keuangan perusahaan (Akuntansi) berikut dalam perusahaan jasa!\n\nPada akhir periode akuntansi, perusahaan jasa 'Lancar Jaya' mencatatkan total pendapatan jasa sebesar Rp15.000.000, total beban operasional sebesar Rp9.000.000, serta prive pemilik sebesar Rp1.000.000.",
            gambar: null,
            soalList: [
                {
                    q: "Berapakah besar laba bersih (net income) yang diperoleh perusahaan 'Lancar Jaya' pada periode tersebut?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "Rp6.000.000",
                        "Rp15.000.000",
                        "Rp5.000.000",
                        "Rp9.000.000"
                    ],
                    correct: 0
                },
                {
                    q: "Tentukan apakah pernyataan berikut mengenai persamaan dasar akuntansi Benar atau Salah!",
                    jenisSoal: "tabel-matriks",
                    rows: [
                        { text: "Persamaan dasar akuntansi yang baku adalah Harta = Utang + Modal." },
                        { text: "Pengambilan prive oleh pemilik akan menambah jumlah modal perusahaan." }
                    ],
                    correct: ["benar", "salah"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis badan usaha di sebelah kiri dengan karakternya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Perseroan Terbatas (PT)", "Koperasi", "Firma"],
            pairs: [
                { question: "Badan usaha berbadan hukum yang modalnya terbagi atas saham-saham dengan tanggung jawab terbatas.", correctMatch: "Perseroan Terbatas (PT)" },
                { question: "Badan usaha yang berlandaskan asas kekeluargaan dengan tujuan utama menyejahterakan anggota.", correctMatch: "Koperasi" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nDalam siklus akuntansi, buku catatan pertama tempat mencatat transaksi keuangan secara kronologis disebut jurnal ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "umum"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah sifat saldo normal untuk akun perkiraan 'Utang Dagang' (Liabilities) dalam akuntansi?",
            jenisSoal: "pg-biasa",
            options: ["Kredit", "Debit", "Modal", "Pendapatan"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai pertumbuhan dan pembangunan ekonomi berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Pertumbuhan ekonomi diukur dari kenaikan kapasitas produksi barang dan jasa (kenaikan PDB riil tanpa memandang pemerataan)." },
                { text: "Pembangunan ekonomi menitikberatkan pada kenaikan output fisik semata tanpa perubahan struktur sosial masyarakat." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara komponen berikut yang termasuk ke dalam penerimaan negara dalam APBN?",
            jenisSoal: "pg-kompleks",
            options: [
                "Pajak penghasilan (PPh) dan PPN",
                "Penerimaan sumber daya alam migas dan non-migas",
                "Hibah dari negara asing atau lembaga internasional",
                "Pembayaran gaji rutin pegawai negeri sipil"
            ],
            correct: [0, 1, 2]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nSistem perpindahan beban pajak kepada pihak lain disebut sebagai ... pajak.",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "pengalihan" // atau pergeseran pajak (shifting)
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah jenis pajak yang pembebanannya tidak dapat dialihkan kepada pihak lain (ditanggung langsung oleh Wajib Pajak)?",
            jenisSoal: "pg-biasa",
            options: ["Pajak Langsung", "Pajak Tidak Langsung", "Bea Cukai", "Pajak Pertambahan Nilai"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan tokoh mazhab ekonomi di sebelah kiri dengan gagasan utamanya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Adam Smith", "John Maynard Keynes", "Karl Marx"],
            pairs: [
                { question: "Pelopor mazhab klasik yang menganjurkan sistem pasar bebas tanpa campur tangan pemerintah (invisible hand).", correctMatch: "Adam Smith" },
                { question: "Pelopor ekonomi makro modern yang menekankan pentingnya intervensi pemerintah untuk mengatasi pengangguran dan krisis.", correctMatch: "John Maynard Keynes" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai neraca pembayaran internasional berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Neraca pembayaran yang surplus menunjukkan bahwa penerimaan devisa dari luar negeri lebih besar daripada pengeluaran." },
                { text: "Transaksi pinjaman luar negeri yang diterima dicatat dalam neraca modal sisi debit." }
            ],
            correct: ["benar", "salah"] // pinjaman luar negeri masuk dicatat di sisi kredit (karena mendatangkan devisa masuk)
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nKebijakan pemerintah berupa pembatasan jumlah fisik barang impor yang masuk ke dalam negeri disebut kuota ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "impor"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah tujuan utama dari pemberlakuan tarif (bea masuk) tinggi terhadap barang impor oleh suatu negara?",
            jenisSoal: "pg-biasa",
            options: [
                "Melindungi produk industri domestik dari persaingan barang luar negeri.",
                "Membuat harga barang impor menjadi sangat murah bagi konsumen lokal.",
                "Menghilangkan aktivitas perdagangan internasional secara permanen.",
                "Menurunkan pendapatan devisa negara dari sektor bea."
            ],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara masalah pengangguran berikut yang tergolong ke dalam pengangguran struktural?",
            jenisSoal: "pg-kompleks",
            options: [
                "Pekerja pabrik yang kehilangan pekerjaan karena digantikan oleh mesin otomatis / teknologi.",
                "Tenaga kerja yang mengalami pemutusan hubungan kerja akibat perubahan struktur ekonomi daerah.",
                "Pencari kerja baru yang sedang menunggu panggilan wawancara kerja.",
                "Petani yang menganggur di antara musim panen tiba."
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai indeks harga dan inflasi berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Indeks Harga Konsumen (IHK) digunakan untuk mengukur tingkat inflasi yang dirasakan oleh konsumen rumah tangga sehari-hari." },
                { text: "Tingkat inflasi dihitung berdasarkan penurunan persentase harga barang dari tahun ke tahun." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nLembaga independen di Indonesia yang berfungsi mengawasi kegiatan sektor jasa keuangan termasuk perbankan dan pasar modal adalah Otoritas Jasa ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "Keuangan"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah bentuk pasar di mana terdapat banyak perusahaan yang menjual produk sejenis tetapi terdiferensiasi (berbeda corak)?",
            jenisSoal: "pg-biasa",
            options: ["Pasar Persaingan Monopolistik", "Pasar Monopoli", "Pasar Oligopoli", "Pasar Persaingan Sempurna"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan konsep perkreditan di sebelah kiri dengan definisinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Jaminan (Collateral)", "Karakter (Character)", "Kapasitas (Capacity)"],
            pairs: [
                { question: "Sifat dan rekam jejak integritas calon debitur dalam memenuhi kewajiban finansial masa lalu.", correctMatch: "Karakter (Character)" },
                { question: "Kemampuan finansial calon debitur untuk melunasi pinjaman dari hasil usaha atau pendapatannya.", correctMatch: "Kapasitas (Capacity)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai fungsi tabungan dan konsumsi berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Besar kecilnya pendapatan nasional dipengaruhi oleh tingkat konsumsi masyarakat dan investasi." },
                { text: "Nilai Marginal Propensity to Consume (MPC) ditambah Marginal Propensity to Save (MPS) selalu bernilai kurang dari satu." }
            ],
            correct: ["salah", "salah"] // MPC + MPS selalu bernilai tepat sama dengan 1
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nDokumen tertulis resmi yang diterbitkan oleh bank atas permintaan nasabah untuk menjamin pembayaran transaksi ekspor-impor disebut Letter of ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "Credit"
        },
        {
            tipe: "soal-tunggal",
            q: "Manakah di antara bentuk devisa berikut yang bersumber dari aktivitas sektor pariwisata internasional?",
            jenisSoal: "pg-kompleks",
            options: [
                "Penukaran mata uang asing oleh wisatawan asing di money changer lokal",
                "Pembayaran hotel dan restoran oleh turis mancanegara",
                "Pemberian subsidi pupuk domestik oleh pemerintah",
                "Belanja cenderamata khas daerah oleh pelancong luar negeri"
            ],
            correct: [0, 1, 3]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah prinsip utama pengelolaan koperasi di Indonesia selain berazaskan kekeluargaan?",
            jenisSoal: "pg-biasa",
            options: ["Demokrasi ekonomi", "Mengejar keuntungan sebesar-besarnya", "Monopoli pasar bebas", "Sentralisasi modal mutlak"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai pembagian laba perusahaan perseroan terbatas berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Dividen adalah bagian keuntungan perusahaan yang dibagikan kepada para pemegang saham." },
                { text: "Laba ditahan adalah bagian laba yang seluruhnya dibagikan habis kepada karyawan." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nKenaikan harga secara umum dan terus-menerus dalam jangka panjang dikenal dengan istilah ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "inflasi"
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah komponen utama dalam perhitungan pendapatan nasional melalui pendekatan pendapatan (income approach)?",
            jenisSoal: "pg-biasa",
            options: [
                "Sewa (rent), Upah (wage), Bunga (interest), dan Laba (profit)",
                "Konsumsi, Investasi, Pemerintah, dan Ekspor Neto",
                "Pertanian, Pertambangan, Industri, dan Jasa",
                "Penerimaan pajak, Bea masuk, dan Hibah"
            ],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan pelaku ekonomi di sebelah kiri dengan peran utamanya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Rumah Tangga Konsumen", "Rumah Tangga Produsen", "Pemerintah"],
            pairs: [
                { question: "Menyediakan faktor produksi serta mengonsumsi barang dan jasa akhir.", correctMatch: "Rumah Tangga Konsumen" },
                { question: "Menghasilkan barang dan jasa serta sebagai pengguna faktor produksi.", correctMatch: "Rumah Tangga Produsen" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai perdagangan internasional berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Teori keunggulan komparatif (Comparative Advantage) dicetuskan oleh David Ricardo." },
                { text: "Perdagangan internasional terjadi karena kondisi sumber daya alam di setiap negara persis sama." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nNama buku klasik monumental mengenai ilmu ekonomi yang ditulis oleh Adam Smith pada tahun 1776 adalah The Wealth of ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "Nations"
        }
    ]
};