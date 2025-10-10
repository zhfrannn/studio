/**
 * @fileoverview This file defines the data structure for the disaster-response mini-game scenarios.
 * All content for the game (scenes, choices, timers, feedback, etc.) is driven by this structure,
 * making it ready for dynamic generation by an AI model.
 */

// Represents a single choice a player can make in a level.
export interface GameOption {
  id: 'A' | 'B' | 'C'; // Unique identifier for the option.
  text: string; // The text displayed on the choice button.
  result: 'correct' | 'wrong' | 'neutral'; // The outcome category of the choice.
  feedback: string; // The message shown to the player after choosing this option.
  score: number; // The score change resulting from this choice.
}

// Represents a single level or scene within a scenario.
export interface GameLevel {
  level_id: string; // Unique identifier for the level.
  scene_text: string; // The narrative text describing the current situation.
  timer_seconds: number; // The time in seconds the player has to make a choice.
  background_image_hint: string; // A hint for the AI to generate a background image.
  sound_effect: string; // Filename of the sound effect to be played (e.g., 'rain_heavy.mp3').
  options: [GameOption, GameOption, GameOption]; // The three choices available to the player.
  next_level_map: { // Maps choice results to the next level.
    correct: string | 'end';
    wrong: string | 'end';
    neutral: string | 'end';
  };
}

// Represents the final messages based on the player's total score.
export interface EndingMessages {
  high: string; // Message for a high score.
  medium: string; // Message for a medium score.
  low: string; // Message for a low score.
}

// The master structure for a complete game scenario.
export interface GameScenario {
  scenario_id: string; // Unique identifier for the entire scenario.
  title: string; // The title of the scenario.
  description: string; // A brief description of the scenario.
  levels: GameLevel[]; // An array of all levels in the scenario.
  starting_level_id: string; // The ID of the first level to be played.
  ending_messages: EndingMessages; // The collection of ending messages.
  score_thresholds: { // Defines the score ranges for the ending messages.
    high: number;
    medium: number;
  };
}

// --- EXAMPLE SCENARIOS ---

// Example Scenario 1: Flood at School (Expanded)
export const floodScenario: GameScenario = {
  scenario_id: 'banjir_smp_1_ext',
  title: 'Banjir di Sekolah',
  description:
    'Kamu adalah seorang siswa SMP. Hujan deras tak henti-henti, dan air mulai memasuki halaman sekolahmu. Kamu harus bertindak cepat dan tepat untuk memastikan semua orang aman.',
  starting_level_id: 'banjir_1',
  levels: [
    {
      level_id: 'banjir_1',
      scene_text:
        'Hujan sangat deras. Kamu melihat air mulai menggenang di lapangan upacara dan merayap ke koridor. Belum ada pengumuman dari guru. Apa yang kamu lakukan?',
      timer_seconds: 10,
      background_image_hint: 'school hallway ankle-deep water raining',
      sound_effect: 'rain_heavy.mp3',
      options: [
        {
          id: 'A',
          text: 'Lanjutkan bermain di kelas.',
          result: 'wrong',
          feedback: 'Bahaya! Mengabaikan tanda-tanda awal bisa berakibat fatal. Air bisa naik dengan cepat.',
          score: -10,
        },
        {
          id: 'B',
          text: 'Beri tahu teman sekelas & lapor ke guru piket.',
          result: 'correct',
          feedback: 'Tindakan yang sangat baik! Menginformasikan orang lain adalah langkah pertama mitigasi.',
          score: 20,
        },
        {
          id: 'C',
          text: 'Ambil foto & update status sosial media.',
          result: 'neutral',
          feedback: 'Dokumentasi boleh, tapi prioritas utama adalah keselamatan. Jangan sampai terlambat bertindak.',
          score: 0,
        },
      ],
      next_level_map: {
        correct: 'banjir_2',
        wrong: 'banjir_2',
        neutral: 'banjir_2',
      },
    },
    {
        level_id: 'banjir_2',
        scene_text:
          'Guru menginstruksikan semua untuk tetap tenang. Tiba-tiba, listrik padam! Air sudah setinggi mata kaki dan stop kontak di dinding mulai terendam. Apa prioritas utamamu?',
        timer_seconds: 8,
        background_image_hint: 'dark school corridor water covering electrical socket',
        sound_effect: 'power_down.mp3',
        options: [
          {
            id: 'A',
            text: 'Selamatkan buku di tas.',
            result: 'wrong',
            feedback: 'Salah! Risiko sengatan listrik dari air jauh lebih berbahaya daripada buku basah.',
            score: -15,
          },
          {
            id: 'B',
            text: 'Ingatkan semua untuk menjauhi dinding & genangan air.',
            result: 'correct',
            feedback: 'Penting! Mencegah risiko sengatan listrik adalah prioritas utama saat banjir di dalam ruangan.',
            score: 20,
          },
          {
            id: 'C',
            text: 'Mencari sumber cahaya darurat seperti HP.',
            result: 'neutral',
            feedback: 'Pencahayaan penting, tapi memastikan semua orang jauh dari bahaya listrik lebih mendesak.',
            score: 5,
          },
        ],
        next_level_map: {
          correct: 'banjir_3',
          wrong: 'banjir_3',
          neutral: 'banjir_3',
        },
      },
    {
      level_id: 'banjir_3',
      scene_text:
        'Air semakin tinggi, sudah selutut. Guru memutuskan untuk evakuasi ke lantai 2. Temanmu terlihat panik dan mau berlari keluar gedung. Apa yang kamu lakukan?',
      timer_seconds: 10,
      background_image_hint: 'school corridor knee-deep water panic student',
      sound_effect: 'water_rising.mp3',
      options: [
        {
          id: 'A',
          text: 'Tenangkan dia dan ajak naik ke lantai 2 bersama-sama.',
          result: 'correct',
          feedback: 'Kerja bagus! Menjaga ketenangan dan mencari tempat lebih tinggi adalah kunci keselamatan.',
          score: 25,
        },
        {
          id: 'B',
          text: 'Biarkan saja, dia harusnya tahu sendiri.',
          result: 'wrong',
          feedback: 'Tidak baik! Dalam keadaan darurat, kita harus saling membantu dan memastikan tidak ada yang panik.',
          score: -15,
        },
        {
          id: 'C',
          text: 'Ikut panik dan berteriak minta tolong.',
          result: 'neutral',
          feedback: 'Teriakanmu bisa menarik perhatian, tapi tidak menyelesaikan masalah dan bisa menambah kepanikan.',
          score: 0,
        },
      ],
      next_level_map: {
        correct: 'banjir_4',
        wrong: 'banjir_4',
        neutral: 'banjir_4',
      },
    },
    {
        level_id: 'banjir_4',
        scene_text:
          'Kalian semua aman di lantai 2. Air di luar terlihat deras. Kamu mendengar kabar ada teman yang terjebak di perpustakaan di lantai 1. Apa yang kamu sarankan kepada tim penyelamat guru?',
        timer_seconds: 12,
        background_image_hint: 'view from second floor window stormy flood',
        sound_effect: 'distant_sirens.mp3',
        options: [
          {
            id: 'A',
            text: 'Sarankan untuk menerobos air secepatnya.',
            result: 'wrong',
            feedback: 'Terlalu berisiko! Arus deras dan benda tersembunyi di bawah air sangat berbahaya.',
            score: -20,
          },
          {
            id: 'B',
            text: 'Tunggu sampai air surut, tidak ada yang bisa dilakukan.',
            result: 'neutral',
            feedback: 'Keselamatan penolong memang utama, tapi mungkin ada cara lain yang lebih aman.',
            score: 5,
          },
          {
            id: 'C',
            text: 'Sarankan mencari tali atau pelampung & membentuk rantai manusia.',
            result: 'correct',
            feedback: 'Solusi cerdas! Menggunakan alat bantu dan kerja sama tim meningkatkan peluang keberhasilan dan keselamatan.',
            score: 30,
          },
        ],
        next_level_map: {
          correct: 'end',
          wrong: 'end',
          neutral: 'end',
        },
      },
  ],
  ending_messages: {
    high: 'Luar biasa! Kamu tenang, sigap, dan bijak dalam mengambil keputusan. Kamu adalah pahlawan tanggap bencana sejati!',
    medium: 'Cukup baik. Kamu tahu beberapa langkah penting, tapi ingat untuk selalu memprioritaskan keselamatan bersama dan berpikir kreatif.',
    low: 'Kamu selamat, tapi keputusanmu masih bisa jauh lebih baik. Pelajari lagi langkah-langkah tanggap darurat agar lebih siap!',
  },
  score_thresholds: {
    high: 60,
    medium: 20,
  },
};
