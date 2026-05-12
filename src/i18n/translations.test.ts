import en from './locales/en';
import zh from './locales/zh';
import { ALL_TYPE_CODES } from '../mbti/types';
import { QUESTIONS } from '../mbti/questions';

describe('translations', () => {
  test('all 16 types are translated in both locales', () => {
    for (const code of ALL_TYPE_CODES) {
      expect(en.types[code]).toBeDefined();
      expect(en.types[code].name).toBeTruthy();
      expect(en.types[code].description).toBeTruthy();
      expect(zh.types[code]).toBeDefined();
      expect(zh.types[code].name).toBeTruthy();
      expect(zh.types[code].description).toBeTruthy();
    }
  });

  test('all questions are translated in both locales with two options', () => {
    for (const q of QUESTIONS) {
      const enQ = (en.questions as any)[q.id];
      const zhQ = (zh.questions as any)[q.id];
      expect(enQ).toBeDefined();
      expect(enQ.question).toBeTruthy();
      expect(enQ.options).toHaveLength(2);
      expect(zhQ).toBeDefined();
      expect(zhQ.question).toBeTruthy();
      expect(zhQ.options).toHaveLength(2);
    }
  });
});
