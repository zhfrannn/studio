
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
            imageUrl: 'https://i.ibb.co/GQSD4TWr/Gemini-Generated-Image-muisyomuisyomuis.png',
            imageHint: 'survivors watching sunrise'
        },
    ],
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
  'bah-tangse-sungai-murka': {
    video: {
      title: 'Video Dokumenter: Dahsyatnya Bah Tangse 2011',
      description:
        'Saksikan liputan berita nyata mengenai banjir bandang yang menghancurkan Tangse, Pidie pada 10 Maret 2011.',
      embedUrl: 'https://www.canva.com/design/DAG1Gsxv32g/oEZ8pFfT0nK2UZJACt_RWw/watch?embed',
      info: 'Video ini berisi rekaman aktual dari lokasi bencana dan wawancara dengan korban, memberikan gambaran nyata tentang dampak kerusakan akibat perambahan hutan.',
    },
    quiz: bahTangseQuiz,
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
  },
  'siaga-si-kucing-cerdas': {
    video: {
      title: 'Video Animasi Akan Segera Hadir!',
      description: 'Sebuah video animasi pendek yang mengajarkan anak-anak langkah-langkah penting saat terjadi gempa, bersama Siaga si kucing cerdas.',
      embedUrl: '',
      info: 'Video ini akan menggunakan visual yang ceria dan lagu yang mudah diingat untuk membantu anak-anak memahami konsep kesiapsiagaan bencana.',
    },
    quiz: kucingCerdasQuiz,
  },
};

    