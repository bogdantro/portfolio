window.onload = function(){
    const pageIntro = document.getElementById('pageIntro');

    setTimeout(() => {
        pageIntro.classList.add('hidden');
    }, 500);

    setTimeout(() => {
        pageIntro.style.opacity = '0';
    }, 1600);
}
