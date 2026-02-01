// Modal funkcionalitás
const modal = document.getElementById('answerModal');
const revealBtn = document.getElementById('revealBtn1');
const closeBtn = document.querySelector('.close');

// Gomb kattintás esemény
revealBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Scroll letiltása modal megnyitásakor
});

// Bezárás gomb
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Scroll visszaengedése
});

// Modal bezárása kívülre kattintva
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// ESC billentyűvel bezárás
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Finom mozgó effektek a háttérhez
document.addEventListener('DOMContentLoaded', () => {
    // Parallax effekt a háttérhez
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const backgroundOverlay = document.querySelector('.background-overlay');
        
        if (backgroundOverlay) {
            const speed = scrollTop * 0.5;
            backgroundOverlay.style.transform = `translateY(${speed}px)`;
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Card animációk scroll esetén
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
