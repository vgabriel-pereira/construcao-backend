const calculadora = require('../src/calculadora.js')
test("2 + 2 == 4?", function () {
    expect(calculadora.soma(2,2)).toBe(4);
});

