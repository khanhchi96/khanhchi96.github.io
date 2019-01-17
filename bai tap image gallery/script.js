function myFunction() {
    let x = document.getElementById("nav");
    if (x.className === "mainnav") {
      x.className += " responsive";
    } else {
      x.className = "mainnav";
    }
  }

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
document.getElementById("back-to-top").style.display = "block";
} else {
document.getElementById("back-to-top").style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}