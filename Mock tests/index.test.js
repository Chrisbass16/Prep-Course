const suma = require('./index');

test('Suma 2 + 3 y da 5', () => {
    expect(suma(2,3)).toBe(5);
});

test('Suma 10 + 15 y da 25', () => {
    expect(suma(10,15)).toBe(25);
});