let pessoa = {nome:'josé', 
Sexo:'M', 
peso: 75.4,
ganharMasa(p=0){
    console.log('Ganhou peso')
    this.peso += p
}}

pessoa.ganharMasa(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)