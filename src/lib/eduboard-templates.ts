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
        pointIcons: ['GanttChartSquare', 'Goal', 'Target']
    }
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
      "Enggel mon sao suru, linon bak, mae oek suruik. (Jika gempa kuat diikuti surutnya air laut, segeralah lari ke tempat tinggi).",
    themeColor: 'oklch(70% 0.1 290)', // Violet
    metadata: {
        author: 'Tradisi Lisan Pulau Simeulue'
    }
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
        pointIcons: ['Info', 'AlertTriangle', 'HeartHandshake']
    }
  },
  {
    id: 'slide-10',
    layout: 'end-slide',
    category: 'Kesimpulan',
    title: 'Anda Siap, Anda Selamat!',
    description:
      'Membangun budaya sadar bencana adalah tanggung jawab kita bersama untuk masa depan yang lebih aman.',
    themeColor: 'oklogch(60% 0.15 240)', // Blue
  },
];
