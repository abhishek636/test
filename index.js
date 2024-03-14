function myNewFunction() {
  var y = document.getElementById("menu-btn");
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.height="100vh";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll("#myLinks a");

  links.forEach(function(link) {
    link.addEventListener("click", function() {
        var x = document.getElementById("myLinks");
        x.style.display = "none";
    });
  });
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var nav = document.getElementsByClassName("btn")
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}






