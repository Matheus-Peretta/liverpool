function mostrarJogo(){
    //DECLARANDO VARIÁVEIS
    var detalhespartida = document.getElementById('detalhespartidas')
    var logopremier = document.getElementById('logopremierleague')
    var aparecerjogo = document.getElementById('aparecerjogo')
    //DIV
    detalhespartida.style.backgroundColor = 'rgb(192, 0, 0)'
    detalhespartida.style.borderRadius = '10px'
    detalhespartida.style.width = '80vw'
    detalhespartida.style.margin = 'auto'
    //APLICANDO IMAGENS
    logopremier.src = 'imagens/premier-league-logo.jpg'
    logopremier.style.height = '150px'
    aparecerjogo.innerHTML = '<img src="imagens/Leeds_United_Logo.png" id="timevisitante"> x <img src="imagens/Liverpool_FC-logo-editado.png" id="timeliverpool">'

    if(detalhespartida.style.display == 'block'){
        detalhespartida.style.display = 'none'
    } else{
        detalhespartida.style.display = 'block'
    }
}