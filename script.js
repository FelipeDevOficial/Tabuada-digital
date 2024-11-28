
function calcular(numero) {
    var conteudo = '';
    for (var count = 0; count <= 10; count++) {
        conteudo += `${numero} x ${count} = ${numero * count}<br />`;
    }

    // Seleciona o elemento onde o conteúdo será inserido
    var conteudoDiv = document.getElementById('conteudos');

    // Atualiza o conteúdo do elemento
    conteudoDiv.innerHTML = conteudo;

    // Atualiza o título da página
    document.title = `Tabuada do ${numero}`;
    //Esconde os botoes de escolha do numero
    document.getElementById("buttons").style.display = "none";
    //adiciona o botao de voltar
    document.getElementById("voltar").style.display = "block";
    
}
