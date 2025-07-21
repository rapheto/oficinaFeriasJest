const {calcularFaltasTotais, calcularMedia, avaliarAluno} = require('./Exercicio_aula_3');

describe('Teste da função calcularFaltasTotais()', () => {
    test("Deveria retornar 15 faltas totais para 5 faltas",() => {
        expect(calcularFaltasTotais(5)).toBe(15);
    })
    test('Deveria retornar Valor inválido para entradas negativas', () => {
        expect(()=>calcularFaltasTotais(-1)).toThrow('Valor inválido');
    })
    test('Deveria retornar Valor inválido para 21 faltas', () => {
        expect(()=>calcularFaltasTotais(21)).toThrow('Valor inválido');
    })
    test("Deveria retornar 0 para 0 faltas", () => {
        expect(calcularFaltasTotais(0)).toBe(0);
    });
    test("Deveria retornar 60 para 20 faltas", () => {
        expect(calcularFaltasTotais(20)).toBe(60);
      });
});

describe('Teste da função calcularMedia()', ()=>{
    test("Deveria retornar 8.5 para notas 8.0 e 9.0", () => {
        expect(calcularMedia(8.0, 9.0)).toBe(8.5);
    });
    test("Deveria retornar Nota invalida para notas maior que 10", ()  => {
        expect(() => calcularMedia(2, 11.0)).toThrow('Nota invalida');
    })
    test("Deveria retornar Nota invalida para notas menor que 0", () => {
        expect(() => calcularMedia(-1, 1)).toThrow('Nota invalida');
    })
    test("Deveria retornar 7 para notas 7 e 7", () => {
        expect(calcularMedia(7, 7)).toBe(7);
    });
    test("Deveria retornar 1 para notas 2 e 0", () => {
        expect(calcularMedia(2, 0)).toBe(1);
    });
});

describe('Teste da função avaliarAluno()', () => {
    test("Deveria retornar 'Aprovado' para media 8.5 e 15 faltas", () => {
        expect(avaliarAluno(8.5, 15)).toBe('Aprovado');
    });
    test("Deveria retornar 'Aguardando a final' para média 5.5 e 6 faltas", () => {
        expect(avaliarAluno(5.5, 6)).toBe('Aguardando a final');
    });
    test("Deveria retornar 'Reprovado por faltas' para faltas totais > 15", () => {
        expect(avaliarAluno(2.5, 18)).toBe('Reprovado por faltas');
    });
    test("Deveria retornar 'Reprovado por média' para média < 3 e faltas <= 15", () => {
        expect(avaliarAluno(1.5, 3)).toBe('Reprovado por média');
    });
    test("Deveria retornar 'Reprovado por faltas' para média válida e faltas < 15", () => {
        expect(avaliarAluno(7.5, 21)).toBe('Reprovado por faltas');
    });
    test("Deveria retornar 'Reprovado por média' para média < 3 e faltas > 15", () => {
        expect(avaliarAluno(2.5, 15)).toBe('Reprovado por média');
    });
})