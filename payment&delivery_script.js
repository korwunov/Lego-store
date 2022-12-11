'use strict';
        
//Страница загрузки

function disable_load() {
    load_page.style.display = "none";
    document.querySelector("header").style.display = "flex";
    document.querySelector("main").style.display = "flex";
    clearInterval(myInt);

}
        
let changer = 56;
let objWidth = 200 + changer;
let objHeight = 200 + changer;
        
function sizeChange () {
    if (changer > 0) {
        legoHead.style.width = objWidth + 10 + "px";
        legoHead.style.height = objHeight + 10 + "px";
    }
    else {
        legoHead.style.width = objWidth - 10 + "px";
        legoHead.style.height = objHeight - 10 + "px";
    }
            
    changer *= -1;
            
}
        
let myInt = setInterval(sizeChange, 500)
        
document.querySelector("header").style.display = "none";
document.querySelector("main").style.display = "none";

setTimeout(disable_load, 3000);

var burger_checkbox = document.getElementById('burger-checkbox');

burger_checkbox.addEventListener('click', function() {
    if (burger_checkbox.checked) {
        document.querySelector('.mainheader').setAttribute("style","height:755px");
        document.querySelector('.mainnav>ul').style.opacity = 1;
    }
    else {
        document.querySelector('.mainheader').setAttribute("style","height:155px");
        document.querySelector('.mainnav>ul').style.opacity = 0;
    }
});

window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth > 700) {
        document.querySelector('.mainheader').setAttribute("style","height:50px");
        document.querySelector('.mainnav>ul').style.opacity = 1;
    }
    else {
        document.querySelector('.mainheader').setAttribute("style","height:155px");
        document.querySelector('.mainnav>ul').style.opacity = 0;
    }
});

document.addEventListener("scroll", function(e) {

    let progress = window.pageYOffset / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;

    progressBar.style.width = progress + "%";

    if (window.pageYOffset >= 300) {
        document.body.querySelector("footer").style.opacity = 1;
    } else {
        document.body.querySelector("footer").style.opacity = 0;
    }

})

let buttonUp = document.querySelector("footer");

buttonUp.addEventListener('click', function() {
    function scrollToTop() {
        window.scrollBy(0, -10);
        if (window.pageYOffset == 0)
            clearInterval(myInt);
    }

    let myInt = setInterval(scrollToTop, 5);
})




        