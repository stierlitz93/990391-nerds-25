var link = document.querySelector(".address__submit");
var popup = document.querySelector(".footer-feedback");
var close = document.querySelector(".footer-feedback-close");
var form = popup.querySelector(".feedback-form");
var name = popup.querySelector("#feedback-form-name");
var email = popup.querySelector("#feedback-form-email");
var letter = popup.querySelector("#feedback-form-letter");

link.addEventListener("click" , function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-show");
});

close.addEventListener("click" , function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-show");
    popup.classList.remove("feedback-error");
});

form.addEventListener("submit" , function (evt) {
    if (!name.value || !email.value || !letter.value) {
        evt.preventDefault();
        popup.classList.remove("feedback-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("feedback-error");
    }
});

window.addEventListener("keydown" , function (evt) {
    if (evt.keyCode ===  27) {
        evt.preventDefault();
        if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
            popup.classList.remove("feedback-error");
        }
    }
});