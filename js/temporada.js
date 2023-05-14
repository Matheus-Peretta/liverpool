function carregar(){
        document.getElementById('detalhesPartida').innerHTML = ""
}
function partida(){
        if(document.getElementById('detalhesPartida').innerHTML == ""){
        document.getElementById('botaoFechar').style = "display: block; flex-basis: 100%; display: flex; justify-content: right; "

        document.getElementById("detalhesPartida").innerHTML += '<img src="imagens/LeicesterCity_logo2014.png" alt="" style="width: 70px;"></img><span style="align-self: flex-end;">X</span> <img src="imagens/Liverpool_FC-logo-editado.png" alt="" style="width: 50px;"> <div style="flex-basis: 100%; text-align: center;"><span class="material-symbols-outlined">stadium</span>King Park Stadium</div> <div style="flex-basis: 100%; text-align: center; padding: 0px;"><span class="material-symbols-outlined">schedule</span>16:00 Horas</div> <div style="flex-basis: 100%; text-align: center; padding: 0px; padding-bottom: 10px;"><span class="material-symbols-outlined">calendar_month</span>seg 15/05</div>'
    
        document.getElementById('priPartida').style = "display:none;"
        } else{
            window.alert('Clique no botão para fechar as informações da partida, para abrir a próxima')
        }
}
function partida2(){
    if(document.getElementById('detalhesPartida').innerHTML == ""){
        document.getElementById('botaoFechar').style = "display: block; flex-basis: 100%; display: flex; justify-content: right; "

        document.getElementById("detalhesPartida").innerHTML += '<img src="imagens/Liverpool_FC-logo-editado.png" alt="" style="width: 50px;"> <span style="align-self: flex-end;">X</span> <img src="imagens/Aston_Villa_FC_2023_logo.png" alt="" style="width: 70px;"></img> <div style="flex-basis: 100%; text-align: center;"><span class="material-symbols-outlined">stadium</span>King Park Stadium</div> <div style="flex-basis: 100%; text-align: center; padding: 0px;"><span class="material-symbols-outlined">schedule</span>16:00 Horas</div> <div style="flex-basis: 100%; text-align: center; padding: 0px; padding-bottom: 10px;"><span class="material-symbols-outlined">calendar_month</span>seg 15/05</div>'
    } else {
        window.alert('Clique no botão para fechar as informações da partida, para abrir a próxima')
    }
}

function fechar(){
    document.getElementById('detalhesPartida').innerHTML = ""

    document.getElementById('botaoFechar').style = "display: none;"

    document.getElementById('priPartida').style = "display:block; align-self: self-start; flex-basis: 45%;"
}