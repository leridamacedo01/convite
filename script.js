// Função para navegar para a página de detalhes
function proximaPagina() {
    const capa = document.getElementById('capa');
    const detalhes = document.getElementById('detalhes');
    
    capa.classList.remove('active');
    detalhes.classList.add('active');
}

// Função para voltar para a capa
function voltarPagina() {
    const capa = document.getElementById('capa');
    const detalhes = document.getElementById('detalhes');
    
    detalhes.classList.remove('active');
    capa.classList.add('active');
}
