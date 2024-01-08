
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Анимация или действие при отправке формы
    this.style.opacity = '0.5';
    setTimeout(() => {
        this.style.opacity = '1';
        alert('Форма отправлена!'); 
    }, 500);
});



