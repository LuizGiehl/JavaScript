let valores = [3,5,6,2,4,1]

console.log(valores)
/*
for(let pos = 0; pos<valores.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */


for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}