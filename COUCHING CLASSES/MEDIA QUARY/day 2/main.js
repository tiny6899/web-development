var menu=document.querySelector("#menu");
var ham_menu=document.querySelector("#ham_menu");
var close=document.querySelector("#close");

ham_menu.addEventListener(
    "click",
    function(){
        menu.style.left=0;
    }
)
close.addEventListener(
    "click",
    function(){
        menu.style.left="";
    }
)