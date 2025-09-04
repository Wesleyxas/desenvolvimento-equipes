// Scripts para interatividade da seção de palestrantes

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona funcionalidade aos palestrantes
    const speakers = document.querySelectorAll('.speaker');
    
    speakers.forEach(speaker => {
        speaker.addEventListener('click', function() {
            const name = this.querySelector('h3').textContent;
            alert(`Você clicou no palestrante: ${name}`);
        });
    });
    
    // Log para debug
    console.log('Scripts de palestrantes carregados com sucesso!');
});
