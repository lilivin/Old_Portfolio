const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const body = document.querySelector('.main-gallery');
const up = document.querySelector('.up');
const start = document.getElementById("start");
const projekty = document.getElementById("projekty");
const oMnie = document.getElementById("oMnie");
const kontakt = document.getElementById("kontakt");

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
    body.classList.toggle('disable');
    console.log("click")
}

hamburger.addEventListener('click', handleClick);
start.addEventListener('click', handleClick);
projekty.addEventListener('click', handleClick);
oMnie.addEventListener('click', handleClick);
kontakt.addEventListener('click', handleClick);

$('nav div ul li').on('click', function(){
    const goToSection= "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})
