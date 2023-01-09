export class TranslationError extends Error {
  public readonly id: string;
  public readonly language: string;

  public static is(value: unknown): value is TranslationError {
    return value instanceof TranslationError;
  }

  constructor(id: string, language: string) {
    super('Translation failed');
    this.id = id;
    this.language = language;
  }
}
