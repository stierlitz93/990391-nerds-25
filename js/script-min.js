var link=document.querySelector(".address__submit"),popup=document.querySelector(".footer-feedback"),close=document.querySelector(".footer-feedback-close"),form=popup.querySelector(".feedback-form"),name=popup.querySelector("#feedback-form-name"),email=popup.querySelector("#feedback-form-email"),letter=popup.querySelector("#feedback-form-letter");link.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("feedback-show")}),close.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("feedback-show"),popup.classList.remove("feedback-error")}),form.addEventListener("submit",function(a){name.value&&email.value&&letter.value||(a.preventDefault(),popup.classList.remove("feedback-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("feedback-error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&(a.preventDefault(),popup.classList.contains("feedback-show")&&(popup.classList.remove("feedback-show"),popup.classList.remove("feedback-error")))});