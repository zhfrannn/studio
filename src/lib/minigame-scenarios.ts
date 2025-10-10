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

// Example Scenario 1: Flood at School
export const floodScenario: GameScenario = {
  scenario_id: 'banjir_smp_1',
  title: 'Banjir di Sekolah',
  description:
    'Hujan deras tak henti-henti, dan air mulai memasuki halaman sekolahmu. Kamu harus bertindak cepat dan tepat untuk memastikan semua orang aman.',
  starting_level_id: 'banjir_1',
  levels: [
    {
      level_id: 'banjir_1',
      scene_text:
        'Air mulai menggenang setinggi mata kaki di koridor. Listrik masih menyala. Apa tindakan pertamamu?',
      timer_seconds: 8,
      background_image_hint: 'school hallway ankle-deep water',
      sound_effect: 'rain_heavy.mp3',
      options: [
        {
          id: 'A',
          text: 'Lari ke kantin untuk mengamankan jajanan.',
          result: 'wrong',
          feedback: 'Salah! Makanan tidak sepenting keselamatan dari sengatan listrik.',
          score: -10,
        },
        {
          id: 'B',
          text: 'Segera cari panel listrik utama dan matikan.',
          result: 'correct',
          feedback: 'Tindakan cerdas! Mencegah risiko korsleting dan sengatan listrik adalah prioritas utama.',
          score: 20,
        },
        {
          id: 'C',
          text: 'Naik ke atas meja dan menunggu.',
          result: 'neutral',
          feedback: 'Kamu aman untuk sementara, tapi sumber bahaya (listrik) belum teratasi.',
          score: 5,
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
        'Listrik sudah padam. Air semakin tinggi, sudah selutut. Temanmu terlihat panik dan mau berlari keluar gedung. Apa yang kamu lakukan?',
      timer_seconds: 10,
      background_image_hint: 'school corridor knee-deep water panic',
      sound_effect: 'water_rising.mp3',
      options: [
        {
          id: 'A',
          text: 'Tenangkan dia dan ajak naik ke lantai 2 bersama-sama.',
          result: 'correct',
          feedback: 'Kerja bagus! Menjaga ketenangan dan mencari tempat lebih tinggi adalah kunci.',
          score: 20,
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
        correct: 'end',
        wrong: 'end',
        neutral: 'end',
      },
    },
  ],
  ending_messages: {
    high: 'Luar biasa! Kamu tenang, sigap, dan bijak. Kamu adalah pahlawan tanggap bencana sejati!',
    medium: 'Cukup baik. Kamu tahu beberapa langkah penting, tapi ingat untuk selalu prioritaskan keselamatan bersama.',
    low: 'Kamu selamat, tapi keputusanmu bisa lebih baik. Pelajari lagi langkah-langkah tanggap darurat, ya!',
  },
  score_thresholds: {
    high: 30,
    medium: 10,
  },
};
