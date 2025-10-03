import type { Story } from './types';

// This file now contains only the non-translatable parts of the stories.
// The translatable content (title, summary, fullText) is moved to i18n JSON files.

export const stories: Omit<Story, 'title' | 'summary' | 'fullText'>[] = [
  {
    id: 'smong-selamat-dari-lautan',
    author: 'Pak Budi, Simeulue',
    location: { name: 'Simeulue', lat: 2.61, lng: 96.08 },
    aiThemes: ['Local Wisdom', 'Disaster Preparedness'],
    media: {
      featuredImage:
        'https://images.unsplash.com/photo-1525873020571-08690094e301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxvY2VhbiUyMHdhdmVzfGVufDB8fHx8MTc1OTQxNzMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      featuredImageHint: 'ocean waves',
    },
    status: 'published',
  },
  {
    id: 'hutan-bakau-penjaga-pantai',
    author: 'Ibu Aisyah, Aceh Jaya',
    location: { name: 'Aceh Jaya', lat: 4.78, lng: 95.73 },
    aiThemes: ['Disaster Preparedness', 'Peacebuilding'],
    media: {
      featuredImage:
        'https://images.unsplash.com/photo-1556768555-ee22fbdc8a61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxtYW5ncm92ZSUyMGZvcmVzdHxlbnwwfHx8fDE3NTk0OTM3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featuredImageHint: 'mangrove forest',
    },
    status: 'published',
  },
  {
    id: 'dapur-umum-perdamaian',
    author: 'Kelompok Ibu-Ibu Bireuen',
    location: { name: 'Bireuen', lat: 5.2, lng: 96.7 },
    aiThemes: ['Peacebuilding', 'Local Wisdom'],
    media: {
      featuredImage:
        'https://images.unsplash.com/photo-1606299835846-097e92abcc59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MHx8fHwxNzU5NDEwNDc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featuredImageHint: 'community gathering',
    },
    status: 'published',
  },
  {
    id: 'lumbung-padi-komunal',
    author: 'Pak Giman, Gayo Lues',
    location: { name: 'Gayo Lues', lat: 3.98, lng: 97.35 },
    aiThemes: ['Disaster Preparedness', 'Local Wisdom', 'Peacebuilding'],
    media: {
      featuredImage:
        'https://images.unsplash.com/photo-1614933723626-22f927cd37dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb3VudGFpbiUyMHZpbGxhZ2V8ZW58MHx8fHwxNzU5NDkzNzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      featuredImageHint: 'mountain village',
    },
    status: 'published',
  },
  {
    id: 'bah-tangse-sungai-murka',
    author: 'Warga Tangse, Pidie',
    location: { name: 'Pidie', lat: 5.37, lng: 95.96 },
    aiThemes: ['Disaster Preparedness', 'Local Wisdom'],
    media: {
      featuredImage:
        'https://images.unsplash.com/photo-1646692071626-7e374cfadaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyYWdpbmclMjByaXZlcnxlbnwwfHx8fDE3NTk0OTM3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featuredImageHint: 'raging river',
    },
    status: 'published',
  },
  {
    id: 'api-di-bukit-barisan',
    author: 'Masyarakat Peduli Api, Aceh Tengah',
    location: { name: 'Aceh Tengah', lat: 4.62, lng: 96.85 },
    aiThemes: ['Disaster Preparedness', 'Peacebuilding'],
    media: {
      featuredImage:
        'https://images.unsplash.com/photo-1613858636109-354616495373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Zm9yZXN0JTIwZmlyZXxlbnwwfHx8fDE3NTk0OTM3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featuredImageHint: 'forest fire',
    },
    status: 'published',
  },
  {
    id: 'kopi-gayo-aroma-perdamaian',
    author: 'Petani Kopi, Bener Meriah',
    location: { name: 'Bener Meriah', lat: 4.72, lng: 96.86 },
    aiThemes: ['Peacebuilding', 'Local Wisdom'],
    media: {
      featuredImage: 'https://picsum.photos/seed/8/800/600',
      featuredImageHint: 'coffee beans',
    },
    status: 'published',
  },
  {
    id: 'pemuda-penjaga-adat',
    author: 'Sanggar Seni Seudati, Pidie',
    location: { name: 'Pidie', lat: 5.37, lng: 95.96 },
    aiThemes: ['Peacebuilding', 'Local Wisdom'],
    media: {
      featuredImage: 'https://picsum.photos/seed/9/800/600',
      featuredImageHint: 'traditional dance',
    },
    status: 'published',
  },
  {
    id: 'perempuan-penganyam-harapan',
    author: 'Kelompok Kerajinan Ibu, Aceh Besar',
    location: { name: 'Aceh Besar', lat: 5.37, lng: 95.52 },
    aiThemes: ['Peacebuilding', 'Local Wisdom'],
    media: {
      featuredImage: 'https://picsum.photos/seed/10/800/600',
      featuredImageHint: 'woven crafts',
    },
    status: 'published',
  },
  {
    id: 'arsitektur-rumah-panggung',
    author: 'Arsitek Komunitas, Banda Aceh',
    location: { name: 'Banda Aceh', lat: 5.55, lng: 95.32 },
    aiThemes: ['Local Wisdom', 'Disaster Preparedness'],
    media: {
      featuredImage: 'https://picsum.photos/seed/11/800/600',
      featuredImageHint: 'traditional house',
    },
    status: 'published',
  },
  {
    id: 'seni-melawan-trauma',
    author: 'Komunitas Mural, Banda Aceh',
    location: { name: 'Banda Aceh', lat: 5.55, lng: 95.32 },
    aiThemes: ['Peacebuilding'],
    media: {
      featuredImage: 'https://picsum.photos/seed/12/800/600',
      featuredImageHint: 'street art mural',
    },
    status: 'published',
  },
  {
    id: 'nelayan-dan-tanda-alam',
    author: 'Pak Hamdan, Pelabuhan Lampulo',
    location: { name: 'Banda Aceh', lat: 5.55, lng: 95.32 },
    aiThemes: ['Local Wisdom'],
    media: {
      featuredImage: 'https://picsum.photos/seed/13/800/600',
      featuredImageHint: 'fishing boats',
    },
    status: 'published',
  },
  {
    id: 'sumur-tua-sumber-kehidupan',
    author: 'Warga Desa Blang, Aceh Utara',
    location: { name: 'Aceh Utara', lat: 5.01, lng: 97.23 },
    aiThemes: ['Local Wisdom', 'Disaster Preparedness'],
    media: {
      featuredImage: 'https://picsum.photos/seed/14/800/600',
      featuredImageHint: 'old well',
    },
    status: 'published',
  },
  {
    id: 'ilmu-falak-di-pesantren',
    author: 'Tengku Abdullah, Samalanga',
    location: { name: 'Bireuen', lat: 5.2, lng: 96.7 },
    aiThemes: ['Local Wisdom'],
    media: {
      featuredImage: 'https://picsum.photos/seed/15/800/600',
      featuredImageHint: 'starry night',
    },
    status: 'published',
  },
  {
    id: 'pasar-sebagai-ruang-sosial',
    author: 'Ibu Aminah, Pedagang Pasar Peunayong',
    location: { name: 'Banda Aceh', lat: 5.55, lng: 95.32 },
    aiThemes: ['Local Wisdom', 'Peacebuilding'],
    media: {
      featuredImage: 'https://picsum.photos/seed/16/800/600',
      featuredImageHint: 'traditional market',
    },
    status: 'published',
  },
];
