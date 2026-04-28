const elementos = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // 👈 impede sair depois
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach(el => observer.observe(el));