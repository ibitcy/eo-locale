export class TranslationError extends Error {
  readonly id: string;
  readonly language: string;

  static is(value: unknown): value is TranslationError {
    return value instanceof TranslationError;
  }

  constructor(id: string, language: string) {
    super('Translation failed');
    this.id = id;
    this.language = language;
  }
}
