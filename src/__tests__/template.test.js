import Validator from '../js/app';

test('Допустимые символы', () => {
    const checkStr = 'I-am_S12kunS_Ku1N';
    const result = Validator.validateUsername(checkStr);
    expect(result).toBe(true);
});

test('Недопустимые символы', () => {
    const checkStr = 'I=/am@';
    const result = Validator.validateUsername(checkStr);
    expect(result).toBe(false);
});

test('empty value check', () => {
    const check = () => Validator.validateUsername('');
    expect(check).toThrow('empty value');
});

test('3 цифры и более запрещено', () => {
    const checkStr = 'I-am123Vas';
    const result = Validator.validateUsername(checkStr);
    expect(result).toBe(false);
});

test.each([
    ['1I-am_Skuns'],
    ['I-am_Skuns1'],
    ['_I-am_Skuns'],
    ['-I-am_Skuns'],
    ['I-am_Skuns-'],
    ['I-am_Skuns_'],
])('.add($#) Цифры, подчеркивания, тире в начале/конце запрещены', (a) => {
    expect(Validator.validateUsername(a)).toBe(false);
});
