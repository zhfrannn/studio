
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

export interface Video {
  title:string;
  description: string;
  embedUrl: string;
  info?: string;
}

export interface ComicPanel {
  title: string;
  text: string;
  imageUrl: string;
  imageHint: string;
}

export interface Comic {
  title: string;
  description: string;
  panels: ComicPanel[];
}


export interface InteractiveContent {
  quiz?: Quiz;
  video: Video;
  comic?: Comic;
}

const smongComic: Comic = {
    title: 'Digital Comic: The Wisdom of Smong',
    description: 'Follow the story of how the local wisdom of Smong saved thousands of lives in an engaging comic strip format.',
    panels: [
        {
            title: 'Under the Banyan Tree',
            text: '"Grandmother taught us the ancient warning under the old banyan tree..."',
            imageUrl: 'https://i.ibb.co/7dWp6cGz/Gemini-Generated-Image-y3jausy3jausy3ja.png',
            imageHint: 'elder teaching children'
        },
        {
            title: 'The Earth Shakes',
            text: '"Suddenly, the ground shook violently. We knew this was no ordinary earthquake."',
            imageUrl: 'https://i.ibb.co/sv2Mhw6F/Gemini-Generated-Image-ubwgstubwgstubwg.png',
            imageHint: 'earthquake shaking village'
        },
        {
            title: 'Run! Don\'t Go Back!',
            text: '"People screamed, \'Smong! Smong!\' while pointing towards the receding sea."',
            imageUrl: 'https://i.ibb.co/d4Zc2dW2/Gemini-Generated-Image-nep5q4nep5q4nep5.png',
            imageHint: 'people running uphill'
        },
        {
            title: 'Towards the Hills',
            text: '"We all ran as fast as we could towards the hills, leaving everything behind."',
            imageUrl: 'https://i.ibb.co/0yrct9db/Gemini-Generated-Image-o3lyr0o3lyr0o3ly.png',
            imageHint: 'crowd climbing hill'
        },
        {
            title: 'The Raging Ocean',
            text: '"From the top of the hill, we saw a giant wave crash into our village."',
            imageUrl: 'https://i.ibb.co/GQSD4TWr/Gemini-Generated-Image-muisyomuisyomuis.png',
            imageHint: 'tsunami wave hitting coast'
        },
        {
            title: 'Gratitude & Lessons',
            text: '"We survived because we listened to our ancestors. Smong was our savior."',
            imageUrl: 'https://i.ibb.co/N2td66Hx/Gemini-Generated-Image-vpirzivpirzivpir.png',
            imageHint: 'survivors watching sunrise'
        },
    ],
};

const bakauComic: Comic = {
    title: 'Comic: Mangrove Forest, Guardian of the Coast',
    description: 'An inspiring story of how a community united to replant their natural fortress.',
    panels: [
        {
            title: 'The Eroding Coastline',
            text: 'In the past, our coast was constantly being eroded by storms. Houses near the beach were slowly destroyed.',
            imageUrl: 'https://i.ibb.co/PZHd26b4/Gemini-Generated-Image-421pmy421pmy421p.png',
            imageHint: 'eroded coastline storm'
        },
        {
            title: 'Remembering the Elders\' Advice',
            text: 'We remembered the stories of our elders, that the mangrove forest was our lost natural fortress.',
            imageUrl: 'https://i.ibb.co/JWpk16NX/Gemini-Generated-Image-rsvte8rsvte8rsvt.png',
            imageHint: 'village elder storytelling'
        },
        {
            title: 'Planting Seeds of Hope',
            text: 'Together, the youth and the elderly, we began to replant mangrove seedlings along the coast.',
            imageUrl: 'https://i.ibb.co/qLMNkxFd/Gemini-Generated-Image-2b2mqh2b2mqh2b2m.png',
            imageHint: 'community planting mangroves'
        },
        {
            title: 'Challenges & Failures',
            text: 'It was difficult at first, many seedlings failed to grow. But we did not give up and kept trying.',
            imageUrl: 'https://i.ibb.co/fVtfWBkG/Gemini-Generated-Image-6n753u6n753u6n75.png',
            imageHint: 'failed mangrove sapling'
        },
        {
            title: 'The Natural Fortress Grows Strong',
            text: 'Now, the mangrove forest has grown dense. Its strong roots grip the soil, holding back the waves.',
            imageUrl: 'https://i.ibb.co/cKZnnyh5/Gemini-Generated-Image-t9i448t9i448t9i4.png',
            imageHint: 'dense mangrove forest'
        },
        {
            title: 'Life Returns',
            text: 'This forest not only protects the village, but also becomes a home for fish and crabs, providing us with a new livelihood.',
            imageUrl: 'https://i.ibb.co/bRz9Qck7/Gemini-Generated-Image-4rapqm4rapqm4rap.png',
            imageHint: 'fish crabs mangroves'
        },
    ],
};

const dapurUmumComic: Comic = {
    title: 'Comic: The Community Kitchen of Peace',
    description: 'How a simple kitchen re-wove the threads of brotherhood that were once torn.',
    panels: [
        {
            title: 'Post-Conflict Wounds',
            text: 'After the conflict ended, there were still many wounds and distrust among us. It was difficult to start over.',
            imageUrl: 'https://i.ibb.co/JWCgC8W2/Gemini-Generated-Image-higpgmhigpgmhigp.png',
            imageHint: 'sad village atmosphere'
        },
        {
            title: 'A Simple Idea: Food',
            text: 'Some of us, the mothers, thought: everyone needs to eat, and food can unite.',
            imageUrl: 'https://i.ibb.co/zWHC2Vf7/Gemini-Generated-Image-6ohms66ohms66ohm.png',
            imageHint: 'women discussing plan'
        },
        {
            title: 'Starting the Community Kitchen',
            text: 'We set up a simple kitchen. Anyone could come to eat, and anyone could help cook.',
            imageUrl: 'https://i.ibb.co/FLFgPs27/Gemini-Generated-Image-etuhnbetuhnbetuh.png',
            imageHint: 'setting up community kitchen'
        },
        {
            title: 'Weaving Stories Over the Stove',
            text: 'While cutting vegetables and stirring curry, we began to talk, sharing stories, laughter, and tears.',
            imageUrl: 'https://i.ibb.co/gZymfGtt/Gemini-Generated-Image-p1tl3p1tl3p1tl3p.png',
            imageHint: 'community kitchen cooking'
        },
        {
            title: 'A Space for Reconciliation',
            text: 'This kitchen became more than a place to eat; it became a reconciliation space where dividing walls collapsed.',
            imageUrl: 'https://i.ibb.co/4ntNZGTH/Gemini-Generated-Image-5y1cbj5y1cbj5y1c.png',
            imageHint: 'people talking laughing'
        },
        {
            title: 'Peace from a Plate of Rice',
            text: 'We learned that peace can start from the simplest thing: a plate of warm rice and an open heart.',
            imageUrl: 'https://i.ibb.co/T3f302F/Gemini-Generated-Image-rmhvlgrmhvlgrmhv.png',
            imageHint: 'people eating together happily'
        },
    ],
};

const lumbungPadiComic: Comic = {
    title: 'Comic: Communal Rice Barn',
    description: 'A story about the mutual help of the Gayo community in facing the lean season.',
    panels: [
        {
            title: 'Uncertain Harvests',
            text: 'In the Gayo highlands, the weather is not always predictable. Sometimes the harvest is abundant, sometimes it fails completely.',
            imageUrl: 'https://i.ibb.co/XrSWCszM/Gemini-Generated-Image-mfguf9mfguf9mfgu.png',
            imageHint: 'gayo highlands farming'
        },
        {
            title: 'Reviving Tradition',
            text: 'We revived the tradition of a communal barn. Every family sets aside a portion of their harvest.',
            imageUrl: 'https://i.ibb.co/TxLMKmZd/Gemini-Generated-Image-o6m8b8o6m8b8o6m8.png',
            imageHint: 'putting rice into communal barn'
        },
        {
            title: 'Social Safety Net',
            text: 'When a family faces crop failure, they can take from this barn without interest or debt.',
            imageUrl: 'https://i.ibb.co/N2Hcz9Q6/Gemini-Generated-Image-nzlk8inzlk8inzlk.png',
            imageHint: 'sharing food community'
        },
        {
            title: 'Rich in Brotherhood',
            text: 'This barn is a symbol of our unity. By sharing, we all become stronger.',
            imageUrl: 'https://i.ibb.co/s9nftm6k/Gemini-Generated-Image-2yb53r2yb53r2yb5.png',
            imageHint: 'happy farming community'
        },
    ],
};

const bahTangseComic: Comic = {
    title: 'Comic: Bah Tangse, The Raging River',
    description: 'A bitter lesson from Tangse about the importance of protecting nature.',
    panels: [
        {
            title: 'The Tense Night',
            text: 'The rain fell relentlessly. Suddenly, we heard a rumbling sound that was not from thunder.',
            imageUrl: 'https://i.ibb.co/8gC04Tds/Gemini-Generated-Image-tzd2r9tzd2r9tzd2.png',
            imageHint: 'dark stormy night village'
        },
        {
            title: 'The Flash Flood Arrives',
            text: 'The river water overflowed wildly, its color pitch black, carrying dozens of giant logs.',
            imageUrl: 'https://i.ibb.co/MxDVKgQ8/Gemini-Generated-Image-ptyvfqptyvfqptyv.png',
            imageHint: 'raging flash flood logs'
        },
        {
            title: 'The Warning Cry',
            text: 'The village head shouted through the mosque\'s loudspeaker, "The water is rising! Save yourselves! Run to high ground!"',
            imageUrl: 'https://i.ibb.co/Q31hqKRj/Gemini-Generated-Image-mbv9yumbv9yumbv9.png',
            imageHint: 'mosque speaker warning'
        },
        {
            title: 'Running to High Ground',
            text: 'In the pitch dark, we ran as fast as we could to the hills, with only the clothes on our backs.',
            imageUrl: 'https://i.ibb.co/8gvn36Hj/Gemini-Generated-Image-xbiewaxbiewaxbie.png',
            imageHint: 'people running uphill dark'
        },
        {
            title: 'The Muddy Morning',
            text: 'The next morning, only thick mud and debris remained. We realized this was the result of illegal logging.',
            imageUrl: 'https://i.ibb.co/gMTdhPdj/Gemini-Generated-Image-diwjbbdiwjbbdiwj.png',
            imageHint: 'village destroyed mud'
        },
        {
            title: 'The Lesson & The Vow',
            text: 'Bah Tangse was a bitter lesson. Since then, we have vowed to protect and replant our forests.',
            imageUrl: 'https://i.ibb.co/gMvs88K7/Gemini-Generated-Image-6ijxun6ijxun6ijx.png',
            imageHint: 'community planting trees'
        }
    ],
};

const apiBukitComic: Comic = {
  title: 'Comic: Fire on the Barisan Hills',
  description: 'The struggle of the Fire-Care Community to protect the Gayo forests.',
  panels: [
    {
      title: 'The Dry Season Threat',
      text: 'Every dry season, this beautiful pine forest becomes very vulnerable to fire. A small spark can be a disaster.',
      imageUrl: 'https://i.ibb.co/Nd4BCwnh/Gemini-Generated-Image-mx2j89mx2j89mx2j.png',
      imageHint: 'dry pine forest'
    },
    {
      title: 'Voluntary Patrols',
      text: 'We formed the Fire-Care Community, patrolling voluntarily to prevent fires.',
      imageUrl: 'https://i.ibb.co/xQ84Wh9/Gemini-Generated-Image-fttc78fttc78fttc.png',
      imageHint: 'community patrolling forest'
    },
    {
        title: 'Educating Residents',
        text: 'Most importantly, we educate residents not to clear land by burning.',
        imageUrl: 'https://i.ibb.co/YwZvdXm/Gemini-Generated-Image-k3ov2dk3ov2dk3ov.png',
        imageHint: 'community meeting education'
    },
    {
      title: 'Extinguishing the Fire',
      text: 'When a fire starts, we work together with whatever equipment we have to extinguish it before it grows.',
      imageUrl: 'https://i.ibb.co/wrwhkWjG/Gemini-Generated-Image-1tus9y1tus9y1tus.png',
      imageHint: 'people fighting forest fire'
    },
    {
        title: 'A Shared Responsibility',
        text: 'This is not the government\'s job; it is our shared responsibility. This forest is our water source.',
        imageUrl: 'https://i.ibb.co/yFC19D6y/Gemini-Generated-Image-icr3a2icr3a2icr3.png',
        imageHint: 'community shaking hands'
    },
    {
      title: 'Peace with Nature',
      text: 'Protecting this forest is our way of making peace with nature, for the future of our children.',
      imageUrl: 'https://i.ibb.co/39bW7xJz/Gemini-Generated-Image-x2zpffx2zpffx2zp.png',
      imageHint: 'green forest sunrise'
    }
  ]
};

const kopiGayoComic: Comic = {
  title: 'Comic: Gayo Coffee, The Aroma of Peace',
  description: 'The story of the revival of Gayo coffee farmers post-conflict.',
  panels: [
    {
      title: 'The Abandoned Plantations',
      text: 'During the conflict, many of our coffee plantations were abandoned and overgrown with weeds.',
      imageUrl: 'https://i.ibb.co/N612z0S8/Gemini-Generated-Image-fc3gznfc3gznfc3g.png',
      imageHint: 'abandoned coffee plantation'
    },
    {
      title: 'Returning from Scratch',
      text: 'After peace, we returned. Starting again from scratch was very hard, but we saw hope.',
      imageUrl: 'https://i.ibb.co/qYDz7XHx/Gemini-Generated-Image-72mog772mog772mo.png',
      imageHint: 'farmer looking at overgrown field'
    },
    {
      title: 'Hope in a Coffee Bean',
      text: 'We worked hard, learned better farming techniques, seeing new hope in every coffee bean.',
      imageUrl: 'https://i.ibb.co/Gr8hPCK/Gemini-Generated-Image-a3lug5a3lug5a3lu.png',
      imageHint: 'farmer holding coffee beans'
    },
    {
      title: 'Building a Cooperative',
      text: 'We formed a cooperative to support each other, learn new techniques, and market the coffee together.',
      imageUrl: 'https://i.ibb.co/gL1dyvWm/Gemini-Generated-Image-wneukxwneukxwneu.png',
      imageHint: 'farmers meeting cooperative'
    },
    {
        title: 'Becoming Known to the World',
        text: 'Slowly but surely, Gayo coffee became known to the world, bringing a good name to our region.',
        imageUrl: 'https://i.ibb.co/BxTrr9y/Gemini-Generated-Image-ntsba2ntsba2ntsb.png',
        imageHint: 'coffee export shipping'
    },
    {
      title: 'The Aroma of Peace',
      text: 'Now, the world-renowned aroma of Gayo coffee is the aroma of hard work, hope, and the peace we have achieved.',
      imageUrl: 'https://i.ibb.co/65QLYw8/Gemini-Generated-Image-xp78xcxp78xcxp78.png',
      imageHint: 'cup of steaming gayo coffee'
    }
  ]
};

const pemudaAdatComic: Comic = {
  title: 'Comic: The Youth Guardians of Custom',
  description: 'Reviving the Seudati dance to keep youth away from violence.',
  panels: [
    {
      title: 'Misdirected Energy',
      text: 'Post-conflict, many young people lost their way. Their great energy was sometimes channeled into negative things.',
      imageUrl: 'https://i.ibb.co/GvdSwzQf/Gemini-Generated-Image-3pu65m3pu65m3pu6.png',
      imageHint: 'disaffected youth group'
    },
    {
      title: 'A Calling',
      text: 'We, some of the older youth, felt we had to do something for the community.',
      imageUrl: 'https://i.ibb.co/hFpC4fNv/Gemini-Generated-Image-2ct3h82ct3h82ct3.png',
      imageHint: 'youth leaders discussing'
    },
    {
      title: 'Reviving the Studio',
      text: 'We decided to revive the Seudati dance troupe, a dance that teaches discipline and cooperation.',
      imageUrl: 'https://i.ibb.co/FqH0xKx3/Gemini-Generated-Image-qq18guqq18guqq18.png',
      imageHint: 'reopening old building'
    },
    {
      title: 'Practicing Together',
      text: 'It was difficult at first, but slowly our troupe began to grow. The youth channeled their energy into the dance.',
      imageUrl: 'https://i.ibb.co/d05SD259/Gemini-Generated-Image-esu33aesu33aesu3.png',
      imageHint: 'youth practicing seudati dance'
    },
    {
        title: 'Positive Expression',
        text: 'The studio became a safe space for youth to express themselves positively and learn noble values.',
        imageUrl: 'https://i.ibb.co/NgQtKFvQ/Gemini-Generated-Image-9kobq9kobq9kobq9.png',
        imageHint: 'young dancers smiling'
    },
    {
      title: 'A Bridge Between Villages',
      text: 'Through dance, we build bridges between villages and create a stronger community bond.',
      imageUrl: 'https://i.ibb.co/MDmNGYvr/Gemini-Generated-Image-sqvrxesqvrxesqvr.png',
      imageHint: 'seudati dance performance'
    }
  ]
};

const perempuanPenganyamComic: Comic = {
  title: 'Comic: The Women Weavers of Hope',
  description: 'The story of tsunami widows who rose up by forming a weaving craft group.',
  panels: [
    {
      title: 'Grief and Uncertainty',
      text: 'The tsunami took our husbands and our homes, leaving us in grief and uncertainty.',
      imageUrl: 'https://i.ibb.co/JwwT5gf9/Gemini-Generated-Image-d4jht0d4jht0d4jh.png',
      imageHint: 'sad woman looking at ocean'
    },
    {
      title: 'Weaving as Therapy',
      text: 'We gathered and began weaving with pandan leaves. While weaving, we shared stories and strengthened each other.',
      imageUrl: 'https://i.ibb.co/N2shQ8zW/Gemini-Generated-Image-lt0y0glt0y0glt0y.png',
      imageHint: 'women weaving together'
    },
    {
        title: 'Creations from the Heart',
        text: 'This weaving is not just a mat or a bag; it is our therapy and the outpouring of our hearts.',
        imageUrl: 'https://i.ibb.co/9m56wN9M/Gemini-Generated-Image-6hbsja6hbsja6hbs.png',
        imageHint: 'closeup hands weaving'
    },
    {
      title: 'Economic Independence',
      text: 'Slowly, our products became known and orders came in. We earned our own income.',
      imageUrl: 'https://i.ibb.co/DDGWWjDV/Gemini-Generated-Image-2onqdx2onqdx2onq.png',
      imageHint: 'woven bags and mats market'
    },
    {
        title: 'Becoming Empowered',
        text: 'We are no longer just victims; we are empowered survivors who can support our families.',
        imageUrl: 'https://i.ibb.co/RkGvwjR8/Gemini-Generated-Image-pucmhfpucmhfpucm.png',
        imageHint: 'woman proudly holding woven bag'
    },
    {
      title: 'A New Family',
      text: 'This group became our new family, a place where we weave back hope for the future.',
      imageUrl: 'https://i.ibb.co/846HCc3H/Gemini-Generated-Image-sh6lbush6lbush6l.png',
      imageHint: 'group of happy women smiling'
    }
  ]
};

const arsitekturComic: Comic = {
  title: 'Comic: Stilt House Architecture',
  description: 'Rediscovering the wisdom of Rumoh Aceh as inspiration for earthquake-resistant buildings.',
  panels: [
    {
      title: 'The Enduring Rumoh Aceh',
      text: 'When the earthquake and tsunami destroyed many modern buildings, we saw many Rumoh Aceh still standing strong.',
      imageUrl: 'https://i.ibb.co/ycjpYJDF/Gemini-Generated-Image-k7l0glk7l0glk7l0.png',
      imageHint: 'aceh house after tsunami'
    },
    {
      title: 'A Flexible Construction',
      text: 'The stilt structure with its flexible wooden construction proved capable of absorbing earthquake shocks.',
      imageUrl: 'https://i.ibb.co/Q7VdjXBn/Gemini-Generated-Image-c9fxgzc9fxgzc9fx.png',
      imageHint: 'diagram of stilt house structure'
    },
    {
      title: 'Adaptive to the Environment',
      text: 'The space underneath the house is not only versatile but also provides a path for water in case of floods.',
      imageUrl: 'https://i.ibb.co/KdDRNDF/Gemini-Generated-Image-imaeuhimaeuhimae.png',
      imageHint: 'water flowing under stilt house'
    },
    {
        title: 'An Eye-Opener',
        text: 'This opened our eyes. The architecture of our ancestors is extraordinary and highly relevant.',
        imageUrl: 'https://i.ibb.co/PG545YGD/Gemini-Generated-Image-iof1g5iof1g5iof1.png',
        imageHint: 'people studying old house'
    },
    {
        title: 'Inspiration for the Future',
        text: 'We began to advocate for and rebuild houses by adapting the principles of Rumoh Aceh.',
        imageUrl: 'https://i.ibb.co/wrZyYXVc/Gemini-Generated-Image-ywlmvrywlmvrywlm.png',
        imageHint: 'architect drawing new house plan'
    },
    {
      title: 'Building the Future',
      text: 'This is not about returning to the past, but taking the best lessons from the past to build a safer future.',
      imageUrl: 'https://i.ibb.co/JfnLPtj/Gemini-Generated-Image-wo8rv7wo8rv7wo8r.png',
      imageHint: 'modern house with traditional aceh design'
    }
  ]
};

const seniTraumaComic: Comic = {
  title: 'Comic: Art Against Trauma',
  description: 'How young Banda Aceh artists use murals to heal the city.',
  panels: [
    {
      title: 'The Silent Walls Post-Tsunami',
      text: 'Post-tsunami Banda Aceh was full of silent walls that witnessed the tragedy. The atmosphere felt heavy.',
      imageUrl: 'https://i.ibb.co/PZFB87MM/Gemini-Generated-Image-yr5r75yr5r75yr5r.png',
      imageHint: 'ruined city wall'
    },
    {
      title: 'A Call for Artists',
      text: 'As artists, we felt called to do something, to heal the city\'s wounds in our own way.',
      imageUrl: 'https://i.ibb.co/qMvHYSfd/Gemini-Generated-Image-9zglxq9zglxq9zgl.png',
      imageHint: 'group of artists planning'
    },
    {
      title: 'Giving New Color',
      text: 'We started painting murals on public walls, not to forget, but to give new color to memory.',
      imageUrl: 'https://i.ibb.co/5XGSLv5c/Gemini-Generated-Image-d5p172d5p172d5p1.png',
      imageHint: 'artist painting mural on wall'
    },
    {
        title: 'Therapy Through Art',
        text: 'This process of painting together became therapy for us and the community. The gloomy walls became an open gallery.',
        imageUrl: 'https://i.ibb.co/1GzKfrWz/Gemini-Generated-Image-2hh0ld2hh0ld2hh0.png',
        imageHint: 'colorful community mural'
    },
    {
        title: 'Hope in Every Stroke',
        text: 'We painted about hope, resilience, togetherness, and the undying beauty of Aceh.',
        imageUrl: 'https://i.ibb.co/3ymkCsBm/Gemini-Generated-Image-363z96363z96363z.png',
        imageHint: 'closeup mural painting hope'
    },
    {
      title: 'Healing the City\'s Wounds',
      text: 'Art became our way of healing the city\'s wounds and our own souls, transforming trauma into hope.',
      imageUrl: 'https://i.ibb.co/pjr6h7s0/Gemini-Generated-Image-ikoughikoughikou.png',
      imageHint: 'children interacting with mural'
    }
  ]
};

const nelayanComic: Comic = {
  title: 'Comic: The Wisdom of Fishermen',
  description: 'The story of traditional fishermen who read the signs of nature to sail.',
  panels: [
    {
      title: 'The Sky and Sea Compass',
      text: 'We fishermen don\'t have fancy GPS. Our compass is the sky and the sea itself.',
      imageUrl: 'https://i.ibb.co/zhj5vRfQ/Gemini-Generated-Image-yz9meiyz9meiyz9m.png',
      imageHint: 'fisherman at night starry sky'
    },
    {
      title: 'Reading the Constellations',
      text: 'My father taught me how to read the Orion constellation, or \'Bintang Tiga\', to know the way home.',
      imageUrl: 'https://i.ibb.co/NgbyjjMf/Gemini-Generated-Image-ped9eaped9eaped9.png',
      imageHint: 'orion constellation over sea'
    },
    {
      title: 'Signs from Animals',
      text: 'If dolphins swim close to the shore, it is a sign the weather will be bad. We learn from animal behavior.',
      imageUrl: 'https://i.ibb.co/XZQgHWxH/Gemini-Generated-Image-a8gbcxa8gbcxa8gb.png',
      imageHint: 'dolphins swimming near coast'
    },
    {
        title: 'The Color of Water and Fish',
        text: 'We know when fish gather just by looking at the color of the water and the type of birds flying above.',
        imageUrl: 'https://i.ibb.co/gCpZCzB/Gemini-Generated-Image-4mvuio4mvuio4mvu.png',
        imageHint: 'seabirds diving for fish'
    },
    {
        title: 'Generational Heritage',
        text: 'This knowledge is not in books; it is passed down from father to son, from one generation of fishermen to the next.',
        imageUrl: 'https://i.ibb.co/kVgdrTbg/Gemini-Generated-Image-h9xlylh9xlylh9xl.png',
        imageHint: 'father teaching son on boat'
    },
    {
      title: 'The Science of Life',
      text: 'This is the science of life that allows us to be friends with the ocean and return home safely.',
      imageUrl: 'https://i.ibb.co/4wvv5KV3/Gemini-Generated-Image-lrl3ielrl3ielrl3.png',
      imageHint: 'fishing boat returning at sunrise'
    }
  ]
};

const sumurTuaComic: Comic = {
  title: 'Comic: The Old Well, Source of Life',
  description: 'How an ancient well saved a village from drought.',
  panels: [
    {
      title: 'The Long Drought',
      text: 'The dry season that year was very long. Our rivers and modern wells dried up. We began to despair.',
      imageUrl: 'https://i.ibb.co/6JJCYJZw/Gemini-Generated-Image-48cp6g48cp6g48cp.png',
      imageHint: 'cracked dry earth'
    },
    {
      title: 'Remembering a Legacy',
      text: 'A village elder remembered an old well on the edge of the forest that had long been unused.',
      imageUrl: 'https://i.ibb.co/1tC6SMg3/Gemini-Generated-Image-as3nydas3nydas3n.png',
      imageHint: 'old man pointing towards forest'
    },
    {
      title: 'Cleaning the Well',
      text: 'Hesitantly, we cleaned the well, which was built with stone rings and covered by a large tree.',
      imageUrl: 'https://i.ibb.co/RG9HYJVM/Gemini-Generated-Image-1uj5031uj5031uj5.png',
      imageHint: 'community cleaning old well'
    },
    {
      title: 'A Miraculous Spring',
      text: 'Miraculously! At the bottom, there was still clear water that never ran out. Our ancestors built it right on a large spring.',
      imageUrl: 'https://i.ibb.co/N2DZQFsc/Gemini-Generated-Image-4o62wj4o62wj4o62.png',
      imageHint: 'clear water in old well'
    },
    {
        title: 'Source of Life',
        text: 'That old well became the only source of clean water for the entire village for the rest of the dry season.',
        imageUrl: 'https://i.ibb.co/BKNPTWgd/Gemini-Generated-Image-279br9279br9279b.png',
        imageHint: 'people queuing for water'
    },
    {
        title: 'A Valuable Lesson',
        text: 'We learned that there is wisdom in the relics of the past that we must preserve.',
        imageUrl: 'https://i.ibb.co/FLhZFwvy/Gemini-Generated-Image-t1ww3it1ww3it1ww.png',
        imageHint: 'community gathered around old well'
    }
  ]
};

const ilmuFalakComic: Comic = {
  title: 'Comic: Astronomy in the Dayah',
  description: 'Revealing the role of dayahs in teaching astronomy for life.',
  panels: [
    {
      title: 'Studying in a Dayah',
      text: 'Many think a dayah is only a place to study the Quran, but we also study Ilmu Falak (astronomy).',
      imageUrl: 'https://i.ibb.co/Rk9pNtJp/Gemini-Generated-Image-8m38498m38498m38.png',
      imageHint: 'students studying in dayah'
    },
    {
      title: 'Calculating Star Positions',
      text: 'We calculate the position of the stars to determine the beginning of the fasting month, the qibla direction, and prayer times.',
      imageUrl: 'https://i.ibb.co/DHNkQTGn/Gemini-Generated-Image-lr9x50lr9x50lr9x.png',
      imageHint: 'teacher pointing at stars map'
    },
    {
      title: 'Knowledge for Fishermen',
      text: 'The same science is also useful for fishermen on the coast for navigation and determining tides.',
      imageUrl: 'https://i.ibb.co/d0dtbX3X/Gemini-Generated-Image-168pi168pi168pi1.png',
      imageHint: 'scholar talking to fisherman'
    },
    {
        title: 'Community Reference',
        text: 'Students returning to their villages often become a reference, telling the position of the north star or when the highest tide is.',
        imageUrl: 'https://i.ibb.co/FLygk1L4/Gemini-Generated-Image-50j9v650j9v650j9.png',
        imageHint: 'student helping community'
    },
    {
        title: 'Religious and Life Sciences',
        text: 'There is a close relationship between the sky and the sea, between religious knowledge and the science of life.',
        imageUrl: 'https://i.ibb.co/xS91Wwgz/Gemini-Generated-Image-j2fi8xj2fi8xj2fi.png',
        imageHint: 'mosque against starry sky'
    },
    {
      title: 'For the Common Good',
      text: 'We learn that all knowledge comes from God and can be used for the common good, on land and at sea.',
      imageUrl: 'https://i.ibb.co/0VfjNWDg/Gemini-Generated-Image-z7pvrxz7pvrxz7pv.png',
      imageHint: 'night sky over fishing village'
    }
  ]
};

const pasarComic: Comic = {
  title: 'Comic: The Market as a Social Space',
  description: 'The traditional market is not just for buying and selling, but the heart of the community.',
  panels: [
    {
      title: 'The Heart of the Community',
      text: 'For us, the market is not just a place to make money, but a place where we meet friends and exchange news.',
      imageUrl: 'https://i.ibb.co/Lz42QxHm/Gemini-Generated-Image-k208uik208uik208.png',
      imageHint: 'bustling traditional market'
    },
    {
      title: 'Information Hub',
      text: 'If there is important news, job vacancies, or unsettling issues, the information spreads quickly in the market.',
      imageUrl: 'https://i.ibb.co/CspnwtQT/Gemini-Generated-Image-dsjhqbdsjhqbdsjh.png',
      imageHint: 'people talking at coffee stall'
    },
    {
      title: 'Social Barometer',
      text: 'From the conversations in the market\'s coffee stalls, we can know what the community is feeling.',
      imageUrl: 'https://i.ibb.co/ch4DmBK8/Gemini-Generated-Image-o64ap4o64ap4o64a.png',
      imageHint: 'group of men drinking coffee'
    },
    {
        title: 'Calming Each Other',
        text: 'Even when there are unsettling issues, we can calm each other down and find the truth here.',
        imageUrl: 'https://i.ibb.co/5XxgpBFd/Gemini-Generated-Image-epyxelepyxelepyx.png',
        imageHint: 'two people having serious talk'
    },
    {
        title: 'The Pulse of the Community',
        text: 'Keeping the traditional market alive is the same as keeping the pulse and social bonds of our community.',
        imageUrl: 'https://i.ibb.co/LXQKySBZ/Gemini-Generated-Image-k6s3dck6s3dck6s3.png',
        imageHint: 'smiling market vendor'
    },
    {
        title: 'More Than Buying and Selling',
        text: 'This is where friendships are forged, problems are solved, and the community feels alive.',
        imageUrl: 'https://i.ibb.co/V0hmJPM8/Gemini-Generated-Image-9lfrea9lfrea9lfr.png',
        imageHint: 'people laughing in market'
    }
  ]
};

const kucingCerdasComic: Comic = {
  title: 'Comic: Siaga, the Smart Cat',
  description: 'Siaga\'s adventure teaches children about disaster preparedness.',
  panels: [
    {
      title: 'A Different Cat',
      text: 'Siaga loved listening to the elders\' stories about earthquakes and tsunamis, unlike his friends who loved to sleep.',
      imageUrl: 'https://i.ibb.co/cSb6HNbk/Gemini-Generated-Image-yka8lryka8lryka8.png',
      imageHint: 'cute cat listening to old man'
    },
    {
      title: 'The Ground Shakes!',
      text: 'When the ground shook, Siaga shouted, "Earthquake! Remember the three steps: Drop, Cover, and Hold On!"',
      imageUrl: 'https://i.ibb.co/spP9SMTt/Gemini-Generated-Image-qxxmruqxxmruqxxm.png',
      imageHint: 'cartoon earthquake cat under table'
    },
    {
      title: 'Following the Expert',
      text: 'His confused friends saw what Siaga was doing and immediately followed his lead.',
      imageUrl: 'https://i.ibb.co/CpKGCDBf/Gemini-Generated-Image-5ku3hs5ku3hs5ku3.png',
      imageHint: 'other cats hiding under furniture'
    },
    {
      title: 'To a Safe Place',
      text: 'After the shaking stopped, Siaga calmly led his friends to a safe open field.',
      imageUrl: 'https://i.ibb.co/Kj8wXcd1/Gemini-Generated-Image-rm690krm690krm69.png',
      imageHint: 'cats walking to open field'
    },
    {
        title: 'Tsunami Warning',
        text: '"We have to go to high ground," said Siaga, "just in case the sea recedes!" He remembered the Smong story.',
        imageUrl: 'https://i.ibb.co/YB6z4MkN/Gemini-Generated-Image-cw22b0cw22b0cw22.png',
        imageHint: 'cat pointing to hill'
    },
    {
        title: 'Everyone is Safe',
        text: 'Because of Siaga, all his friends were safe and learned how to protect themselves during a disaster.',
        imageUrl: 'https://i.ibb.co/TGNn2hy/Gemini-Generated-Image-spdth3spdth3spdt.png',
        imageHint: 'happy cats playing on hill'
    }
  ]
};


const smongQuiz: Quiz = {
  title: 'Smong Wisdom Quiz',
  description:
    'Test your understanding of Smong and traditional knowledge systems for disaster preparedness.',
  questions: [
    {
      question:
        "What does the word 'Smong' mean in the local language of Simeulue Island?",
      options: ['Earthquake', 'Tsunami', 'Warning', 'Ocean'],
      correctAnswer: 'Tsunami',
      points: 10,
    },
    {
      question:
        'What are the two signs in the Smong poem that indicate an impending tsunami?',
      options: [
        'Strong wind and heavy rain',
        'A strong earthquake followed by the receding of the sea',
        'Dark clouds and lightning',
        'A loud siren sound',
      ],
      correctAnswer: 'A strong earthquake followed by the receding of the sea',
      points: 10,
    },
    {
      question:
        'What action is advised by the wisdom of Smong immediately after seeing these signs?',
      options: [
        'Go to the beach to see',
        'Wait for official instructions',
        'Run to higher ground',
        'Hide inside the house',
      ],
      correctAnswer: 'Run to higher ground',
      points: 10,
    },
  ],
};

const bahTangseQuiz: Quiz = {
  title: 'Tangse Flood Awareness Quiz',
  description:
    'Test your understanding of the causes and impacts of the "Bah Tangse" flash flood.',
  questions: [
    {
      question:
        'What was the main root cause of the "Bah Tangse" disaster according to the story?',
      options: [
        'An earthquake',
        'A collapsed dam',
        'Illegal logging in the upstream forest',
        'A hailstorm',
      ],
      correctAnswer: 'Illegal logging in the upstream forest',
      points: 10,
    },
    {
      question:
        'Where did the residents evacuate to when the flash flood occurred?',
      options: [
        'To the rooftops',
        'Into an underground bunker',
        'To the hills or higher ground',
        'To the middle of the field',
      ],
      correctAnswer: 'To the hills or higher ground',
      points: 10,
    },
    {
        question: 'What did the floodwater carry besides the overflowing water?',
        options: [
            'Large fish',
            'Plastic waste',
            'Dozens of giant logs',
            'Beach sand',
        ],
        correctAnswer: 'Dozens of giant logs',
        points: 10,
    }
  ],
};

const kopiGayoQuiz: Quiz = {
  title: 'Aroma of Peace Quiz',
  description:
    'How much do you know about the role of Gayo coffee in post-conflict recovery?',
  questions: [
    {
      question:
        'Why did the Gayo coffee farmers decide to form a cooperative?',
      options: [
        'Because it was required by the government',
        'To compete with each other',
        'To support each other and have better bargaining power',
        'To get bank loans',
      ],
      correctAnswer:
        'To support each other and have better bargaining power',
      points: 10,
    },
    {
      question:
        'What was the main positive impact of the revival of the Gayo coffee industry for the community?',
      options: [
        'An increase in tourists',
        'The community could send their children to school',
        'A decrease in pest population',
        'Land prices became expensive',
      ],
      correctAnswer: 'The community could send their children to school',
      points: 10,
    },
    {
        question: 'According to the story, what is the "aroma of peace"?',
        options: [
            'The aroma of food in the community kitchen',
            'The aroma of flowers in the garden',
            'The aroma of coffee being processed every morning',
            'The aroma of the sea after a storm',
        ],
        correctAnswer: 'The aroma of coffee being processed every morning',
        points: 10,
    }
  ],
};

const bakauQuiz: Quiz = {
    title: 'Guardian of the Coast Quiz',
    description:
      'How well do you understand the function and benefits of mangrove forests?',
    questions: [
        {
          question:
            'Besides protecting the coast from abrasion and storms, what is another ecological benefit of mangrove forests?',
          options: [
            'Producing edible fruits',
            'Becoming a habitat for marine life like fish and crabs',
            'Filtering air pollution in the city',
            'Making seawater fresh',
          ],
          correctAnswer:
            'Becoming a habitat for marine life like fish and crabs',
          points: 10,
        },
        {
            question: 'What was the initial challenge the community faced when replanting the mangrove forest?',
            options: [
                'Many seedlings failed to grow',
                'Lack of government funding',
                'Conflict with palm oil companies',
                'Prohibition from village elders',
            ],
            correctAnswer: 'Many seedlings failed to grow',
            points: 10,
        },
        {
            question: 'How do mangrove forests protect the coastline?',
            options: [
                'By releasing a chemical that breaks the waves',
                'By creating an invisible wall',
                'With their strong roots that grip the soil and hold back the waves',
                'By attracting large birds to fight the storm',
            ],
            correctAnswer: 'With their strong roots that grip the soil and hold back the waves',
            points: 10,
        }
    ]
};

const dapurUmumQuiz: Quiz = {
    title: 'Peace Kitchen Quiz',
    description: 'Test your understanding of the role of local initiatives in peacebuilding.',
    questions: [
        {
          question:
            'What was the most important final outcome of the Community Kitchen of Peace initiative?',
          options: [
            'Residents were full',
            'Receiving an award from the government',
            'The collapse of the walls of mistrust and the re-establishment of brotherhood',
            'Becoming a culinary tourist destination',
          ],
          correctAnswer:
            'The collapse of the walls of mistrust and the re-establishment of brotherhood',
          points: 10,
        },
        {
            question: 'Where did the magic of reconciliation happen according to the story?',
            options: [
                'At the village hall during official meetings',
                'On social media through discussion groups',
                'While cutting vegetables and stirring curry in the kitchen',
                'On the sports field during competitions',
            ],
            correctAnswer: 'While cutting vegetables and stirring curry in the kitchen',
            points: 10,
        },
        {
            question: 'What was the basic idea that triggered the formation of this community kitchen?',
            options: [
                'An order from the village head',
                'The availability of food aid from NGOs',
                'Everyone needs to eat, and food can unite',
                'To open a restaurant business',
            ],
            correctAnswer: 'Everyone needs to eat, and food can unite',
            points: 10,
        }
    ]
};

const lumbungPadiQuiz: Quiz = {
    title: 'Communal Barn Quiz',
    description:
      'Test your understanding of mutual help and food security.',
    questions: [
        {
            question:
              'What is the basic principle underlying this communal barn system?',
            options: [
              'The principle of profit and loss',
              'The principle of debt with interest',
              'The spirit of mutual cooperation and care',
              'The principle of competition',
            ],
            correctAnswer: 'The spirit of mutual cooperation and care',
            points: 10,
          },
          {
            question: 'When can someone take from the communal barn?',
            options: [
                'Whenever they want',
                'During village celebrations',
                'When experiencing hardship or crop failure',
                'Only if they have contributed more',
            ],
            correctAnswer: 'When experiencing hardship or crop failure',
            points: 10,
          },
          {
              question: 'Besides being a food reserve, what is the function of the rice barn for the community?',
              options: [
                  'As a tourist attraction',
                  'As a symbol of unity and collective strength',
                  'As a storage place for antiques',
                  'As a polling place',
              ],
              correctAnswer: 'As a symbol of unity and collective strength',
              points: 10,
          }
    ]
};

const apiBukitQuiz: Quiz = {
    title: 'Forest Guardian Quiz',
    description:
      'Test your knowledge on forest fire prevention and response.',
    questions: [
        {
            question: 'According to the story, what is a common cause of forest fires in Gayo?',
            options: [
              'Lightning strikes',
              'Extreme sun heat',
              'Human negligence such as clearing land by burning',
              'Volcanic eruptions',
            ],
            correctAnswer:
              'Human negligence such as clearing land by burning',
            points: 10,
          },
          {
              question: 'What is the name of the volunteer group formed by residents to tackle forest fires?',
              options: [
                  'Gayo Firefighting Team',
                  'Fire-Care Community',
                  'Forest Guardian Alliance',
                  'Barisan Hills Community',
              ],
              correctAnswer: 'Fire-Care Community',
              points: 10,
          },
          {
              question: 'Besides extinguishing fires, what other important activity does this group do?',
              options: [
                  'Selling timber',
                  'Hunting wild animals',
                  'Educating residents not to burn land',
                  'Building villas in the forest',
              ],
              correctAnswer: 'Educating residents not to burn land',
              points: 10,
          }
    ]
};

const pemudaAdatQuiz: Quiz = {
    title: 'Guardians of Custom Quiz',
    description:
      'Test your understanding of the role of culture in peacebuilding.',
    questions: [
        {
            question:
              'This initiative shows that art and culture can be effective tools for...',
            options: [
              'Producing famous artists',
              'Peacebuilding and community strengthening',
              'Attracting tourists',
              'Forgetting the past',
            ],
            correctAnswer: 'Peacebuilding and community strengthening',
            points: 10,
          },
          {
              question: 'What dance was revived by the youth in the story?',
              options: [
                  'Saman Dance',
                  'Seudati Dance',
                  'Piring Dance',
                  'Kecak Dance',
              ],
              correctAnswer: 'Seudati Dance',
              points: 10,
          },
          {
              question: 'Besides movement, what does the dance teach the youth?',
              options: [
                  'How to fight',
                  'The history of the Aceh kingdom',
                  'Discipline, teamwork, and advisory poems',
                  'Vocal techniques for singing',
              ],
              correctAnswer: 'Discipline, teamwork, and advisory poems',
              points: 10,
          }
    ]
};

const perempuanPenganyamQuiz: Quiz = {
    title: 'Weavers of Hope Quiz',
    description:
      'Test your understanding of women\'s empowerment and post-disaster recovery.',
    questions: [
        {
            question:
              'What was the main transformation experienced by these women?',
            options: [
              'From farmers to artisans',
              'From housewives to politicians',
              'From victims to empowered survivors',
              'From traders to teachers',
            ],
            correctAnswer: 'From victims to empowered survivors',
            points: 10,
          },
          {
              question: 'What is the main material they use to make woven crafts?',
              options: [
                  'Rattan',
                  'Bamboo',
                  'Pandan Leaves',
                  'Recycled plastic',
              ],
              correctAnswer: 'Pandan Leaves',
              points: 10,
          },
          {
              question: 'Besides being a source of income, what other function did the weaving activity have for them?',
              options: [
                  'As an annual competition',
                  'As therapy and a space to support each other',
                  'As a way to preserve the local language',
                  'As a requirement to receive government aid',
              ],
              correctAnswer: 'As therapy and a space to support each other',
              points: 10,
          }
    ]
};

const arsitekturQuiz: Quiz = {
    title: 'Wise Architecture Quiz',
    description:
      'Test your understanding of the wisdom behind Rumoh Aceh architecture.',
    questions: [
        {
            question:
              'What is the main lesson that can be learned from the wisdom of Rumoh Aceh architecture?',
            options: [
              'We should only build houses from wood',
              'Modern technology is useless',
              'Traditional designs often have solutions that are adaptive to the environment',
              'Stilt houses are unsafe',
            ],
            correctAnswer:
              'Traditional designs often have solutions that are adaptive to the environment',
            points: 10,
          },
          {
              question: 'What key feature of Rumoh Aceh makes it earthquake-resistant?',
              options: [
                  'Thick concrete walls',
                  'Flexible wooden construction',
                  'A roof made of palm leaves',
                  'A very deep foundation',
              ],
              correctAnswer: 'Flexible wooden construction',
              points: 10,
          },
          {
              question: 'What is the function of the "kolong" or space under the stilt house?',
              options: [
                  'Only as decoration',
                  'As a car garage',
                  'As a multipurpose space and a path for water during floods',
                  'As a place to dispose of trash',
              ],
              correctAnswer: 'As a multipurpose space and a path for water during floods',
              points: 10,
          }
    ]
};

const seniTraumaQuiz: Quiz = {
    title: 'Canvas of Hope Quiz',
    description:
      'Test your understanding of the power of art in the social recovery process.',
    questions: [
        {
            question:
              'What themes were often depicted in their murals?',
            options: [
              'Anger and sadness',
              'Abstract landscapes',
              'Hope, resilience, and togetherness',
              'Portraits of the artists',
            ],
            correctAnswer: 'Hope, resilience, and togetherness',
            points: 10,
          },
          {
              question: 'What was the main goal of the artists painting on public walls?',
              options: [
                  'To sell their paintings',
                  'To heal the city\'s and their own wounds through art',
                  'To protest against the government',
                  'To win an art competition',
              ],
              correctAnswer: 'To heal the city\'s and their own wounds through art',
              points: 10,
          },
          {
              question: 'How did the community react to this mural activity?',
              options: [
                  'The community was angry because their walls were painted',
                  'The community did not care',
                  'The community, including children, joined in the painting process',
                  'The community reported them to the police',
              ],
              correctAnswer: 'The community, including children, joined in the painting process',
              points: 10,
          }
    ]
};

const nelayanQuiz: Quiz = {
    title: 'Traditional Navigation Quiz',
    description:
      'Test your knowledge of how traditional fishermen read the signs of nature.',
    questions: [
        {
            question: 'What constellation is called "Bintang Tiga" and is used by Acehnese fishermen for direction?',
            options: ['Scorpio', 'Orion', 'Big Dipper', 'Crux (Southern Cross)'],
            correctAnswer: 'Orion',
            points: 10,
        },
        {
            question: 'What animal behavior is a sign of bad weather for fishermen?',
            options: [
                'A cat sleeping inside the house',
                'Birds flying high in the sky',
                'Dolphins swimming close to the shore',
                'A rooster crowing in the morning',
            ],
            correctAnswer: 'Dolphins swimming close to the shore',
            points: 10,
        },
        {
            question: 'How do fishermen know where fish gather?',
            options: [
                'Using advanced sonar',
                'By observing the color of the water and the type of birds flying above',
                'Following other fishing boats',
                'Casting nets randomly',
            ],
            correctAnswer: 'By observing the color of the water and the type of birds flying above',
            points: 10,
        }
    ]
};

const sumurTuaQuiz: Quiz = {
    title: 'Source of Life Quiz',
    description:
      'Test your understanding of traditional water resource management.',
    questions: [
        {
            question: 'Why did the old well never dry up when other modern wells did?',
            options: [
              'Because it was very deep',
              'Because it was built directly on a large spring',
              'Because it was rarely used',
              'Because it was made of magical stone',
            ],
            correctAnswer: 'Because it was built directly on a large spring',
            points: 10,
          },
          {
              question: 'What prompted the villagers to find and clean the old well?',
              options: [
                  'An order from the government',
                  'Curiosity and a sense of adventure',
                  'A long drought that dried up modern water sources',
                  'A dream one of the villagers had',
              ],
              correctAnswer: 'A long drought that dried up modern water sources',
              points: 10,
          },
          {
              question: 'What lesson did the villagers learn from this event?',
              options: [
                  'Modern technology is always superior',
                  'Water will never run out',
                  'The wisdom in past relics must be preserved',
                  'Forests have no connection to water sources',
              ],
              correctAnswer: 'The wisdom in past relics must be preserved',
              points: 10,
          }
    ]
};

const ilmuFalakQuiz: Quiz = {
    title: 'Ilmu Falak Quiz',
    description:
      'Test your knowledge of the application of traditional astronomy in Aceh.',
    questions: [
        {
            question:
              'This story shows that in Aceh, religious knowledge and science...',
            options: [
              'Are always in conflict',
              'Have no connection at all',
              'Can complement each other and be beneficial for life',
              'Are only studied by the nobility',
            ],
            correctAnswer:
              'Can complement each other and be beneficial for life',
            points: 10,
          },
          {
              question: 'Besides determining the start of the fasting month and the qibla direction, what else is Ilmu Falak used for in the story?',
              options: [
                  'To predict someone\'s fate',
                  'For navigation for fishermen',
                  'To determine wedding dates',
                  'To find hidden treasure',
              ],
              correctAnswer: 'For navigation for fishermen',
              points: 10,
          },
          {
              question: 'Where is this Ilmu Falak taught from generation to generation according to the story?',
              options: [
                  'In modern universities',
                  'In navigation schools',
                  'In the village hall',
                  'In Islamic boarding schools (dayah)',
              ],
              correctAnswer: 'In Islamic boarding schools (dayah)',
              points: 10,
          }
    ]
};

const pasarQuiz: Quiz = {
    title: 'Heart of the Community Quiz',
    description: 'Test your understanding of the social role of traditional markets.',
    questions: [
        {
            question: 'Besides being a place for buying and selling, what is the main function of the traditional market according to the story?',
            options: [
              'As a parking lot',
              'As a center for information dissemination and strengthening social bonds',
              'As a film shooting location',
              'As an open-air museum',
            ],
            correctAnswer:
              'As a center for information dissemination and strengthening social bonds',
            points: 10,
          },
          {
              question: 'What place within the market is referred to as a "social barometer"?',
              options: [
                  'The gold shop',
                  'The tailor\'s stall',
                  'The market\'s coffee stall',
                  'The fish vendor\'s stall',
              ],
              correctAnswer: 'The market\'s coffee stall',
              points: 10,
          },
          {
              question: 'According to the story, why is it important to keep traditional markets alive?',
              options: [
                  'Because the buildings are antique and historic',
                  'Because it is the same as keeping the pulse of the community',
                  'Because the taxes are cheaper than modern markets',
                  'Because only there can you find rare ingredients',
              ],
              correctAnswer: 'Because it is the same as keeping the pulse of the community',
              points: 10,
          }
    ]
};

const kucingCerdasQuiz: Quiz = {
  title: 'Smart Cat Quiz',
  description: 'Test your understanding of earthquake preparedness with Siaga!',
  questions: [
      {
          question:
            'What are the three steps Siaga teaches to do during an earthquake?',
          options: [
            'Run, scream, and jump',
            'Drop, cover, and hold on',
            'Stand, look, and wait',
            'Eat, drink, and sleep',
          ],
          correctAnswer:
            'Drop, cover, and hold on',
          points: 10,
        },
        {
          question:
            'Where did Siaga take his friends after the earthquake shaking stopped?',
          options: [
            'Back inside the house',
            'To the beach',
            'To an open field far from buildings',
            'Up a tree',
          ],
          correctAnswer:
            'To an open field far from buildings',
          points: 10,
        },
        {
            question: 'What local wisdom did Siaga remember after the earthquake stopped?',
            options: [
                'The story of Gayo Coffee',
                'The Smong poem about the receding sea',
                'How to build a Rumoh Aceh',
                'The taboo of planting trees on the coast',
            ],
            correctAnswer: 'The Smong poem about the receding sea',
            points: 10,
        }
  ]
};

export const masterQuiz: Quiz = {
    title: 'Aceh Knowledge Challenge',
    description: 'Test your knowledge of Aceh\'s local wisdom, disaster preparedness, and peace through questions from various stories.',
    questions: [
        ...smongQuiz.questions,
        ...bahTangseQuiz.questions,
        ...kopiGayoQuiz.questions,
        ...bakauQuiz.questions,
        ...dapurUmumQuiz.questions,
        ...lumbungPadiQuiz.questions,
        ...apiBukitQuiz.questions,
        ...pemudaAdatQuiz.questions,
        ...perempuanPenganyamQuiz.questions,
        ...arsitekturQuiz.questions,
        ...seniTraumaQuiz.questions,
        ...nelayanQuiz.questions,
        ...sumurTuaQuiz.questions,
        ...ilmuFalakQuiz.questions,
        ...pasarQuiz.questions,
        ...kucingCerdasQuiz.questions,
    ].sort(() => 0.5 - Math.random()).slice(0, 10) // Take 10 random questions
}


export const interactiveContent: { [key: string]: InteractiveContent } = {
  'smong-selamat-dari-lautan': {
    video: {
      title: 'Educational Video: Traditional Knowledge Systems',
      description:
        'Discover how indigenous knowledge systems complement modern science in disaster preparedness.',
      embedUrl:
        'https://www.canva.com/design/DAGy2A4uKKg/oKxoc_2wvJT-q7amzHQQWA/watch?embed',
      info: 'This video explores how traditional knowledge systems like Smong work in tandem with modern early warning systems to protect communities.',
    },
    quiz: smongQuiz,
    comic: smongComic,
  },
  'hutan-bakau-penjaga-pantai': {
    video: {
      title: 'Educational Video: Mangrove Forest, Our Natural Fortress',
      description:
        'Learn the importance of mangrove ecosystems as a natural protection against abrasion, storms, and even tsunamis.',
      embedUrl:
        'https://www.canva.com/design/DAG05xtxObw/lwH2TnsBk2C8fsfxXhThXw/watch?embed',
      info: 'This video explains how a community in Aceh Jaya successfully restored their coastline through mangrove replanting.',
    },
    quiz: bakauQuiz,
    comic: bakauComic,
  },
  'dapur-umum-perdamaian': {
    video: {
      title: 'Educational Video: Cooking Peace',
      description:
        'Witness how the Community Kitchen in Bireuen became a space to re-weave brotherhood post-conflict.',
      embedUrl:
        'https://www.canva.com/design/DAG058Re3lE/fIjzr5r35dMT83HRBGlMfw/watch?embed',
      info: 'This short documentary covers the daily activities at the Peace Kitchen in Bireuen and interviews with its initiators.',
    },
    quiz: dapurUmumQuiz,
    comic: dapurUmumComic,
  },
    'lumbung-padi-komunal': {
    video: {
      title: 'Educational Video: Rice Barn, Social Safety Net',
      description:
        'Learn how a communal rice barn became the foundation of food security and mutual help in Gayo.',
      embedUrl:
        'https://www.canva.com/design/DAG062E6zns/ZlMWr3u5a6HfVicIQx5qNQ/watch?embed',
      info: 'This video explains how the communal rice barn works as an effective social safety net at the community level.',
    },
    quiz: lumbungPadiQuiz,
    comic: lumbungPadiComic,
  },
  'bah-tangse-sungai-murka': {
    video: {
      title: 'Documentary Video: The Devastation of Bah Tangse 2011',
      description:
        'Watch real news footage of the flash flood that destroyed Tangse, Pidie on March 10, 2011.',
      embedUrl: 'https://www.canva.com/design/DAG1Gsxv32g/oEZ8pFfT0nK2UZJACt_RWw/watch?embed',
      info: 'This video contains actual footage from the disaster site and interviews with victims, providing a real picture of the impact of deforestation.',
    },
    quiz: bahTangseQuiz,
    comic: bahTangseComic,
  },
  'kopi-gayo-aroma-perdamaian': {
    video: {
      title: 'Educational Video: Gayo Coffee, The Aroma of Peace',
      description:
        'Witness the inspiring story of Gayo coffee farmers rising from post-conflict adversity to rebuild their lives.',
      embedUrl:
        'https://www.canva.com/design/DAG1HC5cT1A/5pCeQTue043ynhFySg1WcQ/watch?embed',
      info: 'This video features interviews with Gayo coffee farmers who share their journey from the conflict era to rebuilding their lives through coffee plantations.',
    },
    quiz: kopiGayoQuiz,
    comic: kopiGayoComic,
  },
  'api-di-bukit-barisan': {
    video: {
      title: 'Educational Video: Fire-Care Community',
      description:
        'See how the Fire-Care Community fights to protect the forest from fires.',
      embedUrl: 'https://www.canva.com/design/DAG1GsSgV9M/ju7Vt8gVq1yDMj2-4DKklg/watch?embed',
      info: 'This video will highlight the importance of prevention and the active role of the community in mitigating forest fire disasters.',
    },
    quiz: apiBukitQuiz,
    comic: apiBukitComic,
  },
  'pemuda-penjaga-adat': {
    video: {
      title: 'Educational Video: Seudati Dance, Community Binder',
      description:
        'Witness how the youth in Pidie preserve culture and strengthen social bonds through the Seudati dance.',
      embedUrl:
        'https://www.canva.com/design/DAG1OM98Yrw/nyuZ9I8l9VuDI6AAdSYbCw/watch?embed',
      info: 'This video will document the activities of the Seudati troupe and its impact on the youth in Pidie.',
    },
    quiz: pemudaAdatQuiz,
    comic: pemudaAdatComic,
  },
  'perempuan-penganyam-harapan': {
    video: {
      title: 'Educational Video: Women Weavers of Hope',
      description:
        'Witness how tsunami widows rise from adversity by forming a weaving craft group.',
      embedUrl: 'https://www.canva.com/design/DAG1VaVt0qc/Gi6ESi-KQgWt1fEoZtG_NA/watch?embed',
      info: 'This short documentary will follow the journey of the weaving group from grief to empowerment.',
    },
    quiz: perempuanPenganyamQuiz,
    comic: perempuanPenganyamComic,
  },
  'arsitektur-rumah-panggung': {
    video: {
      title: 'Educational Video: The Wisdom of Rumoh Aceh',
      description:
        'Learn how the traditional stilt house architecture of Rumoh Aceh is proven to be earthquake-resistant and environmentally adaptive.',
      embedUrl:
        'https://www.canva.com/design/DAG1ml1mW5M/P8bGYXOvuob1i0iTT9TQhg/watch?embed',
      info: 'This video will compare the design of Rumoh Aceh with modern buildings and highlight the ingenious engineering principles within it.',
    },
    quiz: arsitekturQuiz,
    comic: arsitekturComic,
  },
  'seni-melawan-trauma': {
    video: {
      title: 'Educational Video: Art Against Trauma',
      description: 'Witness how artists use murals to heal the wounds of the city and soul post-disaster.',
      embedUrl: 'https://www.canva.com/design/DAG1oFpnXaM/1AYF38ldBYM-z4jiL58VMg/watch?embed',
      info: 'This video will feature the works of mural artists in Banda Aceh and interviews on the power of art as a therapeutic medium.',
    },
    quiz: seniTraumaQuiz,
    comic: seniTraumaComic,
  },
  'nelayan-dan-tanda-alam': {
    video: {
      title: 'Educational Video: Sky and Sea Navigation',
      description:
        'Learn how traditional Acehnese fishermen use stars and natural signs to navigate the vast ocean.',
      embedUrl: 'https://www.canva.com/design/DAG1sApRGB8/Kynmeiy6S-0u7YVxRG11qw/watch?embed',
      info: 'This video documents the fishermen\'s knowledge of constellations, winds, and marine life behavior as their guide.',
    },
    quiz: nelayanQuiz,
    comic: nelayanComic,
  },
  'sumur-tua-sumber-kehidupan': {
    video: {
      title: 'Educational Video: The Old Well, Source of Life',
      description:
        'Learn how an ancient ancestral well became a lifesaver when a village was hit by drought.',
      embedUrl: 'https://www.canva.com/design/DAG1sCoVdCc/ZIARnG8HuYWaqhyO4QlzfA/watch?embed',
      info: 'This video will explore the importance of preserving traditional water sources and the wisdom of ancestors in locating them.',
    },
    quiz: sumurTuaQuiz,
    comic: sumurTuaComic,
  },
  'ilmu-falak-di-pesantren': {
    video: {
      title: 'Educational Video: Ilmu Falak, Navigating Sky and Sea',
      description: 'Learn how dayahs in Aceh teach astronomy (Ilmu Falak) which is used by fishermen for navigation.',
      embedUrl: 'https://www.canva.com/design/DAG1sLRnb6M/mPY87WGVdMwVfMQqdpi2cQ/watch?embed',
      info: 'This video will explain how religious knowledge and science complement each other in the intellectual tradition of Aceh.',
    },
    quiz: ilmuFalakQuiz,
    comic: ilmuFalakComic,
  },
  'pasar-sebagai-ruang-sosial': {
    video: {
      title: 'Educational Video: The Market, Heart of the Community',
      description:
        'See how a traditional market functions as an important social space, more than just a place for trade.',
      embedUrl: 'https://www.canva.com/design/DAG14RO1hQc/5heno25dXGGw6tKD2MrbhA/watch?embed',
      info: 'This video will capture the atmosphere and social interactions at Peunayong Market, showing how information and social cohesion are woven.',
    },
    quiz: pasarQuiz,
    comic: pasarComic,
  },
  'siaga-si-kucing-cerdas': {
    video: {
      title: 'Animated Video: The Adventures of Siaga',
      description: 'Watch the adventure of Siaga the smart cat in an animated video that teaches children important steps during an earthquake.',
      embedUrl: 'https://www.canva.com/design/DAG18l97wYc/kwO9aaQIufH-t5cDC_36Ag/watch?embed',
      info: 'This video uses cheerful visuals and a catchy song to help children understand the concept of disaster preparedness.',
    },
    quiz: kucingCerdasQuiz,
    comic: kucingCerdasComic,
  },
};

    

    

    







    

    

    






