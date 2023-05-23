let amigo = {nome: 'jose', sexo: 'M', peso: 83.5, engordar(p){
    console.log('Engordou')
    this.peso += p
} }

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)