// 1 - quando passar o mouse em cima do personagem temos:
// - Colocar a classe selecionado no personagem que passamos o mouse em cima para animação nele e retirar a classe selecionado no personagem que está selecionado.
// 2 -Quando passar o mouse em cima trocar a imagem e nome do personagem grande
// - alterar a imagem do jogador 1
// - alterar o nome do personagem do jogador 1

const personagens = document.querySelectorAll('.personagem')
console.log(personagens);

personagens.forEach((personagem) => { 
    personagem.addEventListener('click', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')

    const idSelecionado = personagem.attributes.id.value;

    const imagemJogador1 = document.getElementById('personagem-jogador1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');
    nomeJogador1.innerHTML = nomeSelecionado;
    })
})
