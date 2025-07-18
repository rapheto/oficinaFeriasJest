//Função para somar 3 valores
const somar = (a, b, c) => a + b + c;

//Função que retorna o produto entre dois números
const produto = (a, b) => a * b;

//Função para calcular a média de dois números
const media = (a, b) => (a + b) / 2;

//Função que sempre retorna null
const retornaNulo = () => null;

//Função que sempre retorna undefined
const retornaIndefinido = () => undefined;

//Função que verifica se um número é positivo
const ehPositivo = (numero) => {
  if (numero > 0) {
    return "É positivo";
  }
  return false;
};

//Função que verifica se um número é negativo
const ehNegativo = (numero) => {
  if (numero < 0) {
    return "É negativo";
  }
  return false;
};

//Função que retorna true se um número for par
const ehPar = (numero) => {
  if (numero % 2 === 0) {
    return true;
  }
  return false;
};

//Função que retorna true se um número for ímpar
const ehImpar = (numero) => {
  if (numero % 2 === 1) {
    return true;
  }
  return false;
};

//Função que retorna uma lista de departamentos da empresa
const listaDptos = () => ["RH", "Financeiro", "TI"];

//Função que valida o nome de um cliente e lança um erro se o nome for vazio
const validarNome = (nome) => {
  if (!nome) {
    throw new Error("Nome inválido");
  }
  return nome;
};

module.exports = {
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
};