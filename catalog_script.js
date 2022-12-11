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
        //document.querySelector('.mainnav>ul').style.opacity = 1;
    }
    else {
        document.querySelector('.mainheader').setAttribute("style","height:155px");
        //document.querySelector('.mainnav>ul').style.opacity = 0;
    }
});

window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth > 700) {
        document.querySelector('.mainheader').setAttribute("style","height:50px");
        //document.querySelector('.mainnav>ul').style.opacity = 1;
    }
    else {
        document.querySelector('.mainheader').setAttribute("style","height:155px");
        //document.querySelector('.mainnav>ul').style.opacity = 0;
    }
});
        
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
        
document.querySelector(".slider_arrow_right").addEventListener('click', function() {
    slideShow += 1;
    slideChange();
})
        
document.querySelector(".slider_arrow_left").addEventListener('click', function() {
    slideShow -= 1;
    slideChange();
})

let liArr = document.querySelectorAll("li"); // Массив кнопок хедера

//Добавление в корзину

let itemsInCart = 0;

let butArr = document.querySelectorAll(".product button");
        
for (let i = 0; i < butArr.length; i++) {
    butArr[i].addEventListener('click', function() {
        itemsInCart++;
        liArr[4].innerHTML = '<img src="img/cart25.png">' + " " + itemsInCart + '</img>';
    })
}
       
let goodsToUpload = document.querySelector(".goods-wrapper").innerHTML;

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
            
    //Добавление элементов в конец
        
    if  (document.documentElement.scrollHeight - document.documentElement.clientHeight == window.pageYOffset) {
        document.querySelector(".goods-wrapper").innerHTML += goodsToUpload;
				
        //Добавление в корзину

        let butArr = document.querySelectorAll(".product button");
        
        for (let i = 0; i < butArr.length; i++) {
            butArr[i].addEventListener('click', function() {
                itemsInCart++;
                liArr[4].innerHTML = '<img src="img/cart25.png">' + " " + itemsInCart + '</img>';
            })
        }
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

