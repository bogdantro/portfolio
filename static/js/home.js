// window.onload = function(){ 

//     const loader = document.getElementById('loader');


//     if ($(window).width() > 1150) {
//         setTimeout(() => {
//             loader.classList.add('hidden');
//         }, 200);
//     }else{
//         setTimeout(() => {
//             setTimeout(() => {
//                 loader.classList.add('hidden');
//             }, 200);
//         }, 200);
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



