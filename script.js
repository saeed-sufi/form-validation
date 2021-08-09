var modal = document.getElementById("form");
var btn = document.getElementById("form__open-btn");
var span = document.getElementsByClassName("close")[0];
const form = document.querySelector("#form")
const email = document.querySelector("#email")

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  checkEmail(email)
})

function checkEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  isValidEmail = re.test(String(email.value).toLowerCase())

  if (!isValidEmail && email.value.trim() != "") {
    showError(email, "Email is not valid.")
  } else if (isValidEmail && email.value.trim() != "") {
    showSuccess(email)
    isValidEmail = true
  }
}

function showError(element, message) {
  const formControl = element.parentElement
  formControl.className = "form-control error"
  formControl.querySelector("small").innerText = message
}

function showSuccess(element) {
  const formControl = element.parentElement
  formControl.className = "form-control success"
}
