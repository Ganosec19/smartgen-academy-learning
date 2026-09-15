window.soalData = window.soalData || {};

window.soalData["TKA SMA Kelas 12"] = window.soalData["TKA SMA Kelas 12"] = window.soalData["TKA SMA Kelas 12"] || {};

window.soalData["TKA SMA Kelas 12"]["Bahasa Korea"] = {
    pilihanGanda: [
        {
            tipe: "soal-tunggal",
            q: "빈칸에 알맞은 조사를 선택하세요:\n'저는 매일 학교에 ... 니다.' (Saya pergi ke sekolah setiap hari)",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "가"
        },
        {
            tipe: "soal-tunggal",
            q: "다음 한국어 동사와 그 의미를 올바르게 연결하세요:",
            jenisSoal: "penjodohan",
            options: ["먹다 (mek-da)", "마시다 (ma-si-da)", "가다 (ga-da)"],
            pairs: [
                { question: "Makan (to eat / 먹다).", correctMatch: "먹다 (mek-da)" },
                { question: "Minum (to drink / 마시다).", correctMatch: "마시다 (ma-si-da)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "한국어 문법에 대한 설명으로 올바른 것은 O, 틀린 것은 X를 선택하세요:",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Kalimat dasar bahasa Korea umumnya berpola Subjek - Objek - Predikat (SOV)." },
                { text: "Partikel 'iga' (이/가) digunakan secara mutlak hanya untuk menandai objek penderita langsung." }
            ],
            correct: ["O", "X"] // 이/가 menandai subjek
        },
        {
            tipe: "soal-tunggal",
            q: "다음 중 한국어 형용사를 두 개 고르세요:",
            jenisSoal: "pg-kompleks",
            options: [
                "크다 (besar)",
                "따뜻하다 (hangat)",
                "공부하다 (belajar)",
                "운동하다 (berolahraga)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "grup-stimulus",
            stimulus: "다음 글을 읽고 질문에 답하세요:\n'제 이름은 민수입니다. 서울에 삽니다. 주말에 도서관에서 한국어를 공부합니다. 그리고 친구와 영화를 봅니다.'",
            gambar: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80",
            soalList: [
                {
                    q: "민수 씨는 주말에 어디에서 한국어를 공부합니까?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "도서관에서 (Di perpustakaan)",
                        "집에서 (Di rumah)",
                        "식당에서 (Di restoran)",
                        "공원에서 (Di taman)"
                    ],
                    correct: 0
                },
                {
                    q: "O 또는 X를 고르세요:",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "민수 씨는 서울에 삽니다." },
                { text: "민수 씨는 주말에 축구를 합니다." }
            ],
            correct: ["O", "X"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "한국어 '학교'는 인도네시아어로 무엇입니까?",
            jenisSoal: "pg-biasa",
            options: ["Sekolah", "Rumah", "Rumah sakit", "Kantor pos"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "지시대명사를 올바르게 연결하세요:",
            jenisSoal: "penjodohan",
            options: ["이것 (i-geot)", "그것 (geu-geot)", "저것 (jeo-geot)"],
            pairs: [
                { question: "Benda dekat pembicara (ini).", correctMatch: "이것 (i-geot)" },
                { question: "Benda dekat lawan bicara (itu).", correctMatch: "그것 (geu-geot)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "빈칸에 알맞은 과거 시제 어미를 넣으세요:\n'어제 친구를 만나 ...' (Kemarin saya bertemu teman)",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "았어요" // atau 만났어요
        },
        {
            tipe: "soal-tunggal",
            q: "다음 중 불규칙 동사를 두 개 고르세요:",
            jenisSoal: "pg-kompleks",
            options: [
                "듣다 (mendengar - t menjadi r irreguler)",
                "돕다 (membantu - b menjadi o/wu irreguler)",
                "하다 (melakukan - beraturan)",
                "보다 (melihat - beraturan)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "존댓말과 반말에 대해 올바른 것은 O, 틀린 것은 X를 선택하세요:",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Akhiran '-oyo' (어요/아요) adalah bentuk sopan standar dalam percakapan bahasa Korea." },
                { text: "Banmal (반말) digunakan kepada orang yang lebih tua atau orang yang baru dikenal untuk menghormati." }
            ],
            correct: ["O", "X"] // banmal untuk akrab/lebih muda
        },
        {
            tipe: "soal-tunggal",
            q: "한국어 인사말 '안녕하세요'의 의미는 무엇입니까?",
            jenisSoal: "pg-biasa",
            options: ["Halo / Selamat pagi/siang/sore", "Terima kasih", "Sampai jumpa", "Mohon maaf"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "시간 표현을 올바르게 연결하세요:",
            jenisSoal: "penjodohan",
            options: ["오늘 (oneul)", "어제 (eo-je)", "내일 (nae-il)"],
            pairs: [
                { question: "Hari ini (today).", correctMatch: "오늘 (oneul)" },
                { question: "Kemarin (yesterday).", correctMatch: "어제 (eo-je)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "빈칸에 알맞은 장소 부사격 조사를 넣으세요:\n'식당 ... 밥을 먹습니다.' (Makan nasi di restoran)",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "에서"
        },
        {
            tipe: "grup-stimulus",
            stimulus: "대화를 읽고 질문에 답하세요:\n'점원: 어서 오세요. 무엇을 드릴까요?\n손님: 사과 주세요. 사과가 얼마예요?\n점원: 한 개에 천 원입니다. 세 개 주세요.'",
            gambar: null,
            soalList: [
                {
                    q: "손님은 사과를 몇 개 삽니까?",
                    jenisSoal: "pg-biasa",
                    options: [
                        "세 개 (3 buah)",
                        "두 개 (2 buah)",
                        "네 개 (4 buah)",
                        "다섯 개 (5 buah)"
                    ],
                    correct: 0
                },
                {
                    q: "O 또는 X를 고르세요:",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Harga satu buah apel adalah 1.000 won." },
                { text: "Pembeli sedang berada di perpustakaan." }
            ],
            correct: ["O", "X"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "다음 중 나라 이름을 두 개 고르세요:",
            jenisSoal: "pg-kompleks",
            options: [
                "한국 (Korea)",
                "인도네시아 (Indonesia)",
                "서울 (Seoul - ibu kota)",
                "부산 (Busan - kota)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "한국어 '감사합니다'는 인도네시아어로 무엇입니까?",
            jenisSoal: "pg-biasa",
            options: ["Terima kasih", "Mohon maaf", "Selamat tinggal", "Sampai jumpa"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "가족 호칭을 올바르게 연결하세요:",
            jenisSoal: "penjodohan",
            options: ["아버지 (abeoji)", "어머니 (eomeoni)"],
            pairs: [
                { question: "Ayah (father).", correctMatch: "아버지 (abeoji)" },
                { question: "Ibu (mother).", correctMatch: "어머니 (eomeoni)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "빈칸에 알맞은 소유 격 조사를 넣으세요:\n'이것은 ... 책입니다.' (Ini adalah buku saya)",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "제" // atau 저의
        },
        {
            tipe: "soal-tunggal",
            q: "다음 중 신체 부위 단어를 두 개 고르세요:",
            jenisSoal: "pg-kompleks",
            options: [
                "머리 (kepala)",
                "손 (tangan)",
                "책상 (meja)",
                "의자 (kursi)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "한국어 숫자 '천'은 얼마입니까?",
            jenisSoal: "pg-biasa",
            options: ["1.000", "100", "10.000", "100.000"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "요일을 올바르게 연결하세요:",
            jenisSoal: "penjodohan",
            options: ["월요일 (wol-yo-il)", "화요일 (hwa-yo-il)"],
            pairs: [
                { question: "Hari Senin (Monday).", correctMatch: "월요일 (wol-yo-il)" },
                { question: "Hari Selasa (Tuesday).", correctMatch: "화요일 (hwa-yo-il)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "빈칸에 미래 시제 어미를 넣으세요:\n'내일 영화를 보 ...' (Besok saya akan menonton film)",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "을 거예요" // atau 겠어요
        },
        {
            tipe: "soal-tunggal",
            q: "이유나 원인을 나타내는 연결 어미 '-으니까 / 니까'의 용법으로 올바른 것을 두 개 고르세요:",
            jenisSoal: "pg-kompleks",
            options: [
                "Menyatakan alasan atau dasar melakukan suatu tindakan.",
                "Digunakan di belakang kata kerja atau kata sifat.",
                "Hanya dapat digunakan untuk kalimat perintah masa lalu.",
                "Menyatakan hubungan sebab akibat yang logis."
            ],
            correct: [0, 1, 3]
        },
        {
            tipe: "soal-tunggal",
            q: "한국어 '친구'는 인도네시아어로 무엇입니까?",
            jenisSoal: "pg-biasa",
            options: ["Teman", "Guru", "Musuh", "Dokter"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "날씨 표현을 올바르게 연결하세요:",
            jenisSoal: "penjodohan",
            options: ["날씨가 좋다 (cuaca bagus)", "비가 오다 (turun hujan)"],
            pairs: [
                { question: "Cuaca cerah/bagus.", correctMatch: "날씨가 좋다 (cuaca bagus)" },
                { question: "Hujan turun.", correctMatch: "비가 오다 (turun hujan)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "빈칸에 알맞은 조사를 넣으세요:\n'사과 ... 바나나를 좋아합니다.' (Saya suka apel dan pisang - partikel dan)",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "와" // atau 고 / 하고
        },
        {
            tipe: "soal-tunggal",
            q: "다음 중 과일 이름을 두 개 고르세요:",
            jenisSoal: "pg-kompleks",
            options: [
                "사과 (apel)",
                "바나나 (pisang)",
                "책 (buku)",
                "연필 (pensil)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "한국어 '죄송합니다'의 의미는 무엇입니까?",
            jenisSoal: "pg-biasa",
            options: ["Mohon maaf", "Terima kasih", "Selamat pagi", "Silakan masuk"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "계절을 올바르게 연결하세요:",
            jenisSoal: "penjodohan",
            options: ["봄 (bom - musim semi)", "겨울 (gyeoul - musim dingin)"],
            pairs: [
                { question: "Musim semi (spring).", correctMatch: "봄 (bom - musim semi)" },
                { question: "Musim dingin (winter).", correctMatch: "겨울 (gyeoul - musim dingin)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "빈칸에 의도나 희망을 나타내는 문법을 넣으세요:\n'한국어를 공부하고 ...' (Saya ingin belajar bahasa Korea)",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "싶어요"
        },
        {
            tipe: "soal-tunggal",
            q: "다음 중 색깔 이름을 두 개 고르세요:",
            jenisSoal: "pg-kompleks",
            options: [
                "빨간색 (warna merah)",
                "파란색 (warna biru)",
                "크다 (besar)",
                "작다 (kecil)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "한국어 '안녕히 가세요'는 어떤 상황에 사용합니까?",
            jenisSoal: "pg-biasa",
            options: ["Mengucapkan selamat tinggal kepada orang yang pergi (kita tetap di tempat)", "Menyapa orang datang", "Mengucapkan terima kasih", "Meminta maaf"],
            correct: 0
        }
    ]
};