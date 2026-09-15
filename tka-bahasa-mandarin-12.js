window.soalData = window.soalData || {};

window.soalData["TKA SMA Kelas 12"] = window.soalData["TKA SMA Kelas 12"] || {};

window.soalData["TKA SMA Kelas 12"]["Bahasa Mandarin"] = {
    pilihanGanda: [
        {
            tipe: "soal-tunggal",
            q: "请选择正确的拼音或汉字填空：\n'我每天 ... 学校去。(Saya pergi ke sekolah setiap hari)'",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "去" // atau diisi kata depan seperti zuò / qù / xiàng
        },
        {
            tipe: "soal-tunggal",
            q: "将下列中文动词与其 意思（arti）正确配对：",
            jenisSoal: "penjodohan",
            options: ["吃 (chī)", "喝 (hē)", "去 (qù)"],
            pairs: [
                { question: "Makan (to eat / chī).", correctMatch: "吃 (chī)" },
                { question: "Minum (to drink / hē).", correctMatch: "喝 (hē)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "关于汉语语法，正确的是'对'，错误的是'错'：",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Kalimat dasar bahasa Mandarin umumnya berpola Subjek - Predikat - Objek (SPO)." },
                { text: "Kata keterangan waktu dalam bahasa Mandarin selalu diletakkan di akhir kalimat setelah objek." }
            ],
            correct: ["对", "错"] // keterangan waktu biasanya di depan atau setelah subjek
        },
        {
            tipe: "soal-tunggal",
            q: "请选择两个中文形容词（Adjektiva）：",
            jenisSoal: "pg-kompleks",
            options: [
                "大 (dà - besar)",
                "好 (hǎo - baik/bagus)",
                "学习 (xuéxí - belajar)",
                " 跑步 (pǎobù - lari)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "grup-stimulus",
            stimulus: "阅读短文并回答问题：\n'我叫大卫。我是美国人。我住在北京。我喜欢学汉语，也喜欢打篮球。'",
            gambar: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=600&auto=format&fit=crop&q=80",
            soalList: [
                {
                    q: "大卫住在哪里？",
                    jenisSoal: "pg-biasa",
                    options: [
                        "在北京 (Di Beijing)",
                        "在上海 (Di Shanghai)",
                        "在纽约 (Di New York)",
                        "在伦敦 (Di London)"
                    ],
                    correct: 0
                },
                {
                    q: "对还是错：",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "大卫喜欢学汉语。" },
                { text: "大卫不喜欢打篮球。" }
            ],
            correct: ["对", "错"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "中文的'学校'在印尼语里是什么意思？",
            jenisSoal: "pg-biasa",
            options: ["Sekolah", "Rumah", "Rumah sakit", "Kantor"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "将下列指示代词正确配对：",
            jenisSoal: "penjodohan",
            options: ["这 (zhè - ini)", "那 (nà - itu)"],
            pairs: [
                { question: "Menunjuk benda dekat (ini).", correctMatch: "这 (zhè - ini)" },
                { question: "Menunjuk benda jauh (itu).", correctMatch: "那 (nà - itu)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "填空完成否定句：\n'我昨天不 ... 学校。(Kemarin saya tidak pergi ke sekolah)'",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "去" // untuk masa lalu menggunakan méi/méiyǒu qù atau bù qù
        },
        {
            tipe: "soal-tunggal",
            q: "请选择两个常用连词或介词：",
            jenisSoal: "pg-kompleks",
            options: [
                "和 (hé - dan)",
                "在 (zài - di)",
                "书 (shū - buku)",
                "笔 (bǐ - pena)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "关于中文量词，正确的是'对'，错误的是'错'：",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "Kata penggolong (liangci) '个' (gè) adalah salah satu yang paling umum digunakan untuk orang atau benda." },
                { text: "Kata '本' (běn) digunakan untuk menghitung buah-buahan dan kendaraan." }
            ],
            correct: ["对", "错"] // 'běn' untuk buku
        },
        {
            tipe: "soal-tunggal",
            q: "中文问候语'你好'的意思是什么？",
            jenisSoal: "pg-biasa",
            options: ["Halo", "Terima kasih", "Sampai jumpa", "Selamat tinggal"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "将下列时间词正确配对：",
            jenisSoal: "penjodohan",
            options: ["今天 (jīntiān)", "昨天 (zuótiān)", "明天 (míngtiān)"],
            pairs: [
                { question: "Hari ini (today).", correctMatch: "今天 (jīntiān)" },
                { question: "Besok (tomorrow).", correctMatch: "明天 (míngtiān)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "填空：\n'我在图书馆 ... 书。(Saya sedang membaca buku di perpustakaan - kata 'zài' / sedang)',",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "看" // zài kàn shū
        },
        {
            tipe: "grup-stimulus",
            stimulus: "对话并回答问题：\n'店员：您好！买什么？\n顾客：我要一个苹果。多少钱？\n店员：五块钱。'",
            gambar: null,
            soalList: [
                {
                    q: "苹果多少钱？",
                    jenisSoal: "pg-biasa",
                    options: [
                        "五块钱 (5 yuan)",
                        "十块钱 (10 yuan)",
                        "一块钱 (1 yuan)",
                        "五十块钱 (50 yuan)"
                    ],
                    correct: 0
                },
                {
                    q: "对还是错：",
            jenisSoal: "tabel-matriks",
            rows: [
                { text: "顾客买了一个苹果。" },
                { text: "顾客在买衣服。" }
            ],
            correct: ["对", "错"]
                }
            ]
        },
        {
            tipe: "soal-tunggal",
            q: "请选择两个国家名称：",
            jenisSoal: "pg-kompleks",
            options: [
                "中国 (Zhōngguó - Tiongkok)",
                "印尼 (Yìnní - Indonesia)",
                "北京 (Běijīng - ibu kota)",
                "上海 (Shànghǎi - kota)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "中文的'谢谢'在印尼语里是什么意思？",
            jenisSoal: "pg-biasa",
            options: ["Terima kasih", "Mohon maaf", "Sampai jumpa", "Selamat pagi"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "将下列家庭成员称呼正确配对：",
            jenisSoal: "penjodohan",
            options: ["爸爸 (bàba)", "妈妈 (māma)"],
            pairs: [
                { question: "Ayah (father).", correctMatch: "爸爸 (bàba)" },
                { question: "Ibu (mother).", correctMatch: "妈妈 (māma)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "填空完成所属关系：\n'这是 ... 书。(Ini adalah buku saya - wǒ de)',",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "我" // wǒ de
        },
        {
            tipe: "soal-tunggal",
            q: "请选择两个身体部位词汇：",
            jenisSoal: "pg-kompleks",
            options: [
                "头 (tóu - kepala)",
                "手 (shǒu - tangan)",
                "桌子 (zhuōzi - meja)",
                "椅子 (yǐzi - kursi)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "中文数字'百'代表多少？",
            jenisSoal: "pg-biasa",
            options: ["100", "10", "1.000", "10.000"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "将星期正确配对：",
            jenisSoal: "penjodohan",
            options: ["星期一 (xīngqīyī)", "星期二 (xīngqī'èr)"],
            pairs: [
                { question: "Hari Senin (Monday).", correctMatch: "星期一 (xīngqīyī)" },
                { question: "Hari Selasa (Tuesday).", correctMatch: "星期二 (xīngqī'èr)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "填空完成将来时助动词：\n'明天我 ... 去 Jakarta。(Besok saya akan pergi ke Jakarta)',",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "要" // atau huì / xiǎng
        },
        {
            tipe: "soal-tunggal",
            q: "关于助词'的' (de) 的用法，正确的是：",
            jenisSoal: "pg-kompleks",
            options: [
                "Menunjukkan kepemilikan (contoh: wǒ de shū - buku saya).",
                "Menghubungkan atribut dengan kata benda yang diterangkan.",
                "Digunakan di akhir setiap kalimat perintah lampau mutlak.",
                "Menunjukkan sifat kepemilikan subjek."
            ],
            correct: [0, 1, 3]
        },
        {
            tipe: "soal-tunggal",
            q: "中文的'朋友'在印尼语里是什么意思？",
            jenisSoal: "pg-biasa",
            options: ["Teman", "Guru", "Musuh", "Dokter"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "将天气状况正确配对：",
            jenisSoal: "penjodohan",
            options: ["天气很好 (tiānqì hěn hǎo)", "下雨了 (xià yǔ le)"],
            pairs: [
                { question: "Cuaca sangat baik / cerah.", correctMatch: "天气很好 (tiānqì hěn hǎo)" },
                { question: "Turun hujan.", correctMatch: "下雨了 (xià yǔ le)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "填空完成连词：\n'因为下雨，... 我没去学校。(Karena hujan, maka saya tidak pergi ke sekolah)',",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "所以"
        },
        {
            tipe: "soal-tunggal",
            q: "请选择两个水果名称：",
            jenisSoal: "pg-kompleks",
            options: [
                "苹果 (píngguǒ - apel)",
                "香蕉 (xiāngjiāo - pisang)",
                "本子 (běnzi - buku catatan)",
                "铅笔 (qiānbǐ - pensil)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "中文的'对不起'是什么意思？",
            jenisSoal: "pg-biasa",
            options: ["Mohon maaf", "Terima kasih", "Selamat pagi", "Silakan masuk"],
            correct: 0
        },
        {
            tipe: "soal-tunggal",
            q: "将季节正确配对：",
            jenisSoal: "penjodohan",
            options: ["春天 (chūntiān - musim semi)", "冬天 (dōngtiān - musim dingin)"],
            pairs: [
                { question: "Musim semi (spring).", correctMatch: "春天 (chūntiān - musim semi)" },
                { question: "Musim dingin (winter).", correctMatch: "冬天 (dōngtiān - musim dingin)" }
            ],
            correct: null
        },
        {
            tipe: "soal-tunggal",
            q: "填空表达想望：\n'我非常 ... 去中国旅游。(Saya sangat ingin pergi berwisata ke Tiongkok)',",
            jenisSoal: "isian-singkat",
            options: [],
            correct: "想"
        },
        {
            tipe: "soal-tunggal",
            q: "请选择两个颜色名称：",
            jenisSoal: "pg-kompleks",
            options: [
                "红色 (hóngsè - warna merah)",
                "蓝色 (lánsè - warna biru)",
                "大的 (dàde - yang besar)",
                "小的 (xiǎode - yang kecil)"
            ],
            correct: [0, 1]
        },
        {
            tipe: "soal-tunggal",
            q: "中文的'再见'是什么意思？",
            jenisSoal: "pg-biasa",
            options: ["Sampai jumpa", "Halo", "Terima kasih", "Selamat pagi"],
            correct: 0
        }
    ]
};