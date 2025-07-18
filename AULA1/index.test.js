import { somar } from './index.js'
//Testes automatizados

//Test Case ID 01
let x = 2;
let y= 3;
let resultado_esp = 5;
let resultado_obt = somar(x,y);
if(resultado_esp == resultado_obt){
    console.log("✅Teste passou")
}else{
    console.log("❌Teste falhou")
    console.log(`Resultado esperado = ${resultado_esp}, Resultado obtido = ${resultado_obt}`)
}

//Test Case ID 02
let x1 = 0;
let y1= 0;
let resultado_esp1 = 0;
let resultado_obt1 = somar(x1,y1);
if(resultado_esp1 == resultado_obt1){
    console.log("✅Teste passou")
}else{
    console.log("❌Teste falhou")
    console.log(`Resultado esperado = ${resultado_esp1}, Resultado obtido = ${resultado_obt1}`)
}

//Test Case ID 03
let x2 = 0;
let y2= -1;
let resultado_esp2 = 0;
let resultado_obt2 = somar(x2,y2);
if(resultado_esp2 == resultado_obt2){
    console.log("✅Teste passou")
}else{
    console.log("❌Teste falhou")
    console.log(`Resultado esperado = ${resultado_esp2}, Resultado obtido = ${resultado_obt2}`)
}