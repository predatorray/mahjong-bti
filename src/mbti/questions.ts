import { Question } from './types';

// 12 questions — 3 per axis. Option 0 always contributes to the first letter of
// the axis (A, B, C, T), option 1 to the second (D, S, F, W). The wizard
// renders option text by question id from i18n.
export const QUESTIONS: Question[] = [
  // AD — Aggressive vs Defensive
  { id: 'q1', axis: 'AD', options: [{ pole: 'A' }, { pole: 'D' }] },
  { id: 'q2', axis: 'AD', options: [{ pole: 'A' }, { pole: 'D' }] },
  { id: 'q3', axis: 'AD', options: [{ pole: 'A' }, { pole: 'D' }] },
  // BS — Big hands vs Small hands
  { id: 'q4', axis: 'BS', options: [{ pole: 'B' }, { pole: 'S' }] },
  { id: 'q5', axis: 'BS', options: [{ pole: 'B' }, { pole: 'S' }] },
  { id: 'q6', axis: 'BS', options: [{ pole: 'B' }, { pole: 'S' }] },
  // CF — Calculated vs Feel/Faith
  { id: 'q7', axis: 'CF', options: [{ pole: 'C' }, { pole: 'F' }] },
  { id: 'q8', axis: 'CF', options: [{ pole: 'C' }, { pole: 'F' }] },
  { id: 'q9', axis: 'CF', options: [{ pole: 'C' }, { pole: 'F' }] },
  // TW — Tight vs Wild
  { id: 'q10', axis: 'TW', options: [{ pole: 'T' }, { pole: 'W' }] },
  { id: 'q11', axis: 'TW', options: [{ pole: 'T' }, { pole: 'W' }] },
  { id: 'q12', axis: 'TW', options: [{ pole: 'T' }, { pole: 'W' }] },
];

export const NUM_QUESTIONS = QUESTIONS.length;
