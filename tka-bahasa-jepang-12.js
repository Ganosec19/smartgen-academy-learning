window.soalData = window.soalData || {};

window.soalData["TKA SMA Kelas 12"] = window.soalData["TKA SMA Kelas 12"] || {};

window.soalData["TKA SMA Kelas 12"]["Bahasa Jepang"] = {
    pilihanGanda: [
        {
            tipe: "soal-tunggal",
            q: "空欄に当てはまる最も適切な助詞を選びなさい：\n「私は毎日本を ... ます。」",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "を"
        },
        {
            tipe: "soal-tunggal",
            q: "次の動詞とérmの意味を正しく組み合わせなさい：",
            jenisSoal: "penjodohan",
            options: ["食べる", "飲む", "行く"],
            pairs: [
                { question: "Makan (to eat / 食べる).", correctMatch: "食べる" },
                { question: "Minum (to drink / 飲む).", correctMatch: "飲む" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "日本語の文法について、正しいものには「〇」、誤っているものには「×」をつなさい：",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Kalimat dasar bahasa Jepang berpola Subjek - Objek - Predikat (SOV)." },
                { text: "Partikel 'wa' (は) digunakan untuk menandai kepemilikan benda secara mutlak." }
            ],
            correct: ["〇", "×"]
        },
        {
            tipe: "soal-tunggal",
            q: "日本語の形容詞（い形容詞）を二つ選びなさい：",
            jenisSoal: "pg-kompleks",
            options: [
                "高い",
                "寒い",
                "きれい（な）",
                "静か（な）"
            ],
            correct: [0, 1]
        },
        {
            tipe: "grup-stimulus",
            stimulus: "次の作文を読んで質問に答えなさい：\n「私の名前はケンです。東京に住んでいます。毎日バスで学校へ行きます。学校で日本語と数学を勉強します。」",
            gambar: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop&q=80",
            soalList: [
                {
                    q: "ケンさんは何で学校へ行きますか。",
                    jenisSoal: "pg-biasa",
                    options: [
                        "バスで",
                        "電車で",
                        "自転車で",
                        "歩いて"
                    ],
                    correct: 0
                },
                {
                    q: "〇か×か：",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "ケンさんは東京に住んでいます。" },
                { text: "ケンさんは学校で英語を勉強します。" }
            ],
            correct: ["〇", "×"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "日本語で「学校」はインドネシア語で何ですか。",
            jenisSoal: "pg-biasa",
            options: ["Sekolah", "Rumah", "Rumah sakit", "Toko buku"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "指示代名詞を正しく組み合わせなさい：",
            jenisSoal: "penjodohan",
            options: ["これ", "それ", "あれ"],
            pairs: [
                { question: "Benda yang berada di dekat orang yang berbicara (ini).", correctMatch: "これ" },
                { question: "Benda yang berada di dekat lawan bicara (itu).", correctMatch: "それ" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "空欄に「ました」または「ませんでした」を入れなさい：\n「昨日、ビデオを見 ... 。（Kemarin saya tidak menonton video）」",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "ませんでした"
        },
        {
            tipe: "soal-tunggal",
            q: "普通形（インフォーマル）の動詞を二つ選びなさい：",
            jenisSoal: "pg-kompleks",
            options: [
                "見る",
                "買う",
                "食べます",
                "行きます"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "敬語について、正しいものには〇、誤っているものには×をつなさい：",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "尊敬語 digunakan untuk meninggikan perbuatan lawan bicara atau orang lain." },
                { text: "謙譲語 digunakan untuk meninggikan kedudukan diri sendiri di atas atasan." }
            ],
            correct: ["〇", "×"]
        },
        {
            tipe: "soal-tunggal",
            q: "日本語で「おはようございます」の意味は何ですか。",
            jenisSoal: "pg-biasa",
            options: ["Selamat pagi", "Selamat siang", "Selamat sore", "Selamat malam"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "時間の表現を組み合わせなさい：",
            jenisSoal: "penjodohan",
            options: ["今", "昨日", "明日"],
            pairs: [
                { question: "Hari ini / sekarang (ima).", correctMatch: "今" },
                { question: "Hari kemarin (kinō).", correctMatch: "昨日" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "空欄に「に」または「で」を入れなさい：\n「私は図書館 ... 本を読みます。」",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "で"
        },
        {
            tipe: "grup-stimulus",
            stimulus: "会話を読んで質問に答えなさい：\n「店員：いらっしゃいませ！このリンゴはいくつですか。\n客：これは一つ百円です。三つください。」",
            gambar: null,
            soalList: [
                {
                    q: "客はリンゴをいくつ買いますか。",
                    jenisSoal: "pg-biasa",
                    options: [
                        "三つ",
                        "二つ",
                        "四つ",
                        "五つ"
                    ],
                    correct: 0
                },
                {
                    q: "〇か×か：",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "リンゴ一つは百円です。" },
                { text: "客は駅にいます。" }
            ],
            correct: ["〇", "×"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "国の名前を二つ選びなさい：",
            jenisSoal: "pg-kompleks",
            options: [
                "日本",
                "インドネシア",
                "東京",
                "大阪"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "日本語で「ありがとうございます」はインドネシア語で何ですか。",
            jenisSoal: "pg-biasa",
            options: ["Terima kasih banyak", "Mohon maaf", "Sampai jumpa", "Selamat tinggal"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "家族の言葉を組み合わせなさい：",
            jenisSoal: "penjodohan",
            options: ["父", "母"],
            pairs: [
                { question: "Ayah saya sendiri (chichi).", correctMatch: "父" },
                { question: "Ibu saya sendiri (haha).", correctMatch: "母" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "空欄に適切な助詞を入れなさい：\n「私 ... 妹がいます。」",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "は"
        },
        {
            tipe: "soal-tunggal",
            q: "な形容詞（形容動詞）を二つ選びなさい：",
            jenisSoal: "pg-kompleks",
            options: [
                "きれい（な）",
                "有名（な）",
                "高い（い形容詞）",
                "良い（い形容詞）"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "日本語の数字で「百」はいくつですか。",
            jenisSoal: "pg-biasa",
            options: ["100", "10", "1.000", "10.000"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "曜日を組み合わせなさい：",
            jenisSoal: "penjodohan",
            options: ["月曜日", "火曜日"],
            pairs: [
                { question: "Hari Senin (getsuyoubi).", correctMatch: "月曜日" },
                { question: "Hari Selasa (kayoubi).", correctMatch: "火曜日" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "空欄に「から」または「まで」を入れなさい：\n「学校は八時 ... 午後三時までです。」",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "から"
        },
        {
            tipe: "soal-tunggal",
            q: "飛行機や電車などの交通手段に使う助詞はどれですか。",
            jenisSoal: "pg-biasa",
            options: ["で", "に", "を", "は"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "日本語の挨拶を二つ選びなさい：",
            jenisSoal: "pg-kompleks",
            options: [
                "こんにちは",
                "こんばんは",
                "さようならはいいです",
                "ありがとうは食べます"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "日本語で「友達」はインドネシア語で何ですか。",
            jenisSoal: "pg-biasa",
            options: ["Teman", "Musuh", "Guru", "Dokter"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "季節の言葉を組み合わせなさい：",
            jenisSoal: "penjodohan",
            options: ["春", "冬"],
            pairs: [
                { question: "Musim semi (haru).", correctMatch: "春" },
                { question: "Musim dingin (fuyu).", correctMatch: "冬" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "空欄に「たい」をつけた動詞の形を入れなさい：\n「私は旅行をし ... です。」",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "たい"
        },
        {
            tipe: "soal-tunggal",
            q: "動詞のて形の作り方について正しいものを二つ選びなさい：",
            jenisSoal: "pg-kompleks",
            options: [
                "飲む -> 飲んで",
                "書く -> 書いて",
                "食べる -> 食べて",
                "行く -> いいて"
            ],
            correct: [0, 1, 2]
        },
        {
            tipe: "soal-tunggal",
            q: "日本語で「ごめんなさい」はインドネシア語で何ですか。",
            jenisSoal: "pg-biasa",
            options: ["Mohon maaf", "Terima kasih", "Selamat pagi", "Silakan"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "色の言葉を組み合わせなさい：",
            jenisSoal: "penjodohan",
            options: ["赤", "青"],
            pairs: [
                { question: "Warna merah (aka).", correctMatch: "赤" },
                { question: "Warna biru (ao).", correctMatch: "青" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "空欄に適切な言葉を入れなさい：\n「明日は夏休み ... はじまります。」",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "が"
        },
        {
            tipe: "soal-tunggal",
            q: "日本語の動物を二つ選びなさい：",
            jenisSoal: "pg-kompleks",
            options: [
                "犬",
                "猫",
                "机",
                "椅子"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "日本語で「さようなら」の意味は何ですか。",
            jenisSoal: "pg-biasa",
            options: ["Selamat tinggal", "Halo", "Terima kasih", "Selamat pagi"],
            correct: 0
        }
    ]
};