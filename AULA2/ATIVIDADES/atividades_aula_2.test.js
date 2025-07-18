const {
    somar,
    produto,
    media,
    retornaNulo,
    retornaIndefinido,
    ehPositivo,
    ehNegativo,
    ehPar,
    ehImpar,
    listaDptos,
    validarNome,
  } = require("./atividade_aula_2.js");

describe("Testes de funções", () => {
    //Teste funcao soma
    test("Deve retornar 3 ao somar 1 + 1 + 1", () => {
        expect(somar(1, 1, 1)).toBe(3);
    });
    test("Deve retornar 5 ao somar 1 + 2 + 2", () => {
        expect(somar(1, 2, 2)).toBe(5);
    });

    //Teste funcao produto
    test("Deve retornar 6 ao multiplicar 2 * 3", () => {
        expect(produto(2, 3)).toBe(6);
    });
    test("Deve retornar 12 ao multiplicar 3 * 4", () => {
        expect(produto(3, 4)).toBe(12);
    });

    //Teste funcao media
    test("Deve retornar 2 ao calcular a média de 3 + 3", () => {
        expect(media(3, 3)).toBe(3);
    });
    test("Deve retornar 4 ao calcular a média de 4 e 4", () => {
        expect(media(4, 4)).toBe(4);
    });

    //Teste funcao retornaNulo
    test("Deve retornar null", () => {
        expect(retornaNulo()).toBeNull();
    });

    //Teste funcao retornaIndefinido
    test("Deve retornar undefined", () => {
        expect(retornaIndefinido()).toBeUndefined();
    });

    //Teste funcao ehPositivo
    test("Deve retornar 'É positivo' para 5", () => {
        expect(ehPositivo(5)).toBe("É positivo");
    });
    test("Deve retornar false para -5", () => {
        expect(ehPositivo(-5)).toBe(false);
    });

    //Teste funcao ehNegativo
    test("Deve retornar 'É negativo' para -5", () => {
        expect(ehNegativo(-5)).toBe("É negativo");
    });
    test("Deve retornar false para 5", () => {
        expect(ehNegativo(5)).toBe(false);
    });

    //Teste funcao ehPar
    test("Deve retornar true para 4", () => {
        expect(ehPar(4)).toBe(true);
    });
    test("Deve retornar false para 5", () => {
        expect(ehPar(5)).toBe(false);
    });

    //Teste funcao ehImpar
    test("Deve retornar true para 3", () => {
        expect(ehImpar(3)).toBe(true);
    });
    test("Deve retornar false para 6", () => {
        expect(ehImpar(6)).toBe(false);
    });

    //Teste funcao listaDptos
    test("Deve retornar uma lista de departamentos", () => {
        expect(listaDptos()).toEqual(["RH", "Financeiro", "TI"]);
    });

    //Teste funcao validarNome
    test("Deve lançar um erro se o nome for vazio", () => {
        expect(() => validarNome("")).toThrow("Nome inválido");
    });
    test("Deve retornar o nome se for válido", () => {
        expect(validarNome("João")).toBe("João");
    });

})