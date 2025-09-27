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

export interface ComicPanel {
  iconSvg: string;
  title: string;
  quote: string;
  gradient: string;
  textColor: string;
}

export interface Comic {
  title: string;
  description: string;
  panels: ComicPanel[];
}

export interface Video {
  title: string;
  description: string;
  embedUrl: string;
  info?: string;
}

export interface InteractiveContent {
  quiz?: Quiz;
  comic?: Comic;
  video: Video;
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
    comic: {
      title: 'Komik Digital: Kearifan Smong',
      description:
        'Lihat bagaimana pengetahuan tradisional diwariskan dari generasi ke generasi.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trees"><path d="M10 10v.2A3 3 0 0 1 7 13v5H4v-5A6 6 0 0 1 10 7v3Z"/><path d="M14 14v.2A3 3 0 0 0 17 17v5h3v-5A6 6 0 0 0 14 11v3Z"/></svg>`,
          title: 'Di Bawah Pohon Beringin',
          quote:
            '“Nenek mengajarkan kami peringatan kuno di bawah pohon beringin tua...”',
          gradient:
            'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
          title: 'Membaca Laut',
          quote: '“Laut itu seperti orang, punya suasana hati. Belajarlah membaca tandanya...”',
          gradient:
            'from-blue-200 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/70',
          textColor: 'text-blue-800 dark:text-blue-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-siren"><path d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5Z"/><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M22 12h-2"/><path d="m17.66 17.66-1.41-1.41"/><path d="M12 22v-2"/><path d="m6.34 17.66-1.41 1.41"/><path d="M2 12H0"/><path d="M4.93 19.07l1.41-1.41"/></svg>`,
          title: 'Tanda Peringatan',
          quote: '“Jika bumi berguncang dan laut surut...”',
          gradient:
            'from-red-200 to-red-100 dark:from-red-900/70 dark:to-red-800/70',
          textColor: 'text-red-800 dark:text-red-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up"><path d="m17 11-5-5-5 5"/><path d="m17 18-5-5-5 5"/></svg>`,
          title: 'Lari ke Bukit!',
          quote: '“Jangan berpikir, jangan berkemas - lari saja ke tempat tinggi!”',
          gradient:
            'from-yellow-200 to-yellow-100 dark:from-yellow-900/70 dark:to-yellow-800/70',
          textColor: 'text-yellow-800 dark:text-yellow-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mountain"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
          title: 'Aman di Ketinggian',
          quote: '“Tetap di sana sampai laut tenang selama berjam-jam...”',
          gradient:
            'from-purple-200 to-purple-100 dark:from-purple-900/70 dark:to-purple-800/70',
          textColor: 'text-purple-800 dark:text-purple-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-person-standing"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg>`,
          title: 'Meneruskan Tradisi',
          quote: '“Sekarang saya mengajari generasi berikutnya kearifan Smong...”',
          gradient:
            'from-indigo-200 to-indigo-100 dark:from-indigo-900/70 dark:to-indigo-800/70',
          textColor: 'text-indigo-800 dark:text-indigo-200',
        },
      ],
    },
    quiz: {
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
        {
          question:
            'Bagaimana kearifan Smong secara tradisional diwariskan dari generasi ke generasi?',
          options: [
            'Melalui buku-buku tertulis',
            'Melalui pelajaran di sekolah',
            'Melalui syair dan lagu lisan',
            'Melalui pamflet pemerintah',
          ],
          correctAnswer: 'Melalui syair dan lagu lisan',
          points: 10,
        },
        {
          question:
            'Keefektifan Smong selama tsunami 2004 adalah contoh kuat dari:',
          options: [
            'Teknologi modern',
            'Bantuan internasional',
            'Kearifan lokal dalam kesiapsiagaan bencana',
            'Sebuah kebetulan yang beruntung',
          ],
          correctAnswer: 'Kearifan lokal dalam kesiapsiagaan bencana',
          points: 10,
        },
      ],
    },
  },
  'bah-tangse-belajar-dari-air-bah': {
    video: {
      title: 'Video Edukasi: Pelajaran dari Bah Tangse',
      description: 'Memahami penyebab dan dampak dari banjir bandang serta pentingnya menjaga ekosistem sungai.',
      embedUrl:
        'https://www.canva.com/design/DAGy2A4uKKg/oKxoc_2wvJT-q7amzHQQWA/watch?embed', // Placeholder URL
      info: 'Video ini menggunakan studi kasus Bah Tangse untuk menjelaskan hubungan antara penggundulan hutan di hulu dan meningkatnya risiko banjir bandang di hilir.',
    },
    comic: {
      title: 'Komik Digital: Saat Sungai Marah',
      description: 'Kisah visual tentang bagaimana kelalaian manusia dapat memicu kemarahan alam.',
      panels: [
         {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-axe"><path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"/><path d="M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"/></svg>`,
          title: 'Suara di Hutan',
          quote: '“Dulu, suara gergaji mesin terdengar siang dan malam di hutan hulu sungai kami...”',
          gradient:
            'from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600',
          textColor: 'text-gray-800 dark:text-gray-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-rain-wind"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m9.2 22 3-7"/><path d="m9 13-3 7"/><path d="M17 13h-3.3"/><path d="M14 17.5h-1.5"/><path d="M16 10h.5"/><path d="M13 22h-1.5"/><path d="M12.5 19h1"/></svg>`,
          title: 'Hujan Deras',
          quote: '“Lalu suatu malam, langit seakan pecah. Hujan turun begitu deras tanpa henti...”',
          gradient:
            'from-blue-200 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/70',
          textColor: 'text-blue-800 dark:text-blue-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-plus"><path d="M.2 10.2c.2-.3.4-.5.7-.7l9-7c.3-.2.6-.3.9-.3s.6.1.9.3l9 7c.2.2.4.4.7.7"/><path d="M11 22V12h2v10"/><path d="M9 18h6"/><path d="M21 15h-3m-3 0v-3m0 3v3m0-3h3"/></svg>`,
          title: 'Air Bah Datang',
          quote: '“Air sungai meluap membawa lumpur dan kayu, menerjang apa saja yang dilewatinya.”',
          gradient:
            'from-red-200 to-red-100 dark:from-red-900/70 dark:to-red-800/70',
          textColor: 'text-red-800 dark:text-red-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.94 0L12 11l2.96-2.96a2.17 2.17 0 0 1 3.08 0v0c.82.82.82 2.13 0 2.94L12 14"/></svg>`,
          title: 'Gotong Royong',
          quote: '“Dalam kesulitan, kami saling membantu membangun kembali apa yang hilang.”',
          gradient:
            'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tree-pine"><path d="M12 10v12"/><path d="m17 14-5-4-5 4"/><path d="m4.5 16.5-1.5-1.5"/><path d="m19.5 16.5 1.5-1.5"/></svg>`,
          title: 'Menanam Harapan',
          quote: '“Kami menanam pohon baru di hulu, menanam harapan untuk masa depan yang lebih aman.”',
          gradient:
            'from-cyan-200 to-cyan-100 dark:from-cyan-900/70 dark:to-cyan-800/70',
          textColor: 'text-cyan-800 dark:text-cyan-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
          title: 'Pelajaran Berharga',
          quote: '“Kini kami tahu, menjaga hutan adalah cara terbaik menjaga desa kami.”',
          gradient:
            'from-purple-200 to-purple-100 dark:from-purple-900/70 dark:to-purple-800/70',
          textColor: 'text-purple-800 dark:text-purple-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Siaga Banjir',
      description: 'Uji pengetahuanmu tentang penyebab dan mitigasi banjir bandang.',
      questions: [
        {
          question: "Apa penyebab utama meningkatnya risiko banjir bandang 'Bah Tangse'?",
          options: ['Curah hujan yang sangat tinggi saja', 'Penebangan hutan di daerah hulu sungai', 'Pembangunan rumah di dekat sungai', 'Gempa bumi kecil'],
          correctAnswer: 'Penebangan hutan di daerah hulu sungai',
          points: 10,
        },
        {
          question: 'Apa fungsi utama hutan di daerah hulu sungai dalam mencegah banjir?',
          options: ['Menghasilkan kayu', 'Menjadi tempat wisata', 'Menyerap air hujan dan mencegah erosi', 'Menakuti hewan liar'],
          correctAnswer: 'Menyerap air hujan dan mencegah erosi',
          points: 10,
        },
        {
          question: 'Pepatah lokal "jaga gunong, gunong jaga tanyoe" berarti...',
          options: ['Gunung itu berbahaya', 'Jika kita menjaga gunung, maka gunung akan menjaga kita', 'Kita harus menambang di gunung', 'Gunung adalah tempat para dewa'],
          correctAnswer: 'Jika kita menjaga gunung, maka gunung akan menjaga kita',
          points: 10,
        },
        {
          question: 'Tindakan apa yang dilakukan masyarakat Tangse setelah banjir bandang?',
          options: ['Pindah ke kota lain', 'Menuntut pemerintah', 'Menghijaukan kembali daerah hulu', 'Membangun bendungan raksasa'],
          correctAnswer: 'Menghijaukan kembali daerah hulu',
          points: 10,
        },
        {
          question: 'Manakah dari berikut ini yang BUKAN merupakan tanda akan datangnya banjir bandang?',
          options: ['Hujan deras dalam waktu lama', 'Air sungai meluap dengan cepat', 'Air sungai menjadi sangat jernih', 'Air sungai berubah keruh dan membawa sampah'],
          correctAnswer: 'Air sungai menjadi sangat jernih',
          points: 10,
        },
      ],
    },
  },
  'kopi-gayo-aroma-perdamaian': {
    video: {
      title: 'Video Edukasi: Kopi, Konflik, dan Rekonsiliasi',
      description: 'Menelusuri bagaimana komoditas kopi menjadi alat pemulihan ekonomi dan perdamaian di dataran tinggi Gayo pasca-konflik.',
      embedUrl:
        'https://www.canva.com/design/DAGy2A4uKKg/oKxoc_2wvJT-q7amzHQQWA/watch?embed', // Placeholder URL
      info: 'Video ini menampilkan wawancara dengan petani kopi Gayo yang menceritakan perjalanan mereka dari masa konflik hingga membangun kembali kehidupan melalui kebun kopi.',
    },
    comic: {
      title: 'Komik Digital: Secangkir Harapan',
      description: 'Perjalanan biji kopi dari kebun yang telantar hingga menjadi minuman yang menyatukan dunia.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-x"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L8.6 3.3a2 2 0 0 0-1.7-.9H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><line x1="10" x2="16" y1="13" y2="19"/><line x1="16" x2="10" y1="13" y2="19"/></svg>`,
          title: 'Kebun Terlantar',
          quote: '“Selama konflik, kebun kopi kami tak terurus, penuh dengan semak belukar...”',
          gradient: 'from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600',
          textColor: 'text-gray-800 dark:text-gray-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-peace"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
          title: 'Kembalinya Kedamaian',
          quote: '“Setelah damai, kami kembali ke desa. Hati penuh harapan, tapi juga keraguan.”',
          gradient: 'from-blue-200 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/70',
          textColor: 'text-blue-800 dark:text-blue-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sprout"><path d="M7 20h10"/><path d="M10 20v-3a2 2 0 1 1 4 0v3"/><path d="M12 11V4"/><path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>`,
          title: 'Mulai dari Awal',
          quote: '“Dengan tangan kosong, kami mulai membersihkan kebun, menanam bibit baru.”',
          gradient: 'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
          title: 'Kekuatan Koperasi',
          quote: '“Kami sadar tak bisa sendiri. Kami membentuk koperasi untuk saling menguatkan.”',
          gradient: 'from-yellow-200 to-yellow-100 dark:from-yellow-900/70 dark:to-yellow-800/70',
          textColor: 'text-yellow-800 dark:text-yellow-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a4 4 0 0 1-4 4H8a4 4 0 0 1 0-8h4a4 4 0 0 1 4 4Z"/><path d="M6 22V8h12v14H6Z"/><path d="M6 14h12"/></svg>`,
          title: 'Aroma untuk Dunia',
          quote: '“Kini, aroma kopi Gayo dari kebun kami dinikmati hingga ke mancanegara.”',
          gradient: 'from-amber-300 to-amber-200 dark:from-amber-800 dark:to-amber-700',
          textColor: 'text-amber-800 dark:text-amber-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5"/></svg>`,
          title: 'Masa Depan Cerah',
          quote: '“Dari kopi, kami bisa menyekolahkan anak-anak. Kopi adalah masa depan kami.”',
          gradient: 'from-purple-200 to-purple-100 dark:from-purple-900/70 dark:to-purple-800/70',
          textColor: 'text-purple-800 dark:text-purple-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Aroma Perdamaian',
      description: 'Seberapa jauh Anda tahu tentang peran kopi Gayo dalam pemulihan pasca-konflik?',
      questions: [
        {
          question: 'Apa yang terjadi pada kebun-kebun kopi di Gayo selama masa konflik?',
          options: ['Ditanami tanaman lain', 'Dikelola oleh pemerintah', 'Ditinggalkan dan menjadi telantar', 'Dijual dengan harga murah'],
          correctAnswer: 'Ditinggalkan dan menjadi telantar',
          points: 10,
        },
        {
          question: 'Apa langkah awal yang dilakukan para petani setelah masa damai tiba?',
          options: ['Mencari pekerjaan di kota', 'Membangun kembali kebun kopi mereka', 'Menunggu bantuan pemerintah', 'Menjual tanah mereka'],
          correctAnswer: 'Membangun kembali kebun kopi mereka',
          points: 10,
        },
        {
          question: 'Mengapa para petani kopi Gayo memutuskan untuk membentuk koperasi?',
          options: ['Karena diwajibkan oleh pemerintah', 'Untuk bersaing satu sama lain', 'Untuk saling menguatkan dan memiliki posisi tawar yang lebih baik', 'Untuk mendapatkan pinjaman bank'],
          correctAnswer: 'Untuk saling menguatkan dan memiliki posisi tawar yang lebih baik',
          points: 10,
        },
        {
          question: 'Selain sebagai sumber ekonomi, apa makna penting kopi bagi masyarakat Gayo pasca-konflik?',
          options: ['Sebagai minuman para bangsawan', 'Sebagai simbol kerja keras, harapan, dan pemulihan', 'Sebagai satu-satunya tanaman yang bisa tumbuh', 'Sebagai syarat untuk mendapatkan bantuan'],
          correctAnswer: 'Sebagai simbol kerja keras, harapan, dan pemulihan',
          points: 10,
        },
        {
          question: 'Apa dampak positif utama dari bangkitnya industri kopi Gayo bagi masyarakat?',
          options: ['Meningkatnya jumlah wisatawan', 'Masyarakat bisa menyekolahkan anak-anak mereka', 'Berkurangnya populasi hama', 'Harga tanah menjadi mahal'],
          correctAnswer: 'Masyarakat bisa menyekolahkan anak-anak mereka',
          points: 10,
        },
      ],
    },
  },
};
