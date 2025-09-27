
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
  'hutan-bakau-penjaga-pantai': {
    video: {
      title: 'Video Edukasi: Benteng Hijau Pesisir',
      description: 'Pelajari peran vital hutan bakau sebagai pelindung alami dari abrasi dan badai, serta manfaatnya bagi ekosistem.',
      embedUrl:
        'https://www.canva.com/design/DAGy2A4uKKg/oKxoc_2wvJT-q7amzHQQWA/watch?embed', // Placeholder
      info: 'Video ini menunjukkan bagaimana komunitas di Aceh Jaya berhasil memulihkan garis pantai mereka melalui penanaman kembali hutan bakau.',
    },
    comic: {
      title: 'Komik Digital: Akar yang Melindungi',
      description: 'Sebuah kisah tentang gotong royong memulihkan benteng alami desa.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
          title: 'Pantai yang Terkikis',
          quote: '“Dulu, setiap ombak besar datang, sebagian tanah dan rumah kami ikut terbawa...”',
          gradient: 'from-red-200 to-red-100 dark:from-red-900/70 dark:to-red-800/70',
          textColor: 'text-red-800 dark:text-red-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 7c0-2.2-1.8-4-4-4S10 4.8 10 7c0 2 .3 3.2 1.5 4.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
          title: 'Ide dari Tetua',
          quote: '“Para tetua mengingatkan kami tentang hutan bakau yang dulu melindungi pantai ini.”',
          gradient: 'from-yellow-200 to-yellow-100 dark:from-yellow-900/70 dark:to-yellow-800/70',
          textColor: 'text-yellow-800 dark:text-yellow-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-platter"><path d="M12 3V2"/><path d="M5 10a7.1 7.1 0 0 1 14 0"/><path d="M4 10h16"/><path d="M2 14h12.5a6.5 6.5 0 0 0 0-13H12a4.5 4.5 0 0 0-4.4 3.4"/><path d="M20 14h2v8h-2z"/></svg>`,
          title: 'Menanam Bibit Pertama',
          quote: '“Dengan semangat, kami semua turun ke lumpur, menanam bibit bakau satu per satu.”',
          gradient: 'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trees"><path d="M10 10v.2A3 3 0 0 1 7 13v5H4v-5A6 6 0 0 1 10 7v3Z"/><path d="M14 14v.2A3 3 0 0 0 17 17v5h3v-5A6 6 0 0 0 14 11v3Z"/></svg>`,
          title: 'Benteng Hijau Tumbuh',
          quote: '“Tahun demi tahun, bibit itu tumbuh menjadi hutan lebat, akar-akarnya kokoh.”',
          gradient: 'from-cyan-200 to-cyan-100 dark:from-cyan-900/70 dark:to-cyan-800/70',
          textColor: 'text-cyan-800 dark:text-cyan-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fish"><path d="M6.5 12c.9 1.2 2.3 2 4.1 2 2.5 0 4.2-1.6 4.9-2.9-2.1 1-4.1 1.5-6.5 1.5-1.5 0-2.9-.3-4.1-.8-1.2-.5-2.4-.9-3.5-1.2C.5 10 0 9.2 0 8.3c.1-.8.6-1.5 1.4-2 .9-.5 2.1-.8 3.5-1 1.2-.2 2.6-.2 4.1 0 2.4.3 4.4.8 6.5 1.5.8.3 1.3 1 1.4 1.8.1.9-.4 1.7-1.2 2.1-1.2.5-2.6.8-4.1.8-2.5 0-4.9-.6-7-1.5"/><path d="m15.5 12-1.5 2-1.5-2"/></svg>`,
          title: 'Berkah dari Hutan',
          quote: '“Hutan bakau tak hanya melindungi, tapi juga menjadi rumah bagi ikan dan kepiting.”',
          gradient: 'from-blue-200 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/70',
          textColor: 'text-blue-800 dark:text-blue-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
          title: 'Desa yang Aman',
          quote: '“Kini kami tidur lebih nyenyak, tahu bahwa benteng hijau kami selalu berjaga.”',
          gradient: 'from-purple-200 to-purple-100 dark:from-purple-900/70 dark:to-purple-800/70',
          textColor: 'text-purple-800 dark:text-purple-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Penjaga Pantai',
      description: 'Seberapa baik Anda memahami fungsi dan manfaat hutan bakau?',
      questions: [
        {
          question: 'Apa masalah utama yang dihadapi desa di Aceh Jaya sebelum menanam bakau?',
          options: ['Kekeringan', 'Abrasi dan erosi pantai', 'Serangan hama', 'Konflik warga'],
          correctAnswer: 'Abrasi dan erosi pantai',
          points: 10,
        },
        {
          question: 'Bagaimana hutan bakau melindungi desa dari ombak dan badai?',
          options: ['Dengan membuat suara yang menakutkan ombak', 'Dengan akar-akarnya yang kokoh menahan tanah dan ombak', 'Dengan daunnya yang menyerap air', 'Dengan memantulkan cahaya matahari'],
          correctAnswer: 'Dengan akar-akarnya yang kokoh menahan tanah dan ombak',
          points: 10,
        },
        {
          question: 'Selain sebagai pelindung pantai, apa manfaat ekologis lain dari hutan bakau?',
          options: ['Menghasilkan buah-buahan', 'Menjadi habitat bagi biota laut seperti ikan dan kepiting', 'Menarik wisatawan asing', 'Membuat pantai lebih panas'],
          correctAnswer: 'Menjadi habitat bagi biota laut seperti ikan dan kepiting',
          points: 10,
        },
        {
          question: 'Inisiatif penanaman bakau dalam cerita ini adalah contoh dari...',
          options: ['Proyek pemerintah', 'Bantuan asing', 'Aksi gotong royong komunitas', 'Bisnis perorangan'],
          correctAnswer: 'Aksi gotong royong komunitas',
          points: 10,
        },
        {
          question: 'Apa istilah lain untuk hutan bakau yang sering digunakan?',
          options: ['Hutan Pinus', 'Hutan Mangrove', 'Hutan Hujan', 'Sabana'],
          correctAnswer: 'Hutan Mangrove',
          points: 10,
        },
      ],
    },
  },
  'dapur-umum-perdamaian': {
    video: {
      title: 'Video Edukasi: Memasak Perdamaian',
      description: 'Saksikan bagaimana makanan dapat menjadi media ampuh untuk rekonsiliasi dan membangun kembali kepercayaan pasca-konflik.',
      embedUrl:
        'https://www.canva.com/design/DAGy2A4uKKg/oKxoc_2wvJT-q7amzHQQWA/watch?embed', // Placeholder
      info: 'Video dokumenter singkat ini meliput kegiatan sehari-hari di Dapur Umum Perdamaian di Bireuen dan wawancara dengan para inisiatornya.',
    },
    comic: {
      title: 'Komik Digital: Resep Rekonsiliasi',
      description: 'Sebuah cerita hangat tentang bagaimana sepiring nasi bisa menyembuhkan luka.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-dashed"><path d="M3 6V5c0-1.1.9-2 2-2h2"/><path d="M11 3h3"/><path d="M19 3h1c1.1 0 2 .9 2 2v1"/><path d="M22 11v3"/><path d="M22 19v1c0 1.1-.9 2-2 2h-1"/><path d="M16 22h-3"/><path d="M8 22H5c-1.1 0-2-.9-2-2v-1"/><path d="M3 16v-3"/></svg>`,
          title: 'Dinding Tak Terlihat',
          quote: '“Setelah konflik usai, ada dinding ketidakpercayaan yang memisahkan kami...”',
          gradient: 'from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600',
          textColor: 'text-gray-800 dark:text-gray-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-crossed"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8-1.8 1.8a3 3 0 0 0 0 4.2l2.3 2.3"/><path d="m2 16 2.3-2.3a3 3 0 0 1 4.2 0l1.8 1.8-1.8 1.8a3 3 0 0 1-4.2 0L2 16"/><path d="M18 6 6 18"/></svg>`,
          title: 'Satu Kebutuhan Bersama',
          quote: '“Lalu kami sadar, apapun masalahnya, semua orang butuh makan.”',
          gradient: 'from-yellow-200 to-yellow-100 dark:from-yellow-900/70 dark:to-yellow-800/70',
          textColor: 'text-yellow-800 dark:text-yellow-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-soup"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M19.5 12 22 6"/><path d="M16 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="m5.2 11.5 2.6-2.6a2 2 0 0 1 2.8 0L12 10.3l1.4-1.4a2 2 0 0 1 2.8 0l2.6 2.6"/></svg>`,
          title: 'Membuka Dapur Umum',
          quote: '“Kami, para ibu, mendirikan dapur sederhana. Siapa saja boleh datang.”',
          gradient: 'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-messages-square"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v8l-4-4h-6a2 2 0 0 1-2-2v-2"/></svg>`,
          title: 'Cerita Sambil Memasak',
          quote: '“Sambil mengaduk gulai, kami mulai berbagi cerita, tawa, dan air mata.”',
          gradient: 'from-blue-200 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/70',
          textColor: 'text-blue-800 dark:text-blue-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="m12 5-3 3 1.5 1.5L12 8l4.5 4.5L18 11l-3-3-3 3"/></svg>`,
          title: 'Dinding yang Runtuh',
          quote: '“Dinding yang memisahkan kami perlahan runtuh, digantikan oleh rasa persaudaraan.”',
          gradient: 'from-purple-200 to-purple-100 dark:from-purple-900/70 dark:to-purple-800/70',
          textColor: 'text-purple-800 dark:text-purple-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-peace"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
          title: 'Damai dari Dapur',
          quote: '“Kami belajar bahwa perdamaian bisa dimulai dari hal paling sederhana: sepiring nasi.”',
          gradient: 'from-amber-300 to-amber-200 dark:from-amber-800 dark:to-amber-700',
          textColor: 'text-amber-800 dark:text-amber-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Dapur Perdamaian',
      description: 'Uji pemahaman Anda tentang peran inisiatif lokal dalam membangun perdamaian.',
      questions: [
        {
          question: 'Apa masalah utama yang ingin diatasi dengan mendirikan dapur umum?',
          options: ['Kelaparan', 'Ketidakpercayaan dan perpecahan pasca-konflik', 'Kurangnya lapangan kerja', 'Masalah kesehatan'],
          correctAnswer: 'Ketidakpercayaan dan perpecahan pasca-konflik',
          points: 10,
        },
        {
          question: 'Mengapa makanan dipilih sebagai media untuk rekonsiliasi?',
          options: ['Karena makanan mudah didapat', 'Karena semua orang butuh makan dan makanan bisa menyatukan', 'Karena ada sisa dana bantuan', 'Karena itu satu-satunya ide yang ada'],
          correctAnswer: 'Karena semua orang butuh makan dan makanan bisa menyatukan',
          points: 10,
        },
        {
          question: 'Di mana keajaiban "rekonsiliasi" terjadi di dapur umum tersebut?',
          options: ['Saat pembagian makanan', 'Saat makan bersama', 'Saat proses memasak dan persiapan', 'Saat menerima donasi'],
          correctAnswer: 'Saat proses memasak dan persiapan',
          points: 10,
        },
        {
          question: 'Apa hasil akhir yang paling penting dari inisiatif Dapur Umum Perdamaian?',
          options: ['Warga menjadi kenyang', 'Mendapat penghargaan dari pemerintah', 'Runtuhnya dinding ketidakpercayaan dan terjalinnya kembali persaudaraan', 'Menjadi tujuan wisata kuliner'],
          correctAnswer: 'Runtuhnya dinding ketidakpercayaan dan terjalinnya kembali persaudaraan',
          points: 10,
        },
        {
          question: 'Kisah ini menunjukkan bahwa perdamaian dapat dimulai dari...',
          options: ['Perjanjian politik yang rumit', 'Intervensi pihak asing', 'Proyek pembangunan besar', 'Inisiatif sederhana dan tulus dari komunitas'],
          correctAnswer: 'Inisiatif sederhana dan tulus dari komunitas',
          points: 10,
        },
      ],
    },
  },
  'lumbung-padi-komunal': {
    video: {
      title: 'Video Edukasi: Kearifan Lumbung Bersama',
      description: 'Jelajahi konsep gotong royong dalam ketahanan pangan melalui tradisi lumbung padi komunal di Gayo.',
      embedUrl:
        'https://www.canva.com/design/DAGy2A4uKKg/oKxoc_2wvJT-q7amzHQQWA/watch?embed', // Placeholder
      info: 'Video ini menjelaskan cara kerja lumbung padi komunal sebagai jaring pengaman sosial yang efektif di tingkat masyarakat.',
    },
    comic: {
      title: 'Komik Digital: Butir-Butir Kebersamaan',
      description: 'Sebuah cerita tentang bagaimana berbagi hasil panen membangun ketahanan seluruh desa.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-moon"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
          title: 'Panen Tak Menentu',
          quote: '“Di tanah Gayo, kadang panen kami melimpah, tapi kadang gagal total karena cuaca.”',
          gradient: 'from-yellow-200 to-yellow-100 dark:from-yellow-900/70 dark:to-yellow-800/70',
          textColor: 'text-yellow-800 dark:text-yellow-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-warehouse"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3 6.5l8-4.2a2 2 0 0 1 2 0l8 4.2a2 2 0 0 1 1 1.85Z"/><path d="M22 22V11l-10-5-10 5v11"/><path d="M12 22V11"/><path d="m12 7 10 5"/><path d="m2 11 10-5"/></svg>`,
          title: 'Membangun Lumbung',
          quote: '“Kami menghidupkan lagi tradisi lumbung bersama, tempat kami menyimpan sebagian panen.”',
          gradient: 'from-amber-400 to-amber-300 dark:from-amber-800 dark:to-amber-700',
          textColor: 'text-amber-900 dark:text-amber-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-archive-restore"><path d="M20 21v-5.27a2 2 0 0 0-1.17-1.81l-4.43-2.46a2 2 0 0 1-1.17-1.81V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5.69a2 2 0 0 1-1.17 1.81l-4.43 2.46A2 2 0 0 0 0 15.73V21"/><path d="M8 21h8"/><path d="M12 11v10"/></svg>`,
          title: 'Saat Paceklik Tiba',
          quote: '“Ketika ada keluarga yang gagal panen, mereka bisa mengambil dari lumbung ini.”',
          gradient: 'from-red-200 to-red-100 dark:from-red-900/70 dark:to-red-800/70',
          textColor: 'text-red-800 dark:text-red-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z"/></svg>`,
          title: 'Tanpa Utang Budi',
          quote: '“Tidak ada catatan utang, semuanya didasari semangat gotong royong dan kepedulian.”',
          gradient: 'from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600',
          textColor: 'text-gray-800 dark:text-gray-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
          title: 'Simbol Persatuan',
          quote: '“Lumbung ini adalah simbol persatuan kami, mengajarkan bahwa berbagi membuat kita kuat.”',
          gradient: 'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gem"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M12 22V9"/><path d="m3.5 8.5 17 0"/></svg>`,
          title: 'Kaya Persaudaraan',
          quote: '“Kami mungkin tidak kaya materi, tapi kami kaya dalam persaudaraan.”',
          gradient: 'from-purple-200 to-purple-100 dark:from-purple-900/70 dark:to-purple-800/70',
          textColor: 'text-purple-800 dark:text-purple-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Lumbung Komunal',
      description: 'Uji pemahaman Anda tentang gotong royong dan ketahanan pangan.',
      questions: [
        {
          question: 'Apa tujuan utama dari didirikannya lumbung padi komunal di Gayo?',
          options: ['Untuk menjual padi secara massal', 'Sebagai jaring pengaman sosial saat musim paceklik', 'Sebagai syarat bantuan pemerintah', 'Untuk membayar pajak desa'],
          correctAnswer: 'Sebagai jaring pengaman sosial saat musim paceklik',
          points: 10,
        },
        {
          question: 'Siapa yang menyumbang ke lumbung padi komunal?',
          options: ['Hanya orang kaya', 'Setiap keluarga yang panennya berlebih', 'Pemerintah daerah', 'Perusahaan swasta'],
          correctAnswer: 'Setiap keluarga yang panennya berlebih',
          points: 10,
        },
        {
          question: 'Apa prinsip dasar yang mendasari sistem lumbung bersama ini?',
          options: ['Prinsip untung-rugi', 'Prinsip utang-piutang dengan bunga', 'Semangat gotong royong dan kepedulian', 'Prinsip kompetisi'],
          correctAnswer: 'Semangat gotong royong dan kepedulian',
          points: 10,
        },
        {
          question: 'Apa yang terjadi jika sebuah keluarga mengalami gagal panen?',
          options: ['Mereka harus berutang ke rentenir', 'Mereka bisa mengambil padi dari lumbung tanpa bunga', 'Mereka harus pindah dari desa', 'Mereka dibiarkan kelaparan'],
          correctAnswer: 'Mereka bisa mengambil padi dari lumbung tanpa bunga',
          points: 10,
        },
        {
          question: 'Kisah lumbung padi komunal ini adalah contoh nyata dari kearifan lokal dalam bidang...',
          options: ['Ketahanan Pangan', 'Seni dan Budaya', 'Militer', 'Teknologi Informasi'],
          correctAnswer: 'Ketahanan Pangan',
          points: 10,
        },
      ],
    },
  },
  'api-di-bukit-barisan': {
    video: {
      title: 'Video Edukasi: Penjaga Hutan Leuser',
      description: 'Melihat lebih dekat perjuangan Masyarakat Peduli Api dalam melindungi ekosistem berharga dari ancaman kebakaran hutan.',
      embedUrl:
        'https://www.canva.com/design/DAGy2A4uKKg/oKxoc_2wvJT-q7amzHQQWA/watch?embed', // Placeholder
      info: 'Video ini menyoroti pentingnya pencegahan dan peran aktif masyarakat dalam mitigasi bencana kebakaran hutan.',
    },
    comic: {
      title: 'Komik Digital: Garis Depan Melawan Api',
      description: 'Kisah para pahlawan tanpa tanda jasa yang melindungi hutan dari si jago merah.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-dim"><circle cx="12" cy="12" r="4"/><path d="M12 4h.01"/><path d="M20 12h.01"/><path d="M12 20h.01"/><path d="M4 12h.01"/><path d="M17.66 6.34l.01-.01"/><path d="M17.66 17.66l.01.01"/><path d="M6.34 17.66l-.01.01"/><path d="M6.34 6.34l-.01-.01"/></svg>`,
          title: 'Ancaman Musim Kemarau',
          quote: '“Setiap musim kemarau, hati kami selalu was-was. Hutan pinus ini sangat mudah terbakar.”',
          gradient: 'from-orange-200 to-orange-100 dark:from-orange-900/70 dark:to-orange-800/70',
          textColor: 'text-orange-800 dark:text-orange-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
          title: 'Masyarakat Peduli Api',
          quote: '“Kami membentuk kelompok sukarela. Ini bukan kerja pemerintah, ini tanggung jawab kami.”',
          gradient: 'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-binoculars"><path d="M12 8V4H8v4"/><path d="M12 8h4v4h-4"/><rect width="8" height="4" x="8" y="4" rx="1"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M20 12h-4v4h4Z"/><path d="M4 12h4v4H4Z"/></svg>`,
          title: 'Patroli Hutan',
          quote: '“Kami berpatroli secara bergantian, membuat sekat bakar, dan mengawasi dari menara.”',
          gradient: 'from-blue-200 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/70',
          textColor: 'text-blue-800 dark:text-blue-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-kindling"><path d="M12 5c-2-1.5-4-1-4 2.5 0 2.5 2 4 4 4s4-1.5 4-4c0-3.5-2-4-4-2.5Z"/><path d="M12 12c-2-1.5-4-1-4 2.5 0 2.5 2 4 4 4s4-1.5 4-4c0-3.5-2-4-4-2.5Z"/><path d="M12 19c-2-1.5-4-1-4 2.5C8 24 10 24 12 24s4-1.5 4-2.5c0-3.5-2-4-4-2.5Z"/></svg>`,
          title: 'Percikan Pertama',
          quote: '“Sedikit saja percikan api dari kelalaian bisa menjadi bencana besar bagi kami semua.”',
          gradient: 'from-red-300 to-red-200 dark:from-red-800 dark:to-red-700',
          textColor: 'text-red-900 dark:text-red-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
          title: 'Memadamkan Api',
          quote: '“Dengan peralatan seadanya, kami berjuang memadamkan api sebelum membesar.”',
          gradient: 'from-gray-400 to-gray-300 dark:from-gray-600 dark:to-gray-500',
          textColor: 'text-gray-800 dark:text-gray-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sprout"><path d="M7 20h10"/><path d="M10 20v-3a2 2 0 1 1 4 0v3"/><path d="M12 11V4"/><path d="M12 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>`,
          title: 'Hutan Adalah Kehidupan',
          quote: '“Hutan ini adalah sumber air, rumah satwa, dan warisan untuk anak cucu kami.”',
          gradient: 'from-teal-200 to-teal-100 dark:from-teal-900/70 dark:to-teal-800/70',
          textColor: 'text-teal-800 dark:text-teal-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Jaga Hutan',
      description: 'Uji pengetahuan Anda tentang pencegahan dan penanggulangan kebakaran hutan.',
      questions: [
        {
          question: 'Apa ancaman utama yang dihadapi hutan pinus di Aceh Tengah setiap musim kemarau?',
          options: ['Banjir', 'Tanah Longsor', 'Kebakaran Hutan', 'Serangan Hama'],
          correctAnswer: 'Kebakaran Hutan',
          points: 10,
        },
        {
          question: 'Apa nama kelompok sukarela yang dibentuk masyarakat untuk melindungi hutan?',
          options: ['Pecinta Alam', 'Polisi Hutan', 'Masyarakat Peduli Api', 'Jaga Hutan Gayo'],
          correctAnswer: 'Masyarakat Peduli Api',
          points: 10,
        },
        {
          question: 'Manakah dari berikut ini yang merupakan kegiatan pencegahan kebakaran yang mereka lakukan?',
          options: ['Menyiram hutan setiap hari', 'Membuat sekat bakar dan melakukan penyuluhan', 'Menebang semua pohon pinus', 'Memasang pendingin di hutan'],
          correctAnswer: 'Membuat sekat bakar dan melakukan penyuluhan',
          points: 10,
        },
        {
          question: 'Menurut cerita, apa penyebab umum kebakaran hutan?',
          options: ['Sambaran petir', 'Panas matahari yang ekstrem', 'Kelalaian manusia seperti membuka lahan dengan membakar', 'Letusan gunung berapi'],
          correctAnswer: 'Kelalaian manusia seperti membuka lahan dengan membakar',
          points: 10,
        },
        {
          question: 'Mengapa menjaga hutan sangat penting bagi masyarakat sekitar?',
          options: ['Karena hutan adalah tempat yang angker', 'Hanya karena itu adalah perintah pemerintah', 'Karena hutan adalah sumber air dan warisan untuk generasi mendatang', 'Agar bisa dijual kayunya'],
          correctAnswer: 'Karena hutan adalah sumber air dan warisan untuk generasi mendatang',
          points: 10,
        },
      ],
    },
  },
};

    