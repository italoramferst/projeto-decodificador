const BotaoCopiar = document.getElementById('botaoCopiar'); // Remova o ponto
BotaoCopiar.style.display = 'none';
const outputresultado = document.querySelector('.texto__paragrafo');
const inputTexto = document.querySelector('.vertical-input');

function criptografar() {
    const imagemNaoEncontrado = document.querySelector('.container__naoencontrado');
    const mensagemInicial = document.querySelector('.mensagem__inicial');

    if (imagemNaoEncontrado && mensagemInicial) {
        imagemNaoEncontrado.style.display = 'none';
        mensagemInicial.style.display = 'none';
    }

    BotaoCopiar.style.display = 'block';

    // Exibir o campo de resultado antes de atualizar o conteúdo
    outputresultado.style.display = 'block';

    const inputText = document.getElementById('input').value.toLowerCase();
    let criptografado = '';

    for (let i = 0; i < inputText.length; i++) {
        switch (inputText[i]) {
            case 'e':
                criptografado += 'enter';
                break;
            case 'i':
                criptografado += 'imes';
                break;
            case 'a':
                criptografado += 'ai';
                break;
            case 'o':
                criptografado += 'ober';
                break;
            case 'u':
                criptografado += 'ufat';
                break;
            default:
                criptografado += inputText[i];
        }
    }

    document.getElementById('output').innerText = criptografado;
    exibirTextoNaTela('.texto__paragrafo', criptografado);
}

function copiarTexto() {
    const textoCriptografado = document.getElementById('output').innerText;
    // Criar um elemento de área de texto temporário
    const inputTemporario = document.createElement('textarea');
    // Definir o valor do texto criptografado no elemento temporário
    inputTemporario.value = textoCriptografado;
    // Adicionar o elemento temporário ao corpo do documento
    document.body.appendChild(inputTemporario);
    // Selecionar o conteúdo do elemento temporário
    inputTemporario.select();
    // Executar o comando de cópia
    document.execCommand('copy');
    // Remover o elemento temporário
    document.body.removeChild(inputTemporario);
    outputresultado.style.display = 'none';
    inputTexto.value = '';
}

function descriptografar() {
    const textoCriptografado = document.getElementById('input').value.toLowerCase();
    let descriptografado = textoCriptografado;

    // Realiza as substituições conforme as regras
    descriptografado = descriptografado.replace(/enter/g, 'e');
    descriptografado = descriptografado.replace(/imes/g, 'i');
    descriptografado = descriptografado.replace(/ai/g, 'a');
    descriptografado = descriptografado.replace(/ober/g, 'o');
    descriptografado = descriptografado.replace(/ufat/g, 'u');

    document.getElementById('output').innerText = `Texto descriptografado: ${descriptografado}`;
    outputresultado.style.display = 'block';
    exibirTextoNaTela('.texto__paragrafo', descriptografado);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}