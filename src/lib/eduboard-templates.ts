export interface Slide {
  id: string;
  layout:
    | 'title-slide'
    | 'section-header'
    | 'content-with-image'
    | 'bullet-points'
    | 'infographic'
    | 'quote'
    | 'end-slide';
  category: string;
  title: string;
  description?: string;
  points?: string[];
  imageUrl?: string;
  icon?: string;
  themeColor: string; // e.g., 'bg-blue-500'
  metadata?: {
    author?: string;
    source?: string;
    pointIcons?: string[];
  };
}

export const eduboardSlidesTemplate: Slide[] = [
  {
    id: 'slide-01',
    layout: 'title-slide',
    category: 'Kesiapsiagaan Bencana',
    title: 'Memahami Ancaman Tsunami',
    description:
      'Panduan lengkap untuk mengenali tanda-tanda, mempersiapkan diri, dan selamat dari tsunami.',
    themeColor: 'oklch(55% 0.15 240)', // Blue
  },
  {
    id: 'slide-02',
    layout: 'section-header',
    category: 'Sebelum Bencana',
    title: 'Apa Itu Tsunami?',
    description:
      'Tsunami adalah serangkaian gelombang laut raksasa yang disebabkan oleh gangguan besar di dasar laut, seperti gempa bumi.',
    themeColor: 'oklch(65% 0.1 260)', // Indigo
  },
  {
    id: 'slide-03',
    layout: 'infographic',
    category: 'Fakta Penting',
    title: 'Tanda-Tanda Alam Peringatan Tsunami',
    icon: 'AlertTriangle',
    points: [
      'Gempa Kuat: Guncangan tanah yang membuat Anda sulit berdiri.',
      'Suara Gemuruh: Suara aneh seperti kereta api dari arah laut.',
      'Laut Surut: Air laut surut secara tiba-tiba dan tidak wajar.',
    ],
    themeColor: 'oklch(70% 0.2 50)', // Yellow
    metadata: {
      pointIcons: ['GanttChartSquare', 'Goal', 'Target'],
    },
  },
  {
    id: 'slide-04',
    layout: 'content-with-image',
    category: 'Persiapan',
    title: 'Rencanakan Evakuasi Anda',
    description:
      'Setiap keluarga harus memiliki rencana evakuasi. Penting untuk mengetahui rute dan lokasi aman.',
    points: [
      'Identifikasi dataran tinggi terdekat.',
      'Tentukan rute evakuasi yang aman.',
      'Lakukan latihan evakuasi secara berkala.',
    ],
    imageUrl: 'https://picsum.photos/seed/evacuation/800/600',
    icon: 'Goal',
    themeColor: 'oklch(60% 0.15 200)', // Cyan
  },
  {
    id: 'slide-05',
    layout: 'bullet-points',
    category: 'Persiapan',
    title: 'Siapkan Tas Siaga Bencana',
    description:
      'Tas ini berisi barang-barang penting yang Anda butuhkan untuk bertahan hidup selama 72 jam pertama.',
    points: [
      'Air minum dan makanan ringan',
      'P3K dan obat-obatan pribadi',
      'Senter, peluit, dan radio baterai',
      'Salinan dokumen penting',
      'Pakaian ganti dan selimut',
    ],
    icon: 'ListChecks',
    themeColor: 'oklch(60% 0.18 150)', // Green
  },
  {
    id: 'slide-06',
    layout: 'section-header',
    category: 'Saat Bencana',
    title: 'Tindakan Saat Terjadi Gempa & Tsunami',
    description:
      'Tetap tenang dan ikuti langkah-langkah ini untuk melindungi diri Anda dan keluarga.',
    themeColor: 'oklch(65% 0.2 20)', // Orange
  },
  {
    id: 'slide-07',
    layout: 'bullet-points',
    category: 'Tindakan',
    title: 'Saat Gempa: Drop, Cover, Hold On!',
    points: [
      'DROP (Merunduk) ke lantai.',
      'COVER (Berlindung) di bawah meja yang kokoh.',
      'HOLD ON (Bertahan) sampai guncangan berhenti.',
    ],
    icon: 'ShieldAlert',
    themeColor: 'oklch(60% 0.25 0)', // Red
  },
  {
    id: 'slide-08',
    layout: 'quote',
    category: 'Kearifan Lokal',
    title: 'Smong: Kearifan dari Simeulue',
    description:
      'Enggel mon sao suru, linon bak, mae oek suruik. (Jika gempa kuat diikuti surutnya air laut, segeralah lari ke tempat tinggi).',
    themeColor: 'oklch(70% 0.1 290)', // Violet
    metadata: {
      author: 'Tradisi Lisan Pulau Simeulue',
    },
  },
  {
    id: 'slide-09',
    layout: 'infographic',
    category: 'Setelah Bencana',
    title: 'Langkah Setelah Selamat',
    icon: 'HeartHandshake',
    points: [
      'Tetap di Evakuasi: Jangan kembali ke pantai sampai dinyatakan aman oleh pihak berwenang.',
      'Hindari Area Rusak: Jauhi bangunan yang rusak dan kabel listrik yang jatuh.',
      'Bantu Sesama: Periksa kondisi tetangga dan berikan pertolongan pertama jika mampu.',
    ],
    themeColor: 'oklch(65% 0.15 330)', // Magenta
    metadata: {
      pointIcons: ['Info', 'AlertTriangle', 'HeartHandshake'],
    },
  },
  {
    id: 'slide-10',
    layout: 'end-slide',
    category: 'Kesimpulan',
    title: 'Anda Siap, Anda Selamat!',
    description:
      'Membangun budaya sadar bencana adalah tanggung jawab kita bersama untuk masa depan yang lebih aman.',
    themeColor: 'oklch(60% 0.15 240)', // Blue
  },
];

export interface StoryboardSlideData {
  id: string;
  layout: 'storyboard-layout';
  title: string;
  subtitle: string;
  columns: {
    title: string;
    text: string;
    imageHint: string;
  }[];
}

export const storyboardTemplate: StoryboardSlideData[] = [
  {
    id: 'story-01',
    layout: 'storyboard-layout',
    title: 'Bab 1: Tanda-Tanda Alam',
    subtitle: 'Bagaimana alam berkomunikasi sebelum bencana datang.',
    columns: [
      {
        title: 'Gempa Mengguncang',
        text: 'Getaran kuat yang tiba-tiba adalah sinyal pertama. Jangan panik, segera cari tempat berlindung.',
        imageHint: 'earthquake crack ground',
      },
      {
        title: 'Laut yang Aneh',
        text: 'Air laut surut jauh dari bibir pantai, memperlihatkan dasar laut yang biasanya terendam. Ini bukan pertanda baik.',
        imageHint: 'receding ocean tsunami',
      },
      {
        title: 'Suara Gemuruh',
        text: 'Terdengar suara misterius seperti deru kereta api atau pesawat jet dari arah lautan.',
        imageHint: 'stormy ocean waves',
      },
    ],
  },
  {
    id: 'story-02',
    layout: 'storyboard-layout',
    title: 'Bab 2: Respon Cepat',
    subtitle: 'Detik-detik berharga setelah tanda pertama muncul.',
    columns: [
      {
        title: 'Lupakan Harta',
        text: 'Nyawa lebih berharga. Jangan kembali ke rumah untuk mengambil barang. Segera bergerak.',
        imageHint: 'people running away',
      },
      {
        title: 'Cari Tempat Tinggi',
        text: 'Berlari menjauhi pantai menuju perbukitan atau gedung tinggi yang kokoh. Setiap meter ketinggian berarti.',
        imageHint: 'running uphill mountain',
      },
      {
        title: 'Bantu yang Lemah',
        text: 'Bantu anak-anak, lansia, dan penyandang disabilitas. Pastikan tidak ada yang tertinggal.',
        imageHint: 'helping elderly person',
      },
    ],
  },
  {
    id: 'story-03',
    layout: 'storyboard-layout',
    title: 'Bab 3: Bertahan & Menunggu',
    subtitle: 'Apa yang harus dilakukan saat berada di lokasi evakuasi.',
    columns: [
      {
        title: 'Tetap di Ketinggian',
        text: 'Gelombang tsunami bisa datang lebih dari satu kali. Tunggu arahan dari pihak berwenang sebelum turun.',
        imageHint: 'people on hill watching',
      },
      {
        title: 'Dengarkan Informasi',
        text: 'Gunakan radio baterai atau ponsel untuk memantau informasi terkini dari sumber yang terpercaya.',
        imageHint: 'person listening radio',
      },
      {
        title: 'Hemat Energi',
        text: 'Simpan tenaga dan perbekalan. Bantuan mungkin membutuhkan waktu untuk datang.',
        imageHint: 'emergency food kit',
      },
    ],
  },
  {
    id: 'story-04',
    layout: 'storyboard-layout',
    title: 'Bab 4: Memori & Kearifan',
    subtitle: 'Pelajaran dari "Smong" dan pentingnya mewariskan pengetahuan.',
    columns: [
      {
        title: 'Kearifan Smong',
        text: 'Di Simeulue, syair "Smong" menyelamatkan puluhan ribu jiwa. Kearifan lokal terbukti ampuh.',
        imageHint: 'ancient scroll manuscript',
      },
      {
        title: 'Ceritakan Kembali',
        text: 'Bagikan pengalaman dan pengetahuan ini kepada keluarga dan generasi muda.',
        imageHint: 'storytelling community elder',
      },
      {
        title: 'Membangun Ketangguhan',
        text: 'Dengan pengetahuan dan persiapan, kita membangun komunitas yang lebih tangguh menghadapi bencana.',
        imageHint: 'community building hands',
      },
    ],
  },
];

export interface QuizCardData {
    id: string;
    layout: 'quiz-card';
    category: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    icon: string;
    themeColor: string;
}

export const quizCardTemplate: QuizCardData[] = [
    {
        id: 'quiz-1',
        layout: 'quiz-card',
        category: 'Tanda-Tanda Tsunami',
        question: "Manakah dari berikut ini yang merupakan tanda alam PALING khas sebelum tsunami terjadi?",
        options: [
            "Hujan deras disertai petir",
            "Air laut surut secara tiba-tiba dan tidak wajar",
            "Munculnya pelangi di atas laut",
            "Angin bertiup sangat kencang ke arah darat"
        ],
        correctAnswer: "Air laut surut secara tiba-tiba dan tidak wajar",
        explanation: "Surutnya air laut secara drastis adalah fenomena khas yang terjadi karena air laut terhisap ke arah pusat gempa sebelum kembali sebagai gelombang raksasa.",
        icon: 'Waves',
        themeColor: 'oklch(60% 0.15 200)', // Cyan
    },
    {
        id: 'quiz-2',
        layout: 'quiz-card',
        category: 'Tindakan Saat Gempa',
        question: "Apa singkatan dari tindakan yang harus dilakukan saat gempa terjadi?",
        options: [
            "Lari, Lompat, Sembunyi",
            "Berdiri, Lihat, Tunggu",
            "Merunduk, Berlindung, Bertahan (Drop, Cover, Hold On)",
            "Telepon, Rekam, Bagikan"
        ],
        correctAnswer: "Merunduk, Berlindung, Bertahan (Drop, Cover, Hold On)",
        explanation: "Metode 'Drop, Cover, Hold On' adalah standar internasional untuk melindungi diri dari reruntuhan saat terjadi gempa bumi.",
        icon: 'ShieldAlert',
        themeColor: 'oklch(60% 0.25 0)', // Red
    },
    {
        id: 'quiz-3',
        layout: 'quiz-card',
        category: 'Tas Siaga Bencana',
        question: "Barang apa yang TIDAK perlu ada di dalam Tas Siaga Bencana?",
        options: [
            "P3K dan obat-obatan pribadi",
            "Senter dan baterai cadangan",
            "Konsol game portabel",
            "Salinan dokumen penting"
        ],
        correctAnswer: "Konsol game portabel",
        explanation: "Tas Siaga Bencana berfokus pada kebutuhan bertahan hidup esensial. Hiburan seperti konsol game bukanlah prioritas utama.",
        icon: 'ListChecks',
        themeColor: 'oklch(60% 0.18 150)', // Green
    }
]
