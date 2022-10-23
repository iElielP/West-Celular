let collapsibles = document.querySelectorAll('.faq-container')

collapsibles.forEach(element => {
    element.addEventListener("click", () => {
        element.querySelector('.faq-answer').classList.toggle('openresp');
        element.querySelector('.question').classList.toggle('active');
        element.querySelector('.fa-chevron-down').classList.toggle('rotate');
    })
});