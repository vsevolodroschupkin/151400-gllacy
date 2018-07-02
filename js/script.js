var callbackOpen = document.querySelector(".callback-button");
var callbackClose = document.querySelector(".modal-close");
var modal = document.querySelector(".modal-callback");
var modalOverlay = document.querySelector(".modal-overlay");

var form = modal.querySelector(".callback-form");
var userName = modal.querySelector("[name=name]");
var email = modal.querySelector("[name=email]"); 
var comment = modal.querySelector("[name=comment");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}



callbackOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  modalOverlay.classList.add("overlay-show");

  if (storageName || storageEmail) {
    userName.value = storageName;
    email.value = storageEmail;
    comment.focus();
  } else {
    userName.focus();
  }

});

callbackClose.addEventListener("click", function(evt) {
	evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
  modalOverlay.classList.remove("overlay-show");
});

modalOverlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
  modalOverlay.classList.remove("overlay-show");
})

form.addEventListener("submit", function(evt) {
  if (!userName.value || !email.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("email", email.value);
    }
  }

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
      modalOverlay.classList.remove("overlay-show");
    }
  }
});


