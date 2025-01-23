let listaNumeroSecreto = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

exibirTextoNaTela('h1','Jogo do numero secreto');
exibirTextoNaTela('p','Escolha um numero de 1 a 10 ');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let texto = 'Parabens vc acertou com ' + tentativas + " " + palavraTentativa;
        exibirTextoNaTela('h1','Acertou');
        exibirTextoNaTela('p',texto);
        document.getElementById('reiniciar').removeAttribute('disabled');

         } else {
            if (numeroSecreto > chute) {
                exibirTextoNaTela('p','o numero secreto é maior');
                exibirTextoNaTela('h1','Errouuuuuu');
            }else{
                exibirTextoNaTela('p','o numero secreto é menor');
                exibirTextoNaTela('h1','Errouuuuuu');
            }   
        } 
        tentativas++;
        limpaCampo()
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumeroSecreto.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaNumeroSecreto = []
    }
    if (listaNumeroSecreto.includes(numeroEscolhido)) {
        return numeroEscolhido();
    } else {
        listaNumeroSecreto.push(numeroEscolhido);
        console.log(listaNumeroSecreto);
        return numeroEscolhido;
    }

}

function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    limpaCampo();
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um numero de 1 a 10 ');
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
