const { calcularMediaAluno } = require("../src/calcularMediaAluno");

test("Existe?", function () {
  expect(calcularMediaAluno).toBeDefined();
});

test("a1 ou a2 indefinido", function () {
  expect(() => calcularMediaAluno(0, undefined, 0)).toThrow(
    "Notas a1 ou a2 não informadas"
  );
  expect(() => calcularMediaAluno(undefined, 0, 0)).toThrow(
    "Notas a1 ou a2 não informadas"
  );
});

test("a1 ou a2 nagativas", function () {
  expect(() => calcularMediaAluno(-2, 3, 0)).toThrow(
    "Notas a1 ou a2 não podem ser negativas"
  );
  expect(() => calcularMediaAluno(2, -3, 0)).toThrow(
    "Notas a1 ou a2 não podem ser negativas"
  );
});

test("a3 não informada", function () {
  expect(calcularMediaAluno(6, 9, undefined)).toBeCloseTo(3.9);
});

test("a3 negativo", function () {
  expect(() => calcularMediaAluno(1, 2, -3)).toThrow(
    "Notas a3 não pode ser negativo"
  );
});
test("comração de melhor nota", function () {
  expect(calcularMediaAluno(6, 3, 9)).toBeCloseTo(3.9);
  expect(calcularMediaAluno(3, 9, 6)).toBeCloseTo(3.9);
});
