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
    category: 'Disaster Preparedness',
    title: 'Understanding the Tsunami Threat',
    description:
      'A complete guide to recognizing the signs, preparing yourself, and surviving a tsunami.',
    themeColor: 'oklch(55% 0.15 240)', // Blue
  },
  {
    id: 'slide-02',
    layout: 'section-header',
    category: 'Before the Disaster',
    title: 'What Is a Tsunami?',
    description:
      'A tsunami is a series of giant ocean waves caused by major disturbances on the seabed, such as earthquakes.',
    themeColor: 'oklch(65% 0.1 260)', // Indigo
  },
  {
    id: 'slide-03',
    layout: 'infographic',
    category: 'Key Facts',
    title: 'Natural Tsunami Warning Signs',
    icon: 'AlertTriangle',
    points: [
      'Strong Earthquake: Ground shaking that makes it difficult to stand.',
      'Rumbling Sound: A strange noise like a train coming from the sea.',
      'Receding Sea: The ocean water recedes suddenly and unusually.',
    ],
    themeColor: 'oklch(70% 0.2 50)', // Yellow
    metadata: {
      pointIcons: ['GanttChartSquare', 'Goal', 'Target'],
    },
  },
  {
    id: 'slide-04',
    layout: 'content-with-image',
    category: 'Preparation',
    title: 'Plan Your Evacuation',
    description:
      'Every family should have an evacuation plan. It is important to know the route and safe locations.',
    points: [
      'Identify the nearest high ground.',
      'Determine a safe evacuation route.',
      'Conduct regular evacuation drills.',
    ],
    imageUrl: 'https://cdn.dribbble.com/userupload/27796411/file/original-992aa78e02707e86da76830a224a2f2d.png',
    icon: 'Goal',
    themeColor: 'oklch(60% 0.15 200)', // Cyan
  },
  {
    id: 'slide-05',
    layout: 'bullet-points',
    category: 'Preparation',
    title: 'Prepare a Go-Bag',
    description:
      'This bag contains essential items you need to survive for the first 72 hours.',
    points: [
      'Drinking water and snacks',
      'First aid kit and personal medications',
      'Flashlight, whistle, and battery-powered radio',
      'Copies of important documents',
      'Change of clothes and a blanket',
    ],
    icon: 'ListChecks',
    themeColor: 'oklch(60% 0.18 150)', // Green
  },
  {
    id: 'slide-06',
    layout: 'section-header',
    category: 'During the Disaster',
    title: 'Actions During an Earthquake & Tsunami',
    description:
      'Stay calm and follow these steps to protect yourself and your family.',
    themeColor: 'oklch(65% 0.2 20)', // Orange
  },
  {
    id: 'slide-07',
    layout: 'bullet-points',
    category: 'Action',
    title: 'During an Earthquake: Drop, Cover, Hold On!',
    points: [
      'DROP to the floor.',
      'Take COVER under a sturdy table.',
      'HOLD ON until the shaking stops.',
    ],
    icon: 'ShieldAlert',
    themeColor: 'oklch(60% 0.25 0)', // Red
  },
  {
    id: 'slide-08',
    layout: 'quote',
    category: 'Local Wisdom',
    title: 'Smong: Wisdom from Simeulue',
    description:
      'Enggel mon sao suru, linon bak, mae oek suruik. (If a strong earthquake is followed by the receding of the sea, run immediately to high ground).',
    themeColor: 'oklch(70% 0.1 290)', // Violet
    metadata: {
      author: 'Oral Tradition of Simeulue Island',
    },
  },
  {
    id: 'slide-09',
    layout: 'infographic',
    category: 'After the Disaster',
    title: 'Steps After Surviving',
    icon: 'HeartHandshake',
    points: [
      'Stay at Evacuation Site: Do not return to the coast until authorities declare it safe.',
      'Avoid Damaged Areas: Stay away from damaged buildings and fallen power lines.',
      'Help Others: Check on your neighbors and provide first aid if you are able.',
    ],
    themeColor: 'oklch(65% 0.15 330)', // Magenta
    metadata: {
      pointIcons: ['Info', 'AlertTriangle', 'HeartHandshake'],
    },
  },
  {
    id: 'slide-10',
    layout: 'end-slide',
    category: 'Conclusion',
    title: 'You Are Prepared, You Are Safe!',
    description:
      'Building a disaster-aware culture is our shared responsibility for a safer future.',
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
    title: 'Chapter 1: The Signs of Nature',
    subtitle: 'How nature communicates before a disaster strikes.',
    columns: [
      {
        title: 'The Earth Shakes',
        text: 'A sudden, strong tremor is the first signal. Don\'t panic, seek shelter immediately.',
        imageHint: 'earthquake crack ground',
      },
      {
        title: 'The Strange Sea',
        text: 'The sea water recedes far from the shoreline, revealing the usually submerged seabed. This is not a good sign.',
        imageHint: 'receding ocean tsunami',
      },
      {
        title: 'The Rumbling Sound',
        text: 'A mysterious sound like the roar of a train or a jet engine is heard from the ocean.',
        imageHint: 'stormy ocean waves',
      },
    ],
  },
  {
    id: 'story-02',
    layout: 'storyboard-layout',
    title: 'Chapter 2: Quick Response',
    subtitle: 'Precious seconds after the first sign appears.',
    columns: [
      {
        title: 'Forget Possessions',
        text: 'Life is more valuable. Do not return home to retrieve belongings. Move immediately.',
        imageHint: 'people running away',
      },
      {
        title: 'Seek High Ground',
        text: 'Run away from the coast towards hills or sturdy tall buildings. Every meter of elevation matters.',
        imageHint: 'running uphill mountain',
      },
      {
        title: 'Help the Vulnerable',
        text: 'Assist children, the elderly, and people with disabilities. Make sure no one is left behind.',
        imageHint: 'helping elderly person',
      },
    ],
  },
  {
    id: 'story-03',
    layout: 'storyboard-layout',
    title: 'Chapter 3: Survive & Wait',
    subtitle: 'What to do when you are at the evacuation site.',
    columns: [
      {
        title: 'Stay on High Ground',
        text: 'Tsunami waves can come more than once. Wait for instructions from the authorities before descending.',
        imageHint: 'people on hill watching',
      },
      {
        title: 'Listen for Information',
        text: 'Use a battery-powered radio or mobile phone to monitor the latest information from trusted sources.',
        imageHint: 'person listening radio',
      },
      {
        title: 'Conserve Energy',
        text: 'Save your energy and supplies. Help may take time to arrive.',
        imageHint: 'emergency food kit',
      },
    ],
  },
  {
    id: 'story-04',
    layout: 'storyboard-layout',
    title: 'Chapter 4: Memory & Wisdom',
    subtitle: 'Lessons from "Smong" and the importance of passing on knowledge.',
    columns: [
      {
        title: 'The Wisdom of Smong',
        text: 'In Simeulue, the "Smong" poem saved tens of thousands of lives. Local wisdom proved to be powerful.',
        imageHint: 'ancient scroll manuscript',
      },
      {
        title: 'Tell the Story Again',
        text: 'Share this experience and knowledge with your family and the younger generation.',
        imageHint: 'storytelling community elder',
      },
      {
        title: 'Building Resilience',
        text: 'With knowledge and preparation, we build a more resilient community in the face of disasters.',
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
        category: 'Tsunami Signs',
        question: "Which of the following is the MOST typical natural sign before a tsunami occurs?",
        options: [
            "Heavy rain with thunder",
            "The sea water recedes suddenly and unusually",
            "A rainbow appears over the sea",
            "Very strong winds blowing towards the land"
        ],
        correctAnswer: "The sea water recedes suddenly and unusually",
        explanation: "The drastic receding of the sea is a typical phenomenon that occurs because the sea water is pulled towards the earthquake's epicenter before returning as a giant wave.",
        icon: 'Waves',
        themeColor: 'oklch(60% 0.15 200)', // Cyan
    },
    {
        id: 'quiz-2',
        layout: 'quiz-card',
        category: 'Earthquake Action',
        question: "What is the acronym for the action to be taken during an earthquake?",
        options: [
            "Run, Jump, Hide",
            "Stand, Look, Wait",
            "Drop, Cover, Hold On",
            "Call, Record, Share"
        ],
        correctAnswer: "Drop, Cover, Hold On",
        explanation: "The 'Drop, Cover, Hold On' method is the international standard for protecting yourself from debris during an earthquake.",
        icon: 'ShieldAlert',
        themeColor: 'oklch(60% 0.25 0)', // Red
    },
    {
        id: 'quiz-3',
        layout: 'quiz-card',
        category: 'Go-Bag',
        question: "What item is NOT necessary in a Go-Bag?",
        options: [
            "First aid kit and personal medications",
            "Flashlight and spare batteries",
            "Portable game console",
            "Copies of important documents"
        ],
        correctAnswer: "Portable game console",
        explanation: "A Go-Bag focuses on essential survival needs. Entertainment like a game console is not a priority.",
        icon: 'ListChecks',
        themeColor: 'oklch(60% 0.18 150)', // Green
    }
];

export interface PrintableContentData {
    id: string;
    layout: 'printable-a4';
    mainTitle: string;
    mainIcon: string;
    themeColor: string; // oklch color
    intro: {
        title: string;
        text: string;
    };
    sections: {
        title: string;
        icon: string;
        points: string[];
    }[];
    quote: {
        text: string;
        author: string;
    };
    qrCodeUrl: string;
}

export const printableContentTemplate: PrintableContentData = {
    id: 'printable-tsunami-01',
    layout: 'printable-a4',
    mainTitle: 'Tsunami Preparedness Guide',
    mainIcon: 'ShieldAlert',
    themeColor: 'oklch(55% 0.15 240)', // Blue
    intro: {
        title: 'What is a Tsunami?',
        text: 'A tsunami is a series of giant ocean waves caused by disturbances on the seabed, such as earthquakes, which can cause severe damage in coastal areas.'
    },
    sections: [
        {
            title: 'Warning Signs',
            icon: 'AlertTriangle',
            points: [
                'A strong earthquake that makes it difficult to stand.',
                'The sea water recedes suddenly and unusually.',
                'A strange rumbling sound from the ocean.'
            ]
        },
        {
            title: 'During an Earthquake',
            icon: 'GanttChartSquare',
            points: [
                'DROP under a sturdy table.',
                'COVER your head and neck.',
                'HOLD ON until the shaking stops.'
            ]
        },
        {
            title: 'Evacuate Immediately',
            icon: 'Goal',
            points: [
                'After the shaking stops, run to high ground immediately.',
                'Do not wait for an official warning if you feel the natural signs.',
                'Follow the designated evacuation routes.'
            ]
        },
        {
            title: 'Go-Bag',
            icon: 'ListChecks',
            points: [
                'Prepare a bag with: water, snacks, first aid, flashlight, whistle, and important documents.',
                'One bag for each family member.',
            ]
        }
    ],
    quote: {
        text: 'Enggel mon sao suru, linon bak, mae oek suruik. (If a strong earthquake is followed by the receding of the sea, run immediately to high ground).',
        author: '"Smong" Local Wisdom, Simeulue'
    },
    qrCodeUrl: 'https://waveofvoice.com/explore'
}
