const panchaBhootas = document.querySelectorAll('.panel');

panchaBhootas.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panchaBhootas.forEach(panel => {
        panel.classList.remove('active');
    })
}