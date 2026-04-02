import { Question, PersonalityResult } from './types';

export const QUESTIONS: Question[] = [
  // EI: Extraversion vs Introversion
  {
    id: 1,
    text: "In social situations, you usually:",
    dimension: "EI",
    options: [
      { text: "Initiate conversations and feel energized", type: "E" },
      { text: "Stay quiet and wait for others to approach you", type: "I" }
    ]
  },
  {
    id: 2,
    text: "When you need to recharge, you prefer to:",
    dimension: "EI",
    options: [
      { text: "Gather with friends", type: "E" },
      { text: "Read or rest quietly alone", type: "I" }
    ]
  },
  {
    id: 3,
    text: "Your preferred work environment is:",
    dimension: "EI",
    options: [
      { text: "A bustling, highly interactive office", type: "E" },
      { text: "A quiet, private space where you can focus", type: "I" }
    ]
  },
  {
    id: 4,
    text: "In a meeting, you usually:",
    dimension: "EI",
    options: [
      { text: "Think out loud and express opinions quickly", type: "E" },
      { text: "Think deeply before speaking", type: "I" }
    ]
  },
  {
    id: 5,
    text: "You prefer to:",
    dimension: "EI",
    options: [
      { text: "Be the center of attention", type: "E" },
      { text: "Work quietly behind the scenes", type: "I" }
    ]
  },

  // SN: Sensing vs Intuition
  {
    id: 6,
    text: "You trust more in:",
    dimension: "SN",
    options: [
      { text: "Concrete facts and past experiences", type: "S" },
      { text: "Intuition and future possibilities", type: "N" }
    ]
  },
  {
    id: 7,
    text: "When learning something new, you like to:",
    dimension: "SN",
    options: [
      { text: "Follow step-by-step instructions and understand details", type: "S" },
      { text: "Grasp the big picture and theoretical framework first", type: "N" }
    ]
  },
  {
    id: 8,
    text: "When others describe you, they are more likely to say you are:",
    dimension: "SN",
    options: [
      { text: "Pragmatic and down-to-earth", type: "S" },
      { text: "Imaginative and creative", type: "N" }
    ]
  },
  {
    id: 9,
    text: "You focus more on:",
    dimension: "SN",
    options: [
      { text: "The current reality and facts", type: "S" },
      { text: "Future visions and trends", type: "N" }
    ]
  },
  {
    id: 10,
    text: "When solving a problem, you tend to:",
    dimension: "SN",
    options: [
      { text: "Use established and proven methods", type: "S" },
      { text: "Try new, untested approaches", type: "N" }
    ]
  },

  // TF: Thinking vs Feeling
  {
    id: 11,
    text: "When making decisions, you value more:",
    dimension: "TF",
    options: [
      { text: "Logical analysis and objective facts", type: "T" },
      { text: "Impact on others and personal values", type: "F" }
    ]
  },
  {
    id: 12,
    text: "When a friend is in trouble, you usually first:",
    dimension: "TF",
    options: [
      { text: "Analyze the problem and offer solutions", type: "T" },
      { text: "Provide emotional support and comfort", type: "F" }
    ]
  },
  {
    id: 13,
    text: "At work, you believe the most important thing is:",
    dimension: "TF",
    options: [
      { text: "Efficiency and fair competition", type: "T" },
      { text: "Team harmony and mutual support", type: "F" }
    ]
  },
  {
    id: 14,
    text: "You tend to be:",
    dimension: "TF",
    options: [
      { text: "Direct and straightforward in pointing out mistakes", type: "T" },
      { text: "Tactful and considerate of others' feelings", type: "F" }
    ]
  },
  {
    id: 15,
    text: "You think a good leader should be:",
    dimension: "TF",
    options: [
      { text: "Impartial, objective, and fair", type: "T" },
      { text: "Compassionate and relationship-oriented", type: "F" }
    ]
  },

  // JP: Judging vs Perceiving
  {
    id: 16,
    text: "Your preferred lifestyle is:",
    dimension: "JP",
    options: [
      { text: "Planned and organized", type: "J" },
      { text: "Spontaneous and flexible", type: "P" }
    ]
  },
  {
    id: 17,
    text: "Facing a deadline, you usually:",
    dimension: "JP",
    options: [
      { text: "Plan ahead and finish early", type: "J" },
      { text: "Unleash your potential at the last minute", type: "P" }
    ]
  },
  {
    id: 18,
    text: "Before going on a trip, you usually:",
    dimension: "JP",
    options: [
      { text: "Create a detailed itinerary", type: "J" },
      { text: "Only set a general direction and decide on the go", type: "P" }
    ]
  },
  {
    id: 19,
    text: "Your workspace is usually:",
    dimension: "JP",
    options: [
      { text: "Neat and orderly, everything has its place", type: "J" },
      { text: "A bit messy, but you know where things are", type: "P" }
    ]
  },
  {
    id: 20,
    text: "You prefer:",
    dimension: "JP",
    options: [
      { text: "Having matters settled and decided", type: "J" },
      { text: "Keeping options open and delaying decisions", type: "P" }
    ]
  },
  {
    id: 21,
    text: "In group activities, you prefer to:",
    dimension: "EI",
    options: [
      { text: "Actively participate in discussions and interactions", type: "E" },
      { text: "Observe the interactions and speak occasionally", type: "I" }
    ]
  },
  {
    id: 22,
    text: "Which situation drains you more?",
    dimension: "EI",
    options: [
      { text: "Staying home alone all day", type: "E" },
      { text: "Attending a lively party all day", type: "I" }
    ]
  },
  {
    id: 23,
    text: "Which reading experience do you prefer?",
    dimension: "SN",
    options: [
      { text: "Realistic, concrete biographies or technical books", type: "S" },
      { text: "Imaginative novels exploring philosophical themes", type: "N" }
    ]
  },
  {
    id: 24,
    text: "When describing an event, you tend to:",
    dimension: "SN",
    options: [
      { text: "Detail exactly what happened", type: "S" },
      { text: "Describe the meaning or feeling the event gave you", type: "N" }
    ]
  },
  {
    id: 25,
    text: "Which compliment do you prefer?",
    dimension: "TF",
    options: [
      { text: "Praising your competence and logical thinking", type: "T" },
      { text: "Praising your kindness and thoughtfulness", type: "F" }
    ]
  },
  {
    id: 26,
    text: "In an argument, you care more about:",
    dimension: "TF",
    options: [
      { text: "Who is factually correct", type: "T" },
      { text: "Whose feelings were hurt", type: "F" }
    ]
  },
  {
    id: 27,
    text: "Your preferred way of working is:",
    dimension: "JP",
    options: [
      { text: "Work first, play later", type: "J" },
      { text: "Mix work and play, enjoying the flexibility", type: "P" }
    ]
  },
  {
    id: 28,
    text: "Which situation makes you more anxious?",
    dimension: "JP",
    options: [
      { text: "Plans being disrupted and losing control", type: "J" },
      { text: "Life being too routine and lacking surprises", type: "P" }
    ]
  },
  {
    id: 29,
    text: "You prefer to:",
    dimension: "EI",
    options: [
      { text: "Make many friends and meet all kinds of people", type: "E" },
      { text: "Cultivate deep relationships with a few close friends", type: "I" }
    ]
  },
  {
    id: 30,
    text: "Which learning style suits you better?",
    dimension: "SN",
    options: [
      { text: "Hands-on practice, learning by doing", type: "S" },
      { text: "Thinking about concepts, learning from theory", type: "N" }
    ]
  },
  {
    id: 31,
    text: "You lean more towards:",
    dimension: "TF",
    options: [
      { text: "Reason over emotion", type: "T" },
      { text: "Emotion over reason", type: "F" }
    ]
  },
  {
    id: 32,
    text: "You prefer to:",
    dimension: "JP",
    options: [
      { text: "Methodically complete tasks on a checklist", type: "J" },
      { text: "Spontaneously do whatever you feel like doing at the moment", type: "P" }
    ]
  },
  {
    id: 33,
    text: "In an unfamiliar environment, you usually:",
    dimension: "EI",
    options: [
      { text: "Blend in quickly", type: "E" },
      { text: "Need some time to observe and adapt", type: "I" }
    ]
  },
  {
    id: 34,
    text: "Which problem-solving approach do you prefer?",
    dimension: "SN",
    options: [
      { text: "Looking for existing, proven solutions", type: "S" },
      { text: "Brainstorming and creating new possibilities", type: "N" }
    ]
  },
  {
    id: 35,
    text: "You feel you are more like a:",
    dimension: "TF",
    options: [
      { text: "Calm observer", type: "T" },
      { text: "Passionate participant", type: "F" }
    ]
  },
  {
    id: 36,
    text: "You prefer:",
    dimension: "JP",
    options: [
      { text: "Making reservations in advance, disliking sudden changes", type: "J" },
      { text: "Welcoming surprises and spontaneous changes", type: "P" }
    ]
  },
  {
    id: 37,
    text: "You tend to:",
    dimension: "EI",
    options: [
      { text: "Speak more than you listen", type: "E" },
      { text: "Listen more than you speak", type: "I" }
    ]
  },
  {
    id: 38,
    text: "You prefer:",
    dimension: "SN",
    options: [
      { text: "Concrete details", type: "S" },
      { text: "Abstract concepts", type: "N" }
    ]
  },
  {
    id: 39,
    text: "You value more:",
    dimension: "TF",
    options: [
      { text: "Truth and justice", type: "T" },
      { text: "Compassion and mercy", type: "F" }
    ]
  },
  {
    id: 40,
    text: "You prefer to:",
    dimension: "JP",
    options: [
      { text: "Advance methodically", type: "J" },
      { text: "Respond flexibly", type: "P" }
    ]
  }
];

export const PERSONALITY_RESULTS: Record<string, PersonalityResult> = {
  "INTJ": {
    type: "INTJ",
    title: "Architect",
    description: "Imaginative and strategic thinkers, with a plan for everything.",
    strengths: ["Rational", "Independent", "Determined", "Curious", "Versatile"],
    weaknesses: ["Arrogant", "Dismissive of emotions", "Overly critical", "Cynical"],
    careers: ["Software Developer", "Strategic Planner", "Scientist", "Engineer", "Lawyer"]
  },
  "INTP": {
    type: "INTP",
    title: "Logician",
    description: "Innovative inventors with an unquenchable thirst for knowledge.",
    strengths: ["Analytical", "Original", "Open-minded", "Objective", "Enthusiastic"],
    weaknesses: ["Disconnected", "Impatient with details", "Prone to self-doubt", "Insensitive"],
    careers: ["Researcher", "Programmer", "Mathematician", "Philosopher", "Systems Analyst"]
  },
  "ENTJ": {
    type: "ENTJ",
    title: "Commander",
    description: "Bold, imaginative and strong-willed leaders, always finding a way - or making one.",
    strengths: ["Efficient", "Energetic", "Self-confident", "Strong-willed", "Strategic"],
    weaknesses: ["Stubborn", "Intolerant", "Impatient", "Arrogant"],
    careers: ["CEO", "Lawyer", "Management Consultant", "Politician", "Entrepreneur"]
  },
  "ENTP": {
    type: "ENTP",
    title: "Debater",
    description: "Smart and curious thinkers who cannot resist an intellectual challenge.",
    strengths: ["Knowledgeable", "Quick-thinkers", "Original", "Excellent Brainstormers", "Charismatic"],
    weaknesses: ["Argumentative", "Insensitive", "Intolerant", "Can find it difficult to focus"],
    careers: ["Lawyer", "Advertising Creative", "Entrepreneur", "Consultant", "Journalist"]
  },
  "INFJ": {
    type: "INFJ",
    title: "Advocate",
    description: "Quiet and mystical, yet very inspiring and tireless idealists.",
    strengths: ["Creative", "Insightful", "Principled", "Passionate", "Altruistic"],
    weaknesses: ["Sensitive to criticism", "Reluctant to open up", "Perfectionistic", "Prone to burnout"],
    careers: ["Counselor", "Writer", "Teacher", "Artist", "Social Worker"]
  },
  "INFP": {
    type: "INFP",
    title: "Mediator",
    description: "Poetic, kind and altruistic people, always eager to help a good cause.",
    strengths: ["Empathetic", "Generous", "Open-minded", "Creative", "Passionate"],
    weaknesses: ["Unrealistic", "Self-isolating", "Unfocused", "Emotionally vulnerable"],
    careers: ["Writer", "Artist", "Psychologist", "Librarian", "Non-profit Worker"]
  },
  "ENFJ": {
    type: "ENFJ",
    title: "Protagonist",
    description: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
    strengths: ["Tolerant", "Reliable", "Charismatic", "Altruistic", "Natural Leaders"],
    weaknesses: ["Overly idealistic", "Too selfless", "Too sensitive", "Fluctuating self-esteem"],
    careers: ["Teacher", "HR Manager", "PR Specialist", "Sales Manager", "Coach"]
  },
  "ENFP": {
    type: "ENFP",
    title: "Campaigner",
    description: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.",
    strengths: ["Curious", "Observant", "Energetic", "Excellent Communicators", "Popular"],
    weaknesses: ["Poor practical skills", "Find it difficult to focus", "Overthink things", "Get stressed easily"],
    careers: ["Marketing Specialist", "Creative Director", "Event Planner", "Actor", "Counselor"]
  },
  "ISTJ": {
    type: "ISTJ",
    title: "Logistician",
    description: "Practical and fact-minded individuals, whose reliability cannot be doubted.",
    strengths: ["Honest", "Direct", "Strong-willed", "Dutiful", "Calm"],
    weaknesses: ["Stubborn", "Insensitive", "By the book", "Judgmental"],
    careers: ["Accountant", "Police Officer", "Judge", "Systems Administrator", "Auditor"]
  },
  "ISFJ": {
    type: "ISFJ",
    title: "Defender",
    description: "Very dedicated and warm protectors, always ready to defend their loved ones.",
    strengths: ["Supportive", "Reliable", "Observant", "Enthusiastic", "Hardworking"],
    weaknesses: ["Humble", "Take things too personally", "Repress their feelings", "Overload themselves"],
    careers: ["Nurse", "Teacher", "Administrative Assistant", "Social Worker", "Customer Service"]
  },
  "ESTJ": {
    type: "ESTJ",
    title: "Executive",
    description: "Excellent administrators, unsurpassed at managing things - or people.",
    strengths: ["Dedicated", "Strong-willed", "Direct", "Loyal", "Excellent Organizers"],
    weaknesses: ["Inflexible", "Uncomfortable with unconventional situations", "Judgmental", "Too focused on social status"],
    careers: ["Project Manager", "CFO", "Factory Manager", "Administrator", "Insurance Agent"]
  },
  "ESFJ": {
    type: "ESFJ",
    title: "Consul",
    description: "Extraordinarily caring, social and popular people, always eager to help.",
    strengths: ["Strong practical skills", "Warm", "Loyal", "Sensitive to others' needs", "Good at connecting"],
    weaknesses: ["Worried about social status", "Inflexible", "Reluctant to innovate", "Vulnerable to criticism"],
    careers: ["Teacher", "Healthcare Administrator", "HR Specialist", "Sales Representative", "Event Planner"]
  },
  "ISTP": {
    type: "ISTP",
    title: "Virtuoso",
    description: "Bold and practical experimenters, masters of all kinds of tools.",
    strengths: ["Optimistic", "Creative", "Spontaneous", "Rational", "Great in a crisis"],
    weaknesses: ["Stubborn", "Insensitive", "Private", "Easily bored"],
    careers: ["Engineer", "Mechanic", "Pilot", "Forensic Scientist", "Software Developer"]
  },
  "ISFP": {
    type: "ISFP",
    title: "Adventurer",
    description: "Flexible and charming artists, always ready to explore and experience something new.",
    strengths: ["Charming", "Sensitive to others", "Imaginative", "Passionate", "Curious"],
    weaknesses: ["Fiercely independent", "Unpredictable", "Easily stressed", "Overly competitive"],
    careers: ["Artist", "Designer", "Photographer", "Veterinarian", "Chef"]
  },
  "ESTP": {
    type: "ESTP",
    title: "Entrepreneur",
    description: "Smart, energetic and very perceptive people, who truly enjoy living on the edge.",
    strengths: ["Bold", "Rational", "Practical", "Sociable", "Perceptive"],
    weaknesses: ["Insensitive", "Impatient", "Risk-prone", "Miss the bigger picture"],
    careers: ["Sales Manager", "Police Officer", "Firefighter", "Sports Coach", "Stockbroker"]
  },
  "ESFP": {
    type: "ESFP",
    title: "Entertainer",
    description: "Spontaneous, energetic and enthusiastic people - life is never boring around them.",
    strengths: ["Bold", "Original", "Aesthetics and Showmanship", "Practical", "Observant"],
    weaknesses: ["Easily bored", "Poor long-term planners", "Unfocused", "Conflict-averse"],
    careers: ["PR Specialist", "Event Planner", "Tour Guide", "Actor", "Fashion Designer"]
  }
};
