window.onload = function(){ 

    const loader = document.getElementById('loader');


    if ($(window).width() > 1150) {
        setTimeout(() => {
            document.getElementById('joke').classList.add('active')
        }, 1800);
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 2300);
    }else{
        setTimeout(() => {
            document.getElementById('joke').classList.add('active')
        }, 1500);
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 2000);
    }
}


