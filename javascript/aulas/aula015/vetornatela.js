let valores = [8, 1, 7, 4, 3, 9, 7]

/*
for (let pos = 0; pos <  valores.length; pos++) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
*/

for (let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}