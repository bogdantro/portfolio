// window.onload = function(){ 

//     const loader = document.getElementById('loader');


//     if ($(window).width() > 1150) {
//         setTimeout(() => {
//             loader.classList.add('hidden');
//         }, 1500);
//         setTimeout(() => {
//             document.getElementById('joke').classList.add('active')
//         }, 2000);
//     }else{
//         setTimeout(() => {
//             document.getElementById('joke').classList.add('active')
//         }, 1500);
//         setTimeout(() => {
//             loader.classList.add('hidden');
//         }, 2000);
//     }
// }



// new kursor({
//     type: 4,
//     removeDefaultCursor: true,
// })


function cursorLink(){
    var cursorLazy = document.querySelector('.cursor-lazy');
    var cursor = document.querySelector('.cursor');

    cursorLazy.classList.add('link')
    cursor.classList.add('link')
}

function cursorLinkLeave(){
    var cursorLazy = document.querySelector('.cursor-lazy');
    var cursor = document.querySelector('.cursor');

    cursorLazy.classList.remove('link')
    cursor.classList.remove('link')
}



