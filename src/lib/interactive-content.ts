
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  points: number;
}

export interface Quiz {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface Video {
  title:string;
  description: string;
  embedUrl: string;
  info?: string;
}

export interface ComicPanel {
  title: string;
  text: string;
  imageUrl: string;
  imageHint: string;
}

export interface Comic {
  title: string;
  description: string;
  panels: ComicPanel[];
}


export interface InteractiveContent {
  quiz?: Quiz;
  video: Video;
  comic?: Comic;
}

const smongComic: Comic = {
    title: 'Komik Digital: Kearifan Smong',
    description: 'Ikuti kisah bagaimana kearifan lokal Smong menyelamatkan ribuan nyawa dalam format komik strip yang menarik.',
    panels: [
        {
            title: 'Di Bawah Pohon Beringin',
            text: '“Nenek mengajarkan kami peringatan kuno di bawah pohon beringin tua...”',
            imageUrl: 'https://i.ibb.co/7dWp6cGz/Gemini-Generated-Image-y3jausy3jausy3ja.png',
            imageHint: 'elder teaching children'
        },
        {
            title: 'Gempa Mengguncang',
            text: '“Tiba-tiba, tanah bergetar hebat. Kami tahu ini bukan gempa biasa.”',
            imageUrl: 'https://i.ibb.co/sv2Mhw6F/Gemini-Generated-Image-ubwgstubwgstubwg.png',
            imageHint: 'earthquake shaking village'
        },
        {
            title: 'Lari! Jangan Kembali!',
            text: '“Orang-orang berteriak, ‘Smong! Smong!’ sambil menunjuk ke arah laut yang surut.”',
            imageUrl: 'https://i.ibb.co/d4Zc2dW2/Gemini-Generated-Image-nep5q4nep5q4nep5.png',
            imageHint: 'people running uphill'
        },
        {
            title: 'Menuju Bukit',
            text: '“Kami semua berlari sekuat tenaga menuju perbukitan, meninggalkan segalanya.”',
            imageUrl: 'https://i.ibb.co/0yrct9db/Gemini-Generated-Image-o3lyr0o3lyr0o3ly.png',
            imageHint: 'crowd climbing hill'
        },
        {
            title: 'Lautan yang Murka',
            text: '“Dari atas bukit, kami melihat gelombang raksasa menerjang desa kami.”',
            imageUrl: 'https://i.ibb.co/GQSD4TWr/Gemini-Generated-Image-muisyomuisyomuis.png',
            imageHint: 'tsunami wave hitting coast'
        },
        {
            title: 'Syukur & Pelajaran',
            text: '“Kami selamat karena mendengarkan nasihat leluhur. Smong adalah penyelamat kami.”',
            imageUrl: 'https://i.ibb.co/N2td66Hx/Gemini-Generated-Image-vpirzivpirzivpir.png',
            imageHint: 'survivors watching sunrise'
        },
    ],
};

const bakauComic: Comic = {
    title: 'Komik: Hutan Bakau Penjaga Pantai',
    description: 'Kisah inspiratif tentang bagaimana komunitas bersatu menanam kembali benteng alami mereka.',
    panels: [
        {
            title: 'Pantai yang Terkikis',
            text: 'Dulu, pantai kami terus menerus terkikis oleh badai. Rumah-rumah di dekat pantai perlahan hancur.',
            imageUrl: 'https://i.ibb.co/PZHd26b4/Gemini-Generated-Image-421pmy421pmy421p.png',
            imageHint: 'eroded coastline storm'
        },
        {
            title: 'Mengingat Nasihat Tetua',
            text: 'Kami teringat cerita orang tua dulu, bahwa hutan bakau adalah benteng alami kami yang telah hilang.',
            imageUrl: 'https://i.ibb.co/JWpk16NX/Gemini-Generated-Image-rsvte8rsvte8rsvt.png',
            imageHint: 'village elder storytelling'
        },
        {
            title: 'Menanam Bibit Harapan',
            text: 'Bersama-sama, para pemuda dan orang tua, kami mulai menanam kembali bibit bakau di sepanjang pesisir.',
            imageUrl: 'https://i.ibb.co/qLMNkxFd/Gemini-Generated-Image-2b2mqh2b2mqh2b2m.png',
            imageHint: 'community planting mangroves'
        },
        {
            title: 'Tantangan & Kegagalan',
            text: 'Awalnya sulit, banyak bibit yang gagal tumbuh. Tapi kami tidak menyerah dan terus mencoba.',
            imageUrl: 'https://i.ibb.co/fVtfWBkG/Gemini-Generated-Image-6n753u6n753u6n75.png',
            imageHint: 'failed mangrove sapling'
        },
        {
            title: 'Benteng Alami Tumbuh Kuat',
            text: 'Kini, hutan bakau telah tumbuh lebat. Akarnya yang kokoh mencengkeram tanah, menahan laju ombak.',
            imageUrl: 'https://i.ibb.co/cKZnnyh5/Gemini-Generated-Image-t9i448t9i448t9i4.png',
            imageHint: 'dense mangrove forest'
        },
        {
            title: 'Kehidupan Kembali',
            text: 'Hutan ini tidak hanya melindungi desa, tapi juga menjadi rumah bagi ikan dan kepiting, memberi kami sumber penghidupan baru.',
            imageUrl: 'https://i.ibb.co/bRz9Qck7/Gemini-Generated-Image-4rapqm4rapqm4rap.png',
            imageHint: 'fish crabs mangroves'
        },
    ],
};

const dapurUmumComic: Comic = {
    title: 'Komik: Dapur Umum Perdamaian',
    description: 'Bagaimana sebuah dapur sederhana merajut kembali tali persaudaraan yang sempat terkoyak.',
    panels: [
        {
            title: 'Luka Pasca-Konflik',
            text: 'Setelah konflik berakhir, masih ada banyak luka dan ketidakpercayaan di antara kami. Sulit untuk memulai kembali.',
            imageUrl: 'https://i.ibb.co/JWCgC8W2/Gemini-Generated-Image-higpgmhigpgmhigp.png',
            imageHint: 'sad village atmosphere'
        },
        {
            title: 'Ide Sederhana: Makanan',
            text: 'Beberapa dari kami, para ibu, berpikir: semua orang butuh makan, dan makanan bisa menyatukan.',
            imageUrl: 'https://i.ibb.co/zWHC2Vf7/Gemini-Generated-Image-6ohms66ohms66ohm.png',
            imageHint: 'women discussing plan'
        },
        {
            title: 'Memulai Dapur Umum',
            text: 'Kami mendirikan dapur sederhana. Siapapun boleh datang untuk makan, dan siapapun boleh membantu memasak.',
            imageUrl: 'https://i.ibb.co/FLFgPs27/Gemini-Generated-Image-etuhnbetuhnbetuh.png',
            imageHint: 'setting up community kitchen'
        },
        {
            title: 'Merajut Cerita di Atas Tungku',
            text: 'Sambil memotong sayur dan mengaduk gulai, kami mulai berbicara, berbagi cerita, tawa, dan air mata.',
            imageUrl: 'https://i.ibb.co/gZymfGtt/Gemini-Generated-Image-p1tl3p1tl3p1tl3p.png',
            imageHint: 'community kitchen cooking'
        },
        {
            title: 'Ruang Rekonsiliasi',
            text: 'Dapur ini menjadi lebih dari tempat makan; ia menjadi ruang rekonsiliasi di mana dinding pemisah runtuh.',
            imageUrl: 'https://i.ibb.co/4ntNZGTH/Gemini-Generated-Image-5y1cbj5y1cbj5y1c.png',
            imageHint: 'people talking laughing'
        },
        {
            title: 'Perdamaian dari Sepiring Nasi',
            text: 'Kami belajar bahwa perdamaian bisa dimulai dari hal yang paling sederhana: sepiring nasi hangat dan hati yang terbuka.',
            imageUrl: 'https://i.ibb.co/T3f302F/Gemini-Generated-Image-rmhvlgrmhvlgrmhv.png',
            imageHint: 'people eating together happily'
        },
    ],
};

const lumbungPadiComic: Comic = {
    title: 'Komik: Lumbung Padi Komunal',
    description: 'Cerita tentang gotong royong masyarakat Gayo dalam menghadapi musim paceklik.',
    panels: [
        {
            title: 'Panen Tak Menentu',
            text: 'Di dataran tinggi Gayo, cuaca tidak selalu bisa ditebak. Kadang panen melimpah, kadang gagal total.',
            imageUrl: 'https://i.ibb.co/XrSWCszM/Gemini-Generated-Image-mfguf9mfguf9mfgu.png',
            imageHint: 'gayo highlands farming'
        },
        {
            title: 'Menghidupkan Tradisi',
            text: 'Kami menghidupkan kembali tradisi lumbung bersama. Setiap keluarga menyisihkan sebagian panennya.',
            imageUrl: 'https://i.ibb.co/TxLMKmZd/Gemini-Generated-Image-o6m8b8o6m8b8o6m8.png',
            imageHint: 'putting rice into communal barn'
        },
        {
            title: 'Jaring Pengaman Sosial',
            text: 'Saat ada keluarga yang gagal panen, mereka bisa mengambil dari lumbung ini tanpa bunga atau utang.',
            imageUrl: 'https://i.ibb.co/N2Hcz9Q6/Gemini-Generated-Image-nzlk8inzlk8inzlk.png',
            imageHint: 'sharing food community'
        },
        {
            title: 'Kaya dalam Persaudaraan',
            text: 'Lumbung ini adalah simbol persatuan kami. Dengan berbagi, kita semua menjadi lebih kuat.',
            imageUrl: 'https://i.ibb.co/s9nftm6k/Gemini-Generated-Image-2yb53r2yb53r2yb5.png',
            imageHint: 'happy farming community'
        },
    ],
};

const bahTangseComic: Comic = {
    title: 'Komik: Bah Tangse, Sungai Murka',
    description: 'Pelajaran pahit dari Tangse tentang pentingnya menjaga alam.',
    panels: [
        {
            title: 'Malam yang Mencekam',
            text: 'Hujan turun tanpa henti. Tiba-tiba, kami mendengar suara gemuruh yang bukan dari guntur.',
            imageUrl: 'https://i.ibb.co/8gC04Tds/Gemini-Generated-Image-tzd2r9tzd2r9tzd2.png',
            imageHint: 'dark stormy night village'
        },
        {
            title: 'Air Bah Datang',
            text: 'Air sungai meluap dengan liar, warnanya hitam pekat, membawa puluhan pohon gelondongan raksasa.',
            imageUrl: 'https://i.ibb.co/MxDVKgQ8/Gemini-Generated-Image-ptyvfqptyvfqptyv.png',
            imageHint: 'raging flash flood logs'
        },
        {
            title: 'Teriakan Peringatan',
            text: 'Kepala desa berteriak melalui pengeras suara masjid, "Air naik! Selamatkan diri! Lari ke tempat tinggi!"',
            imageUrl: 'https://i.ibb.co/Q31hqKRj/Gemini-Generated-Image-mbv9yumbv9yumbv9.png',
            imageHint: 'mosque speaker warning'
        },
        {
            title: 'Lari ke Tempat Tinggi',
            text: 'Dalam gelap gulita, kami berlari sekuat tenaga ke perbukitan, hanya membawa pakaian di badan.',
            imageUrl: 'https://i.ibb.co/8gvn36Hj/Gemini-Generated-Image-xbiewaxbiewaxbie.png',
            imageHint: 'people running uphill dark'
        },
        {
            title: 'Pagi Penuh Lumpur',
            text: 'Pagi harinya, yang tersisa hanyalah lumpur tebal dan puing-puing. Kami sadar, ini akibat penebangan liar.',
            imageUrl: 'https://i.ibb.co/gMTdhPdj/Gemini-Generated-Image-diwjbbdiwjbbdiwj.png',
            imageHint: 'village destroyed mud'
        },
        {
            title: 'Pelajaran & Sumpah',
            text: 'Bah Tangse adalah pelajaran pahit. Sejak saat itu, kami bersumpah untuk menjaga dan menanam kembali hutan kami.',
            imageUrl: 'https://i.ibb.co/gMvs88K7/Gemini-Generated-Image-6ijxun6ijxun6ijx.png',
            imageHint: 'community planting trees'
        }
    ],
};

const apiBukitComic: Comic = {
  title: 'Komik: Api di Bukit Barisan',
  description: 'Perjuangan Masyarakat Peduli Api melindungi hutan Gayo.',
  panels: [
    {
      title: 'Ancaman Musim Kering',
      text: 'Setiap musim kemarau, hutan pinus yang indah ini menjadi sangat rentan terbakar. Sedikit percikan bisa menjadi bencana.',
      imageUrl: 'https://i.ibb.co/Nd4BCwnh/Gemini-Generated-Image-mx2j89mx2j89mx2j.png',
      imageHint: 'dry pine forest'
    },
    {
      title: 'Patroli Sukarela',
      text: 'Kami membentuk kelompok Masyarakat Peduli Api, berpatroli secara sukarela untuk mencegah kebakaran.',
      imageUrl: 'https://i.ibb.co/xQ84Wh9/Gemini-Generated-Image-fttc78fttc78fttc.png',
      imageHint: 'community patrolling forest'
    },
    {
        title: 'Edukasi Warga',
        text: 'Yang terpenting, kami memberikan penyuluhan kepada warga agar tidak membuka lahan dengan cara membakar.',
        imageUrl: 'https://i.ibb.co/YwZvdXm/Gemini-Generated-Image-k3ov2dk3ov2dk3ov.png',
        imageHint: 'community meeting education'
    },
    {
      title: 'Memadamkan Api',
      text: 'Saat api muncul, kami bekerja sama dengan peralatan seadanya untuk memadamkannya sebelum membesar.',
      imageUrl: 'https://i.ibb.co/wrwhkWjG/Gemini-Generated-Image-1tus9y1tus9y1tus.png',
      imageHint: 'people fighting forest fire'
    },
    {
        title: 'Tanggung Jawab Bersama',
        text: 'Ini bukan pekerjaan pemerintah, ini adalah tanggung jawab kami bersama. Hutan ini adalah sumber air kami.',
        imageUrl: 'https://i.ibb.co/yFC19D6y/Gemini-Generated-Image-icr3a2icr3a2icr3.png',
        imageHint: 'community shaking hands'
    },
    {
      title: 'Damai dengan Alam',
      text: 'Menjaga hutan ini adalah cara kami membangun perdamaian dengan alam, demi masa depan anak cucu.',
      imageUrl: 'https://i.ibb.co/39bW7xJz/Gemini-Generated-Image-x2zpffx2zpffx2zp.png',
      imageHint: 'green forest sunrise'
    }
  ]
};

const kopiGayoComic: Comic = {
  title: 'Komik: Kopi Gayo, Aroma Perdamaian',
  description: 'Kisah bangkitnya petani kopi Gayo pasca-konflik.',
  panels: [
    {
      title: 'Kebun yang Terlantar',
      text: 'Selama konflik, banyak kebun kopi kami yang telantar dan ditumbuhi semak belukar.',
      imageUrl: 'https://i.ibb.co/N612z0S8/Gemini-Generated-Image-fc3gznfc3gznfc3g.png',
      imageHint: 'abandoned coffee plantation'
    },
    {
      title: 'Kembali dari Nol',
      text: 'Setelah damai, kami kembali. Memulainya lagi dari nol sangat berat, namun kami melihat harapan.',
      imageUrl: 'https://i.ibb.co/qYDz7XHx/Gemini-Generated-Image-72mog772mog772mo.png',
      imageHint: 'farmer looking at overgrown field'
    },
    {
      title: 'Harapan di Biji Kopi',
      text: 'Kami bekerja keras, belajar teknik bertani yang lebih baik, melihat harapan baru di setiap biji kopi.',
      imageUrl: 'https://i.ibb.co/Gr8hPCK/Gemini-Generated-Image-a3lug5a3lug5a3lu.png',
      imageHint: 'farmer holding coffee beans'
    },
    {
      title: 'Membangun Koperasi',
      text: 'Kami membentuk koperasi untuk saling menguatkan, belajar teknik baru, dan memasarkan kopi bersama.',
      imageUrl: 'https://i.ibb.co/gL1dyvWm/Gemini-Generated-Image-wneukxwneukxwneu.png',
      imageHint: 'farmers meeting cooperative'
    },
    {
        title: 'Menjadi Dikenal Dunia',
        text: 'Perlahan tapi pasti, kopi Gayo mulai dikenal dunia, membawa nama baik bagi daerah kami.',
        imageUrl: 'https://i.ibb.co/BxTrr9y/Gemini-Generated-Image-ntsba2ntsba2ntsb.png',
        imageHint: 'coffee export shipping'
    },
    {
      title: 'Aroma Perdamaian',
      text: 'Kini, aroma kopi Gayo yang mendunia adalah aroma kerja keras, harapan, dan perdamaian yang telah kami raih.',
      imageUrl: 'https://i.ibb.co/65QLYw8/Gemini-Generated-Image-xp78xcxp78xcxp78.png',
      imageHint: 'cup of steaming gayo coffee'
    }
  ]
};

const pemudaAdatComic: Comic = {
  title: 'Komik: Pemuda Penjaga Adat',
  description: 'Menghidupkan kembali tari Seudati untuk menjauhkan pemuda dari kekerasan.',
  panels: [
    {
      title: 'Energi yang Hilang Arah',
      text: 'Pasca-konflik, banyak pemuda kehilangan arah. Energi mereka yang besar terkadang tersalurkan ke hal negatif.',
      imageUrl: 'https://i.ibb.co/GvdSwzQf/Gemini-Generated-Image-3pu65m3pu65m3pu6.png',
      imageHint: 'disaffected youth group'
    },
    {
      title: 'Sebuah Panggilan',
      text: 'Kami, beberapa pemuda yang lebih tua, merasa harus melakukan sesuatu untuk komunitas.',
      imageUrl: 'https://i.ibb.co/hFpC4fNv/Gemini-Generated-Image-2ct3h82ct3h82ct3.png',
      imageHint: 'youth leaders discussing'
    },
    {
      title: 'Menghidupkan Sanggar',
      text: 'Kami memutuskan untuk menghidupkan kembali sanggar tari Seudati, tarian yang mengajarkan disiplin dan kerja sama.',
      imageUrl: 'https://i.ibb.co/FqH0xKx3/Gemini-Generated-Image-qq18guqq18guqq18.png',
      imageHint: 'reopening old building'
    },
    {
      title: 'Berlatih Bersama',
      text: 'Awalnya sulit, tapi perlahan sanggar kami mulai ramai. Para pemuda menyalurkan energi mereka ke dalam tarian.',
      imageUrl: 'https://i.ibb.co/d05SD259/Gemini-Generated-Image-esu33aesu33aesu3.png',
      imageHint: 'youth practicing seudati dance'
    },
    {
        title: 'Ekspresi Positif',
        text: 'Sanggar menjadi ruang aman bagi pemuda untuk berekspresi secara positif dan belajar nilai-nilai luhur.',
        imageUrl: 'https://i.ibb.co/NgQtKFvQ/Gemini-Generated-Image-9kobq9kobq9kobq9.png',
        imageHint: 'young dancers smiling'
    },
    {
      title: 'Jembatan Antar Desa',
      text: 'Melalui tarian, kami membangun jembatan antar desa dan menciptakan ikatan komunitas yang lebih kuat.',
      imageUrl: 'https://i.ibb.co/MDmNGYvr/Gemini-Generated-Image-sqvrxesqvrxesqvr.png',
      imageHint: 'seudati dance performance'
    }
  ]
};

const perempuanPenganyamComic: Comic = {
  title: 'Komik: Perempuan Penganyam Harapan',
  description: 'Kisah janda korban tsunami yang bangkit dengan membentuk kelompok kerajinan anyaman.',
  panels: [
    {
      title: 'Duka dan Ketidakpastian',
      text: 'Tsunami merenggut suami dan rumah kami, meninggalkan kami dalam duka dan ketidakpastian.',
      imageUrl: 'https://i.ibb.co/JwwT5gf9/Gemini-Generated-Image-d4jht0d4jht0d4jh.png',
      imageHint: 'sad woman looking at ocean'
    },
    {
      title: 'Menganyam sebagai Terapi',
      text: 'Kami berkumpul dan mulai menganyam dengan daun pandan. Sambil menganyam, kami saling berbagi cerita dan menguatkan.',
      imageUrl: 'https://i.ibb.co/N2shQ8zW/Gemini-Generated-Image-lt0y0glt0y0glt0y.png',
      imageHint: 'women weaving together'
    },
    {
        title: 'Karya dari Hati',
        text: 'Anyaman ini bukan sekadar tikar atau tas, ini adalah terapi dan curahan hati kami.',
        imageUrl: 'https://i.ibb.co/9m56wN9M/Gemini-Generated-Image-6hbsja6hbsja6hbs.png',
        imageHint: 'closeup hands weaving'
    },
    {
      title: 'Kemandirian Ekonomi',
      text: 'Perlahan, produk kami mulai dikenal dan pesanan datang. Kami mendapatkan penghasilan sendiri.',
      imageUrl: 'https://i.ibb.co/DDGWWjDV/Gemini-Generated-Image-2onqdx2onqdx2onq.png',
      imageHint: 'woven bags and mats market'
    },
    {
        title: 'Menjadi Berdaya',
        text: 'Kami tidak lagi hanya korban, kami adalah penyintas yang berdaya, yang bisa menghidupi keluarga.',
        imageUrl: 'https://i.ibb.co/RkGvwjR8/Gemini-Generated-Image-pucmhfpucmhfpucm.png',
        imageHint: 'woman proudly holding woven bag'
    },
    {
      title: 'Keluarga Baru',
      text: 'Kelompok ini menjadi keluarga baru kami, tempat kami menenun kembali harapan untuk masa depan.',
      imageUrl: 'https://i.ibb.co/846HCc3H/Gemini-Generated-Image-sh6lbush6lbush6l.png',
      imageHint: 'group of happy women smiling'
    }
  ]
};

const arsitekturComic: Comic = {
  title: 'Komik: Arsitektur Rumah Panggung',
  description: 'Menggali kembali kearifan Rumoh Aceh sebagai inspirasi bangunan tahan gempa.',
  panels: [
    {
      title: 'Rumoh Aceh yang Bertahan',
      text: 'Saat gempa dan tsunami merobohkan banyak bangunan modern, kami melihat banyak Rumoh Aceh yang masih berdiri kokoh.',
      imageUrl: 'https://i.ibb.co/ycjpYJDF/Gemini-Generated-Image-k7l0glk7l0glk7l0.png',
      imageHint: 'aceh house after tsunami'
    },
    {
      title: 'Konstruksi yang Fleksibel',
      text: 'Struktur panggung dengan konstruksi kayu yang fleksibel terbukti mampu meredam guncangan gempa.',
      imageUrl: 'https://i.ibb.co/Q7VdjXBn/Gemini-Generated-Image-c9fxgzc9fxgzc9fx.png',
      imageHint: 'diagram of stilt house structure'
    },
    {
      title: 'Adaptif Terhadap Lingkungan',
      text: 'Kolong di bawah rumah tidak hanya serbaguna, tapi juga memberi jalan bagi air saat terjadi banjir atau genangan.',
      imageUrl: 'https://i.ibb.co/KdDRNDF/Gemini-Generated-Image-imaeuhimaeuhimae.png',
      imageHint: 'water flowing under stilt house'
    },
    {
        title: 'Membuka Mata',
        text: 'Ini membuka mata kami. Arsitektur nenek moyang kita ternyata luar biasa dan sangat relevan.',
        imageUrl: 'https://i.ibb.co/PG545YGD/Gemini-Generated-Image-iof1g5iof1g5iof1.png',
        imageHint: 'people studying old house'
    },
    {
        title: 'Inspirasi untuk Masa Depan',
        text: 'Kami mulai mengadvokasikan dan membangun kembali rumah dengan mengadaptasi prinsip-prinsip Rumoh Aceh.',
        imageUrl: 'https://i.ibb.co/wrZyYXVc/Gemini-Generated-Image-ywlmvrywlmvrywlm.png',
        imageHint: 'architect drawing new house plan'
    },
    {
      title: 'Membangun Masa Depan',
      text: 'Ini bukan kembali ke masa lalu, tapi mengambil pelajaran terbaik dari masa lalu untuk membangun masa depan yang lebih aman.',
      imageUrl: 'https://i.ibb.co/JfnLPtj/Gemini-Generated-Image-wo8rv7wo8rv7wo8r.png',
      imageHint: 'modern house with traditional aceh design'
    }
  ]
};

const seniTraumaComic: Comic = {
  title: 'Komik: Seni Melawan Trauma',
  description: 'Bagaimana seniman muda Banda Aceh menggunakan mural untuk memulihkan kota.',
  panels: [
    {
      title: 'Dinding Bisu Pasca-Tsunami',
      text: 'Banda Aceh pasca-tsunami penuh dengan dinding bisu yang menjadi saksi tragedi. Suasananya terasa berat.',
      imageUrl: 'https://i.ibb.co/PZFB87MM/Gemini-Generated-Image-yr5r75yr5r75yr5r.png',
      imageHint: 'ruined city wall'
    },
    {
      title: 'Panggilan untuk Seniman',
      text: 'Sebagai seniman, kami merasa terpanggil untuk melakukan sesuatu, untuk menyembuhkan luka kota dengan cara kami.',
      imageUrl: 'https://i.ibb.co/qMvHYSfd/Gemini-Generated-Image-9zglxq9zglxq9zgl.png',
      imageHint: 'group of artists planning'
    },
    {
      title: 'Memberi Warna Baru',
      text: 'Kami mulai melukis mural di dinding publik, bukan untuk melupakan, tapi untuk memberi warna baru pada ingatan.',
      imageUrl: 'https://i.ibb.co/5XGSLv5c/Gemini-Generated-Image-d5p172d5p172d5p1.png',
      imageHint: 'artist painting mural on wall'
    },
    {
        title: 'Terapi Melalui Seni',
        text: 'Proses melukis bersama ini menjadi terapi bagi kami dan komunitas. Dinding yang suram menjadi galeri terbuka.',
        imageUrl: 'https://i.ibb.co/1GzKfrWz/Gemini-Generated-Image-2hh0ld2hh0ld2hh0.png',
        imageHint: 'colorful community mural'
    },
    {
        title: 'Harapan di Setiap Goresan',
        text: 'Kami melukis tentang harapan, ketahanan, kebersamaan, dan keindahan Aceh yang tak pernah padam.',
        imageUrl: 'https://i.ibb.co/3ymkCsBm/Gemini-Generated-Image-363z96363z96363z.png',
        imageHint: 'closeup mural painting hope'
    },
    {
      title: 'Menyembuhkan Luka Kota',
      text: 'Seni menjadi cara kami menyembuhkan luka kota dan jiwa kami, mengubah trauma menjadi harapan.',
      imageUrl: 'https://i.ibb.co/pjr6h7s0/Gemini-Generated-Image-ikoughikoughikou.png',
      imageHint: 'children interacting with mural'
    }
  ]
};

const nelayanComic: Comic = {
  title: 'Komik: Kearifan Nelayan',
  description: 'Kisah nelayan tradisional yang membaca tanda alam untuk melaut.',
  panels: [
    {
      title: 'Kompas Langit dan Laut',
      text: 'Kami para nelayan tidak punya GPS canggih. Kompas kami adalah langit dan laut itu sendiri.',
      imageUrl: 'https://i.ibb.co.com/zhj5vRfQ/Gemini-Generated-Image-yz9meiyz9meiyz9m.png',
      imageHint: 'fisherman at night starry sky'
    },
    {
      title: 'Membaca Rasi Bintang',
      text: 'Ayah mengajari cara membaca rasi bintang Orion, atau Bintang Tiga, untuk mengetahui arah pulang.',
      imageUrl: 'https://i.ibb.co.com/NgbyjjMf/Gemini-Generated-Image-ped9eaped9eaped9.png',
      imageHint: 'orion constellation over sea'
    },
    {
      title: 'Tanda dari Satwa',
      text: 'Jika lumba-lumba berenang mendekati pantai, itu adalah pertanda cuaca akan buruk. Kami belajar dari perilaku hewan.',
      imageUrl: 'https://i.ibb.co.com/XZQgHWxH/Gemini-Generated-Image-a8gbcxa8gbcxa8gb.png',
      imageHint: 'dolphins swimming near coast'
    },
    {
        title: 'Warna Air dan Ikan',
        text: 'Kami tahu kapan ikan berkumpul hanya dengan melihat warna air dan jenis burung yang terbang di atasnya.',
        imageUrl: 'https://i.ibb.co.com/gCpZCzB/Gemini-Generated-Image-4mvuio4mvuio4mvu.png',
        imageHint: 'seabirds diving for fish'
    },
    {
        title: 'Warisan Generasi',
        text: 'Pengetahuan ini tidak ada di buku, ini diwariskan dari ayah ke anak, dari satu generasi nelayan ke generasi berikutnya.',
        imageUrl: 'https://i.ibb.co.com/kVgdrTbg/Gemini-Generated-Image-h9xlylh9xlylh9xl.png',
        imageHint: 'father teaching son on boat'
    },
    {
      title: 'Ilmu Kehidupan',
      text: 'Ini adalah ilmu kehidupan yang membuat kami bisa bersahabat dengan lautan dan pulang dengan selamat.',
      imageUrl: 'https://i.ibb.co.com/4wvv5KV3/Gemini-Generated-Image-lrl3ielrl3ielrl3.png',
      imageHint: 'fishing boat returning at sunrise'
    }
  ]
};

const sumurTuaComic: Comic = {
  title: 'Komik: Sumur Tua Sumber Kehidupan',
  description: 'Bagaimana sumur kuno menyelamatkan desa dari kekeringan.',
  panels: [
    {
      title: 'Kekeringan Panjang',
      text: 'Musim kemarau tahun itu sangat panjang. Sungai dan sumur modern kami mengering. Kami mulai putus asa.',
      imageUrl: 'https://i.ibb.co/6JJCYJZw/Gemini-Generated-Image-48cp6g48cp6g48cp.png',
      imageHint: 'cracked dry earth'
    },
    {
      title: 'Mengingat Warisan',
      text: 'Seorang tetua teringat akan sebuah sumur tua di pinggir hutan yang sudah lama tak terpakai.',
      imageUrl: 'https://i.ibb.co/1tC6SMg3/Gemini-Generated-Image-as3nydas3nydas3n.png',
      imageHint: 'old man pointing towards forest'
    },
    {
      title: 'Membersihkan Sumur',
      text: 'Dengan ragu, kami membersihkan sumur yang dibangun dengan cincin batu dan ditutupi pohon besar itu.',
      imageUrl: 'https://i.ibb.co/RG9HYJVM/Gemini-Generated-Image-1uj5031uj5031uj5.png',
      imageHint: 'community cleaning old well'
    },
    {
      title: 'Mata Air yang Ajaib',
      text: 'Ajaib! Di dasarnya masih ada air jernih yang tak pernah kering. Leluhur kami membangunnya tepat di atas mata air.',
      imageUrl: 'https://i.ibb.co/N2DZQFsc/Gemini-Generated-Image-4o62wj4o62wj4o62.png',
      imageHint: 'clear water in old well'
    },
    {
        title: 'Sumber Kehidupan',
        text: 'Sumur tua itu menjadi satu-satunya sumber air bersih bagi seluruh desa selama sisa musim kemarau.',
        imageUrl: 'https://i.ibb.co/BKNPTWgd/Gemini-Generated-Image-279br9279br9279b.png',
        imageHint: 'people queuing for water'
    },
    {
        title: 'Pelajaran Berharga',
        text: 'Kami belajar bahwa ada kearifan dalam peninggalan masa lalu yang harus kami jaga dan lestarikan.',
        imageUrl: 'https://i.ibb.co/FLhZFwvy/Gemini-Generated-Image-t1ww3it1ww3it1ww.png',
        imageHint: 'community gathered around old well'
    }
  ]
};

const ilmuFalakComic: Comic = {
  title: 'Komik: Ilmu Falak di Dayah',
  description: 'Mengungkap peran dayah dalam mengajarkan astronomi untuk kehidupan.',
  panels: [
    {
      title: 'Belajar di Dayah',
      text: 'Banyak yang mengira dayah hanya tempat belajar Al-Quran, tapi kami juga mempelajari Ilmu Falak (astronomi).',
      imageUrl: 'https://i.ibb.co/Rk9pNtJp/Gemini-Generated-Image-8m38498m38498m38.png',
      imageHint: 'students studying in dayah'
    },
    {
      title: 'Menghitung Posisi Bintang',
      text: 'Kami menghitung posisi bintang untuk menentukan awal bulan puasa, arah kiblat, dan waktu shalat.',
      imageUrl: 'https://i.ibb.co/DHNkQTGn/Gemini-Generated-Image-lr9x50lr9x50lr9x.png',
      imageHint: 'teacher pointing at stars map'
    },
    {
      title: 'Ilmu untuk Nelayan',
      text: 'Ilmu yang sama ternyata juga bermanfaat bagi nelayan di pesisir untuk navigasi dan menentukan pasang surut.',
      imageUrl: 'https://i.ibb.co/d0dtbX3X/Gemini-Generated-Image-168pi168pi168pi1.png',
      imageHint: 'scholar talking to fisherman'
    },
    {
        title: 'Rujukan Masyarakat',
        text: 'Para santri yang pulang ke kampungnya sering menjadi rujukan, memberitahu arah bintang utara atau kapan pasang tertinggi.',
        imageUrl: 'https://i.ibb.co/FLygk1L4/Gemini-Generated-Image-50j9v650j9v650j9.png',
        imageHint: 'student helping community'
    },
    {
        title: 'Ilmu Agama dan Kehidupan',
        text: 'Ada hubungan erat antara langit dan laut, antara ilmu agama dan ilmu kehidupan.',
        imageUrl: 'https://i.ibb.co/xS91Wwgz/Gemini-Generated-Image-j2fi8xj2fi8xj2fi.png',
        imageHint: 'mosque against starry sky'
    },
    {
      title: 'Untuk Kebaikan Bersama',
      text: 'Kami belajar bahwa semua ilmu berasal dari Tuhan dan bisa dimanfaatkan untuk kebaikan bersama, di darat maupun di lautan.',
      imageUrl: 'https://i.ibb.co/0VfjNWDg/Gemini-Generated-Image-z7pvrxz7pvrxz7pv.png',
      imageHint: 'night sky over fishing village'
    }
  ]
};

const pasarComic: Comic = {
  title: 'Komik: Pasar sebagai Ruang Sosial',
  description: 'Pasar tradisional bukan hanya tempat jual beli, tapi jantung komunitas.',
  panels: [
    {
      title: 'Jantung Komunitas',
      text: 'Bagi kami, pasar bukan hanya tempat mencari uang, tapi tempat kami bertemu teman dan bertukar kabar.',
      imageUrl: 'https://i.ibb.co/Lz42QxHm/Gemini-Generated-Image-k208uik208uik208.png',
      imageHint: 'bustling traditional market'
    },
    {
      title: 'Pusat Informasi',
      text: 'Jika ada berita penting, lowongan kerja, atau isu meresahkan, informasi menyebar cepat di pasar.',
      imageUrl: 'https://i.ibb.co/CspnwtQT/Gemini-Generated-Image-dsjhqbdsjhqbdsjh.png',
      imageHint: 'people talking at coffee stall'
    },
    {
      title: 'Barometer Sosial',
      text: 'Dari obrolan di warung kopi pasar, kita bisa tahu apa yang sedang dirasakan masyarakat.',
      imageUrl: 'https://i.ibb.co/ch4DmBK8/Gemini-Generated-Image-o64ap4o64ap4o64a.png',
      imageHint: 'group of men drinking coffee'
    },
    {
        title: 'Saling Menenangkan',
        text: 'Bahkan ketika ada isu-isu yang meresahkan, kami bisa saling menenangkan dan mencari kebenaran di sini.',
        imageUrl: 'https://i.ibb.co/5XxgpBFd/Gemini-Generated-Image-epyxelepyxelepyx.png',
        imageHint: 'two people having serious talk'
    },
    {
        title: 'Denyut Nadi Komunitas',
        text: 'Menjaga pasar tradisional tetap hidup sama dengan menjaga denyut nadi dan ikatan sosial komunitas kita.',
        imageUrl: 'https://i.ibb.co/LXQKySBZ/Gemini-Generated-Image-k6s3dck6s3dck6s3.png',
        imageHint: 'smiling market vendor'
    },
    {
        title: 'Lebih dari Jual Beli',
        text: 'Di sinilah persahabatan terjalin, masalah diselesaikan, dan komunitas terasa hidup.',
        imageUrl: 'https://i.ibb.co/V0hmJPM8/Gemini-Generated-Image-9lfrea9lfrea9lfr.png',
        imageHint: 'people laughing in market'
    }
  ]
};

const kucingCerdasComic: Comic = {
  title: 'Komik: Siaga, Si Kucing Cerdas',
  description: 'Petualangan Siaga mengajarkan anak-anak tentang kesiapsiagaan bencana.',
  panels: [
    {
      title: 'Kucing yang Berbeda',
      text: 'Siaga suka mendengarkan cerita para tetua tentang gempa dan tsunami, tidak seperti teman-temannya yang suka tidur.',
      imageUrl: 'https://i.ibb.co/cSb6HNbk/Gemini-Generated-Image-yka8lryka8lryka8.png',
      imageHint: 'cute cat listening to old man'
    },
    {
      title: 'Tanah Bergoyang!',
      text: 'Saat tanah bergoyang, Siaga langsung berteriak, "Gempa! Ingat tiga langkah: Merunduk, Berlindung, dan Bertahan!"',
      imageUrl: 'https://i.ibb.co/spP9SMTt/Gemini-Generated-Image-qxxmruqxxmruqxxm.png',
      imageHint: 'cartoon earthquake cat under table'
    },
    {
      title: 'Mengikuti si Ahli',
      text: 'Teman-temannya yang bingung melihat apa yang dilakukan Siaga dan langsung mengikutinya.',
      imageUrl: 'https://i.ibb.co/CpKGCDBf/Gemini-Generated-Image-5ku3hs5ku3hs5ku3.png',
      imageHint: 'other cats hiding under furniture'
    },
    {
      title: 'Menuju Tempat Aman',
      text: 'Setelah guncangan berhenti, Siaga dengan tenang mengajak teman-temannya ke lapangan terbuka yang aman.',
      imageUrl: 'https://i.ibb.co/Kj8wXcd1/Gemini-Generated-Image-rm690krm690krm69.png',
      imageHint: 'cats walking to open field'
    },
    {
        title: 'Peringatan Tsunami',
        text: '"Kita harus ke tempat tinggi," kata Siaga, "siapa tahu air laut surut!" Ia ingat cerita Smong.',
        imageUrl: 'https://i.ibb.co/YB6z4MkN/Gemini-Generated-Image-cw22b0cw22b0cw22.png',
        imageHint: 'cat pointing to hill'
    },
    {
        title: 'Semua Selamat',
        text: 'Karena Siaga, semua temannya selamat dan belajar cara melindungi diri saat bencana.',
        imageUrl: 'https://i.ibb.co/TGNn2hy/Gemini-Generated-Image-spdth3spdth3spdt.png',
        imageHint: 'happy cats playing on hill'
    }
  ]
};


const smongQuiz: Quiz = {
  title: 'Kuis Kearifan Smong',
  description:
    'Uji pemahaman Anda tentang Smong dan sistem pengetahuan tradisional untuk kesiapsiagaan bencana.',
  questions: [
    {
      question:
        "Apa arti kata 'Smong' dalam bahasa lokal Pulau Simeulue?",
      options: ['Gempa Bumi', 'Tsunami', 'Peringatan', 'Lautan'],
      correctAnswer: 'Tsunami',
      points: 10,
    },
    {
      question:
        'Apa dua tanda dalam syair Smong yang menunjukkan akan datangnya tsunami?',
      options: [
        'Angin kencang dan hujan lebat',
        'Gempa kuat diikuti surutnya air laut',
        'Awan gelap dan petir',
        'Suara sirene yang keras',
      ],
      correctAnswer: 'Gempa kuat diikuti surutnya air laut',
      points: 10,
    },
    {
      question:
        'Tindakan apa yang disarankan oleh kearifan Smong segera setelah melihat tanda-tanda tersebut?',
      options: [
        'Pergi ke pantai untuk melihat',
        'Menunggu instruksi resmi',
        'Lari ke tempat yang lebih tinggi',
        'Bersembunyi di dalam rumah',
      ],
      correctAnswer: 'Lari ke tempat yang lebih tinggi',
      points: 10,
    },
  ],
};

const bahTangseQuiz: Quiz = {
  title: 'Kuis Siaga Banjir Tangse',
  description:
    'Uji pemahamanmu tentang penyebab dan dampak dari banjir bandang "Bah Tangse".',
  questions: [
    {
      question:
        'Apa akar penyebab utama dari bencana "Bah Tangse" menurut cerita?',
      options: [
        'Gempa bumi',
        'Bendungan yang jebol',
        'Penebangan hutan liar di hulu sungai',
        'Hujan es',
      ],
      correctAnswer: 'Penebangan hutan liar di hulu sungai',
      points: 10,
    },
    {
      question:
        'Ke mana warga menyelamatkan diri saat banjir bandang terjadi?',
      options: [
        'Ke atap rumah',
        'Ke dalam bunker bawah tanah',
        'Ke perbukitan atau tempat yang lebih tinggi',
        'Ke tengah lapangan',
      ],
      correctAnswer: 'Ke perbukitan atau tempat yang lebih tinggi',
      points: 10,
    },
    {
        question: 'Apa yang dibawa oleh air bah selain air yang meluap?',
        options: [
            'Ikan-ikan besar',
            'Sampah plastik',
            'Puluhan pohon gelondongan raksasa',
            'Pasir pantai',
        ],
        correctAnswer: 'Puluhan pohon gelondongan raksasa',
        points: 10,
    }
  ],
};

const kopiGayoQuiz: Quiz = {
  title: 'Kuis Aroma Perdamaian',
  description:
    'Seberapa jauh Anda tahu tentang peran kopi Gayo dalam pemulihan pasca-konflik?',
  questions: [
    {
      question:
        'Mengapa para petani kopi Gayo memutuskan untuk membentuk koperasi?',
      options: [
        'Karena diwajibkan oleh pemerintah',
        'Untuk bersaing satu sama lain',
        'Untuk saling menguatkan dan memiliki posisi tawar yang lebih baik',
        'Untuk mendapatkan pinjaman bank',
      ],
      correctAnswer:
        'Untuk saling menguatkan dan memiliki posisi tawar yang lebih baik',
      points: 10,
    },
    {
      question:
        'Apa dampak positif utama dari bangkitnya industri kopi Gayo bagi masyarakat?',
      options: [
        'Meningkatnya jumlah wisatawan',
        'Masyarakat bisa menyekolahkan anak-anak mereka',
        'Berkurangnya populasi hama',
        'Harga tanah menjadi mahal',
      ],
      correctAnswer: 'Masyarakat bisa menyekolahkan anak-anak mereka',
      points: 10,
    },
    {
        question: 'Menurut cerita, apa yang menjadi "aroma perdamaian"?',
        options: [
            'Aroma masakan di dapur umum',
            'Aroma bunga-bunga di taman',
            'Aroma kopi yang diolah setiap pagi',
            'Aroma laut setelah badai',
        ],
        correctAnswer: 'Aroma kopi yang diolah setiap pagi',
        points: 10,
    }
  ],
};

const bakauQuiz: Quiz = {
    title: 'Kuis Penjaga Pantai',
    description:
      'Seberapa baik Anda memahami fungsi dan manfaat hutan bakau?',
    questions: [
        {
          question:
            'Selain sebagai pelindung pantai dari abrasi dan badai, apa manfaat ekologis lain dari hutan bakau?',
          options: [
            'Menghasilkan buah-buahan yang bisa dimakan',
            'Menjadi habitat bagi biota laut seperti ikan dan kepiting',
            'Menyaring polusi udara di kota',
            'Membuat air laut menjadi tawar',
          ],
          correctAnswer:
            'Menjadi habitat bagi biota laut seperti ikan dan kepiting',
          points: 10,
        },
        {
            question: 'Apa tantangan awal yang dihadapi komunitas saat menanam kembali hutan bakau?',
            options: [
                'Banyak bibit yang gagal tumbuh',
                'Kekurangan dana dari pemerintah',
                'Konflik dengan perusahaan sawit',
                'Larangan dari tetua adat',
            ],
            correctAnswer: 'Banyak bibit yang gagal tumbuh',
            points: 10,
        },
        {
            question: 'Bagaimana cara hutan bakau melindungi pantai?',
            options: [
                'Dengan mengeluarkan zat kimia yang memecah ombak',
                'Dengan membuat dinding tak terlihat',
                'Dengan akarnya yang kokoh mencengkeram tanah dan menahan laju ombak',
                'Dengan menarik burung-burung besar untuk melawan badai',
            ],
            correctAnswer: 'Dengan akarnya yang kokoh mencengkeram tanah dan menahan laju ombak',
            points: 10,
        }
    ]
};

const dapurUmumQuiz: Quiz = {
    title: 'Kuis Dapur Perdamaian',
    description: 'Uji pemahaman Anda tentang peran inisiatif lokal dalam membangun perdamaian.',
    questions: [
        {
          question:
            'Apa hasil akhir yang paling penting dari inisiatif Dapur Umum Perdamaian?',
          options: [
            'Warga menjadi kenyang',
            'Mendapat penghargaan dari pemerintah',
            'Runtuhnya dinding ketidakpercayaan dan terjalinnya kembali persaudaraan',
            'Menjadi tujuan wisata kuliner',
          ],
          correctAnswer:
            'Runtuhnya dinding ketidakpercayaan dan terjalinnya kembali persaudaraan',
          points: 10,
        },
        {
            question: 'Di mana keajaiban rekonsiliasi terjadi menurut cerita?',
            options: [
                'Di balai desa saat rapat resmi',
                'Di media sosial melalui grup diskusi',
                'Saat memotong sayur dan mengaduk gulai di dapur',
                'Di lapangan olahraga saat kompetisi',
            ],
            correctAnswer: 'Saat memotong sayur dan mengaduk gulai di dapur',
            points: 10,
        },
        {
            question: 'Apa ide dasar yang memicu terbentuknya dapur umum ini?',
            options: [
                'Perintah dari kepala desa',
                'Adanya bantuan bahan makanan dari LSM',
                'Semua orang butuh makan, dan makanan bisa menyatukan',
                'Untuk membuka bisnis restoran',
            ],
            correctAnswer: 'Semua orang butuh makan, dan makanan bisa menyatukan',
            points: 10,
        }
    ]
};

const lumbungPadiQuiz: Quiz = {
    title: 'Kuis Lumbung Komunal',
    description:
      'Uji pemahaman Anda tentang gotong royong dan ketahanan pangan.',
    questions: [
        {
            question:
              'Apa prinsip dasar yang mendasari sistem lumbung bersama ini?',
            options: [
              'Prinsip untung-rugi',
              'Prinsip utang-piutang dengan bunga',
              'Semangat gotong royong dan kepedulian',
              'Prinsip kompetisi',
            ],
            correctAnswer: 'Semangat gotong royong dan kepedulian',
            points: 10,
          },
          {
            question: 'Kapan seseorang boleh mengambil dari lumbung komunal?',
            options: [
                'Kapan saja mereka mau',
                'Saat ada perayaan desa',
                'Ketika mengalami kesulitan atau gagal panen',
                'Hanya jika mereka sudah menyumbang lebih banyak',
            ],
            correctAnswer: 'Ketika mengalami kesulitan atau gagal panen',
            points: 10,
          },
          {
              question: 'Selain sebagai cadangan makanan, apa fungsi lumbung padi bagi komunitas?',
              options: [
                  'Sebagai tempat wisata',
                  'Sebagai simbol persatuan dan kekuatan bersama',
                  'Sebagai tempat penyimpanan barang antik',
                  'Sebagai tempat pemungutan suara',
              ],
              correctAnswer: 'Sebagai simbol persatuan dan kekuatan bersama',
              points: 10,
          }
    ]
};

const apiBukitQuiz: Quiz = {
    title: 'Kuis Jaga Hutan',
    description:
      'Uji pengetahuan Anda tentang pencegahan dan penanggulangan kebakaran hutan.',
    questions: [
        {
            question: 'Menurut cerita, apa penyebab umum kebakaran hutan di Gayo?',
            options: [
              'Sambaran petir',
              'Panas matahari yang ekstrem',
              'Kelalaian manusia seperti membuka lahan dengan membakar',
              'Letusan gunung berapi',
            ],
            correctAnswer:
              'Kelalaian manusia seperti membuka lahan dengan membakar',
            points: 10,
          },
          {
              question: 'Apa nama kelompok sukarela yang dibentuk warga untuk mengatasi kebakaran hutan?',
              options: [
                  'Tim Pemadam Gayo',
                  'Masyarakat Peduli Api',
                  'Aliansi Penjaga Hutan',
                  'Komunitas Bukit Barisan',
              ],
              correctAnswer: 'Masyarakat Peduli Api',
              points: 10,
          },
          {
              question: 'Selain memadamkan api, apa kegiatan penting lain yang dilakukan kelompok ini?',
              options: [
                  'Menjual kayu hasil tebangan',
                  'Berburu hewan liar',
                  'Memberikan penyuluhan kepada warga agar tidak membakar lahan',
                  'Membangun villa di hutan',
              ],
              correctAnswer: 'Memberikan penyuluhan kepada warga agar tidak membakar lahan',
              points: 10,
          }
    ]
};

const pemudaAdatQuiz: Quiz = {
    title: 'Kuis Penjaga Adat',
    description:
      'Uji pemahamanmu tentang peran budaya dalam pembangunan perdamaian.',
    questions: [
        {
            question:
              'Inisiatif ini menunjukkan bahwa seni dan budaya dapat menjadi alat yang efektif untuk...',
            options: [
              'Menghasilkan seniman terkenal',
              'Pembangunan perdamaian dan penguatan komunitas',
              'Menarik wisatawan',
              'Melupakan masa lalu',
            ],
            correctAnswer: 'Pembangunan perdamaian dan penguatan komunitas',
            points: 10,
          },
          {
              question: 'Tarian apa yang dihidupkan kembali oleh para pemuda dalam cerita?',
              options: [
                  'Tari Saman',
                  'Tari Seudati',
                  'Tari Piring',
                  'Tari Kecak',
              ],
              correctAnswer: 'Tari Seudati',
              points: 10,
          },
          {
              question: 'Selain gerakan, apa yang diajarkan oleh tarian tersebut kepada para pemuda?',
              options: [
                  'Cara bertarung',
                  'Sejarah kerajaan Aceh',
                  'Disiplin, kerja sama tim, dan syair nasihat',
                  'Teknik vokal untuk bernyanyi',
              ],
              correctAnswer: 'Disiplin, kerja sama tim, dan syair nasihat',
              points: 10,
          }
    ]
};

const perempuanPenganyamQuiz: Quiz = {
    title: 'Kuis Anyaman Harapan',
    description:
      'Uji pemahamanmu tentang pemberdayaan perempuan dan pemulihan pasca-bencana.',
    questions: [
        {
            question:
              'Apa transformasi utama yang dialami oleh para perempuan ini?',
            options: [
              'Dari petani menjadi pengrajin',
              'Dari ibu rumah tangga menjadi politisi',
              'Dari korban menjadi penyintas yang berdaya',
              'Dari pedagang menjadi guru',
            ],
            correctAnswer: 'Dari korban menjadi penyintas yang berdaya',
            points: 10,
          },
          {
              question: 'Bahan utama apa yang mereka gunakan untuk membuat kerajinan anyaman?',
              options: [
                  'Rotan',
                  'Bambu',
                  'Daun Pandan',
                  'Plastik daur ulang',
              ],
              correctAnswer: 'Daun Pandan',
              points: 10,
          },
          {
              question: 'Selain sebagai sumber ekonomi, apa fungsi lain dari kegiatan menganyam bersama bagi mereka?',
              options: [
                  'Sebagai kompetisi tahunan',
                  'Sebagai terapi dan ruang untuk saling menguatkan',
                  'Sebagai cara untuk melestarikan bahasa daerah',
                  'Sebagai syarat untuk mendapatkan bantuan pemerintah',
              ],
              correctAnswer: 'Sebagai terapi dan ruang untuk saling menguatkan',
              points: 10,
          }
    ]
};

const arsitekturQuiz: Quiz = {
    title: 'Kuis Arsitektur Bijak',
    description:
      'Uji pemahamanmu tentang kearifan di balik arsitektur Rumoh Aceh.',
    questions: [
        {
            question:
              'Apa pelajaran utama yang bisa diambil dari kearifan arsitektur Rumoh Aceh?',
            options: [
              'Kita harus membangun rumah dari kayu saja',
              'Teknologi modern tidak berguna',
              'Desain tradisional seringkali memiliki solusi yang adaptif terhadap lingkungan',
              'Rumah panggung tidak aman',
            ],
            correctAnswer:
              'Desain tradisional seringkali memiliki solusi yang adaptif terhadap lingkungan',
            points: 10,
          },
          {
              question: 'Fitur utama apa dari Rumoh Aceh yang membuatnya tahan terhadap gempa?',
              options: [
                  'Dinding beton yang tebal',
                  'Konstruksi kayu yang fleksibel',
                  'Atap dari daun rumbia',
                  'Pondasi yang sangat dalam',
              ],
              correctAnswer: 'Konstruksi kayu yang fleksibel',
              points: 10,
          },
          {
              question: 'Apa fungsi dari "kolong" atau ruang di bawah rumah panggung?',
              options: [
                  'Hanya sebagai hiasan',
                  'Sebagai garasi mobil',
                  'Sebagai ruang serbaguna dan jalan bagi air saat banjir',
                  'Sebagai tempat membuang sampah',
              ],
              correctAnswer: 'Sebagai ruang serbaguna dan jalan bagi air saat banjir',
              points: 10,
          }
    ]
};

const seniTraumaQuiz: Quiz = {
    title: 'Kuis Kanvas Harapan',
    description:
      'Uji pemahamanmu tentang kekuatan seni dalam proses pemulihan sosial.',
    questions: [
        {
            question:
              'Apa tema yang sering diangkat dalam mural-mural mereka?',
            options: [
              'Kemarahan dan kesedihan',
              'Pemandangan abstrak',
              'Harapan, ketahanan, dan kebersamaan',
              'Potret para seniman',
            ],
            correctAnswer: 'Harapan, ketahanan, dan kebersamaan',
            points: 10,
          },
          {
              question: 'Apa tujuan utama para seniman melukis di dinding-dinding publik?',
              options: [
                  'Untuk menjual lukisan mereka',
                  'Untuk menyembuhkan luka kota dan jiwa melalui seni',
                  'Untuk memprotes pemerintah',
                  'Untuk memenangkan kompetisi seni',
              ],
              correctAnswer: 'Untuk menyembuhkan luka kota dan jiwa melalui seni',
              points: 10,
          },
          {
              question: 'Bagaimana reaksi komunitas terhadap kegiatan mural ini?',
              options: [
                  'Komunitas marah karena dindingnya dicoret-coret',
                  'Komunitas tidak peduli',
                  'Komunitas, termasuk anak-anak, ikut bergabung dalam proses melukis',
                  'Komunitas melaporkannya ke polisi',
              ],
              correctAnswer: 'Komunitas, termasuk anak-anak, ikut bergabung dalam proses melukis',
              points: 10,
          }
    ]
};

const nelayanQuiz: Quiz = {
    title: 'Kuis Navigasi Tradisional',
    description:
      'Uji pengetahuanmu tentang cara nelayan tradisional membaca tanda-tanda alam.',
    questions: [
        {
            question: 'Rasi bintang apa yang disebut "Bintang Tiga" dan digunakan oleh nelayan Aceh untuk penunjuk arah?',
            options: ['Scorpio', 'Orion', 'Big Dipper', 'Crux (Salib Selatan)'],
            correctAnswer: 'Orion',
            points: 10,
        },
        {
            question: 'Perilaku hewan apa yang menjadi pertanda cuaca buruk bagi para nelayan?',
            options: [
                'Kucing tidur di dalam rumah',
                'Burung-burung terbang tinggi di langit',
                'Lumba-lumba berenang mendekati pantai',
                'Ayam berkokok di pagi hari',
            ],
            correctAnswer: 'Lumba-lumba berenang mendekati pantai',
            points: 10,
        },
        {
            question: 'Bagaimana para nelayan mengetahui lokasi berkumpulnya ikan?',
            options: [
                'Menggunakan sonar canggih',
                'Dengan melihat warna air dan jenis burung yang terbang di atasnya',
                'Mengikuti kapal nelayan lain',
                'Melempar jaring secara acak',
            ],
            correctAnswer: 'Dengan melihat warna air dan jenis burung yang terbang di atasnya',
            points: 10,
        }
    ]
};

const sumurTuaQuiz: Quiz = {
    title: 'Kuis Sumber Kehidupan',
    description:
      'Uji pemahamanmu tentang manajemen sumber daya air tradisional.',
    questions: [
        {
            question: 'Mengapa sumur tua tersebut tidak pernah kering saat sumur modern lainnya kering?',
            options: [
              'Karena sangat dalam',
              'Karena dibangun tepat di atas mata air besar',
              'Karena jarang digunakan',
              'Karena terbuat dari batu ajaib',
            ],
            correctAnswer: 'Karena dibangun tepat di atas mata air besar',
            points: 10,
          },
          {
              question: 'Apa yang mendorong warga untuk mencari dan membersihkan sumur tua tersebut?',
              options: [
                  'Perintah dari pemerintah',
                  'Rasa penasaran dan ingin berpetualang',
                  'Kekeringan panjang yang membuat sumber air modern kering',
                  'Mimpi seorang warga desa',
              ],
              correctAnswer: 'Kekeringan panjang yang membuat sumber air modern kering',
              points: 10,
          },
          {
              question: 'Pelajaran apa yang didapat warga dari peristiwa ini?',
              options: [
                  'Teknologi modern selalu lebih unggul',
                  'Air tidak akan pernah habis',
                  'Kearifan dalam peninggalan masa lalu harus dijaga dan dilestarikan',
                  'Hutan tidak ada hubungannya dengan sumber air',
              ],
              correctAnswer: 'Kearifan dalam peninggalan masa lalu harus dijaga dan dilestarikan',
              points: 10,
          }
    ]
};

const ilmuFalakQuiz: Quiz = {
    title: 'Kuis Ilmu Falak',
    description:
      'Uji pengetahuanmu tentang penerapan astronomi tradisional di Aceh.',
    questions: [
        {
            question:
              'Kisah ini menunjukkan bahwa di Aceh, ilmu agama dan ilmu pengetahuan (sains)...',
            options: [
              'Selalu bertentangan',
              'Tidak ada hubungannya sama sekali',
              'Dapat saling melengkapi dan bermanfaat bagi kehidupan',
              'Hanya dipelajari oleh kalangan bangsawan',
            ],
            correctAnswer:
              'Dapat saling melengkapi dan bermanfaat bagi kehidupan',
            points: 10,
          },
          {
              question: 'Selain untuk menentukan awal bulan puasa dan arah kiblat, untuk apa lagi Ilmu Falak digunakan dalam cerita?',
              options: [
                  'Untuk meramal nasib seseorang',
                  'Untuk navigasi bagi para nelayan',
                  'Untuk menentukan tanggal pernikahan',
                  'Untuk menemukan harta karun',
              ],
              correctAnswer: 'Untuk navigasi bagi para nelayan',
              points: 10,
          },
          {
              question: 'Di mana Ilmu Falak ini diajarkan secara turun-temurun menurut cerita?',
              options: [
                  'Di universitas modern',
                  'Di sekolah pelayaran',
                  'Di balai desa',
                  'Di pesantren (dayah)',
              ],
              correctAnswer: 'Di pesantren (dayah)',
              points: 10,
          }
    ]
};

const pasarQuiz: Quiz = {
    title: 'Kuis Jantung Komunitas',
    description: 'Uji pemahamanmu tentang peran sosial pasar tradisional.',
    questions: [
        {
            question: 'Selain sebagai tempat jual beli, apa fungsi utama pasar tradisional menurut cerita?',
            options: [
              'Sebagai tempat parkir kendaraan',
              'Sebagai pusat penyebaran informasi dan penguatan ikatan sosial',
              'Sebagai lokasi syuting film',
              'Sebagai museum terbuka',
            ],
            correctAnswer:
              'Sebagai pusat penyebaran informasi dan penguatan ikatan sosial',
            points: 10,
          },
          {
              question: 'Tempat apa di dalam pasar yang disebut sebagai "barometer sosial"?',
              options: [
                  'Toko emas',
                  'Kios penjahit',
                  'Warung kopi pasar',
                  'Lapak penjual ikan',
              ],
              correctAnswer: 'Warung kopi pasar',
              points: 10,
          },
          {
              question: 'Menurut cerita, mengapa menjaga pasar tradisional tetap hidup itu penting?',
              options: [
                  'Karena bangunannya antik dan bersejarah',
                  'Karena sama dengan menjaga denyut nadi komunitas',
                  'Karena pajaknya lebih murah daripada pasar modern',
                  'Karena hanya di sana menjual bahan makanan langka',
              ],
              correctAnswer: 'Karena sama dengan menjaga denyut nadi komunitas',
              points: 10,
          }
    ]
};

const kucingCerdasQuiz: Quiz = {
  title: 'Kuis Kucing Cerdas',
  description: 'Uji pemahamanmu tentang kesiapsiagaan bencana gempa bersama Siaga!',
  questions: [
      {
          question:
            'Apa tiga langkah yang diajarkan Siaga saat terjadi gempa?',
          options: [
            'Lari, berteriak, dan melompat',
            'Merunduk, berlindung, dan bertahan',
            'Berdiri, melihat, dan menunggu',
            'Makan, minum, dan tidur',
          ],
          correctAnswer:
            'Merunduk, berlindung, dan bertahan',
          points: 10,
        },
        {
          question:
            'Ke mana Siaga mengajak teman-temannya setelah guncangan gempa berhenti?',
          options: [
            'Kembali ke dalam rumah',
            'Ke pinggir pantai',
            'Ke lapangan terbuka yang jauh dari bangunan',
            'Naik ke atas pohon',
          ],
          correctAnswer:
            'Ke lapangan terbuka yang jauh dari bangunan',
          points: 10,
        },
        {
            question: 'Kearifan lokal apa yang diingat Siaga setelah gempa berhenti?',
            options: [
                'Kisah tentang Kopi Gayo',
                'Syair Smong tentang air laut surut',
                'Cara membangun Rumoh Aceh',
                'Pantangan menanam pohon di tepi pantai',
            ],
            correctAnswer: 'Syair Smong tentang air laut surut',
            points: 10,
        }
  ]
};

export const masterQuiz: Quiz = {
    title: 'Kuis Pengetahuan Aceh',
    description: 'Uji wawasan Anda tentang kearifan lokal, kesiapsiagaan bencana, dan perdamaian di Aceh melalui pertanyaan-pertanyaan dari berbagai cerita.',
    questions: [
        ...smongQuiz.questions,
        ...bahTangseQuiz.questions,
        ...kopiGayoQuiz.questions,
        ...bakauQuiz.questions,
        ...dapurUmumQuiz.questions,
        ...lumbungPadiQuiz.questions,
        ...apiBukitQuiz.questions,
        ...pemudaAdatQuiz.questions,
        ...perempuanPenganyamQuiz.questions,
        ...arsitekturQuiz.questions,
        ...seniTraumaQuiz.questions,
        ...nelayanQuiz.questions,
        ...sumurTuaQuiz.questions,
        ...ilmuFalakQuiz.questions,
        ...pasarQuiz.questions,
        ...kucingCerdasQuiz.questions,
    ].sort(() => 0.5 - Math.random()).slice(0, 10) // Ambil 10 pertanyaan acak
}


export const interactiveContent: { [key: string]: InteractiveContent } = {
  'smong-selamat-dari-lautan': {
    video: {
      title: 'Video Edukasi: Sistem Pengetahuan Tradisional',
      description:
        'Temukan bagaimana sistem pengetahuan adat melengkapi ilmu pengetahuan modern dalam kesiapsiagaan bencana.',
      embedUrl:
        'https://www.canva.com/design/DAGy2A4uKKg/oKxoc_2wvJT-q7amzHQQWA/watch?embed',
      info: 'Video ini mengeksplorasi bagaimana sistem pengetahuan tradisional seperti Smong bekerja bersama sistem peringatan dini modern untuk melindungi masyarakat.',
    },
    quiz: smongQuiz,
    comic: smongComic,
  },
  'hutan-bakau-penjaga-pantai': {
    video: {
      title: 'Video Edukasi: Hutan Bakau, Benteng Alami Kita',
      description:
        'Pelajari pentingnya ekosistem mangrove sebagai pelindung alami dari abrasi, badai, bahkan tsunami.',
      embedUrl:
        'https://www.canva.com/design/DAG05xtxObw/lwH2TnsBk2C8fsfxXhThXw/watch?embed',
      info: 'Video ini menjelaskan bagaimana komunitas di Aceh Jaya berhasil memulihkan garis pantai mereka melalui penanaman kembali hutan bakau.',
    },
    quiz: bakauQuiz,
    comic: bakauComic,
  },
  'dapur-umum-perdamaian': {
    video: {
      title: 'Video Edukasi: Memasak Perdamaian',
      description:
        'Saksikan bagaimana Dapur Umum di Bireuen menjadi ruang untuk merajut kembali persaudaraan pasca-konflik.',
      embedUrl:
        'https://www.canva.com/design/DAG058Re3lE/fIjzr5r35dMT83HRBGlMfw/watch?embed',
      info: 'Video dokumenter singkat ini akan meliput kegiatan sehari-hari di Dapur Umum Perdamaian di Bireuen dan wawancara dengan para inisiatornya.',
    },
    quiz: dapurUmumQuiz,
    comic: dapurUmumComic,
  },
    'lumbung-padi-komunal': {
    video: {
      title: 'Video Edukasi: Lumbung Padi, Jaring Pengaman Sosial',
      description:
        'Pelajari bagaimana lumbung padi komunal menjadi fondasi ketahanan pangan dan gotong royong di Gayo.',
      embedUrl:
        'https://www.canva.com/design/DAG062E6zns/ZlMWr3u5a6HfVicIQx5qNQ/watch?embed',
      info: 'Video ini menjelaskan cara kerja lumbung padi komunal sebagai jaring pengaman sosial yang efektif di tingkat masyarakat.',
    },
    quiz: lumbungPadiQuiz,
    comic: lumbungPadiComic,
  },
  'bah-tangse-sungai-murka': {
    video: {
      title: 'Video Dokumenter: Dahsyatnya Bah Tangse 2011',
      description:
        'Saksikan liputan berita nyata mengenai banjir bandang yang menghancurkan Tangse, Pidie pada 10 Maret 2011.',
      embedUrl: 'https://www.canva.com/design/DAG1Gsxv32g/oEZ8pFfT0nK2UZJACt_RWw/watch?embed',
      info: 'Video ini berisi rekaman aktual dari lokasi bencana dan wawancara dengan korban, memberikan gambaran nyata tentang dampak kerusakan akibat perambahan hutan.',
    },
    quiz: bahTangseQuiz,
    comic: bahTangseComic,
  },
  'kopi-gayo-aroma-perdamaian': {
    video: {
      title: 'Video Edukasi: Kopi Gayo, Aroma Perdamaian',
      description:
        'Saksikan kisah inspiratif para petani kopi Gayo yang bangkit dari keterpurukan pasca-konflik untuk membangun kembali kehidupan mereka.',
      embedUrl:
        'https://www.canva.com/design/DAG1HC5cT1A/5pCeQTue043ynhFySg1WcQ/watch?embed',
      info: 'Video ini menampilkan wawancara dengan petani kopi Gayo yang menceritakan perjalanan mereka dari masa konflik hingga membangun kembali kehidupan melalui kebun kopi.',
    },
    quiz: kopiGayoQuiz,
    comic: kopiGayoComic,
  },
  'api-di-bukit-barisan': {
    video: {
      title: 'Video Edukasi: Masyarakat Peduli Api',
      description:
        'Lihat bagaimana Masyarakat Peduli Api berjuang melindungi hutan dari kebakaran.',
      embedUrl: 'https://www.canva.com/design/DAG1GsSgV9M/ju7Vt8gVq1yDMj2-4DKklg/watch?embed',
      info: 'Video ini akan menyoroti pentingnya pencegahan dan peran aktif masyarakat dalam mitigasi bencana kebakaran hutan.',
    },
    quiz: apiBukitQuiz,
    comic: apiBukitComic,
  },
  'pemuda-penjaga-adat': {
    video: {
      title: 'Video Edukasi: Tari Seudati, Perekat Komunitas',
      description:
        'Saksikan bagaimana para pemuda di Pidie melestarikan budaya dan memperkuat ikatan sosial melalui tari Seudati.',
      embedUrl:
        'https://wwwcanva.com/design/DAG1OM98Yrw/nyuZ9I8l9VuDI6AAdSYbCw/watch?embed',
      info: 'Video ini akan mendokumentasikan kegiatan sanggar Seudati dan dampaknya terhadap kaum muda di Pidie.',
    },
    quiz: pemudaAdatQuiz,
    comic: pemudaAdatComic,
  },
  'perempuan-penganyam-harapan': {
    video: {
      title: 'Video Edukasi: Perempuan Penganyam Harapan',
      description:
        'Saksikan bagaimana para janda korban tsunami bangkit dari keterpurukan dengan membentuk kelompok kerajinan anyaman.',
      embedUrl: 'https://www.canva.com/design/DAG1VaVt0qc/Gi6ESi-KQgWt1fEoZtG_NA/watch?embed',
      info: 'Film dokumenter pendek ini akan mengikuti perjalanan kelompok penganyam dari duka menjadi berdaya.',
    },
    quiz: perempuanPenganyamQuiz,
    comic: perempuanPenganyamComic,
  },
  'arsitektur-rumah-panggung': {
    video: {
      title: 'Video Edukasi: Kearifan Rumoh Aceh',
      description:
        'Pelajari bagaimana arsitektur tradisional Rumoh Aceh yang berbentuk panggung terbukti tahan gempa dan adaptif terhadap lingkungan.',
      embedUrl:
        'https://www.canva.com/design/DAG1ml1mW5M/P8bGYXOvuob1i0iTT9TQhg/watch?embed',
      info: 'Video ini akan membandingkan desain Rumoh Aceh dengan bangunan modern dan menyoroti prinsip-prinsip rekayasa jenius di dalamnya.',
    },
    quiz: arsitekturQuiz,
    comic: arsitekturComic,
  },
  'seni-melawan-trauma': {
    video: {
      title: 'Video Edukasi: Seni Melawan Trauma',
      description: 'Saksikan bagaimana para seniman menggunakan mural untuk menyembuhkan luka kota dan jiwa pasca-bencana.',
      embedUrl: 'https://www.canva.com/design/DAG1oFpnXaM/1AYF38ldBYM-z4jiL58VMg/watch?embed',
      info: 'Video ini akan menampilkan karya-karya seniman mural di Banda Aceh dan wawancara tentang kekuatan seni sebagai media terapi.',
    },
    quiz: seniTraumaQuiz,
    comic: seniTraumaComic,
  },
  'nelayan-dan-tanda-alam': {
    video: {
      title: 'Video Edukasi: Navigasi Langit dan Laut',
      description:
        'Pelajari bagaimana nelayan tradisional Aceh menggunakan bintang dan tanda alam untuk bernavigasi di lautan luas.',
      embedUrl: 'https://www.canva.com/design/DAG1sApRGB8/Kynmeiy6S-0u7YVxRG11qw/watch?embed',
      info: 'Video ini mendokumentasikan pengetahuan para nelayan tentang rasi bintang, angin, dan perilaku biota laut sebagai pemandu mereka.',
    },
    quiz: nelayanQuiz,
    comic: nelayanComic,
  },
  'sumur-tua-sumber-kehidupan': {
    video: {
      title: 'Video Edukasi: Sumur Tua, Sumber Kehidupan',
      description:
        'Pelajari bagaimana sebuah sumur tua warisan leluhur menjadi penyelamat saat desa dilanda kekeringan.',
      embedUrl: 'https://www.canva.com/design/DAG1sCoVdCc/ZIARnG8HuYWaqhyO4QlzfA/watch?embed',
      info: 'Video ini akan mengeksplorasi pentingnya menjaga sumber-sumber air tradisional dan kearifan leluhur dalam menentukan lokasinya.',
    },
    quiz: sumurTuaQuiz,
    comic: sumurTuaComic,
  },
  'ilmu-falak-di-pesantren': {
    video: {
      title: 'Video Edukasi: Ilmu Falak, Navigasi Langit dan Laut',
      description: 'Pelajari bagaimana dayah di Aceh mengajarkan astronomi (Ilmu Falak) yang digunakan nelayan untuk navigasi.',
      embedUrl: 'https://www.canva.com/design/DAG1sLRnb6M/mPY87WGVdMwVfMQqdpi2cQ/watch?embed',
      info: 'Video ini akan menjelaskan bagaimana ilmu agama dan sains saling melengkapi dalam tradisi intelektual Aceh.',
    },
    quiz: ilmuFalakQuiz,
    comic: ilmuFalakComic,
  },
  'pasar-sebagai-ruang-sosial': {
    video: {
      title: 'Video Edukasi Akan Segera Hadir!',
      description:
        'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan menangkap suasana dan interaksi sosial di Pasar Peunayong, menunjukkan bagaimana informasi dan kohesi sosial terjalin.',
    },
    quiz: pasarQuiz,
    comic: pasarComic,
  },
  'siaga-si-kucing-cerdas': {
    video: {
      title: 'Video Animasi Akan Segera Hadir!',
      description: 'Sebuah video animasi pendek yang mengajarkan anak-anak langkah-langkah penting saat terjadi gempa, bersama Siaga si kucing cerdas.',
      embedUrl: '',
      info: 'Video ini akan menggunakan visual yang ceria dan lagu yang mudah diingat untuk membantu anak-anak memahami konsep kesiapsiagaan bencana.',
    },
    quiz: kucingCerdasQuiz,
    comic: kucingCerdasComic,
  },
};

    

    

    







    

    

    



