import { QUESTIONS } from './questions';
import { Axis, Pole, TypeCode, AXIS_POLES } from './types';

export type Answers = Record<string, 0 | 1>;

export function scoreAnswers(answers: Answers): TypeCode {
  const counts: Record<Pole, number> = {
    A: 0, D: 0, B: 0, S: 0, C: 0, F: 0, T: 0, W: 0,
  };

  for (const q of QUESTIONS) {
    const choice = answers[q.id];
    if (choice === undefined) {
      throw new Error(`Question ${q.id} not answered`);
    }
    const pole = q.options[choice].pole;
    counts[pole] += 1;
  }

  const code = (['AD', 'BS', 'CF', 'TW'] as Axis[])
    .map((axis) => {
      const [first, second] = AXIS_POLES[axis];
      // On a tie (shouldn't happen with odd questions per axis) prefer the
      // first pole deterministically.
      return counts[first] >= counts[second] ? first : second;
    })
    .join('') as TypeCode;

  return code;
}

export function isComplete(answers: Answers): boolean {
  return QUESTIONS.every((q) => answers[q.id] !== undefined);
}
