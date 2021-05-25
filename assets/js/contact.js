document.addEventListener("DOMContentLoaded", () => {
  var form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", sendEmail);    
  }
});

function sendEmail(e) {
  e.preventDefault();

  document.querySelectorAll("button[type='submit'] > span").forEach(function (item) {
    item.classList.toggle("hidden");
  });

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("#contact").classList.add("hidden");
      document.querySelector("#thanks").classList.remove("hidden");
    }
  };

  xhttp.open("GET", document.querySelector("form").action, true);
  xhttp.send();
  return false;
}
