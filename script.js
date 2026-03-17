document.addEventListener('DOMContentLoaded', () => {

    // --- Кнопка "Наверх" ---
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // --- Логика тарифов ---
    const btn = document.getElementById('showTariff');
    const info = document.getElementById('tariffInfo');

    if (btn && info) {
        btn.addEventListener('click', () => {
            const isHidden = info.classList.toggle('hidden');
            btn.textContent = isHidden ? 'Показать доступные документы' : 'Скрыть информацию';
        });
    }

    // Логгирование переходов (опционально)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            console.log('Переход к:', link.getAttribute('href'));
        });
    });
});
