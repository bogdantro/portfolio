window.addEventListener("scroll", function(){
    const navbar = document.getElementById('mobileNav');
    navbar.classList.toggle("sticky", window.scrollY > 1)
})
window.addEventListener("scroll", function(){
    const navbar = document.getElementById('desNav');
    navbar.classList.toggle("sticky", window.scrollY > 1)
})

function menu(){
    const navbar = document.getElementById('mobileNav');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const logo = document.getElementById('logo');
    const bottomCoverText = document.getElementById('bottomCoverText');


    if (window.getComputedStyle(sidebar,null).getPropertyValue("opacity") == '0'){
        sidebar.classList.add('active');
        setTimeout(() => {
            hamburger.classList.add('click1');
        }, 0);
        setTimeout(() => {
            hamburger.classList.add('click2');
        }, 300);
        navbar.classList.add('active');
        logo.classList.add('active');
        hamburger.classList.remove('close-txt');
        bottomCoverText.style.opacity = '0';
    }else{
        sidebar.classList.remove('active');
        setTimeout(() => {
            hamburger.classList.remove('click1');
        }, 0);
        hamburger.classList.add('close-txt');
        setTimeout(() => {
            hamburger.classList.remove('click2');
        }, 300);
        navbar.classList.remove('active');
        logo.classList.remove('active');
        bottomCoverText.style.opacity = 'unset';
    }
}


function aboutMeScroll(){
    const navbar = document.getElementById('mobileNav');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const logo = document.getElementById('logo');

    sidebar.classList.remove('active');
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
    logo.classList.remove('active');

        window.location.href='#aboutMe';
}

function whatIDoScroll(){
    const navbar = document.getElementById('mobileNav');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const logo = document.getElementById('logo');

    sidebar.classList.remove('active');
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
    logo.classList.remove('active');

        window.location.href='#whatIDo';
}

function myWorkScroll(){
    const navbar = document.getElementById('mobileNav');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const logo = document.getElementById('logo');

    sidebar.classList.remove('active');
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
    logo.classList.remove('active');

        window.location.href='#myWork';
}

function contactMeScroll(){
    const navbar = document.getElementById('mobileNav');
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const logo = document.getElementById('logo');

    sidebar.classList.remove('active');
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
    logo.classList.remove('active');

    window.location.href='#contactForm';
}
