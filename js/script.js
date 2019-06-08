var link = document.querySelector(".address__submit");
var popup = document.querySelector(".footer-feedback");
var close = document.querySelector(".footer-feedback-close");

link.addEventListener("click" , function(evt){
    evt.preventDefault();
    popup.classList.add("feedback-show");
});

close.addEventListener("click" , function(evt){
    evt.preventDefault();
    popup.classList.remove("feedback-show");
});