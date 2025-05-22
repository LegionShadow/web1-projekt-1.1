document.addEventListener('DOMContentLoaded', () => {
    // Sätt aktuellt år om elementet finns
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Ändrad: Hämta alla element som har data-en, data-sv eller data-ru
    function switchLanguage(lang) {
        const elements = document.querySelectorAll('[data-en],[data-sv],[data-ru]');
        elements.forEach(element => {
            if (element.hasAttribute(`data-${lang}`)) {
                const newContent = element.getAttribute(`data-${lang}`);
                if (['H1', 'H2', 'H3'].includes(element.tagName)) {
                    element.innerHTML = newContent;
                } else {
                    element.textContent = newContent;
                }
            }
        });
    }

    // Reset språket (standard: engelska)
    function resetLanguage() {
        switchLanguage('en');
    }

    // Event-lyssnare för språkknappar
    document.querySelectorAll('.language-button').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('id');
            if (id === 'language-button-sv') {
                switchLanguage('sv');
            } else if (id === 'language-button-en') {
                switchLanguage('en');
            } else if (id === 'language-button-ru') {
                switchLanguage('ru');
            }
        });
    });
});
