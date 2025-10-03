import type { Story } from './types';

export const stories: Story[] = [
  {
    id: 'smong-selamat-dari-lautan',
    title: 'Smong: Kearifan Lokal yang Selamat dari Lautan',
    author: 'Pak Budi, Simeulue',
    location: { name: 'Simeulue', lat: 2.61, lng: 96.08 },
    summary:
      'Kisah tentang bagaimana tradisi lisan "Smong" di Pulau Simeulue menyelamatkan ribuan nyawa saat tsunami 2004, sebuah bukti kekuatan kearifan lokal dalam mitigasi bencana.',
    fullText:
      'Di Pulau Simeulue, jauh sebelum sistem peringatan dini modern ada, leluhur kami telah mewariskan sebuah syair, sebuah nyanyian bernama "Smong". Syair ini bukan sekadar lantunan, melainkan sebuah panduan hidup. "Enggel mon sao suru, linon bak, mae oek suruik..." yang artinya "Jika gempa kuat diikuti surutnya air laut, segeralah lari ke tempat tinggi". Saat gempa dan tsunami dahsyat melanda Aceh pada tahun 2004, ingatan akan Smong inilah yang mendorong kami semua berlari ke bukit, menjauhi pantai. Dari puluhan ribu penduduk, hanya sedikit yang menjadi korban. Smong adalah bukti bahwa alam memberi tanda, dan leluhur kami telah mengajari kami cara membacanya. Ini adalah cerita tentang bagaimana pengetahuan yang diwariskan dari generasi ke generasi menjadi penyelamat kami.',
    aiThemes: ['Local Wisdom', 'Disaster Preparedness'],
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1525873020571-08690094e301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxvY2VhbiUyMHdhdmVzfGVufDB8fHx8MTc1OTQxNzMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      featuredImageHint: 'ocean waves',
    },
    status: 'published',
  },
  {
    id: 'hutan-bakau-penjaga-pantai',
    title: 'Hutan Bakau, Sang Penjaga Pantai',
    author: 'Ibu Aisyah, Aceh Jaya',
    location: { name: 'Aceh Jaya', lat: 4.78, lng: 95.73 },
    summary:
      'Cerita inspiratif dari komunitas pesisir di Aceh Jaya yang bekerja sama menanam kembali hutan bakau untuk melindungi desa mereka dari abrasi dan badai.',
    fullText:
      'Dulu, pantai di desa kami terus menerus terkikis. Setiap kali badai datang, kami selalu was-was. Rumah-rumah di dekat pantai perlahan hancur. Lalu, kami teringat cerita orang tua dulu, bahwa hutan bakau adalah benteng alami kami. Bersama-sama, para pemuda dan orang tua, kami mulai menanam kembali bibit bakau di sepanjang pesisir. Awalnya sulit, banyak yang gagal. Tapi kami tidak menyerah. Sekarang, setelah bertahun-tahun, hutan bakau itu telah tumbuh lebat. Akarnya yang kokoh mencengkeram tanah, menahan laju ombak. Desa kami kini lebih aman. Anak-anak bisa bermain di pantai tanpa rasa takut. Hutan bakau tidak hanya melindungi kami, tapi juga menjadi rumah bagi ikan dan kepiting, memberikan kami sumber penghidupan tambahan.',
    aiThemes: ['Disaster Preparedness', 'Peacebuilding'],
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1618344322727-2256d3abdd1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtYW5ncm92ZSUyMGZvcmVzdHxlbnwwfHx8fDE3NTk0OTM3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featuredImageHint: 'mangrove forest',
    },
    status: 'published',
  },
  {
    id: 'dapur-umum-perdamaian',
    title: 'Dapur Umum Perdamaian',
    author: 'Kelompok Ibu-Ibu Bireuen',
    location: { name: 'Bireuen', lat: 5.2, lng: 96.7 },
    summary:
      'Bagaimana sebuah dapur umum yang didirikan pasca-konflik menjadi ruang untuk merajut kembali tali persaudaraan dan membangun perdamaian melalui makanan.',
    fullText:
      'Setelah konflik berakhir, masih ada banyak luka dan ketidakpercayaan di antara kami. Sulit untuk memulai kembali. Lalu, beberapa dari kami, para ibu, berpikir: semua orang butuh makan, dan makanan bisa menyatukan. Kami mendirikan sebuah dapur umum sederhana. Siapapun boleh datang untuk makan, dan siapapun boleh membantu memasak. Di sinilah keajaiban terjadi. Sambil memotong sayur dan mengaduk gulai, kami mulai berbicara. Kami berbagi cerita, tawa, dan air mata. Dinding-dinding yang dulu memisahkan kami perlahan runtuh. Dapur ini menjadi lebih dari sekadar tempat makan; ia menjadi ruang rekonsiliasi. Kami belajar bahwa perdamaian bisa dimulai dari hal yang paling sederhana: sepiring nasi hangat dan hati yang terbuka.',
    aiThemes: ['Peacebuilding', 'Local Wisdom'],
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1759347115771-b9bf87e1dce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MHx8fHwxNzU5NDEwNDc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featuredImageHint: 'community gathering',
    },
    status: 'published',
  },
  {
    id: 'lumbung-padi-komunal',
    title: 'Lumbung Padi Komunal: Gotong Royong Hadapi Paceklik',
    author: 'Pak Giman, Gayo Lues',
    location: { name: 'Gayo Lues', lat: 3.98, lng: 97.35 },
    summary:
      'Inisiatif masyarakat Gayo dalam membangun lumbung padi komunal sebagai jaring pengaman sosial untuk memastikan tidak ada satu pun warga yang kelaparan saat musim paceklik.',
    fullText:
      'Di dataran tinggi Gayo, cuaca tak selalu bisa ditebak. Kadang panen melimpah, kadang gagal total. Untuk menghadapi ini, kami menghidupkan kembali tradisi "lumbung bersama". Setiap keluarga yang panennya berlebih akan menyisihkan sebagian hasilnya untuk disimpan di lumbung komunal. Saat ada keluarga yang mengalami kesulitan atau gagal panen, mereka bisa mengambil dari lumbung ini. Tidak ada bunga, tidak ada catatan utang. Semuanya didasari oleh semangat gotong royong dan kepedulian. Lumbung ini adalah simbol persatuan kami. Ia mengajarkan kami bahwa dengan berbagi, kita semua menjadi lebih kuat. Kami mungkin tidak kaya secara materi, tapi kami kaya dalam persaudaraan.',
    aiThemes: ['Disaster Preparedness', 'Local Wisdom', 'Peacebuilding'],
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtb3VudGFpbiUyMHZpbGxhZ2V8ZW58MHx8fHwxNzU5NDkzNzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      featuredImageHint: 'mountain village',
    },
    status: 'published',
  },
  {
    id: 'bah-tangse-sungai-murka',
    title: 'Bah Tangse: Ketika Sungai Murka',
    author: 'Warga Tangse, Pidie',
    location: { name: 'Pidie', lat: 5.37, lng: 95.96 },
    summary:
      'Kesaksian mendalam tentang banjir bandang dahsyat di Tangse pada 2011, sebuah tragedi yang disebabkan oleh perambahan hutan dan menjadi pelajaran pahit tentang pentingnya menjaga alam.',
    fullText:
      'Malam itu, 10 Maret 2011, langit seakan pecah di atas Tangse. Hujan yang turun bukan lagi sekadar hujan, melainkan seperti air yang ditumpahkan dari langit tanpa henti. Kami yang tinggal di sepanjang Krueng Tangse sudah biasa dengan air sungai yang naik, tapi malam itu berbeda. Sekitar tengah malam, kami mendengar suara gemuruh yang bukan berasal dari guntur. Suaranya semakin keras, seperti gunung yang runtuh. Beberapa dari kami yang penasaran mencoba melihat keluar. Yang kami lihat adalah pemandangan mengerikan: air sungai meluap dengan liar, warnanya hitam pekat, dan membawa serta puluhan pohon gelondongan raksasa yang saling berbenturan. Itu bukan banjir biasa, itu adalah "Bah" – air bah yang murka.\n\nKepala desa berteriak melalui pengeras suara masjid, "Air naik! Selamatkan diri! Lari ke tempat tinggi!" Listrik padam, membuat suasana semakin panik dan mencekam. Dalam gelap gulita, kami hanya bisa mengandalkan naluri. Suara benturan kayu-kayu raksasa yang menghantam jembatan dan rumah-rumah terdengar begitu dekat. Rumah-rumah panggung yang terbuat dari kayu pun tak berdaya, tercabut dari pondasinya dan hanyut terseret arus. Kami berlari sekuat tenaga ke perbukitan, ke tempat yang lebih tinggi, hanya membawa pakaian di badan. Dari atas bukit, kami melihat desa kami dilahap oleh air bah yang ganas. Paginya, saat air mulai surut, yang tersisa hanyalah lumpur tebal dan puing-puing. Jembatan utama putus, puluhan rumah hilang, dan sawah kami berubah menjadi lautan lumpur. Kami sadar, ini bukan hanya bencana alam. Ini adalah akibat dari keserakahan. Hutan di hulu yang seharusnya menjadi penyangga telah gundul oleh penebangan liar. Sungai tidak lagi memiliki penahan. Bah Tangse menjadi pelajaran paling pahit bagi kami, bahwa merusak alam sama dengan menghancurkan diri sendiri. Sejak saat itu, kami bersumpah untuk menjaga hutan kami, menanam kembali pohon-pohon, sebagai warisan agar tragedi serupa tidak terulang lagi.',
    aiThemes: ['Disaster Preparedness', 'Local Wisdom'],
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1631134953337-b660eda6e87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxyYWdpbmclMjByaXZlcnxlbnwwfHx8fDE3NTk0OTM3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featuredImageHint: 'raging river',
    },
    status: 'published',
  },
  {
    id: 'api-di-bukit-barisan',
    title: 'Api di Bukit Barisan',
    author: 'Masyarakat Peduli Api, Aceh Tengah',
    location: { name: 'Aceh Tengah', lat: 4.62, lng: 96.85 },
    summary:
      'Kisah perjuangan Masyarakat Peduli Api di dataran tinggi Gayo dalam mencegah dan memadamkan kebakaran hutan, melindungi ekosistem Leuser yang berharga.',
    fullText:
      'Setiap musim kemarau, hati kami selalu was-was. Hutan pinus di sekitar kami ini indah, tapi juga sangat rentan terbakar. Sedikit saja percikan api, bisa menjadi bencana besar. Kami membentuk kelompok "Masyarakat Peduli Api". Kami berpatroli secara sukarela, membuat sekat bakar, dan yang terpenting, memberikan penyuluhan kepada warga agar tidak membuka lahan dengan cara membakar. Ini bukan pekerjaan pemerintah, ini adalah tanggung jawab kami bersama. Hutan ini adalah sumber air kami, rumah bagi satwa liar, dan warisan untuk anak cucu kami. Memadamkan api sebelum membesar adalah cara kami membangun perdamaian dengan alam.',
    aiThemes: ['Disaster Preparedness', 'Peacebuilding'],
    media: {
      featuredImage: 'https://images.unsplash.com/photo-1600181958051-bd8544360312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxmb3Jlc3QlMjBmaXJlfGVufDB8fHx8MTc1OTQ5Mzc0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      featuredImageHint: 'forest fire',
    },
    status: 'published',
  },
  {
    id: 'kopi-gayo-aroma-perdamaian',
    title: 'Kopi Gayo: Aroma Perdamaian',
    author: 'Petani Kopi, Bener Meriah',
    location: { name: 'Bener Meriah', lat: 4.72, lng: 96.86 },
    summary:
      'Bagaimana kebun kopi di Bener Meriah yang sempat ditinggalkan karena konflik, kini menjadi motor penggerak ekonomi dan simbol harapan baru bagi masyarakat.',
    fullText:
      'Dulu di masa konflik, banyak dari kami yang terpaksa meninggalkan kebun kopi. Kebun-kebun itu telantar, ditumbuhi semak belukar. Setelah damai, kami kembali. Memulainya lagi dari nol sangat berat. Tapi, kami melihat harapan pada biji-biji kopi ini. Kami bekerja keras, belajar teknik menanam yang lebih baik, dan membangun koperasi bersama. Perlahan tapi pasti, kopi Gayo mulai dikenal dunia. Aroma kopi yang kami olah setiap pagi bukan hanya aroma minuman, tapi juga aroma perdamaian dan kerja keras. Kebun kopi ini telah menyatukan kami kembali, memberikan pekerjaan, dan memungkinkan kami menyekolahkan anak-anak. Kopi telah menyembuhkan luka kami.',
    aiThemes: ['Peacebuilding', 'Local Wisdom'],
    media: {
      featuredImage: 'https://picsum.photos/seed/8/800/600',
      featuredImageHint: 'coffee beans',
    },
    status: 'published',
  },
  {
    id: 'pemuda-penjaga-adat',
    title: 'Pemuda Penjaga Adat',
    author: 'Sanggar Seni Seudati, Pidie',
    location: { name: 'Pidie', lat: 5.37, lng: 95.96 },
    summary:
      'Sekelompok pemuda di Pidie menghidupkan kembali tari Seudati sebagai cara untuk menjauhkan anak muda dari kekerasan dan memperkuat identitas budaya pasca-konflik.',
    fullText:
      'Setelah perdamaian, banyak anak muda yang kehilangan arah. Energi mereka yang besar terkadang tersalurkan ke hal-hal negatif. Kami, beberapa pemuda yang lebih tua, merasa harus melakukan sesuatu. Kami memutuskan untuk menghidupkan kembali sanggar tari Seudati. Tarian ini bukan sekadar gerakan, tapi juga mengajarkan disiplin, kerja sama tim, dan berisi syair-syair nasihat. Awalnya tidak mudah menarik minat mereka. Tapi dengan kesabaran, sanggar kami mulai ramai. Energi mereka kini tersalurkan untuk melestarikan budaya. Melalui tarian, kami membangun jembatan antar desa dan menciptakan ruang yang aman bagi pemuda untuk berekspresi secara positif.',
    aiThemes: ['Peacebuilding', 'Local Wisdom'],
    media: {
      featuredImage: 'https://picsum.photos/seed/9/800/600',
      featuredImageHint: 'traditional dance',
    },
    status: 'published',
  },
  {
    id: 'perempuan-penganyam-harapan',
    title: 'Perempuan Penganyam Harapan',
    author: 'Kelompok Kerajinan Ibu, Aceh Besar',
    location: { name: 'Aceh Besar', lat: 5.37, lng: 95.52 },
    summary:
      'Kisah para janda korban tsunami yang bangkit dari keterpurukan dengan membentuk kelompok kerajinan anyaman, menciptakan kemandirian ekonomi dan ruang penyembuhan.',
    fullText:
      'Tsunami merenggut suami dan rumah kami. Kami ditinggalkan dengan duka dan ketidakpastian. Untuk bertahan hidup, kami mulai berkumpul dan melakukan apa yang kami bisa: menganyam. Kami menggunakan daun pandan yang tumbuh melimpah di sekitar kami. Sambil menganyam, kami berbagi cerita, saling menguatkan. Anyaman ini bukan sekadar tikar atau tas, ini adalah terapi bagi kami. Perlahan, produk kami mulai dikenal. Pesanan datang, dan kami mendapatkan penghasilan sendiri. Kami tidak lagi hanya korban, kami adalah penyintas yang berdaya. Kelompok ini menjadi keluarga baru kami, tempat kami menenun kembali harapan untuk masa depan.',
    aiThemes: ['Peacebuilding', 'Local Wisdom'],
    media: {
      featuredImage: 'https://picsum.photos/seed/10/800/600',
      featuredImageHint: 'woven crafts',
    },
    status: 'published',
  },
  {
    id: 'arsitektur-rumah-panggung',
    title: 'Rumah Panggung: Belajar dari Nenek Moyang',
    author: 'Arsitek Komunitas, Banda Aceh',
    location: { name: 'Banda Aceh', lat: 5.55, lng: 95.32 },
    summary:
      'Menggali kembali kearifan arsitektur tradisional Aceh, Rumoh Aceh, sebagai inspirasi untuk membangun rumah yang lebih tahan gempa dan adaptif terhadap lingkungan.',
    fullText:
      'Saat gempa dan tsunami menghancurkan begitu banyak bangunan modern, kami melihat banyak Rumoh Aceh (rumah tradisional Aceh) yang masih berdiri kokoh. Ini membuka mata kami. Arsitektur nenek moyang kita ternyata luar biasa. Rumah panggung dengan konstruksi kayu yang fleksibel mampu meredam guncangan gempa. Kolong di bawah rumah tidak hanya berfungsi sebagai ruang serbaguna, tetapi juga memberikan jalan bagi air jika terjadi banjir atau genangan. Kami mulai mengadvokasikan dan membangun kembali rumah dengan mengadaptasi prinsip-prinsip Rumoh Aceh. Ini bukan tentang kembali ke masa lalu, tapi mengambil pelajaran terbaik dari masa lalu untuk membangun masa depan yang lebih aman.',
    aiThemes: ['Local Wisdom', 'Disaster Preparedness'],
    media: {
      featuredImage: 'https://picsum.photos/seed/11/800/600',
      featuredImageHint: 'traditional house',
    },
    status: 'published',
  },
  {
    id: 'seni-melawan-trauma',
    title: 'Seni Melawan Trauma',
    author: 'Komunitas Mural, Banda Aceh',
    location: { name: 'Banda Aceh', lat: 5.55, lng: 95.32 },
    summary:
      'Bagaimana para seniman muda di Banda Aceh menggunakan mural dan seni jalanan untuk mengubah dinding-dinding bekas tsunami menjadi kanvas harapan dan ingatan kolektif.',
    fullText:
      'Banda Aceh pasca-tsunami penuh dengan dinding-dinding bisu yang menjadi saksi tragedi. Suasananya terasa berat. Sebagai seniman, kami merasa terpanggil untuk melakukan sesuatu. Kami mulai melukis mural di dinding-dinding publik. Bukan untuk menghapus ingatan, tapi untuk memberinya warna baru. Kami melukis tentang harapan, ketahanan, kebersamaan, dan keindahan Aceh. Proses melukis bersama ini menjadi terapi bagi kami dan juga masyarakat. Anak-anak ikut bergabung. Dinding yang dulu suram kini menjadi galeri terbuka yang menceritakan kisah kebangkitan kami. Seni menjadi cara kami menyembuhkan luka kota dan jiwa kami.',
    aiThemes: ['Peacebuilding'],
    media: {
      featuredImage: 'https://picsum.photos/seed/12/800/600',
      featuredImageHint: 'street art mural',
    },
    status: 'published',
  },
  {
    id: 'nelayan-dan-tanda-alam',
    title: 'Kearifan Nelayan dan Tanda-tanda Alam',
    author: 'Pak Hamdan, Pelabuhan Lampulo',
    location: { name: 'Banda Aceh', lat: 5.55, lng: 95.32 },
    summary:
      'Kisah nelayan tradisional di Banda Aceh yang mengandalkan pengetahuan turun-temurun tentang rasi bintang, angin, dan perilaku ikan untuk melaut dengan aman.',
    fullText:
      'Kami para nelayan tidak punya GPS canggih. Kompas kami adalah langit dan laut itu sendiri. Ayah saya mengajari saya cara membaca rasi bintang Orion, atau "Bintang Tiga" seperti yang kami sebut, untuk mengetahui arah pulang. Kami tahu kapan waktu ikan berkumpul hanya dengan melihat warna air dan jenis burung yang terbang di atasnya. Jika lumba-lumba berenang mendekati pantai, itu pertanda cuaca akan buruk. Pengetahuan ini tidak ada di buku, ini diwariskan dari ayah ke anak, dari satu generasi nelayan ke generasi berikutnya. Ini adalah ilmu kehidupan yang membuat kami bisa bersahabat dengan lautan.',
    aiThemes: ['Local Wisdom'],
    media: {
      featuredImage: 'https://picsum.photos/seed/13/800/600',
      featuredImageHint: 'fishing boats',
    },
    status: 'published',
  },
  {
    id: 'sumur-tua-sumber-kehidupan',
    title: 'Sumur Tua, Sumber Kehidupan Saat Kekeringan',
    author: 'Warga Desa Blang, Aceh Utara',
    location: { name: 'Aceh Utara', lat: 5.01, lng: 97.23 },
    summary:
      'Kisah tentang bagaimana sebuah sumur tua warisan leluhur menjadi satu-satunya sumber air yang bertahan saat desa dilanda kekeringan panjang.',
    fullText:
      'Musim kemarau tahun itu sangat panjang. Sungai mengering, sumur-sumur modern kami pun ikut kering. Kami mulai putus asa. Lalu seorang tetua desa teringat akan sebuah sumur tua yang sudah lama tidak digunakan di pinggir hutan. Sumur itu dibangun dengan cincin batu dan ditutupi oleh pohon besar. Dengan ragu, kami membersihkannya. Ajaib, di dasarnya masih ada air yang jernih dan tidak pernah kering! Ternyata, leluhur kami membangun sumur itu tepat di atas mata air yang besar. Sumur tua itu menyelamatkan desa kami. Kami belajar bahwa teknologi modern tidak selalu lebih baik. Ada kearifan dalam peninggalan masa lalu yang harus kami jaga.',
    aiThemes: ['Local Wisdom', 'Disaster Preparedness'],
    media: {
      featuredImage: 'https://picsum.photos/seed/14/800/600',
      featuredImageHint: 'old well',
    },
    status: 'published',
  },
  {
    id: 'ilmu-falak-di-pesantren',
    title: 'Ilmu Falak di Dayah: Navigasi Lautan dan Langit',
    author: 'Tengku Abdullah, Samalanga',
    location: { name: 'Bireuen', lat: 5.2, lng: 96.7 },
    summary:
      'Mengungkap bagaimana pesantren (dayah) di Aceh tidak hanya mengajarkan ilmu agama, tetapi juga ilmu falak (astronomi) yang digunakan nelayan untuk navigasi.',
    fullText:
      'Banyak yang mengira dayah hanya tempat belajar Al-Quran. Tapi sejak dulu, kami juga mempelajari Ilmu Falak. Kami menghitung posisi bintang untuk menentukan awal bulan puasa, dan juga arah kiblat. Ternyata, ilmu yang sama juga sangat bermanfaat bagi para nelayan di pesisir. Para santri yang pulang ke kampungnya sering menjadi rujukan. Mereka bisa memberitahu kapan pasang surut tertinggi, atau di mana posisi bintang utara. Ada hubungan erat antara langit dan laut, antara ilmu agama dan ilmu kehidupan. Di sini, kami belajar bahwa semua ilmu berasal dari Tuhan dan bisa dimanfaatkan untuk kebaikan bersama, baik di darat maupun di lautan.',
    aiThemes: ['Local Wisdom'],
    media: {
      featuredImage: 'https://picsum.photos/seed/15/800/600',
      featuredImageHint: 'starry night',
    },
    status: 'published',
  },
  {
    id: 'pasar-sebagai-ruang-sosial',
    title: 'Pasar Pagi: Lebih dari Sekadar Jual Beli',
    author: 'Ibu Aminah, Pedagang Pasar Peunayong',
    location: { name: 'Banda Aceh', lat: 5.55, lng: 95.32 },
    summary:
      'Pasar tradisional bukan hanya tempat transaksi ekonomi, tetapi juga jantung sosial komunitas, tempat informasi disebarkan dan ikatan sosial diperkuat.',
    fullText:
      'Saya sudah berdagang di pasar ini sejak muda. Bagi kami, pasar bukan hanya tempat mencari uang. Di sinilah kami bertemu teman, bertukar kabar, dan berbagi cerita. Jika ada kabar tentang akan ada bantuan, atau lowongan kerja, informasi itu menyebar cepat di pasar. Bahkan saat ada isu-isu yang meresahkan, kami bisa saling menenangkan di sini. Pasar adalah barometer sosial. Dari obrolan di warung kopi pasar, kita bisa tahu apa yang sedang dirasakan masyarakat. Menjaga pasar tradisional tetap hidup sama dengan menjaga denyut nadi komunitas kami.',
    aiThemes: ['Local Wisdom', 'Peacebuilding'],
    media: {
      featuredImage: 'https://picsum.photos/seed/16/800/600',
      featuredImageHint: 'traditional market',
    },
    status: 'published',
  },
];
