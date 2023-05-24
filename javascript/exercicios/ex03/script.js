function contar(){
    let inicio = document.getElementById('iinicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = document.getElementById('res')

    if (inicio.value.lenght == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados [ERRO]')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('[ERRO] Passo Inválido, considerando PASSO 1 [ERRO]')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c+= p){
                res.innerHTML += `${c} > `
            }
            res.innerHTML += `\u{1F3C1}`
        } else{
            //contagem decrescente
            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} > `
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}