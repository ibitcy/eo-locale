import { Translator } from '../translator';

describe('Handle missing id', () => {
  test('Should call error handler', () => {
    const onError = jest.fn();
    const translator = new Translator();
    translator.onError = onError;

    translator.translate('test', undefined, {
      onError,
    });

    expect(onError).toBeCalledTimes(1);
  });
});
