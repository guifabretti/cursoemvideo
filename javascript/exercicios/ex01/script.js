function carregar(){
    var msg = window.document.querySelector('p#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 7
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora < 12) {
        // nascer do sol
        img.src = 'nascer-sol.jpeg'
        document.body.style.backgroundColor = '#EFBA8A'
    } else if (hora >= 12 && hora < 17) {
        // meio dia
        img.src = 'meio-dia.jpeg'
        document.body.style.backgroundColor = '#71AEF9' 
    } else if (hora >= 17 && hora < 19){
        // por do sol
        img.src = 'entardecer.jpeg'
        document.body.style.backgroundColor = '#C45601'
    } else{
        // noite
        img.src = 'noite.jpeg'
    }

}