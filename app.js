
let baseVogais = [
    {chave: "e", valor: "lKoI"},
    {chave: "i", valor: "saWq"},
    {chave: "a", valor: "hGt"},
    {chave: "o", valor: "klm"},
    {chave: "u", valor: "ieTy"},
    ]

function buscaValor(parametroLetra){
    let valor = parametroLetra;
    
    for (i = 0; i < baseVogais.length; i++){
        if (baseVogais[i].chave === parametroLetra){
            valor = baseVogais[i].valor;
            break;
        }    
    }

    return valor;
}

function encriptar(palavra){
    let arrayPalavras = palavra.split('');

    let letrasAcumuladas = '';

    for (cont = 0; cont < arrayPalavras.length; cont++){
        var valorConversao = buscaValor(arrayPalavras[cont]);
        letrasAcumuladas += valorConversao;
    }

    return letrasAcumuladas;
}

function desencriptar(palavra){
    for (k = 0; k < baseVogais.length; k++){
        palavra = palavra.replaceAll(baseVogais[k].valor , baseVogais[k].chave)
    }
    return palavra;
}


function clickEncriptar(){
    let palavra = document.querySelector('#entrada').value;
    let palavraEncriptada = encriptar(palavra);
    document.querySelector('#saida').value = palavraEncriptada;

}

function clickDesencriptar(){
    let palavra = document.querySelector('#entrada').value;
    let palavraDesencriptada = desencriptar(palavra);
    document.querySelector('#saida').value = palavraDesencriptada;

}

