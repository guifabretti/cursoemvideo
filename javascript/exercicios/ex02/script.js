function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente [ERRO]')
    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-m.webp')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'jovem-m.jpeg')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.jpeg')
            } else{
                //idoso
                img.setAttribute('src', 'idoso-m.webp')

            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-f.webp')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'jovem-f.webp')

            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-f.jpeg')
            } else{
                //idoso
                img.setAttribute('src', 'idosa-f.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`
        res.appendChild(img)
    }
}