import en from './locales/en';
import zh from './locales/zh';
import ja from './locales/ja';
import ko from './locales/ko';
import fr from './locales/fr';
import { ALL_TYPE_CODES } from '../mbti/types';
import { QUESTIONS } from '../mbti/questions';

const LOCALES = { en, zh, ja, ko, fr };

describe('translations', () => {
  test.each(Object.entries(LOCALES))('all 16 types are translated in %s', (_name, locale) => {
    for (const code of ALL_TYPE_CODES) {
      expect(locale.types[code]).toBeDefined();
      expect(locale.types[code].name).toBeTruthy();
      expect(locale.types[code].description).toBeTruthy();
    }
  });

  test.each(Object.entries(LOCALES))('all questions are translated in %s with two options', (_name, locale) => {
    for (const q of QUESTIONS) {
      const qt = (locale.questions as any)[q.id];
      expect(qt).toBeDefined();
      expect(qt.question).toBeTruthy();
      expect(qt.options).toHaveLength(2);
    }
  });
});
