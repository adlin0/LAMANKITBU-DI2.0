// ==========================================
// KIT BUDI - DATA PEMBELAJARAN
// ==========================================

const learningData = {

    // ======================================
    // TAHAP SEDERHANA
    // ======================================

    sederhana: [

        {
            id: "arnab",
            title: "Arnab dan Kura-kura",
            book: "https://heyzine.com/flip-book/e5fb607b0c.html",
            image: "assets/images/arnab dan kura kura sederhana.jpg",

            PERMAINANs: [
                {
                    title: "Sebutan Ajaib",
                    url: "https://adlin0.github.io/audioarnabkurakura/"
                },
                {
                    title: "Perlawanan Arnab & Kura-kura",
                    url: "https://adlin0.github.io/perlawananARNABkurakura/"
                },
                {
                    title: "Mahmudah atau Mazmumah",
                    url: "https://adlin0.github.io/ARNABmahmudahataumazmumah/"
                }
            ]
        },

        {
            id: "kancil",
            title: "Sang Kancil dan Buaya",
            book: "https://heyzine.com/flip-book/9f48ba31aa.html",
            image: "assets/images/sang kancil dan buaya sederhana.jpg",

            PERMAINANs: [
                {
                    title: "Kembara Budi & Sang Kancil",
                    url: "https://adlin0.github.io/kembarabudisangkancil/"
                },
                {
                    title: "Seberang Sungai Buaya",
                    url: "https://adlin0.github.io/seberangSUNGAIbuaya/"
                },
                {
                    title: "Silang Pintar Sang Kancil",
                    url: "https://adlin0.github.io/silangpintarSANGKANCIL/"
                }
            ]
        },

        {
            id: "batu-belah",
            title: "Batu Belah Batu Bertangkup",
            book: "https://heyzine.com/flip-book/68a4cc9e96.html",
            image: "assets/images/batu belah batu bertangkup sederhana.jpg",

            PERMAINANs: [
                {
                    title: "Misi Budi Kembara Batu Belah",
                    url: "https://adlin0.github.io/misibudi-kembarabatubelah/"
                },
                {
                    title: "Misi Budi: Selamatkan Mak Minah",
                    url: "https://adlin0.github.io/selamatkanMAKminah/"
                },
                {
                    title: "Misteri Batu Belah",
                    url: "https://adlin0.github.io/MISTERIbatuBELAH/"
                }
            ]
        },

        {
            id: "si-tanggang",
            title: "Si Tanggang",
            book: "https://heyzine.com/flip-book/3a1793e8d0.html",
            image: "assets/images/kisah si tanggang sederhana.jpg",

            PERMAINANs: [
                {
                    title: "Pengembaraan Budi: Dunia Si Tanggang Anak Derhaka",
                    url: "https://adlin0.github.io/audiositanggang1/"
                },
                {
                    title: "Pelayaran Budi ke Kisah Si Tanggang",
                    url: "https://adlin0.github.io/pelayaranbudikisahsitanggang/"
                },
                {
                    title: "Akhlakku Pilihanku",
                    url: "https://adlin0.github.io/AKHLAKKUpilihanku/"
                }
            ]
        },

        {
            id: "bawang-putih",
            title: "Bawang Putih Bawang Merah",
            book: "https://heyzine.com/flip-book/3757431b03.html",
            image: "assets/images/bawang putih bawang merah sederhana.jpg",

            PERMAINANs: [
                {
                    title: "Mantera Ajaib Bawang Putih",
                    url: "https://adlin0.github.io/audiobawangputihbawangmerah/"
                },
                {
                    title: "Misi Budi Pengembaraan Bawang Putih",
                    url: "https://adlin0.github.io/bawangputihbawangmerah/"
                },
                {
                    title: "Bawang Putih Bijak Kata",
                    url: "https://adlin0.github.io/BAWANGPUTIH-bijakkata/"
                }
            ]
        }
    ],


    // ======================================
    // TAHAP RENDAH
    // ======================================

    rendah: [

        {
            id: "arnab-rendah",
            title: "Arnab dan Kura-kura",
            book: "https://adlinfadhlina04-pixel.github.io/bukuarnabDANkurakuraDISLEKSIA/",
            image: "assets/images/arnab dan kura kura rendah.jpg",

            PERMAINANs: [
                {
                    title: "SUSUN AKSARA",
                    url: "https://izmira-dayana.github.io/adkk-2/"
                },
                {
                    title: "MISI KURA-KURA",
                    url: "https://izmira-dayana.github.io/adkk1/"
                },
                {
                    title: "SEBUTAN MAGIS",
                    url: "https://izmira-dayana.github.io/khasadkk3/"
                }
            ]
        },

        {
            id: "batu-belah-rendah",
            title: "Batu Belah Batu Bertangkup",
            book: "https://adlinfadhlina04-pixel.github.io/bukuBATUbelahDISLEKSIA2/",
            image: "assets/images/batu belah batu bertangkup rendah.jpg",

            PERMAINANs: [
                {
                    title: "Kad Huruf Misteri",
                    url: "https://biha0101.github.io/batubelah1/"
                },
                {
                    title: "Kembara Batu Belah: Cabaran Suku Kata",
                    url: "https://biha0101.github.io/batubelah2/"
                },
                {
                    title: "Mari Mengeja",
                    url: "https://biha0101.github.io/batubelah3/"
                }
            ]
        }
    ]
};


// ==========================================
// GOOGLE SHEETS & APPS SCRIPT
// ==========================================

const appLinks = {

    googleSheets:
        "https://docs.google.com/spreadsheets/d/1Kv2gGAG1ZATDbIcjGkZ_VwJLiWGPZQ8_EwImVV27Zyg/edit?usp=sharing",

    biodata:
        "https://script.google.com/macros/s/AKfycbz2s7j4Sm1fgFBzlNHlwYZ6S37eXfaO28aMrIKfzGbe_5c5K1Fkmm9I50xpvcmTWTCA2A/exec",

    feedback:
        "https://script.google.com/a/macros/moe-dl.edu.my/s/AKfycbz2s7j4Sm1fgFBzlNHlwYZ6S37eXfaO28aMrIKfzGbe_5c5K1Fkmm9I50xpvcmTWTCA2A/exec?page=feedback",

    score:
        "https://script.google.com/macros/s/AKfycbz2s7j4Sm1fgFBzlNHlwYZ6S37eXfaO28aMrIKfzGbe_5c5K1Fkmm9I50xpvcmTWTCA2A/exec?page=skor"

};