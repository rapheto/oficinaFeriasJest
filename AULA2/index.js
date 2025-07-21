const somar = (x, y) => x+y;

const operacoes = ["somar", "subtrair", "multiplicar", "dividir"];

const dividir = (x, y) => {
    if (y === 0) {
        throw new Error("Divisão por zero não é permitida");
    }
    return x / y;
}

module.exports = {somar, operacoes, dividir};

