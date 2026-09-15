window.soalData = window.soalData || {};

window.soalData["TKA SMA Kelas 12"] = window.soalData["TKA SMA Kelas 12"] || {};

window.soalData["TKA SMA Kelas 12"]["Produk/Projek Kreatif dan Kewirausahaan"] = {
    pilihanGanda: [
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai karakteristik seorang wirausahawan sukses berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Wirausahawan yang tangguh memiliki orientasi ke depan dan berani mengambil risiko terukur." },
                { text: "Sikap mudah menyerah saat menghadapi kegagalan pasar adalah kunci utama keberhasilan bisnis." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis analisis peluang usaha di sebelah kiri dengan penjelasannya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Analisis SWOT", "Analisis Break Even Point (BEP)"],
            pairs: [
                { question: "Mengkaji faktor internal (Strength, Weakness) dan eksternal (Opportunity, Threat) perusahaan.", correctMatch: "Analisis SWOT" },
                { question: "Menghitung titik impas di mana total pendapatan sama dengan total biaya produksi.", correctMatch: "Analisis Break Even Point (BEP)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini dengan istilah bisnis:\nHak eksklusif yang diberikan oleh negara kepada penemu atas hasil penemuannya di bidang teknologi disebut hak ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "paten"
        },
        {
            tipe: "soal-tunggal",
            q: "Pilihlah dua komponen utama yang termasuk ke dalam unsur analisis SWOT bagian faktor internal perusahaan!",
            jenisSoal: "pg-kompleks",
            options: [
                "Strength (Kekuatan internal produk/tim)",
                "Weakness (Kelemahan internal perusahaan)",
                "Opportunity (Peluang pasar eksternal)",
                "Threat (Ancaman pesaing luar)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "grup-stimulus",
            stimulus: "Perhatikan wacana mengenai perencanaan usaha kerajinan tangan berikut!\n\nSebuah kelompok wirausaha muda memproduksi kerajinan lampu hias dari bahan limbah pipa PVC. Biaya tetap (Fixed Cost) bulanan sebesar Rp1.000.000, biaya variabel per unit sebesar Rp20.000, dan harga jual produk ditetapkan Rp40.000 per unit.",
            gambar: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80",
            soalList: [
                {
                    q: "Berdasarkan data tersebut, berapakah jumlah unit produk yang harus terjual agar usaha mencapai titik impas (BEP Unit)?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "50 unit",
                        "100 unit",
                        "500 unit",
                        "1.000 unit"
                    ],
                    correct: 2 // BEP Unit = FC / (P - AVC) = 1.000.000 / (40.000 - 20.000) = 1.000.000 / 20.000 = 50 unit
                },
                {
                    q: "Tentukan apakah pernyataan berikut mengenai Break Even Point (BEP) Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Pada titik BEP, perusahaan tidak mengalami laba maupun kerugian (laba bersih sama dengan nol)." },
                { text: "Jika volume penjualan berada di bawah titik BEP, perusahaan dipastikan memperoleh keuntungan besar." }
            ],
            correct: ["benar", "salah"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah rumus untuk menghitung Harga Pokok Produksi (HPP) per unit suatu barang?",
            jenisSoal: "pg-biasa",
            options: [
                "Total Biaya Produksi / Jumlah Unit yang Diproduksi",
                "Harga Jual dikurangi Laba Bersih",
                "Biaya Tetap dikali Biaya Variabel",
                "Modal awal ditambah modal akhir"
            ],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan bentuk Hak Kekayaan Intelektual (HAKI) di sebelah kiri dengan objek perlindungannya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Merek Dagang", "Hak Cipta"],
            pairs: [
                { question: "Tanda, logo, atau nama dagang yang membedakan produk suatu perusahaan dengan pesaingnya.", correctMatch: "Merek Dagang" },
                { question: "Hak eksklusif pencipta atas karya seni, musik, buku, atau ciptaan sastra.", correctMatch: "Hak Cipta" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nStrategi pemasaran 4P dalam bauran pemasaran (marketing mix) terdiri atas Product, Price, Place, dan ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "promotion" // atau promosi
        },
        {
            tipe: "soal-tunggal",
            q: "Pilihlah dua strategi promosi yang termasuk ke dalam bauran promosi (promotional mix) modern!",
            jenisSoal: "pg-kompleks",
            options: [
                "Digital Marketing dan Social Media Ads",
                "Personal Selling (penjualan tatap muka langsung)",
                "Menaikkan suku bunga bank sentral nasional",
                "Mengubah struktur organisasi perusahaan"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai desain prototyping produk kreatif berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Pembuatan prototipe bertujuan menguji kelayakan fisik dan fungsi awal dari suatu ide produk sebelum diproduksi massal." },
                { text: "Proses pembuatan prototipe dapat diabaikan sepenuhnya agar produk cepat laku di pasaran." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah tujuan utama dari analisis pasar (market research) sebelum merintis produk baru?",
            jenisSoal: "pg-biasa",
            options: [
                "Mengetahui kebutuhan, keinginan, dan daya beli calon konsumen di pasar",
                "Menghilangkan seluruh kewajiban membayar pajak perusahaan",
                "Memastikan agar produk tidak memiliki pesaing sama sekali di dunia",
                "Menurunkan kualitas bahan baku demi menekan biaya"
            ],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan istilah manajemen produksi di sebelah kiri dengan definisinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Quality Control (Pengendalian Mutu)", "Mass Production (Produksi Massal)"],
            pairs: [
                { question: "Proses pengawasan kualitas barang agar sesuai standar spesifikasi sebelum dilepas ke pasaran.", correctMatch: "Quality Control (Pengendalian Mutu)" },
                { question: "Sistem pembuatan produk dalam jumlah besar secara terus-menerus menggunakan standar mesin.", correctMatch: "Mass Production (Produksi Massal)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nDokumen tertulis yang merinci seluruh aspek perencanaan bisnis, strategi pemasaran, dan proyeksi keuangan disebut proposal usaha atau ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "business plan" // atau rencana bisnis
        },
        {
            tipe: "grup-stimulus",
            stimulus: "Cermatilah wacana mengenai Hak Atas Kekayaan Intelektual (HAKI) berikut:\n\nPendaftaran merek dagang ke Direktorat Jenderal Kekayaan Intelektual (DJKI) sangat penting bagi pelaku usaha UMKM. Hal ini dilakukan guna melindungi identitas brand dari tindakan pemalsuan oleh pihak kompetitor yang tidak bertanggung jawab serta memberikan kepastian hukum.",
            gambar: null,
            soalList: [
                {
                    q: "Apa manfaat utama pendaftaran merek dagang bagi pelaku usaha kreatif?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "Memberikan perlindungan hukum resmi dan mencegah peniruan merek oleh pihak lain",
                        "Membebaskan pelaku usaha dari seluruh aturan perizinan daerah",
                        "Menjamin produk pasti laku terjual dengan harga sangat tinggi",
                        "Menghapus biaya produksi secara permanen"
                    ],
                    correct: 0
                },
                {
                    q: "Tentukan apakah pernyataan berikut mengenai HAKI Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Sertifikat merek memberikan hak monopoli legal bagi pemilik untuk menggunakan merek tersebut." },
                { text: "Setiap orang bebas memakai merek terdaftar milik orang lain tanpa izin." }
            ],
            correct: ["benar", "salah"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "Pilihlah dua sumber permodalan eksternal yang lazim digunakan untuk mengembangkan usaha rintisan (startup/UMKM)!",
            jenisSoal: "pg-kompleks",
            options: [
                "Pinjaman kredit usaha dari lembaga perbankan (KUR)",
                "Investasi dari pemodal ventura (angel investor)",
                "Mengambil tabungan rahasia pesaing bisnis secara paksa",
                "Penerbitan saham atau urun dana (crowdfunding)"
            ],
            correct: [0, 1, 3]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nama laporan keuangan yang merangkum posisi aset, liabilitas, dan ekuitas perusahaan pada tanggal tertentu?",
            jenisSoal: "pg-biasa",
            options: ["Laporan Neraca (Balance Sheet)", "Laporan Laba Rugi", "Laporan Arus Kas", "Laporan Perubahan Modal"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis biaya produksi di sebelah kiri dengan contohnya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Biaya Tetap (Fixed Cost)", "Biaya Variabel (Variable Cost)"],
            pairs: [
                { question: "Biaya sewa gedung toko dan gaji pegawai administrasi bulanan.", correctMatch: "Biaya Tetap (Fixed Cost)" },
                { question: "Biaya pembelian bahan baku utama pembuatan produk dan bahan penolong.", correctMatch: "Biaya Variabel (Variable Cost)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nAnalisis kelayakan usaha yang menghitung nilai tunai arus kas bersih masa depan dibanding nilai investasi awal dikenal dengan metode Net Present ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "Value" // Net Present Value (NPV)
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai strategi penetapan harga (pricing strategy) berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Cost-plus pricing adalah metode penetapan harga dengan menambahkan persentase laba di atas biaya produksi." },
                { text: "Penetapan harga jual tidak perlu memperhitungkan daya beli konsumen dan harga pesaing." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Pilihlah dua karakteristik utama dari proses produksi massal (mass production) barang kreatif!",
            jenisSoal: "pg-kompleks",
            options: [
                "Produk dibuat dalam jumlah besar dan seragam",
                "Mengandalkan penggunaan mesin otomatis dan ban berjalan",
                "Setiap barang dikerjakan secara manual unik berbeda satu per satu",
                "Efisiensi tinggi dengan biaya per unit yang relatif rendah"
            ],
            correct: [0, 1, 3]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah fungsi dari pembuatan Laporan Laba Rugi (Income Statement) bagi sebuah entitas bisnis?",
            jenisSoal: "pg-biasa",
            options: ["Mengetahui besar keuntungan atau kerugian bersih selama periode akuntansi", "Menghitung jumlah total karyawan yang masuk kerja", "Mengetahui alamat rumah seluruh pelanggan setia", "Mengatur tata letak mesin pabrik"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan istilah strategi pemasaran digital di sebelah kiri dengan definisinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Search Engine Optimization (SEO)", "Endorsement / Influencer Marketing"],
            pairs: [
                { question: "Mengoptimalkan website agar berada di peringkat teratas mesin pencari Google secara organik.", correctMatch: "Search Engine Optimization (SEO)" },
                { question: "Memanfaatkan figur publik atau influencer media sosial untuk mempromosikan produk.", correctMatch: "Endorsement / Influencer Marketing" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nSikap selalu ingin tahu, kreatif, dan mampu melahirkan ide-ide baru yang bernilai ekonomis disebut inovasi dan ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "kreativitas"
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai manajemen risiko usaha berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Identifikasi risiko sejak dini membantu wirausahawan menyiapkan langkah mitigasi dan pencegahan." },
                { text: "Risiko kerugian dalam bisnis dapat dihindari 100 persen tanpa perencanaan sama sekali." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Pilihlah dua unsur penting yang harus termuat dalam sebuah proposal rancangan produk kreatif (prototype design)!",
            jenisSoal: "pg-kompleks",
            options: [
                "Sketsa gambar kerja / desain teknis produk",
                "Daftar kebutuhan alat dan bahan baku produksi",
                "Jadwal pertandingan olahraga antarperusahaan",
                "Estimasi perhitungan anggaran biaya pembuatan"
            ],
            correct: [0, 1, 3]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah arti dari istilah 'Startup' dalam dunia bisnis modern saat ini?",
            jenisSoal: "pg-biasa",
            options: ["Perusahaan rintisan berbasis teknologi yang sedang berkembang pesat", "Perusahaan dagang tradisional yang sudah berdiri seabad", "Kantor instansi pemerintahan daerah", "Lembaga perbankan sentral negara"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan jenis bentuk badan usaha di sebelah kiri dengan karakteristiknya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Perseroan Terbatas (PT)", "CV (Commanditaire Vennootschap)"],
            pairs: [
                { question: "Badan usaha berbadan hukum yang modalnya terbagi atas saham-saham dengan tanggung jawab terbatas.", correctMatch: "Perseroan Terbatas (PT)" },
                { question: "Persekutuan perdata yang memiliki sekutu aktif dan sekutu pasif (tidak berbadan hukum penuh).", correctMatch: "CV (Commanditaire Vennootschap)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nKemampuan seseorang untuk membaca peluang bisnis, mengorganisir sumber daya, dan menanggung risiko demi keuntungan disebut ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "kewirausahaan" // atau entrepreneurship
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai pelayanan purna jual (after-sales service) berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Pelayanan purna jual yang baik dapat meningkatkan loyalitas pelanggan dan membangun reputasi brand positif." },
                { text: "Layanan garansi dan servis setelah produk dibeli sama sekali tidak penting bagi konsumen." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Pilihlah dua faktor utama pendorong keberhasilan suatu inovasi produk di pasar!",
            jenisSoal: "pg-kompleks",
            options: [
                "Produk mampu memberikan solusi nyata atas masalah konsumen",
                "Memiliki keunggulan pembeda (unique selling proposition) dari pesaing",
                "Harga dipatok sangat mahal tanpa melihat kualitas",
                "Kualitas bahan terjamin dan tahan lama"
            ],
            correct: [0, 1, 3]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah kepanjangan dari singkatan HAKI dalam ranah hukum kekayaan intelektual?",
            jenisSoal: "pg-biasa",
            options: ["Hak Atas Kekayaan Intelektual", "Hak Asuransi Kesehatan Indonesia", "Harga Administrasi Keuangan Industri", "Hubungan Antar Kelompok Intelektual"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan istilah strategi bisnis di sebelah kiri dengan penjelasannya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Diversifikasi Produk", "Penetrasi Pasar"],
            pairs: [
                { question: "Menambah varian atau jenis produk baru guna memperluas segmen pasar.", correctMatch: "Diversifikasi Produk" },
                { question: "Meningkatkan volume penjualan produk yang ada di pasar saat ini melalui promosi gencar.", correctMatch: "Penetrasi Pasar" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nAnalisis titik impas sering juga disebut dengan singkatan BEP, yang dalam bahasa Indonesia berarti Analisis Titik ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "Impas"
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai etika bisnis wirausaha berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Menjaga kejujuran kualitas produk dan transparansi informasi harga adalah wujud etika bisnis yang baik." },
                { text: "Kecurangan dalam promosi iklan dibolehkan demi meraup keuntungan instan." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Pilihlah dua indikator keberhasilan dalam mengelola proyek kewirausahaan siswa!",
            jenisSoal: "pg-kompleks",
            options: [
                "Target penjualan dan realisasi laba tercapai sesuai perencanaan",
                "Produk berhasil diselesaikan tepat waktu dengan standar mutu baik",
                "Terjadinya perselisihan antaranggota tim secara terus-menerus",
                "Adanya evaluasi positif dari kepuasan konsumen pengguna"
            ],
            correct: [0, 1, 3]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah nama dokumen izin edar atau standarisasi mutu nasional yang sering dilekatkan pada produk barang di Indonesia?",
            jenisSoal: "pg-biasa",
            options: ["Standar Nasional Indonesia (SNI)", "Surat Izin Mengemudi", "Paspor Internasional", "Akta Kelahiran"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "Pasangkan komponen laporan keuangan di sebelah kiri dengan fungsinya di sebelah kanan!",
            jenisSoal: "penjodohan",
            options: ["Laporan Arus Kas", "Laporan Perubahan Modal"],
            pairs: [
                { question: "Menunjukkan sumber penerimaan dan pengeluaran kas tunai perusahaan selama periode tertentu.", correctMatch: "Laporan Arus Kas" },
                { question: "Menunjukkan pergerakan perubahan ekuitas pemilik dari awal hingga akhir periode.", correctMatch: "Laporan Perubahan Modal" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "Isilah titik-titik di bawah ini:\nKemasan produk yang dirancang menarik untuk melindungi barang sekaligus berfungsi sebagai media promosi disebut desain ...",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "kemasan" // atau packaging
        },
        {
            tipe: "soal-tunggal",
            q: "Tentukan apakah pernyataan mengenai tahap inkubasi bisnis berikut Benar atau Salah!",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Inkubator bisnis berfungsi mendampingi wirausahawan pemula dalam mengembangkan model dan manajemen usahanya." },
                { text: "Inkubator bisnis hanya bertugas menutup usaha secara paksa di hari pertama berdiri." }
            ],
            correct: ["benar", "salah"]
        },
        {
            tipe: "soal-tunggal",
            q: "Berapakah esensi utama dari jiwa kewirausahaan (entrepreneurship spirit) di era modern?",
            jenisSoal: "pg-biasa",
            options: ["Mampu menciptakan lapangan kerja baru, berinovasi, dan membaca peluang di tengah ketidakpastian", "Menghindari segala bentuk kerja keras dan tanggung jawab", "Bergantung sepenuhnya pada bantuan subsidi tanpa kreativitas", "Menolak pemanfaatan teknologi digital dalam berbisnis"],
            correct: 0
        }
    ]
};