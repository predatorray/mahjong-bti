import { scoreAnswers, isComplete } from './scoring';
import { QUESTIONS } from './questions';
import { Answers } from './scoring';

function answersChoosing(choice: 0 | 1): Answers {
  const a: Answers = {};
  for (const q of QUESTIONS) a[q.id] = choice;
  return a;
}

describe('scoreAnswers', () => {
  test('all option 0 -> ABCT', () => {
    expect(scoreAnswers(answersChoosing(0))).toBe('ABCT');
  });

  test('all option 1 -> DSFW', () => {
    expect(scoreAnswers(answersChoosing(1))).toBe('DSFW');
  });

  test('majority per axis decides the pole', () => {
    // For each axis, set 2 of 3 questions to option 0 and 1 to option 1,
    // for AD only — expect A on AD and the all-1 result for others.
    const a: Answers = {};
    for (const q of QUESTIONS) a[q.id] = 1;
    // Override 2 of the 3 AD questions to option 0
    const adQuestions = QUESTIONS.filter((q) => q.axis === 'AD').slice(0, 2);
    for (const q of adQuestions) a[q.id] = 0;
    expect(scoreAnswers(a)).toBe('ADSFW'.slice(0, 1) + 'DSFW'.slice(1)); // 'ASFW'
  });

  test('throws when an answer is missing', () => {
    const a = answersChoosing(0);
    delete a[QUESTIONS[0].id];
    expect(() => scoreAnswers(a)).toThrow();
  });
});

describe('isComplete', () => {
  test('false when partial', () => {
    expect(isComplete({})).toBe(false);
    const partial: Answers = { [QUESTIONS[0].id]: 0 };
    expect(isComplete(partial)).toBe(false);
  });
  test('true when all answered', () => {
    expect(isComplete(answersChoosing(0))).toBe(true);
  });
});
