// Troca de página
const nextButton = document.getElementById('nextButton');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

nextButton.addEventListener('click', () => {
    page1.classList.remove('active');
    page2.classList.add('active');
});
