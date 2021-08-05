var modal = document.getElementById("form");
var btn = document.getElementById("form__open-btn");
var span = document.getElementsByClassName("close")[0];
const form = document.querySelector("#form")

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

})
