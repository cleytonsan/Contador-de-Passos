function Contar() {
    var inicio =  document.getElementById('numInicio');
    var fim =  document.getElementById('numFim');
    var passo = document.getElementById('numPasso')
    var res = document.getElementById('res')


    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            // contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F57A}`
            }
        }else {
            // contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML = `${c} \u{1F3C3}`
            }
        }res.innerHTML += `\u{1F483}`
    }
    
}