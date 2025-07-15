function somar(x, y){
    return x+y
}
//const somar = (x+y) =>x+y

console.log(somar(1, 2))
console.log(somar(0, 0))
console.log(somar(10, -10))
console.log(somar(1000, 0))
console.log(somar(0, 1.1))
console.log(somar(1, 'a'))

function interest(a, b){
    return parseFloat((a*(b/100)).toFixed(2))
}
//const interest(a, b) => parseFloat((a*(b/100)).toFixed(2))

console.log(interest(150, 8.5))
console.log(interest(250, 0.0))
console.log(interest(0.0, 20))