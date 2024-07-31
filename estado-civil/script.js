document.addEventListener('DOMContentLoaded', () => {
    const mainH2 = document.getElementById('main-h2');
    function clicked() {
        mainH2.innerHTML = "Y es lo mejor.";
        mainH2.classList.add('visible');
    }

    document.querySelector('.main-h1').addEventListener('click', clicked);
});