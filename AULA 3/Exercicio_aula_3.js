const calcularFaltasTotais = (faltas) => {
    const faltasTotais = faltas * 3;
  
    if (faltasTotais < 0 || faltasTotais > 60) {
      throw new Error("Valor inválido");
    }
    return faltasTotais;
};

const calcularMedia = (nota1, nota2) => {
    const media = ((nota1 + nota2) / 2);
    if(nota1 > 10 || nota2 > 10 || nota1 < 0 || nota2 < 0){
        throw new Error("Nota invalida");
    }else{
        return media;
    }

}; 

const avaliarAluno = (media, faltas) => {
    if (media >= 7 && faltas <= 15) {
        return "Aprovado";
    } else if (faltas > 15) {
        return "Reprovado por faltas";
    } else if (media >= 3 && media < 7 && faltas <= 15) {
        return "Aguardando a final";
    } else if (media < 3) {
        return "Reprovado por média";
    }
};

module.exports = {calcularFaltasTotais, calcularMedia, avaliarAluno};