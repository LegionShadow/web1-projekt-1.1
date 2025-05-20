document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
            header.classList.add('hidden');
            header.style.transform = 'translateY(-100%)';
        } else {
            header.classList.remove('hidden');
            header.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });
});