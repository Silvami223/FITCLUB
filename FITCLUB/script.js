document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.program-container .card');
    

    cards.forEach(card => card.classList.add('hidden'));

    
    function checkScroll() {
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardPosition < windowHeight - 100) { 
                card.classList.add('fade-in');
                card.classList.remove('hidden');
            }
        });
    }

    
    window.addEventListener('scroll', checkScroll);
});
