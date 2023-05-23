let num = [5, 8, 2, 9, 3]
num[5] = 6 //adiciona, neste caso, um numero no elemento 5
num.push(7) //adiciona um numero no final, neste caso o 7
let pos = num.indexOf(8) //procura um determinado valor, neste caso, o 8

console.log(`Numero de elementos é ${num.length}`)
console.log(`Nosso vetor é o ${num}`) 
console.log(`O valor 8 esta na posição ${pos}`)
num.sort()
console.log(`Vetor em ordem crescente ${num}`)
