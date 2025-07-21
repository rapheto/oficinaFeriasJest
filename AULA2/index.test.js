const {somar, operacoes, dividir} = require('./index.js')

describe('funcoes da calculadora', ()=> {
    //Teste 1
    test('retornar 4 ao somar 2 + 2',()=>{
        expect(somar(2,2)).toBe(4)
    })

    //Teste 2
    test('retornar 5 ao somar 2 + 3',()=>{
        expect(somar(2,3)).toBe(5)
    })

    //Teste 3
    test('tem que ser nulo', ()=>{
        const x = null
        expect(x).toBeNull()
    })

    //Teste 4
    test('tem que ser undefined', ()=>{
        let y;
        expect(y).toBeUndefined()
    })

    //Teste 5
    test('tem que ser true', ()=>{
        const t = true
        expect(t).toBeTruthy()
    })

    //Teste 6
    test('tem que ser false', ()=>{
        const f = false
        expect(f).toBeFalsy()
    })

    //Teste 7
    test('Deveria ser maior que a soma de 5 + 5', ()=>{
        const x = somar(5, 6)
        expect(x).toBeGreaterThan(10)
    })

    //Teste 8
    test('Deveria ser menor que a soma de 5 + 5', ()=>{
        const x = somar(5, 3)
        expect(x).toBeLessThan(10)
    })

    //Teste 9
    test('Deveria conter o item 2', ()=>{
        const x = [1, 2, 3]
        expect(x).toContain(2)
    })

    //Teste 10
    test('Deveria conter o item "somar"', ()=>{
        expect(operacoes).toContain('somar')
    })

    //Teste 11
    test('Deveria ter 4 itens na lista de operacoes', ()=>{
        expect(operacoes).toHaveLength(4)
    })

    //Teste 12
    test('Deveria retornar 4 ao dividir 8 por 2', ()=>{
        const dividir = (x, y) => x / y;
        expect(dividir(8, 2)).toBe(4)
    })

    //Teste 13
    test('Deveria lançar um erro ao dividir por zero', ()=>{
        expect(() => dividir(8, 0)).toThrow("Divisão por zero não é permitida")
    })
})