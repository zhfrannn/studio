
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
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan menggunakan studi kasus Bah Tangse untuk menjelaskan hubungan antara penggundulan hutan di hulu dan meningkatnya risiko banjir bandang di hilir.',
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
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan menampilkan wawancara dengan petani kopi Gayo yang menceritakan perjalanan mereka dari masa konflik hingga membangun kembali kehidupan melalui kebun kopi.',
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
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan menunjukkan bagaimana komunitas di Aceh Jaya berhasil memulihkan garis pantai mereka melalui penanaman kembali hutan bakau.',
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
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video dokumenter singkat ini akan meliput kegiatan sehari-hari di Dapur Umum Perdamaian di Bireuen dan wawancara dengan para inisiatornya.',
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
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan menjelaskan cara kerja lumbung padi komunal sebagai jaring pengaman sosial yang efektif di tingkat masyarakat.',
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
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan menyoroti pentingnya pencegahan dan peran aktif masyarakat dalam mitigasi bencana kebakaran hutan.',
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
  'pemuda-penjaga-adat': {
    video: {
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan mendokumentasikan kegiatan sanggar Seudati dan dampaknya terhadap kaum muda di Pidie.',
    },
    comic: {
      title: 'Komik Digital: Langkah Penuh Makna',
      description: 'Kisah tentang energi pemuda yang disalurkan melalui gerak tari yang mempersatukan.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-swords"><path d="M14.5 17.5 3 6"/><path d="m21 3-5 5"/><path d="M19.5 12.5 9 2"/><path d="m9 13 6 6"/><path d="m3 21 6-6"/></svg>`,
          title: 'Energi yang Salah Arah',
          quote: '“Pasca-konflik, banyak anak muda kehilangan arah, energi mereka sering tersalurkan ke hal negatif.”',
          gradient: 'from-red-300 to-red-200 dark:from-red-800 dark:to-red-700',
          textColor: 'text-red-900 dark:text-red-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
          title: 'Inisiatif Pemuda',
          quote: '“Kami, para pemuda yang lebih tua, merasa harus berbuat sesuatu. Kami hidupkan kembali sanggar Seudati.”',
          gradient: 'from-blue-200 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/70',
          textColor: 'text-blue-800 dark:text-blue-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-music-4"><path d="M9 18V5l12-2v13"/><path d="M9 9c0-1.1.9-2 2-2s2 .9 2 2v10"/><path d="M12 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>`,
          title: 'Tarian Penuh Nasihat',
          quote: '“Seudati bukan sekadar gerakan. Ia mengajarkan disiplin, kerja sama, dan syairnya berisi nasihat.”',
          gradient: 'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-puzzle"><path d="M19.43 7.53A4.5 4.5 0 0 0 15 6a4.5 4.5 0 0 0-4.43 1.53L10.5 8h.01l.01.01.01.01.01.01h.01l.01.01.01.01h.01l.01.01.01.01h.01l.01.01.01.01h.01l.01.01h.01l.01.01h.01l.01.01h.01l.01.01h.01l.01.01h.01l.01.01h.01l.01.01L12 9.5l.47.47.01.01h.01l.01.01h.01l.01.01h.01l.01.01h.01l.01.01h.01l.01.01h.01l.01.01h.01l.01.01h.01l.01.01h.01l.01.01h.01l.01.01h.01A4.5 4.5 0 0 0 15 18a4.5 4.5 0 0 0 4.43-1.53l.07-.07A4.5 4.5 0 0 0 21 12a4.5 4.5 0 0 0-1.53-3.43l-.07-.07A4.5 4.5 0 0 0 18 6a4.5 4.5 0 0 0-3.43 1.53l-.07.07A4.5 4.5 0 0 0 12 9a4.5 4.5 0 0 0-1.53 3.43l.07.07a4.5 4.5 0 0 0 1.46.93h.01Z"/><path d="M6 15a4.5 4.5 0 0 0 1.53 3.43l.07.07A4.5 4.5 0 0 0 9 21a4.5 4.5 0 0 0 3.43-1.53l.07-.07A4.5 4.5 0 0 0 15 18a4.5 4.5 0 0 0-1.53-3.43l-.07-.07A4.5 4.5 0 0 0 9 12a4.5 4.5 0 0 0-3.43 1.53l-.07.07A4.5 4.5 0 0 0 3 18a4.5 4.5 0 0 0 1.53 3.43l.07.07A4.5 4.5 0 0 0 6 21a4.5 4.5 0 0 0 3.43-1.53l.07-.07A4.5 4.5 0 0 0 12 18a4.5 4.5 0 0 0-1.53-3.43l-.07-.07A4.5 4.5 0 0 0 6 12a4.5 4.5 0 0 0-3.43 1.53L2.5 13.53A4.5 4.5 0 0 1 6 9a4.5 4.5 0 0 1 3.43 1.53l.07.07A4.5 4.5 0 0 1 12 12a4.5 4.5 0 0 1 1.53-3.43l-.07-.07A4.5 4.5 0 0 1 9 6a4.5 4.5 0 0 1-3.43-1.53l-.07.07A4.5 4.5 0 0 1 3 6a4.5 4.5 0 0 1 1.53-3.43l.07.07A4.5 4.5 0 0 1 6 3a4.5 4.5 0 0 1 3.43 1.53l.07.07A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 1.53-3.43L12.5 1.5A4.5 4.5 0 0 0 9 3a4.5 4.5 0 0 0-3.43 1.53L5.5 4.57A4.5 4.5 0 0 0 3 9a4.5 4.5 0 0 0 1.53 3.43l.07.07A4.5 4.5 0 0 0 6 15Z"/></svg>`,
          title: 'Ruang Aman',
          quote: '“Sanggar menjadi ruang aman bagi pemuda untuk berekspresi secara positif dan kreatif.”',
          gradient: 'from-purple-200 to-purple-100 dark:from-purple-900/70 dark:to-purple-800/70',
          textColor: 'text-purple-800 dark:text-purple-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bridge"><path d="M8 12h8"/><path d="M8 16h8"/><path d="M14 12v-2a2 2 0 1 0-4 0v2"/><path d="M4 10h.01"/><path d="M4 14h.01"/><path d="M20 10h-.01"/><path d="M20 14h-.01"/><path d="M2 10a8 8 0 0 1 11-8h2a8 8 0 0 1 11 8"/><path d="M2 16a8 8 0 0 0 11 8h2a8 8 0 0 0 11-8"/></svg>`,
          title: 'Membangun Jembatan',
          quote: '“Melalui pementasan tari, kami membangun jembatan silaturahmi antar desa yang dulu renggang.”',
          gradient: 'from-teal-200 to-teal-100 dark:from-teal-900/70 dark:to-teal-800/70',
          textColor: 'text-teal-800 dark:text-teal-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flag"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>`,
          title: 'Identitas dan Kebanggaan',
          quote: '“Mereka kini bangga menjadi penjaga budaya, bukan lagi pembuat onar.”',
          gradient: 'from-amber-300 to-amber-200 dark:from-amber-800 dark:to-amber-700',
          textColor: 'text-amber-800 dark:text-amber-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Penjaga Adat',
      description: 'Uji pemahamanmu tentang peran budaya dalam pembangunan perdamaian.',
      questions: [
        {
          question: 'Apa masalah utama yang dihadapi pemuda pasca-konflik dalam cerita ini?',
          options: ['Kemiskinan', 'Penyakit', 'Kehilangan arah dan energi yang tersalurkan negatif', 'Kurangnya pendidikan formal'],
          correctAnswer: 'Kehilangan arah dan energi yang tersalurkan negatif',
          points: 10,
        },
        {
          question: 'Apa nama tarian tradisional yang dihidupkan kembali oleh para pemuda?',
          options: ['Tari Saman', 'Tari Seudati', 'Tari Piring', 'Tari Kecak'],
          correctAnswer: 'Tari Seudati',
          points: 10,
        },
        {
          question: 'Selain gerakan, apa saja yang diajarkan dalam tari Seudati?',
          options: ['Hanya gerakan yang indah', 'Ilmu bela diri', 'Disiplin, kerja sama tim, dan nasihat melalui syair', 'Cara berbisnis'],
          correctAnswer: 'Disiplin, kerja sama tim, dan nasihat melalui syair',
          points: 10,
        },
        {
          question: 'Apa fungsi sanggar tari bagi para pemuda?',
          options: ['Tempat mencari jodoh', 'Tempat menghasilkan uang', 'Ruang aman untuk berekspresi secara positif', 'Tempat bersantai saja'],
          correctAnswer: 'Ruang aman untuk berekspresi secara positif',
          points: 10,
        },
        {
          question: 'Inisiatif ini menunjukkan bahwa seni dan budaya dapat menjadi alat yang efektif untuk...',
          options: ['Menghasilkan seniman terkenal', 'Pembangunan perdamaian dan penguatan komunitas', 'Menarik wisatawan', 'Melupakan masa lalu'],
          correctAnswer: 'Pembangunan perdamaian dan penguatan komunitas',
          points: 10,
        },
      ],
    },
  },
  'perempuan-penganyam-harapan': {
    video: {
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Film dokumenter pendek ini akan mengikuti perjalanan kelompok penganyam dari duka menjadi berdaya.',
    },
    comic: {
      title: 'Komik Digital: Anyaman Asa',
      description: 'Kisah tentang bagaimana helai-helai daun pandan ditenun menjadi harapan dan kekuatan.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ship-wheel"><circle cx="12" cy="12" r="8"/><path d="M12 2v7.5"/><path d="m19.4 4.6-5.1 5.1"/><path d="M22 12h-7.5"/><path d="m19.4 19.4-5.1-5.1"/><path d="M12 22v-7.5"/><path d="m4.6 19.4 5.1-5.1"/><path d="M2 12h7.5"/><path d="m4.6 4.6 5.1 5.1"/><circle cx="12" cy="12" r="2"/></svg>`,
          title: 'Duka Setelah Badai',
          quote: '“Tsunami merenggut semua yang kami cintai, meninggalkan kami dalam duka dan ketidakpastian.”',
          gradient: 'from-gray-400 to-gray-300 dark:from-gray-600 dark:to-gray-500',
          textColor: 'text-gray-800 dark:text-gray-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10zM2 13a10 10 0 0 1 10-10 10 10 0 0 1 10 10h-2a8 8 0 0 0-8-8 8 8 0 0 0-8 8z"/></svg>`,
          title: 'Memulai dengan Apa Adanya',
          quote: '“Kami berkumpul, memanfaatkan daun pandan yang tumbuh liar di sekitar kami.”',
          gradient: 'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-heart"><path d="M7.9 20A9 9 0 0 0 18 12.1C18 8.7 15.3 6 12 6s-6 2.7-6 6.1c0 1.4.5 2.8 1.4 3.9L2 22Z"/><path d="M14.5 9.5a.5.5 0 0 0-1 0 2.78 2.78 0 0 1-5 0.5 2.78 2.78 0 0 1 5-1 .5.5 0 0 0 1-1.5.5.5 0 0 0-1 0c-1.5 0-2.8 1.4-2.8 3s1.3 3 2.8 3 2.8-1.4 2.8-3a.5.5 0 0 0-1 0Z"/></svg>`,
          title: 'Terapi dalam Anyaman',
          quote: '“Sambil menganyam, kami saling bercerita, saling menguatkan. Anyaman ini menjadi terapi kami.”',
          gradient: 'from-blue-200 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/70',
          textColor: 'text-blue-800 dark:text-blue-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket"><path d="m5 11 4-7"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M12 11v6"/><path d="M12 11c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/></svg>`,
          title: 'Hasil Karya Menjadi Berkah',
          quote: '“Produk kami mulai dikenal, pesanan datang, dan kami mendapat penghasilan sendiri.”',
          gradient: 'from-yellow-200 to-yellow-100 dark:from-yellow-900/70 dark:to-yellow-800/70',
          textColor: 'text-yellow-800 dark:text-yellow-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="m12 3-1.9 4.8-4.8 1.9 4.8 1.9L12 21l1.9-4.8 4.8-1.9-4.8-1.9L12 3z"/><path d="M5 9v4"/><path d="M19 9v4"/><path d="M9 5h4"/><path d="M9 19h4"/></svg>`,
          title: 'Dari Korban Menjadi Berdaya',
          quote: '“Kami bukan lagi hanya korban, kami adalah penyintas yang berdaya dan mandiri.”',
          gradient: 'from-purple-200 to-purple-100 dark:from-purple-900/70 dark:to-purple-800/70',
          textColor: 'text-purple-800 dark:text-purple-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="m12 5-3 3 1.5 1.5L12 8l4.5 4.5L18 11l-3-3-3 3"/></svg>`,
          title: 'Keluarga Baru',
          quote: '“Kelompok ini menjadi keluarga baru kami, tempat kami menenun kembali asa untuk masa depan.”',
          gradient: 'from-pink-200 to-pink-100 dark:from-pink-900/70 dark:to-pink-800/70',
          textColor: 'text-pink-800 dark:text-pink-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Anyaman Harapan',
      description: 'Uji pemahamanmu tentang pemberdayaan perempuan dan pemulihan pasca-bencana.',
      questions: [
        {
          question: 'Apa dampak utama tsunami bagi para perempuan dalam cerita ini?',
          options: ['Kehilangan pekerjaan', 'Kehilangan suami dan rumah', 'Kehilangan lahan pertanian', 'Kehilangan akses pendidikan'],
          correctAnswer: 'Kehilangan suami dan rumah',
          points: 10,
        },
        {
          question: 'Apa sumber daya alam lokal yang mereka manfaatkan untuk memulai usaha?',
          options: ['Kayu', 'Bambu', 'Daun pandan', 'Tanah liat'],
          correctAnswer: 'Daun pandan',
          points: 10,
        },
        {
          question: 'Selain sebagai sumber ekonomi, apa fungsi lain dari kegiatan menganyam bagi mereka?',
          options: ['Hanya untuk mengisi waktu luang', 'Sebagai terapi dan media untuk saling menguatkan', 'Untuk kompetisi antar desa', 'Untuk memenuhi tugas pemerintah'],
          correctAnswer: 'Sebagai terapi dan media untuk saling menguatkan',
          points: 10,
        },
        {
          question: 'Apa transformasi utama yang dialami oleh para perempuan ini?',
          options: ['Dari petani menjadi pengrajin', 'Dari ibu rumah tangga menjadi politisi', 'Dari korban menjadi penyintas yang berdaya', 'Dari pedagang menjadi guru'],
          correctAnswer: 'Dari korban menjadi penyintas yang berdaya',
          points: 10,
        },
        {
          question: 'Kisah ini adalah contoh nyata dari...',
          options: ['Pemberdayaan ekonomi perempuan sebagai alat pemulihan', 'Pentingnya bantuan asing', 'Kegagalan program pemerintah', 'Persaingan bisnis yang ketat'],
          correctAnswer: 'Pemberdayaan ekonomi perempuan sebagai alat pemulihan',
          points: 10,
        },
      ],
    },
  },
  'arsitektur-rumah-panggung': {
    video: {
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan membandingkan desain Rumoh Aceh dengan bangunan modern dan menyoroti prinsip-prinsip rekayasa jenius di dalamnya.',
    },
    comic: {
      title: 'Komik Digital: Tiang yang Kokoh',
      description: 'Sebuah cerita tentang bagaimana melihat ke masa lalu dapat menyelamatkan masa depan.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
          title: 'Reruntuhan dan Keajaiban',
          quote: '“Di antara reruntuhan bangunan modern, kami melihat banyak Rumoh Aceh yang masih berdiri kokoh.”',
          gradient: 'from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600',
          textColor: 'text-gray-800 dark:text-gray-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ruler"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L3 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0L15.3 9l.7.7a2.4 2.4 0 0 1 3.4 0l1.9 1.9Z"/><path d="m15.8 8.8-1.1-1.1"/><path d="m19.2 12.2-1.1-1.1"/><path d="m12.4 12.4-1.1-1.1"/><path d="m15.8 15.8-1.1-1.1"/><path d="m8.6 8.6-1.1-1.1"/></svg>`,
          title: 'Mempelajari Desain Leluhur',
          quote: '“Kami mulai mempelajari rahasianya: konstruksi kayu fleksibel dan konsep rumah panggung.”',
          gradient: 'from-yellow-200 to-yellow-100 dark:from-yellow-900/70 dark:to-yellow-800/70',
          textColor: 'text-yellow-800 dark:text-yellow-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a2 2 0 0 0 2 2h2.5"/><path d="M12 2a10 10 0 0 0-9.17 12.5A10 10 0 0 0 12 22a10 10 0 0 0 9.17-7.5A10 10 0 0 0 12 2Z"/></svg>`,
          title: 'Tahan Guncangan',
          quote: '“Struktur yang tidak kaku membuatnya mampu ‘menari’ mengikuti guncangan gempa, bukan melawannya.”',
          gradient: 'from-red-200 to-red-100 dark:from-red-900/70 dark:to-red-800/70',
          textColor: 'text-red-800 dark:text-red-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
          title: 'Adaptif Terhadap Lingkungan',
          quote: '“Kolong di bawah rumah memberi jalan bagi air dan menciptakan sirkulasi udara yang sejuk.”',
          gradient: 'from-blue-200 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/70',
          textColor: 'text-blue-800 dark:text-blue-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-construction"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M17 3v3"/><path d="M7 3v3"/><path d="M12 14v7"/></svg>`,
          title: 'Membangun Kembali',
          quote: '“Kini, kami membangun rumah baru dengan mengadaptasi kearifan Rumoh Aceh.”',
          gradient: 'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-school"><path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="M18 10a2 2 0 1 0-4 0"/><path d="m22 10-2-3-2 3"/><path d="M6 10a2 2 0 1 1-4 0"/><path d="m2 10 2-3 2 3"/><path d="M10 2.3c.2-.1.4-.2.6-.3.2-.1.4-.1.6-.1s.4.1.6.1c.2.1.4.2.6.3"/><path d="M8 18h8"/><path d="M12 18.5a4 4 0 0 0 4-4v-2.5a4 4 0 0 0-4-4 4 4 0 0 0-4 4v2.5a4 4 0 0 0 4 4Z"/></svg>`,
          title: 'Pelajaran untuk Masa Depan',
          quote: '“Ini bukan kembali ke masa lalu, tapi mengambil yang terbaik dari masa lalu untuk masa depan.”',
          gradient: 'from-purple-200 to-purple-100 dark:from-purple-900/70 dark:to-purple-800/70',
          textColor: 'text-purple-800 dark:text-purple-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Arsitektur Bijak',
      description: 'Uji pemahamanmu tentang kearifan di balik arsitektur Rumoh Aceh.',
      questions: [
        {
          question: 'Apa keunggulan utama Rumoh Aceh yang membuatnya tahan gempa?',
          options: ['Dinding beton yang tebal', 'Konstruksi kayu yang fleksibel', 'Pondasi yang sangat dalam', 'Atap dari baja ringan'],
          correctAnswer: 'Konstruksi kayu yang fleksibel',
          points: 10,
        },
        {
          question: 'Apa fungsi dari "kolong" atau ruang di bawah rumah panggung?',
          options: ['Hanya untuk hiasan', 'Sebagai garasi mobil', 'Memberi jalan bagi air dan sirkulasi udara', 'Untuk menyimpan barang bekas'],
          correctAnswer: 'Memberi jalan bagi air dan sirkulasi udara',
          points: 10,
        },
        {
          question: 'Mengapa banyak bangunan modern hancur saat tsunami, sementara Rumoh Aceh banyak yang bertahan?',
          options: ['Karena Rumoh Aceh lebih baru', 'Karena bangunannya lebih berat', 'Karena desainnya kaku dan tidak fleksibel', 'Karena struktur Rumoh Aceh lebih adaptif terhadap guncangan'],
          correctAnswer: 'Karena struktur Rumoh Aceh lebih adaptif terhadap guncangan',
          points: 10,
        },
        {
          question: 'Apa pelajaran utama yang bisa diambil dari kearifan arsitektur Rumoh Aceh?',
          options: ['Kita harus membangun rumah dari kayu saja', 'Teknologi modern tidak berguna', 'Desain tradisional seringkali memiliki solusi yang adaptif terhadap lingkungan', 'Rumah panggung tidak aman'],
          correctAnswer: 'Desain tradisional seringkali memiliki solusi yang adaptif terhadap lingkungan',
          points: 10,
        },
        {
          question: 'Mengadaptasi prinsip Rumoh Aceh untuk bangunan modern berarti...',
          options: ['Meniru bentuknya 100%', 'Membangun rumah persis seperti zaman dulu', 'Mengambil prinsip desainnya (fleksibilitas, adaptasi) untuk bangunan modern', 'Mewarnai rumah modern dengan cat coklat'],
          correctAnswer: 'Mengambil prinsip desainnya (fleksibilitas, adaptasi) untuk bangunan modern',
          points: 10,
        },
      ],
    },
  },
  'seni-melawan-trauma': {
    video: {
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan menampilkan karya-karya seniman mural di Banda Aceh dan wawancara tentang kekuatan seni sebagai media terapi.',
    },
    comic: {
      title: 'Komik Digital: Kanvas Harapan',
      description: 'Kisah tentang bagaimana cat dan kuas bisa lebih kuat dari duka.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gallery-horizontal-end"><path d="M2 7v10"/><path d="M6 5v14"/><path d="M12 3v18"/><path d="M18 5v14"/><rect width="4" height="18" x="20" y="3" rx="1"/></svg>`,
          title: 'Dinding-dinding Bisu',
          quote: '“Setelah tsunami, kota ini penuh dengan dinding-dinding bisu yang menjadi saksi tragedi.”',
          gradient: 'from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600',
          textColor: 'text-gray-800 dark:text-gray-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paintbrush-2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/><path d="M14 19.5V22h2.5"/><path d="M10 16s.8-1.7 3.5-4.3c2.4-2.3 4.1-3.5 4.1-3.5"/></svg>`,
          title: 'Panggilan Para Seniman',
          quote: '“Sebagai seniman, kami merasa terpanggil. Kami ambil kuas dan cat untuk memberi warna baru.”',
          gradient: 'from-blue-200 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/70',
          textColor: 'text-blue-800 dark:text-blue-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>`,
          title: 'Melukis Harapan',
          quote: '“Kami melukis tentang ketahanan, kebersamaan, dan keindahan Aceh yang tak pernah padam.”',
          gradient: 'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-party-popper"><path d="M5.3 18.7 1.8 22.2"/><path d="M9.4 14.6 2.3 21.7"/><path d="M12.5 11.5 6.2 17.8"/><path d="M15.6 8.4 9.3 14.7"/><path d="M18.7 5.3 13.2 10.8"/><path d="M14.6 9.4 21.7 2.3"/><path d="M18.4 1.6 13.1 6.9"/><path d="m22 2-1.5 1.5"/><path d="M17 3c.3.3.3.8 0 1.1l-2.1 2.1c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1L15.9 3c.3-.3.8-.3 1.1 0z"/><path d="M11 9c.3.3.3.8 0 1.1l-2.1 2.1c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1L8.9 9c.3-.3.8-.3 1.1 0z"/></svg>`,
          title: 'Terapi Bersama',
          quote: '“Proses melukis bersama menjadi terapi. Anak-anak ikut bergabung, tertawa, dan berkarya.”',
          gradient: 'from-yellow-200 to-yellow-100 dark:from-yellow-900/70 dark:to-yellow-800/70',
          textColor: 'text-yellow-800 dark:text-yellow-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
          title: 'Galeri Terbuka',
          quote: '“Dinding yang suram kini menjadi galeri terbuka yang menceritakan kisah kebangkitan kami.”',
          gradient: 'from-purple-200 to-purple-100 dark:from-purple-900/70 dark:to-purple-800/70',
          textColor: 'text-purple-800 dark:text-purple-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-tool"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-1.5"/><path d="m12 19-5-5 2-2.5 2.5 2.5 5 5z"/><path d="m3 21 2.5-2.5"/><path d="m12.5 11.5-2-2"/></svg>`,
          title: 'Menyembuhkan Luka',
          quote: '“Seni menjadi cara kami menyembuhkan luka kota, dan juga luka di dalam jiwa kami.”',
          gradient: 'from-pink-200 to-pink-100 dark:from-pink-900/70 dark:to-pink-800/70',
          textColor: 'text-pink-800 dark:text-pink-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Kanvas Harapan',
      description: 'Uji pemahamanmu tentang kekuatan seni dalam proses pemulihan sosial.',
      questions: [
        {
          question: 'Apa media utama yang digunakan para seniman dalam cerita ini?',
          options: ['Kanvas dan cat minyak', 'Patung dari tanah liat', 'Mural di dinding-dinding publik', 'Fotografi digital'],
          correctAnswer: 'Mural di dinding-dinding publik',
          points: 10,
        },
        {
          question: 'Apa tujuan utama dari kegiatan seni yang mereka lakukan?',
          options: ['Menjual lukisan dengan harga mahal', 'Menghias kota agar terlihat cantik', 'Memberi warna baru pada ingatan tragedi dan menyembuhkan trauma', 'Memprotes pemerintah'],
          correctAnswer: 'Memberi warna baru pada ingatan tragedi dan menyembuhkan trauma',
          points: 10,
        },
        {
          question: 'Apa tema yang sering diangkat dalam mural-mural mereka?',
          options: ['Kemarahan dan kesedihan', 'Pemandangan abstrak', 'Harapan, ketahanan, dan kebersamaan', 'Potret para seniman'],
          correctAnswer: 'Harapan, ketahanan, dan kebersamaan',
          points: 10,
        },
        {
          question: 'Selain sebagai karya seni, apa fungsi lain dari proses melukis bersama?',
          options: ['Sebagai ajang kompetisi', 'Sebagai kegiatan komersial', 'Sebagai proses terapi bagi seniman dan masyarakat', 'Sebagai cara mencari popularitas'],
          correctAnswer: 'Sebagai proses terapi bagi seniman dan masyarakat',
          points: 10,
        },
        {
          question: 'Transformasi apa yang terjadi pada "dinding-dinding bisu" di kota?',
          options: ['Dinding itu dirobohkan', 'Dinding itu dicat putih semua', 'Dinding itu menjadi galeri seni terbuka', 'Dinding itu ditutupi papan iklan'],
          correctAnswer: 'Dinding itu menjadi galeri seni terbuka',
          points: 10,
        },
      ],
    },
  },
  'nelayan-dan-tanda-alam': {
    video: {
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan mendokumentasikan pengetahuan para nelayan tentang rasi bintang, angin, dan perilaku biota laut sebagai pemandu mereka.',
    },
    comic: {
      title: 'Komik Digital: Peta Warisan',
      description: 'Kisah tentang ilmu navigasi yang tidak tertulis di kertas, tetapi terukir di langit dan ingatan.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-navigation"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`,
          title: 'Kompas Alami',
          quote: '“Kami tidak punya GPS. Kompas kami adalah langit, bintang, dan laut itu sendiri.”',
          gradient: 'from-gray-400 to-gray-300 dark:from-gray-800 dark:to-gray-700',
          textColor: 'text-gray-800 dark:text-gray-100',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="m12 3-1.9 4.8-4.8 1.9 4.8 1.9L12 21l1.9-4.8 4.8-1.9-4.8-1.9L12 3z"/><path d="M5 9v4"/><path d="M19 9v4"/><path d="M9 5h4"/><path d="M9 19h4"/></svg>`,
          title: 'Membaca Bintang',
          quote: '“Ayah mengajari saya membaca rasi Orion, atau ‘Bintang Tiga’, untuk tahu arah pulang.”',
          gradient: 'from-indigo-300 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800',
          textColor: 'text-indigo-800 dark:text-indigo-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bird"><path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20Z"/><path d="m22 22-5-5"/><path d="M13 8A6 6 0 0 0 7 2"/></svg>`,
          title: 'Tanda dari Burung',
          quote: '“Jenis burung yang terbang di atas laut memberitahu kami di mana ikan-ikan berkumpul.”',
          gradient: 'from-cyan-200 to-cyan-100 dark:from-cyan-800 dark:to-cyan-700',
          textColor: 'text-cyan-800 dark:text-cyan-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`,
          title: 'Peringatan dari Laut',
          quote: '“Jika lumba-lumba mendekat ke pantai, itu pertanda cuaca akan memburuk. Saatnya kami pulang.”',
          gradient: 'from-red-300 to-red-200 dark:from-red-800 dark:to-red-700',
          textColor: 'text-red-800 dark:text-red-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><path d="M6 8h2"/><path d="M6 12h2"/><path d="M16 8h2"/><path d="M16 12h2"/></svg>`,
          title: 'Ilmu Warisan',
          quote: '“Pengetahuan ini tidak ada di buku, ini diwariskan dari ayah ke anak, dari mulut ke mulut.”',
          gradient: 'from-amber-200 to-amber-100 dark:from-amber-800 dark:to-amber-700',
          textColor: 'text-amber-800 dark:text-amber-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-anchor"><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><circle cx="12" cy="5" r="3"/></svg>`,
          title: 'Bersahabat dengan Lautan',
          quote: '“Ilmu ini membuat kami bisa bersahabat dengan lautan, bukan melawannya.”',
          gradient: 'from-blue-300 to-blue-200 dark:from-blue-800 dark:to-blue-700',
          textColor: 'text-blue-800 dark:text-blue-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Navigasi Tradisional',
      description: 'Uji pengetahuanmu tentang cara nelayan tradisional membaca tanda-tanda alam.',
      questions: [
        {
          question: 'Apa yang digunakan nelayan sebagai "kompas" alami mereka?',
          options: ['Jam tangan', 'Peta kertas', 'Langit, bintang, dan laut', 'Aplikasi smartphone'],
          correctAnswer: 'Langit, bintang, dan laut',
          points: 10,
        },
        {
          question: 'Rasi bintang apa yang disebut "Bintang Tiga" dan digunakan untuk penunjuk arah?',
          options: ['Scorpio', 'Orion', 'Big Dipper', 'Crux'],
          correctAnswer: 'Orion',
          points: 10,
        },
        {
          question: 'Hewan laut apa yang menjadi pertanda cuaca buruk jika mendekati pantai?',
          options: ['Penyu', 'Ikan pari', 'Lumba-lumba', 'Hiu'],
          correctAnswer: 'Lumba-lumba',
          points: 10,
        },
        {
          question: 'Bagaimana pengetahuan navigasi tradisional ini diwariskan?',
          options: ['Melalui sekolah formal', 'Melalui buku panduan', 'Secara turun-temurun dari ayah ke anak', 'Melalui internet'],
          correctAnswer: 'Secara turun-temurun dari ayah ke anak',
          points: 10,
        },
        {
          question: 'Kearifan lokal para nelayan ini menunjukkan...',
          options: ['Keterbelakangan teknologi', 'Hubungan yang harmonis dan pemahaman mendalam tentang alam', 'Keberanian yang nekat', 'Kurangnya pilihan lain'],
          correctAnswer: 'Hubungan yang harmonis dan pemahaman mendalam tentang alam',
          points: 10,
        },
      ],
    },
  },
  'sumur-tua-sumber-kehidupan': {
    video: {
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan mengeksplorasi pentingnya menjaga sumber-sumber air tradisional dan kearifan leluhur dalam menentukan lokasinya.',
    },
    comic: {
      title: 'Komik Digital: Air Mata Air',
      description: 'Sebuah cerita tentang harapan yang ditemukan kembali di dasar sumur tua.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
          title: 'Kemarau Panjang',
          quote: '“Musim kemarau begitu panjang. Sungai dan sumur modern kami semua mengering.”',
          gradient: 'from-orange-300 to-orange-200 dark:from-orange-800 dark:to-orange-700',
          textColor: 'text-orange-900 dark:text-orange-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-person-standing"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg>`,
          title: 'Ingatan Tetua Desa',
          quote: '“Seorang tetua teringat tentang sumur tua di pinggir hutan yang sudah lama terlupakan.”',
          gradient: 'from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600',
          textColor: 'text-gray-800 dark:text-gray-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
          title: 'Mencari Harapan',
          quote: '“Dengan ragu, kami membersihkan sumur itu, berharap menemukan sisa-sisa air.”',
          gradient: 'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.7-3.12l-1.1-1.1c-.4-.4-.6-.9-.6-1.4V4.5c0-1.1.9-2 2-2s2 .9 2 2v.1c0 .5-.2 1-.6 1.4l-1.1 1.1c-1.13.86-1.7 1.96-1.7 3.12C19 14.47 17.2 16.3 15 16.3"/><path d="m5 18 1.8-1.8"/><path d="m2.1 12.9 1.8 1.8"/><path d="M19 18l-1.8-1.8"/><path d="m21.9 12.9-1.8 1.8"/></svg>`,
          title: 'Keajaiban Muncul',
          quote: '“Ajaib! Di dasarnya masih ada air jernih yang seakan tak pernah habis!”',
          gradient: 'from-blue-300 to-blue-200 dark:from-blue-800 dark:to-blue-700',
          textColor: 'text-blue-900 dark:text-blue-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit"><path d="M12 2a4 4 0 0 0-4 4v4a4 4 0 1 0 8 0V6a4 4 0 0 0-4-4Z"/><path d="M16 10a4 4 0 1 1-8 0"/><path d="M12 10v4"/><path d="M12 14v4"/><path d="M12 22v-2"/><path d="m15 13-1-1"/><path d="m9 13 1-1"/><path d="m15 19-1-1"/><path d="m9 19 1-1"/><path d="M17 16h2.5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H17"/><path d="M7 16H4.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H7"/></svg>`,
          title: 'Kearifan Leluhur',
          quote: '“Leluhur kami membangunnya tepat di atas mata air. Mereka tahu di mana harus mencari.”',
          gradient: 'from-amber-300 to-amber-200 dark:from-amber-800 dark:to-amber-700',
          textColor: 'text-amber-800 dark:text-amber-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-plus"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>`,
          title: 'Menjaga Warisan',
          quote: '“Sumur ini menyelamatkan kami. Kami belajar untuk menjaga warisan masa lalu.”',
          gradient: 'from-purple-300 to-purple-200 dark:from-purple-800 dark:to-purple-700',
          textColor: 'text-purple-800 dark:text-purple-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Sumber Kehidupan',
      description: 'Uji pemahamanmu tentang manajemen sumber daya air tradisional.',
      questions: [
        {
          question: 'Apa masalah yang dihadapi oleh desa dalam cerita?',
          options: ['Banjir bandang', 'Serangan hama', 'Kekeringan panjang', 'Konflik antarwarga'],
          correctAnswer: 'Kekeringan panjang',
          points: 10,
        },
        {
          question: 'Sumber air apa yang pada akhirnya menyelamatkan desa?',
          options: ['Bantuan air dari pemerintah', 'Sumur bor modern', 'Sebuah sumur tua warisan leluhur', 'Danau buatan'],
          correctAnswer: 'Sebuah sumur tua warisan leluhur',
          points: 10,
        },
        {
          question: 'Mengapa sumur tua tersebut tidak pernah kering?',
          options: ['Karena sangat dalam', 'Karena dibangun di atas mata air besar', 'Karena jarang digunakan', 'Karena terbuat dari batu ajaib'],
          correctAnswer: 'Karena dibangun di atas mata air besar',
          points: 10,
        },
        {
          question: 'Siapa yang pertama kali mengingat keberadaan sumur tua tersebut?',
          options: ['Kepala desa', 'Seorang anak kecil', 'Seorang insinyur', 'Seorang tetua desa'],
          correctAnswer: 'Seorang tetua desa',
          points: 10,
        },
        {
          question: 'Pelajaran apa yang dapat diambil dari cerita ini?',
          options: ['Teknologi modern selalu lebih unggul', 'Kita tidak boleh menggunakan sumur tua', 'Kearifan dan peninggalan masa lalu seringkali menyimpan solusi penting', 'Kekeringan tidak bisa diatasi'],
          correctAnswer: 'Kearifan dan peninggalan masa lalu seringkali menyimpan solusi penting',
          points: 10,
        },
      ],
    },
  },
  'ilmu-falak-di-pesantren': {
    video: {
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan menjelaskan bagaimana ilmu agama dan sains saling melengkapi dalam tradisi intelektual Aceh.',
    },
    comic: {
      title: 'Komik Digital: Santri Penunjuk Arah',
      description: 'Kisah tentang bagaimana ilmu dari pesantren menerangi jalan di darat dan di laut.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-school"><path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="M18 10a2 2 0 1 0-4 0"/><path d="m22 10-2-3-2 3"/><path d="M6 10a2 2 0 1 1-4 0"/><path d="m2 10 2-3 2 3"/><path d="M10 2.3c.2-.1.4-.2.6-.3.2-.1.4-.1.6-.1s.4.1.6.1c.2.1.4.2.6.3"/><path d="M8 18h8"/><path d="M12 18.5a4 4 0 0 0 4-4v-2.5a4 4 0 0 0-4-4 4 4 0 0 0-4 4v2.5a4 4 0 0 0 4 4Z"/></svg>`,
          title: 'Ilmu di Dayah',
          quote: '“Banyak yang mengira kami hanya belajar Al-Quran. Tapi kami juga mempelajari Ilmu Falak, ilmu tentang benda-benda langit.”',
          gradient: 'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-star"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M19 3v4"/><path d="M21 5h-4"/></svg>`,
          title: 'Menghitung Waktu',
          quote: '“Kami menghitung posisi bintang dan bulan untuk menentukan awal puasa dan hari raya.”',
          gradient: 'from-indigo-200 to-indigo-100 dark:from-indigo-900/70 dark:to-indigo-800/70',
          textColor: 'text-indigo-800 dark:text-indigo-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ship"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M12 6V2"/><path d="M7 6v6"/><path d="M17 6v6"/><path d="M3 12a9 9 0 0 1 18 0"/></svg>`,
          title: 'Ilmu untuk Nelayan',
          quote: '“Saat santri pulang ke kampung nelayan, ilmunya sangat bermanfaat. Mereka menjadi penunjuk arah.”',
          gradient: 'from-blue-200 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/70',
          textColor: 'text-blue-800 dark:text-blue-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 -11.31 16.24 7.76 16.24 16.24 7.76"/><line x1="12" y1="22" x2="12" y2="17.5"/></svg>`,
          title: 'Navigasi Langit',
          quote: '“Mereka bisa menentukan arah utara dari bintang, atau memprediksi pasang surut dari fase bulan.”',
          gradient: 'from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600',
          textColor: 'text-gray-800 dark:text-gray-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-heart"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.77-.77-.77a5.4 5.4 0 0 0-7.65 0C2.46 6.5 2 8.6 2 10.5c0 2.2 1.2 4.6 3.2 6.5l8.8 8.8 8.8-8.8c2-1.9 3.2-4.3 3.2-6.5 0-1.9-.46-4-2.58-5.92z"/><path d="M12 21V8"/><path d="M2 10h1.5"/><path d="M20.5 10H22"/><path d="M12 21a8 8 0 0 1-8-8c0-1.5.4-3 1.2-4.2"/><path d="M12 21a8 8 0 0 0 8-8c0-1.5-.4-3-1.2-4.2"/></svg>`,
          title: 'Ilmu Agama dan Kehidupan',
          quote: '“Ada hubungan erat antara langit dan laut, antara ilmu agama dan ilmu kehidupan sehari-hari.”',
          gradient: 'from-purple-200 to-purple-100 dark:from-purple-900/70 dark:to-purple-800/70',
          textColor: 'text-purple-800 dark:text-purple-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 7c0-2.2-1.8-4-4-4S10 4.8 10 7c0 2 .3 3.2 1.5 4.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
          title: 'Ilmu yang Bermanfaat',
          quote: '“Semua ilmu berasal dari Tuhan, untuk dimanfaatkan bagi kebaikan seluruh umat manusia.”',
          gradient: 'from-yellow-200 to-yellow-100 dark:from-yellow-900/70 dark:to-yellow-800/70',
          textColor: 'text-yellow-800 dark:text-yellow-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Ilmu Falak',
      description: 'Uji pengetahuanmu tentang penerapan astronomi tradisional di Aceh.',
      questions: [
        {
          question: 'Apa itu "Ilmu Falak" yang diajarkan di dayah?',
          options: ['Ilmu sihir', 'Ilmu astronomi', 'Ilmu pertanian', 'Ilmu bela diri'],
          correctAnswer: 'Ilmu astronomi',
          points: 10,
        },
        {
          question: 'Selain untuk menentukan awal bulan puasa, untuk apa lagi Ilmu Falak digunakan dalam cerita ini?',
          options: ['Untuk meramal nasib', 'Untuk navigasi para nelayan', 'Untuk menemukan harta karun', 'Untuk menentukan hari baik pernikahan'],
          correctAnswer: 'Untuk navigasi para nelayan',
          points: 10,
        },
        {
          question: 'Bagaimana santri yang pulang ke kampung membantu para nelayan?',
          options: ['Dengan memberikan pinjaman modal', 'Dengan menjadi rujukan untuk ilmu navigasi langit', 'Dengan memperbaiki jaring ikan', 'Dengan menjual ikan di pasar'],
          correctAnswer: 'Dengan menjadi rujukan untuk ilmu navigasi langit',
          points: 10,
        },
        {
          question: 'Apa yang bisa diprediksi oleh para santri menggunakan Ilmu Falak untuk para nelayan?',
          options: ['Jumlah tangkapan ikan', 'Cuaca esok hari secara pasti', 'Waktu pasang surut dan arah bintang', 'Harga ikan di pasaran'],
          correctAnswer: 'Waktu pasang surut dan arah bintang',
          points: 10,
        },
        {
          question: 'Kisah ini menunjukkan bahwa di Aceh, ilmu agama dan ilmu pengetahuan (sains)...',
          options: ['Selalu bertentangan', 'Tidak ada hubungannya sama sekali', 'Dapat saling melengkapi dan bermanfaat bagi kehidupan', 'Hanya dipelajari oleh kalangan bangsawan'],
          correctAnswer: 'Dapat saling melengkapi dan bermanfaat bagi kehidupan',
          points: 10,
        },
      ],
    },
  },
  'pasar-sebagai-ruang-sosial': {
    video: {
      title: 'Video Edukasi Akan Segera Hadir!',
      description: 'Kami sedang mempersiapkan video edukasi yang menarik untuk cerita ini. Nantikan pembaruan dari kami!',
      embedUrl: '',
      info: 'Video ini akan menangkap suasana dan interaksi sosial di Pasar Peunayong, menunjukkan bagaimana informasi dan kohesi sosial terjalin.',
    },
    comic: {
      title: 'Komik Digital: Kabar dari Warung Kopi',
      description: 'Sebuah cerita tentang bagaimana denyut nadi sebuah komunitas terasa di pasar tradisional.',
      panels: [
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M12 7v3"/></svg>`,
          title: 'Denyut Nadi Pagi Hari',
          quote: '“Bagi saya, pasar bukan hanya tempat mencari uang, tapi tempat memulai hari bersama teman-teman.”',
          gradient: 'from-amber-200 to-amber-100 dark:from-amber-800 dark:to-amber-700',
          textColor: 'text-amber-800 dark:text-amber-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a4 4 0 0 1-4 4H8a4 4 0 0 1 0-8h4a4 4 0 0 1 4 4Z"/><path d="M6 22V8h12v14H6Z"/><path d="M6 14h12"/></svg>`,
          title: 'Pusat Informasi',
          quote: '“Di warung kopi pasar inilah semua kabar beredar, dari harga cabai sampai isu politik.”',
          gradient: 'from-yellow-300 to-yellow-200 dark:from-yellow-800 dark:to-yellow-700',
          textColor: 'text-yellow-900 dark:text-yellow-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 0-2-2Z"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h4"/></svg>`,
          title: 'Menyebar Lebih Cepat',
          quote: '“Kabar tentang bantuan atau lowongan kerja menyebar lebih cepat di pasar daripada dari pengumuman resmi.”',
          gradient: 'from-blue-200 to-blue-100 dark:from-blue-900/70 dark:to-blue-800/70',
          textColor: 'text-blue-800 dark:text-blue-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-half"><path d="M20 13c0 5-3.5 7.5-7.69 9.25-.62.25-1.23.25-1.85 0C6.35 20.5 2.86 18 2.86 13V4.5A2.5 2.5 0 0 1 5.36 2h0a2.5 2.5 0 0 1 2.5 2.5V13c0 .8.6 1.4 1.4 1.4h0c.8 0 1.4-.6 1.4-1.4V2h5.28a2.5 2.5 0 0 1 2.5 2.5V13Z"/></svg>`,
          title: 'Menjaga Ketenangan',
          quote: '“Jika ada isu yang meresahkan, kami bisa saling menenangkan dan mencari kebenaran di sini.”',
          gradient: 'from-green-200 to-green-100 dark:from-green-900/70 dark:to-green-800/70',
          textColor: 'text-green-800 dark:text-green-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-big"><path d="M3 3v18h18"/><path d="M7 12v5"/><path d="M12 7v10"/><path d="M17 4v13"/></svg>`,
          title: 'Barometer Sosial',
          quote: '“Pasar adalah barometer sosial. Kita bisa tahu apa yang sedang dirasakan masyarakat dari obrolan di sini.”',
          gradient: 'from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600',
          textColor: 'text-gray-800 dark:text-gray-200',
        },
        {
          iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>`,
          title: 'Menjaga Denyut Nadi',
          quote: '“Menjaga pasar tradisional tetap hidup sama dengan menjaga denyut nadi komunitas kami.”',
          gradient: 'from-red-200 to-red-100 dark:from-red-900/70 dark:to-red-800/70',
          textColor: 'text-red-800 dark:text-red-200',
        },
      ],
    },
    quiz: {
      title: 'Kuis Jantung Komunitas',
      description: 'Uji pemahamanmu tentang peran sosial pasar tradisional.',
      questions: [
        {
          question: 'Menurut cerita, apa fungsi pasar selain sebagai tempat transaksi ekonomi?',
          options: ['Tempat parkir', 'Jantung sosial komunitas', 'Kantor pemerintahan', 'Tempat wisata'],
          correctAnswer: 'Jantung sosial komunitas',
          points: 10,
        },
        {
          question: 'Di mana biasanya informasi non-resmi menyebar dengan cepat di dalam pasar?',
          options: ['Di toilet umum', 'Di kantor pengelola pasar', 'Di warung kopi', 'Di tempat pembuangan sampah'],
          correctAnswer: 'Di warung kopi',
          points: 10,
        },
        {
          question: 'Apa yang dimaksud dengan "barometer sosial" dalam konteks pasar?',
          options: ['Alat pengukur cuaca di pasar', 'Tempat untuk mengetahui harga-harga', 'Tempat untuk mengukur apa yang sedang dirasakan atau dibicarakan masyarakat', 'Alat pengukur kebisingan pasar'],
          correctAnswer: 'Tempat untuk mengukur apa yang sedang dirasakan atau dibicarakan masyarakat',
          points: 10,
        },
        {
          question: 'Bagaimana pasar dapat membantu menjaga ketenangan saat ada isu meresahkan?',
          options: ['Dengan menutup pasar', 'Dengan melarang orang berbicara', 'Warga bisa saling bertemu, mengklarifikasi, dan menenangkan satu sama lain', 'Dengan memanggil aparat keamanan'],
          correctAnswer: 'Warga bisa saling bertemu, mengklarifikasi, dan menenangkan satu sama lain',
          points: 10,
        },
        {
          question: 'Apa pesan utama dari cerita ini?',
          options: ['Pasar modern lebih baik dari pasar tradisional', 'Pasar tradisional harus dijaga karena perannya sebagai pusat komunitas', 'Berjualan di pasar sangat menguntungkan', 'Warung kopi adalah bisnis terbaik di pasar'],
          correctAnswer: 'Pasar tradisional harus dijaga karena perannya sebagai pusat komunitas',
          points: 10,
        },
      ],
    },
  },
};
