var modal = document.getElementById("form");
var btn = document.getElementById("form__open-btn");
var span = document.getElementsByClassName("close")[0];

const form = document.querySelector("#form");
const task = document.querySelector("#task");
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
  limitText (task)
  checkEmail(email)

  if (document.getElementById("name").value.trim() =='' ) {
    const v = document.getElementById("name").parentElement;
    v.classList.add("error");
    const small = document.getElementById("name").nextElementSibling;
    small.innerHTML="Field required";
  }
  else{
    const v = document.getElementById("name").parentElement;
    v.classList.remove("error");
    const small = document.getElementById("name").nextElementSibling;
    small.innerHTML="";
  }
  if (document.getElementById("phone").value.trim()=='') {
    const v = document.getElementById("phone").parentElement;
    v.classList.add("error");
    const small = document.getElementById("phone").nextElementSibling;
    small.innerHTML="Field required";
  }
  else{
    const v = document.getElementById("phone").parentElement;
    v.classList.remove("error");
    const small = document.getElementById("phone").nextElementSibling;
    small.innerHTML="";
  }
  if (document.getElementById("email").value.trim()=='') {
    const v = document.getElementById("email").parentElement;
    v.classList.add("error");
    const small = document.getElementById("email").nextElementSibling;
    small.innerHTML="Field required";
  }
  else{
    const v = document.getElementById("email").parentElement;
    v.classList.remove("error");
    const small = document.getElementById("email").nextElementSibling;
    small.innerHTML="";
  }

  function limitText(task) {
    if (task.value.length > 400) {
      task.value = task.value.substring(0, 400);
      console.log (task.value)
      const formControl = task.parentElement 
      formControl.classList.add ("error")
      const small = document.getElementById("task").nextElementSibling;
      small.innerHTML="Text Should Be less Than 400 Characters";
      
    }
    else{
      const v = document.getElementById("task").parentElement;
      v.classList.remove("error");
    }
  
}
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


