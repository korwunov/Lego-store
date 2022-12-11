'use strict';
        
//Страница загрузки

function disable_load() {
    load_page.style.display = "none";
    document.querySelector("header").style.display = "flex";
    document.querySelector("main").style.display = "block";
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
        document.querySelector('.mainnav>ul').setAttribute("style","width:0");
        document.querySelector('.mainnav>ul').setAttribute("style","height:0");
        document.querySelectorAll('.mainnav> ul li').setAttribute("style","width:0");
        document.querySelectorAll('.mainnav> ul li').setAttribute("style","height:0");
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

        
//Карусель
        
let slideShow = 1;
        
function slideChange() {
    if (slideShow <= 0)
        slideShow = 5;
    if (slideShow >= 6)
        slideShow = 1;
            
    document.querySelector(".slides").classList.remove("show1");
    document.querySelector(".slides").classList.remove("show2");
    document.querySelector(".slides").classList.remove("show3");
    document.querySelector(".slides").classList.remove("show4");
    document.querySelector(".slides").classList.remove("show5");
            
    document.querySelector(".slides").classList.add("show" + slideShow);
}
       

document.addEventListener("scroll", function(e) {

    //Полоска прокрутки

    let progress = window.pageYOffset / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;

    progressBar.style.width = progress + "%";

    //Появление кнопки наверх

    if (window.pageYOffset >= 300) {
        document.body.querySelector("footer").style.opacity = 1;
    } else {
        document.body.querySelector("footer").style.opacity = 0;
    }
            
});
//Функционал кнопки наврех

let buttonUp = document.querySelector("footer");

buttonUp.addEventListener('click', function() {
    function scrollToTop() {
        window.scrollBy(0, -10);
        if (window.pageYOffset == 0)
            clearInterval(myInt);
    }

    let myInt = setInterval(scrollToTop, 5);
})

//Заполнение поля обратной связи

send.addEventListener('click', function() {
    if (lastname_field.value != "" && phone_field.value != "" && firstname_field.value != "") {
        feed.classList.add("visible");
        document.querySelector("nobr").innerHTML = phone_field.value;
        name_out.innerHTML = "Уважаемый, " + lastname_field.value + " " + firstname_field.value[0] + ".";
    }
})
		
document.addEventListener('keydown', function(e) {
	if (e.key == 'Enter') {
        if (lastname_field.value != "" && phone_field.value != "" && firstname_field.value != "") {
            feed.classList.add("visible");
		    document.querySelector("nobr").innerHTML = phone_field.value;
            name_out.innerHTML = "Уважаемый, " + lastname_field.value + " " + firstname_field.value[0] + ".";
        }
		
	}
});