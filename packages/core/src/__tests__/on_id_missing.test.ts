import { Translator } from '../translator';

describe('Handle missing id', () => {
  test('Should call handler', () => {
    const onIdMissing = jest.fn();
    const translator = new Translator();

    translator.translate('test', {
      onIdMissing,
    });

    expect(onIdMissing).toBeCalledTimes(1);
  });
});
