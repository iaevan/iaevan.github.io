let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("logo");

window.addEventListener('scroll',function(){
    var value = window.scrollY;

    bg.style.top = value * 0.3 + 'px' ;
    moon.style.left = -value * 0.2 + 'px' ;
    mountain.style.top = -value * 0.05 + 'px' ;
    road.style.top = value * 0.05 + 'px' ;
    text.style.top = value * 1.2 + 'px' ;
})
