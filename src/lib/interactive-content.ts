
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
            imageUrl: 'https://picsum.photos/seed/lumbung1/800/600',
            imageHint: 'gayo highlands farming'
        },
        {
            title: 'Menghidupkan Tradisi',
            text: 'Kami menghidupkan kembali tradisi lumbung bersama. Setiap keluarga menyisihkan sebagian panennya.',
            imageUrl: 'https://picsum.photos/seed/lumbung2/800/600',
            imageHint: 'putting rice into communal barn'
        },
        {
            title: 'Jaring Pengaman Sosial',
            text: 'Saat ada keluarga yang gagal panen, mereka bisa mengambil dari lumbung ini tanpa bunga atau utang.',
            imageUrl: 'https://picsum.photos/seed/lumbung3/800/600',
            imageHint: 'sharing food community'
        },
        {
            title: 'Kaya dalam Persaudaraan',
            text: 'Lumbung ini adalah simbol persatuan kami. Dengan berbagi, kita semua menjadi lebih kuat.',
            imageUrl: 'https://picsum.photos/seed/lumbung4/800/600',
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
            imageUrl: 'https://picsum.photos/seed/bah1/800/600',
            imageHint: 'dark stormy night village'
        },
        {
            title: 'Air Bah Datang',
            text: 'Air sungai meluap dengan liar, warnanya hitam pekat, membawa puluhan pohon gelondongan raksasa.',
            imageUrl: 'https://picsum.photos/seed/bah2/800/600',
            imageHint: 'raging flash flood logs'
        },
        {
            title: 'Teriakan Peringatan',
            text: 'Kepala desa berteriak melalui pengeras suara masjid, "Air naik! Selamatkan diri! Lari ke tempat tinggi!"',
            imageUrl: 'https://picsum.photos/seed/bah3/800/600',
            imageHint: 'mosque speaker warning'
        },
        {
            title: 'Lari ke Tempat Tinggi',
            text: 'Dalam gelap gulita, kami berlari sekuat tenaga ke perbukitan, hanya membawa pakaian di badan.',
            imageUrl: 'https://picsum.photos/seed/bah4/800/600',
            imageHint: 'people running uphill dark'
        },
        {
            title: 'Pagi Penuh Lumpur',
            text: 'Pagi harinya, yang tersisa hanyalah lumpur tebal dan puing-puing. Jembatan utama putus, puluhan rumah hilang.',
            imageUrl: 'https://picsum.photos/seed/bah5/800/600',
            imageHint: 'village destroyed mud'
        },
        {
            title: 'Pelajaran Pahit',
            text: 'Kami sadar, ini akibat penebangan liar. Sejak saat itu, kami bersumpah untuk menjaga hutan kami.',
            imageUrl: 'https://picsum.photos/seed/bah6/800/600',
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
      imageUrl: 'https://picsum.photos/seed/api1/800/600',
      imageHint: 'dry pine forest'
    },
    {
      title: 'Patroli Sukarela',
      text: 'Kami membentuk kelompok Masyarakat Peduli Api, berpatroli secara sukarela untuk mencegah kebakaran.',
      imageUrl: 'https://picsum.photos/seed/api2/800/600',
      imageHint: 'community patrolling forest'
    },
    {
        title: 'Edukasi Warga',
        text: 'Yang terpenting, kami memberikan penyuluhan kepada warga agar tidak membuka lahan dengan cara membakar.',
        imageUrl: 'https://picsum.photos/seed/api3/800/600',
        imageHint: 'community meeting education'
    },
    {
      title: 'Memadamkan Api',
      text: 'Saat api muncul, kami bekerja sama dengan peralatan seadanya untuk memadamkannya sebelum membesar.',
      imageUrl: 'https://picsum.photos/seed/api4/800/600',
      imageHint: 'people fighting forest fire'
    },
    {
        title: 'Tanggung Jawab Bersama',
        text: 'Ini bukan pekerjaan pemerintah, ini adalah tanggung jawab kami bersama. Hutan ini adalah sumber air kami.',
        imageUrl: 'https://picsum.photos/seed/api5/800/600',
        imageHint: 'community shaking hands'
    },
    {
      title: 'Damai dengan Alam',
      text: 'Menjaga hutan ini adalah cara kami membangun perdamaian dengan alam, demi masa depan anak cucu.',
      imageUrl: 'https://picsum.photos/seed/api6/800/600',
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
      imageUrl: 'https://picsum.photos/seed/kopi1/800/600',
      imageHint: 'abandoned coffee plantation'
    },
    {
      title: 'Kembali dari Nol',
      text: 'Setelah damai, kami kembali. Memulainya lagi dari nol sangat berat, namun kami melihat harapan.',
      imageUrl: 'https://picsum.photos/seed/kopi2/800/600',
      imageHint: 'farmer looking at overgrown field'
    },
    {
      title: 'Harapan di Biji Kopi',
      text: 'Kami bekerja keras, belajar teknik bertani yang lebih baik, melihat harapan baru di setiap biji kopi.',
      imageUrl: 'https://picsum.photos/seed/kopi3/800/600',
      imageHint: 'farmer holding coffee beans'
    },
    {
      title: 'Membangun Koperasi',
      text: 'Kami membentuk koperasi untuk saling menguatkan, belajar teknik baru, dan memasarkan kopi bersama.',
      imageUrl: 'https://picsum.photos/seed/kopi4/800/600',
      imageHint: 'farmers meeting cooperative'
    },
    {
        title: 'Menjadi Dikenal Dunia',
        text: 'Perlahan tapi pasti, kopi Gayo mulai dikenal dunia, membawa nama baik bagi daerah kami.',
        imageUrl: 'https://picsum.photos/seed/kopi5/800/600',
        imageHint: 'coffee export shipping'
    },
    {
      title: 'Aroma Perdamaian',
      text: 'Kini, aroma kopi Gayo yang mendunia adalah aroma kerja keras, harapan, dan perdamaian yang telah kami raih.',
      imageUrl: 'https://picsum.photos/seed/kopi6/800/600',
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
      imageUrl: 'https://picsum.photos/seed/pemuda1/800/600',
      imageHint: 'disaffected youth group'
    },
    {
      title: 'Sebuah Panggilan',
      text: 'Kami, beberapa pemuda yang lebih tua, merasa harus melakukan sesuatu untuk komunitas.',
      imageUrl: 'https://picsum.photos/seed/pemuda2/800/600',
      imageHint: 'youth leaders discussing'
    },
    {
      title: 'Menghidupkan Sanggar',
      text: 'Kami memutuskan untuk menghidupkan kembali sanggar tari Seudati, tarian yang mengajarkan disiplin dan kerja sama.',
      imageUrl: 'https://picsum.photos/seed/pemuda3/800/600',
      imageHint: 'reopening old building'
    },
    {
      title: 'Berlatih Bersama',
      text: 'Awalnya sulit, tapi perlahan sanggar kami mulai ramai. Para pemuda menyalurkan energi mereka ke dalam tarian.',
      imageUrl: 'https://picsum.photos/seed/pemuda4/800/600',
      imageHint: 'youth practicing seudati dance'
    },
    {
        title: 'Ekspresi Positif',
        text: 'Sanggar menjadi ruang aman bagi pemuda untuk berekspresi secara positif dan belajar nilai-nilai luhur.',
        imageUrl: 'https://picsum.photos/seed/pemuda5/800/600',
        imageHint: 'young dancers smiling'
    },
    {
      title: 'Jembatan Antar Desa',
      text: 'Melalui tarian, kami membangun jembatan antar desa dan menciptakan ikatan komunitas yang lebih kuat.',
      imageUrl: 'https://picsum.photos/seed/pemuda6/800/600',
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
      imageUrl: 'https://picsum.photos/seed/anyam1/800/600',
      imageHint: 'sad woman looking at ocean'
    },
    {
      title: 'Menganyam sebagai Terapi',
      text: 'Kami berkumpul dan mulai menganyam dengan daun pandan. Sambil menganyam, kami saling berbagi cerita dan menguatkan.',
      imageUrl: 'https://picsum.photos/seed/anyam2/800/600',
      imageHint: 'women weaving together'
    },
    {
        title: 'Karya dari Hati',
        text: 'Anyaman ini bukan sekadar tikar atau tas, ini adalah terapi dan curahan hati kami.',
        imageUrl: 'https://picsum.photos/seed/anyam3/800/600',
        imageHint: 'closeup hands weaving'
    },
    {
      title: 'Kemandirian Ekonomi',
      text: 'Perlahan, produk kami mulai dikenal dan pesanan datang. Kami mendapatkan penghasilan sendiri.',
      imageUrl: 'https://picsum.photos/seed/anyam4/800/600',
      imageHint: 'woven bags and mats market'
    },
    {
        title: 'Menjadi Berdaya',
        text: 'Kami tidak lagi hanya korban, kami adalah penyintas yang berdaya, yang bisa menghidupi keluarga.',
        imageUrl: 'https://picsum.photos/seed/anyam5/800/600',
        imageHint: 'woman proudly holding woven bag'
    },
    {
      title: 'Keluarga Baru',
      text: 'Kelompok ini menjadi keluarga baru kami, tempat kami menenun kembali harapan untuk masa depan.',
      imageUrl: 'https://picsum.photos/seed/anyam6/800/600',
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
      imageUrl: 'https://picsum.photos/seed/ars1/800/600',
      imageHint: 'aceh house after tsunami'
    },
    {
      title: 'Konstruksi yang Fleksibel',
      text: 'Struktur panggung dengan konstruksi kayu yang fleksibel terbukti mampu meredam guncangan gempa.',
      imageUrl: 'https://picsum.photos/seed/ars2/800/600',
      imageHint: 'diagram of stilt house structure'
    },
    {
      title: 'Adaptif Terhadap Lingkungan',
      text: 'Kolong di bawah rumah tidak hanya serbaguna, tapi juga memberi jalan bagi air saat terjadi banjir atau genangan.',
      imageUrl: 'https://picsum.photos/seed/ars3/800/600',
      imageHint: 'water flowing under stilt house'
    },
    {
        title: 'Membuka Mata',
        text: 'Ini membuka mata kami. Arsitektur nenek moyang kita ternyata luar biasa dan sangat relevan.',
        imageUrl: 'https://picsum.photos/seed/ars4/800/600',
        imageHint: 'people studying old house'
    },
    {
        title: 'Inspirasi untuk Masa Depan',
        text: 'Kami mulai mengadvokasikan dan membangun kembali rumah dengan mengadaptasi prinsip-prinsip Rumoh Aceh.',
        imageUrl: 'https://picsum.photos/seed/ars5/800/600',
        imageHint: 'architect drawing new house plan'
    },
    {
      title: 'Membangun Masa Depan',
      text: 'Ini bukan kembali ke masa lalu, tapi mengambil pelajaran terbaik dari masa lalu untuk membangun masa depan yang lebih aman.',
      imageUrl: 'https://picsum.photos/seed/ars6/800/600',
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
      imageUrl: 'https://picsum.photos/seed/seni1/800/600',
      imageHint: 'ruined city wall'
    },
    {
      title: 'Panggilan untuk Seniman',
      text: 'Sebagai seniman, kami merasa terpanggil untuk melakukan sesuatu, untuk menyembuhkan luka kota dengan cara kami.',
      imageUrl: 'https://picsum.photos/seed/seni2/800/600',
      imageHint: 'group of artists planning'
    },
    {
      title: 'Memberi Warna Baru',
      text: 'Kami mulai melukis mural di dinding publik, bukan untuk melupakan, tapi untuk memberi warna baru pada ingatan.',
      imageUrl: 'https://picsum.photos/seed/seni3/800/600',
      imageHint: 'artist painting mural on wall'
    },
    {
      title: 'Terapi Melalui Seni',
      text: 'Proses melukis bersama ini menjadi terapi bagi kami dan komunitas. Dinding yang suram menjadi galeri terbuka.',
      imageUrl: 'https://picsum.photos/seed/seni4/800/600',
      imageHint: 'colorful community mural'
    },
    {
        title: 'Harapan di Setiap Goresan',
        text: 'Kami melukis tentang harapan, ketahanan, kebersamaan, dan keindahan Aceh yang tak pernah padam.',
        imageUrl: 'https://picsum.photos/seed/seni5/800/600',
        imageHint: 'closeup mural painting hope'
    },
    {
      title: 'Menyembuhkan Luka Kota',
      text: 'Seni menjadi cara kami menyembuhkan luka kota dan jiwa kami, mengubah trauma menjadi harapan.',
      imageUrl: 'https://picsum.photos/seed/seni6/800/600',
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
      imageUrl: 'https://picsum.photos/seed/nelayan1/800/600',
      imageHint: 'fisherman at night starry sky'
    },
    {
      title: 'Membaca Rasi Bintang',
      text: 'Ayah mengajari cara membaca rasi bintang Orion, atau Bintang Tiga, untuk mengetahui arah pulang.',
      imageUrl: 'https://picsum.photos/seed/nelayan2/800/600',
      imageHint: 'orion constellation over sea'
    },
    {
      title: 'Tanda dari Satwa',
      text: 'Jika lumba-lumba berenang mendekati pantai, itu adalah pertanda cuaca akan buruk. Kami belajar dari perilaku hewan.',
      imageUrl: 'https://picsum.photos/seed/nelayan3/800/600',
      imageHint: 'dolphins swimming near coast'
    },
    {
        title: 'Warna Air dan Ikan',
        text: 'Kami tahu kapan ikan berkumpul hanya dengan melihat warna air dan jenis burung yang terbang di atasnya.',
        imageUrl: 'https://picsum.photos/seed/nelayan4/800/600',
        imageHint: 'seabirds diving for fish'
    },
    {
        title: 'Warisan Generasi',
        text: 'Pengetahuan ini tidak ada di buku, ini diwariskan dari ayah ke anak, dari satu generasi nelayan ke generasi berikutnya.',
        imageUrl: 'https://picsum.photos/seed/nelayan5/800/600',
        imageHint: 'father teaching son on boat'
    },
    {
      title: 'Ilmu Kehidupan',
      text: 'Ini adalah ilmu kehidupan yang membuat kami bisa bersahabat dengan lautan dan pulang dengan selamat.',
      imageUrl: 'https://picsum.photos/seed/nelayan6/800/600',
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
      imageUrl: 'https://picsum.photos/seed/sumur1/800/600',
      imageHint: 'cracked dry earth'
    },
    {
      title: 'Mengingat Warisan',
      text: 'Seorang tetua teringat akan sebuah sumur tua di pinggir hutan yang sudah lama tak terpakai.',
      imageUrl: 'https://picsum.photos/seed/sumur2/800/600',
      imageHint: 'old man pointing towards forest'
    },
    {
      title: 'Membersihkan Sumur',
      text: 'Dengan ragu, kami membersihkan sumur yang dibangun dengan cincin batu dan ditutupi pohon besar itu.',
      imageUrl: 'https://picsum.photos/seed/sumur3/800/600',
      imageHint: 'community cleaning old well'
    },
    {
      title: 'Mata Air yang Ajaib',
      text: 'Ajaib! Di dasarnya masih ada air jernih yang tak pernah kering. Leluhur kami membangunnya tepat di atas mata air.',
      imageUrl: 'https://picsum.photos/seed/sumur4/800/600',
      imageHint: 'clear water in old well'
    },
    {
        title: 'Sumber Kehidupan',
        text: 'Sumur tua itu menjadi satu-satunya sumber air bersih bagi seluruh desa selama sisa musim kemarau.',
        imageUrl: 'https://picsum.photos/seed/sumur5/800/600',
        imageHint: 'people queuing for water'
    },
    {
        title: 'Pelajaran Berharga',
        text: 'Kami belajar bahwa ada kearifan dalam peninggalan masa lalu yang harus kami jaga dan lestarikan.',
        imageUrl: 'https://picsum.photos/seed/sumur6/800/600',
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
      imageUrl: 'https://picsum.photos/seed/falak1/800/600',
      imageHint: 'students studying in dayah'
    },
    {
      title: 'Menghitung Posisi Bintang',
      text: 'Kami menghitung posisi bintang untuk menentukan awal bulan puasa, arah kiblat, dan waktu shalat.',
      imageUrl: 'https://picsum.photos/seed/falak2/800/600',
      imageHint: 'teacher pointing at stars map'
    },
    {
      title: 'Ilmu untuk Nelayan',
      text: 'Ilmu yang sama ternyata juga bermanfaat bagi nelayan di pesisir untuk navigasi dan menentukan pasang surut.',
      imageUrl: 'https://picsum.photos/seed/falak3/800/600',
      imageHint: 'scholar talking to fisherman'
    },
    {
        title: 'Rujukan Masyarakat',
        text: 'Para santri yang pulang ke kampungnya sering menjadi rujukan, memberitahu arah bintang utara atau kapan pasang tertinggi.',
        imageUrl: 'https://picsum.photos/seed/falak4/800/600',
        imageHint: 'student helping community'
    },
    {
        title: 'Ilmu Agama dan Kehidupan',
        text: 'Ada hubungan erat antara langit dan laut, antara ilmu agama dan ilmu kehidupan.',
        imageUrl: 'https://picsum.photos/seed/falak5/800/600',
        imageHint: 'mosque against starry sky'
    },
    {
      title: 'Untuk Kebaikan Bersama',
      text: 'Kami belajar bahwa semua ilmu berasal dari Tuhan dan bisa dimanfaatkan untuk kebaikan bersama, di darat maupun di lautan.',
      imageUrl: 'https://picsum.photos/seed/falak6/800/600',
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
      imageUrl: 'https://picsum.photos/seed/pasar1/800/600',
      imageHint: 'bustling traditional market'
    },
    {
      title: 'Pusat Informasi',
      text: 'Jika ada berita penting, lowongan kerja, atau isu meresahkan, informasi menyebar cepat di pasar.',
      imageUrl: 'https://picsum.photos/seed/pasar2/800/600',
      imageHint: 'people talking at coffee stall'
    },
    {
      title: 'Barometer Sosial',
      text: 'Dari obrolan di warung kopi pasar, kita bisa tahu apa yang sedang dirasakan masyarakat.',
      imageUrl: 'https://picsum.photos/seed/pasar3/800/600',
      imageHint: 'group of men drinking coffee'
    },
    {
        title: 'Saling Menenangkan',
        text: 'Bahkan ketika ada isu-isu yang meresahkan, kami bisa saling menenangkan dan mencari kebenaran di sini.',
        imageUrl: 'https://picsum.photos/seed/pasar4/800/600',
        imageHint: 'two people having serious talk'
    },
    {
        title: 'Denyut Nadi Komunitas',
        text: 'Menjaga pasar tradisional tetap hidup sama dengan menjaga denyut nadi dan ikatan sosial komunitas kita.',
        imageUrl: 'https://picsum.photos/seed/pasar5/800/600',
        imageHint: 'smiling market vendor'
    },
    {
        title: 'Lebih dari Jual Beli',
        text: 'Di sinilah persahabatan terjalin, masalah diselesaikan, dan komunitas terasa hidup.',
        imageUrl: 'https://picsum.photos/seed/pasar6/800/600',
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
      imageUrl: 'https://picsum.photos/seed/kucing1/800/600',
      imageHint: 'cute cat listening to old man'
    },
    {
      title: 'Tanah Bergoyang!',
      text: 'Saat tanah bergoyang, Siaga langsung berteriak, "Gempa! Ingat tiga langkah: Merunduk, Berlindung, dan Bertahan!"',
      imageUrl: 'https://picsum.photos/seed/kucing2/800/600',
      imageHint: 'cartoon earthquake cat under table'
    },
    {
      title: 'Mengikuti si Ahli',
      text: 'Teman-temannya yang bingung melihat apa yang dilakukan Siaga dan langsung mengikutinya.',
      imageUrl: 'https://picsum.photos/seed/kucing3/800/600',
      imageHint: 'other cats hiding under furniture'
    },
    {
      title: 'Menuju Tempat Aman',
      text: 'Setelah guncangan berhenti, Siaga dengan tenang mengajak teman-temannya ke lapangan terbuka yang aman.',
      imageUrl: 'https://picsum.photos/seed/kucing4/800/600',
      imageHint: 'cats walking to open field'
    },
    {
        title: 'Peringatan Tsunami',
        text: '"Kita harus ke tempat tinggi," kata Siaga, "siapa tahu air laut surut!" Ia ingat cerita Smong.',
        imageUrl: 'https://picsum.photos/seed/kucing5/800/600',
        imageHint: 'cat pointing to hill'
    },
    {
        title: 'Semua Selamat',
        text: 'Karena Siaga, semua temannya selamat dan belajar cara melindungi diri saat bencana.',
        imageUrl: 'https://picsum.photos/seed/kucing6/800/600',
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
  ],
};

const bakauQuiz: Quiz = {
    title: 'Kuis Penjaga Pantai',
    description:
      'Seberapa baik Anda memahami fungsi dan manfaat hutan bakau?',
    questions: [
        {
          question:
            'Selain sebagai pelindung pantai, apa manfaat ekologis lain dari hutan bakau?',
          options: [
            'Menghasilkan buah-buahan',
            'Menjadi habitat bagi biota laut seperti ikan dan kepiting',
            'Menarik wisatawan asing',
            'Membuat pantai lebih panas',
          ],
          correctAnswer:
            'Menjadi habitat bagi biota laut seperti ikan dan kepiting',
          points: 10,
        },
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
    ]
};

const apiBukitQuiz: Quiz = {
    title: 'Kuis Jaga Hutan',
    description:
      'Uji pengetahuan Anda tentang pencegahan dan penanggulangan kebakaran hutan.',
    questions: [
        {
            question: 'Menurut cerita, apa penyebab umum kebakaran hutan?',
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
    ]
};

const nelayanQuiz: Quiz = {
    title: 'Kuis Navigasi Tradisional',
    description:
      'Uji pengetahuanmu tentang cara nelayan tradisional membaca tanda-tanda alam.',
    questions: [
        {
            question: 'Rasi bintang apa yang disebut "Bintang Tiga" dan digunakan untuk penunjuk arah?',
            options: ['Scorpio', 'Orion', 'Big Dipper', 'Crux'],
            correctAnswer: 'Orion',
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
            question: 'Mengapa sumur tua tersebut tidak pernah kering?',
            options: [
              'Karena sangat dalam',
              'Karena dibangun di atas mata air besar',
              'Karena jarang digunakan',
              'Karena terbuat dari batu ajaib',
            ],
            correctAnswer: 'Karena dibangun di atas mata air besar',
            points: 10,
          },
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
    ]
};

const pasarQuiz: Quiz = {
    title: 'Kuis Jantung Komunitas',
    description: 'Uji pemahamanmu tentang peran sosial pasar tradisional.',
    questions: [
        {
            question: 'Apa pesan utama dari cerita ini?',
            options: [
              'Pasar modern lebih baik dari pasar tradisional',
              'Pasar tradisional harus dijaga karena perannya sebagai pusat komunitas',
              'Berjualan di pasar sangat menguntungkan',
              'Warung kopi adalah bisnis terbaik di pasar',
            ],
            correctAnswer:
              'Pasar tradisional harus dijaga karena perannya sebagai pusat komunitas',
            points: 10,
          },
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
  ]
};

export const masterQuiz: Quiz = {
    title: 'Kuis Pengetahuan Aceh',
    description: 'Uji wawasan Anda tentang kearifan lokal, kesiapsiagaan bencana, dan perdamaian di Aceh melalui pertanyaan-pertanyaan dari berbagai cerita.',
    questions: [
        ...smongQuiz.questions.slice(0,1),
        ...bahTangseQuiz.questions.slice(0,1),
        ...kopiGayoQuiz.questions.slice(0,1),
        ...bakauQuiz.questions.slice(0,1),
        ...dapurUmumQuiz.questions.slice(0,1),
        ...lumbungPadiQuiz.questions.slice(0,1),
        ...apiBukitQuiz.questions.slice(0,1),
        ...pemudaAdatQuiz.questions.slice(0,1),
        ...perempuanPenganyamQuiz.questions.slice(0,1),
        ...arsitekturQuiz.questions.slice(0,1),
        ...seniTraumaQuiz.questions.slice(0,1),
        ...nelayanQuiz.questions.slice(0,1),
        ...sumurTuaQuiz.questions.slice(0,1),
        ...ilmuFalakQuiz.questions.slice(0,1),
        ...pasarQuiz.questions.slice(0,1),
    ]
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
        'https://www.canva.com/design/DAG1OM98Yrw/nyuZ9I8l9VuDI6AAdSYbCw/watch?embed',
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
      title: 'Video Edukasi Akan Segera Hadir!',
      description:
        'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan membandingkan desain Rumoh Aceh dengan bangunan modern dan menyoroti prinsip-prinsip rekayasa jenius di dalamnya.',
    },
    quiz: arsitekturQuiz,
    comic: arsitekturComic,
  },
  'seni-melawan-trauma': {
    video: {
      title: 'Video Edukasi Akan Segera Hadir!',
      description:
        'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan menampilkan karya-karya seniman mural di Banda Aceh dan wawancara tentang kekuatan seni sebagai media terapi.',
    },
    quiz: seniTraumaQuiz,
    comic: seniTraumaComic,
  },
  'nelayan-dan-tanda-alam': {
    video: {
      title: 'Video Edukasi Akan Segera Hadir!',
      description:
        'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan mendokumentasikan pengetahuan para nelayan tentang rasi bintang, angin, dan perilaku biota laut sebagai pemandu mereka.',
    },
    quiz: nelayanQuiz,
    comic: nelayanComic,
  },
  'sumur-tua-sumber-kehidupan': {
    video: {
      title: 'Video Edukasi Akan Segera Hadir!',
      description:
        'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan mengeksplorasi pentingnya menjaga sumber-sumber air tradisional dan kearifan leluhur dalam menentukan lokasinya.',
    },
    quiz: sumurTuaQuiz,
    comic: sumurTuaComic,
  },
  'ilmu-falak-di-pesantren': {
    video: {
      title: 'Video Edukasi Akan Segera Hadir!',
      description:
        'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
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

    