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
  scenario_id: 'flood_smp_1_ext',
  title: 'Flood at School',
  description:
    'You are a middle school student. It\'s raining heavily, and water is starting to enter your school grounds. You must act quickly and correctly to ensure everyone is safe.',
  starting_level_id: 'banjir_1',
  levels: [
    {
      level_id: 'banjir_1',
      scene_text:
        'It\'s raining very hard. You see water starting to pool on the ceremony field and creep into the hallways. There has been no announcement from the teachers yet. What do you do?',
      timer_seconds: 10,
      background_image_hint: 'school hallway ankle-deep water raining',
      sound_effect: 'rain_heavy.mp3',
      options: [
        {
          id: 'A',
          text: 'Continue playing in the classroom.',
          result: 'wrong',
          feedback: 'Danger! Ignoring the early signs can be fatal. The water can rise quickly.',
          score: -10,
        },
        {
          id: 'B',
          text: 'Tell your classmates & report to the teacher on duty.',
          result: 'correct',
          feedback: 'Excellent action! Informing others is the first step in mitigation.',
          score: 20,
        },
        {
          id: 'C',
          text: 'Take a photo & update your social media status.',
          result: 'neutral',
          feedback: 'Documentation is fine, but safety is the top priority. Don\'t be late to act.',
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
          'The teacher instructs everyone to stay calm. Suddenly, the power goes out! The water is now ankle-deep and the wall sockets are starting to get submerged. What is your main priority?',
        timer_seconds: 8,
        background_image_hint: 'dark school corridor water covering electrical socket',
        sound_effect: 'power_down.mp3',
        options: [
          {
            id: 'A',
            text: 'Save the books in your bag.',
            result: 'wrong',
            feedback: 'Wrong! The risk of electric shock from the water is far more dangerous than wet books.',
            score: -15,
          },
          {
            id: 'B',
            text: 'Remind everyone to stay away from the walls & puddles.',
            result: 'correct',
            feedback: 'Important! Preventing the risk of electric shock is the top priority during an indoor flood.',
            score: 20,
          },
          {
            id: 'C',
            text: 'Look for an emergency light source like a phone.',
            result: 'neutral',
            feedback: 'Lighting is important, but ensuring everyone is away from electrical hazards is more urgent.',
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
        'The water is getting higher, it\'s now knee-deep. The teacher decides to evacuate to the 2nd floor. Your friend looks panicked and wants to run out of the building. What do you do?',
      timer_seconds: 10,
      background_image_hint: 'school corridor knee-deep water panic student',
      sound_effect: 'water_rising.mp3',
      options: [
        {
          id: 'A',
          text: 'Calm them down and go up to the 2nd floor together.',
          result: 'correct',
          feedback: 'Great job! Staying calm and seeking higher ground are key to safety.',
          score: 25,
        },
        {
          id: 'B',
          text: 'Just leave them, they should know better.',
          result: 'wrong',
          feedback: 'Not good! In an emergency, we must help each other and ensure no one panics.',
          score: -15,
        },
        {
          id: 'C',
          text: 'Panic too and scream for help.',
          result: 'neutral',
          feedback: 'Your scream might attract attention, but it doesn\'t solve the problem and could increase panic.',
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
          'You are all safe on the 2nd floor. The water outside looks rough. You hear that a friend is trapped in the library on the 1st floor. What do you suggest to the teacher rescue team?',
        timer_seconds: 12,
        background_image_hint: 'view from second floor window stormy flood',
        sound_effect: 'distant_sirens.mp3',
        options: [
          {
            id: 'A',
            text: 'Suggest wading through the water as quickly as possible.',
            result: 'wrong',
            feedback: 'Too risky! Strong currents and hidden objects under the water are very dangerous.',
            score: -20,
          },
          {
            id: 'B',
            text: 'Wait for the water to recede, there\'s nothing that can be done.',
            result: 'neutral',
            feedback: 'Rescuer safety is paramount, but there might be other, safer ways to help.',
            score: 5,
          },
          {
            id: 'C',
            text: 'Suggest finding a rope or floatation device & forming a human chain.',
            result: 'correct',
            feedback: 'Smart solution! Using tools and teamwork increases the chances of success and safety.',
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
    high: 'Outstanding! You were calm, quick, and wise in your decision-making. You are a true disaster response hero!',
    medium: 'Pretty good. You know some important steps, but remember to always prioritize collective safety and think creatively.',
    low: 'You survived, but your decisions could have been much better. Study the emergency response steps again to be better prepared!',
  },
  score_thresholds: {
    high: 60,
    medium: 20,
  },
};
