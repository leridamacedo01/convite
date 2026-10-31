// Ativa as transições dinâmicas de slide e fade
function irParaDetalhes() {
    const capa = document.getElementById('capa');
    const detalhes = document.getElementById('detalhes');
    
    // Remove a classe ativa da capa e adiciona aos detalhes
    capa.classList.remove('active');
    detalhes.classList.add('active');
    
    // Adiciona uma animação interna nos blocos de informação quando a página surge
    const conteudoDetalhes = detalhes.querySelector('.conteudo');
    conteudoDetalhes.classList.add('animar-entrada');
}

function voltarParaCapa() {
    const capa = document.getElementById('capa');
    const detalhes = document.getElementById('detalhes');
    
    detalhes.classList.remove('active');
    capa.classList.add('active');
}
