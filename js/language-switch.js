//Skapad med hjälp av ChatGT men ska försöka utgå från detta och kunna lära mig själv detta.

document.addEventListener('DOMContentLoaded', () => {
    // Sätt aktuellt år om elementet finns
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Centraliserad språkbytesfunktion
    function switchLanguage(lang) {
        const elements = document.querySelectorAll('[data-en]');
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

    // Om nödvändigt kan vi ha en reset-funktion
    function resetLanguage() {
        switchLanguage('en');
    }

    // Lägg till eventlisteners på alla språkknappar
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
