
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("chi-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("chi-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};



window.onscroll = function() {
  scrollBottom();
  if (window.innerWidth > 992) scrollFunction();
  };
window.onload = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $(".menu-large").css("top", "0");
    $("#nav-large").css("background-color", "rgba(0, 0, 0, 0.9");
    $(".menu-large").children().css("padding", "1px 20px");
    $(".menu-large").css("background-color", "transparent");
    // $(".menu-large").css("margin-right", "0");
    $(".menu-large").css("transition", "all 0.2s");
    $("#nav-large").css("transition", "all 0.2s");
    $(".logo").css("display", "none");
    $(".logo-scroll").css("display", "block");
    $(".logo").css("margin-top", "0");
  } else {
    $(".menu-large").css("top", "40px")
    $(".menu-large").css("width", "unset");
    // $(".menu-large").css("margin-right", "30px");
    $("#nav-large").css("background-color", "transparent");
    $(".logo-scroll").css("display", "none");
    $(".logo").css("display", "block");
    $(".menu-large").children().css("padding", "5px 20px 0 20px");
    $(".menu-large").css("background-color", "rgba(0, 0, 0, 0.6)");
  }
}


function scrollBottom(){
    
  // height of the document (total height)
  let d = $(document).height();
  
  // height of the window (visible page)
  let w = $(window).height();
  
  // scroll level
  let s = $(this).scrollTop();
  
  // bottom bound - or the width of your 'big footer'
  let bottomBound = 72;
  
  // are we beneath the bottom bound?
  if(d - (w + s) < bottomBound) {
      // if yes, start scrolling our own way, which is the
      // bottom bound minus where we are in the page
      $('.first-footer').css({
          bottom: bottomBound - (d - (w + s))
      });
  } else {
      // if we're beneath the bottom bound, then anchor ourselves
      // to the bottom of the page in traditional footer style
      $('.first-footer').css({
          bottom: 0
      });            
  }
};

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }



// $(window).on('load',function(){
//   $('.modal-homepage').css("display", "block")
//   $('.modal-homepage').css("transition", "all 0.5s ease-in-out");
// });


// display slideshow
var slideIndex = 0;
showSlides();
var slides,dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("move");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 8000); // Change image every 8 seconds
}

function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}



// var slideIndex = 1;
// var timer = null;
// showSlides(slideIndex);

// function currentSlide(n) {
//   clearTimeout(timer);
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("move");
//   var dots = document.getElementsByClassName("dot");
//   if (n==undefined){n = ++slideIndex}
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   timer = setTimeout(showSlides, 8000);
// } 





function openNav() {
  document.getElementById("menu-small").style.height = "calc(100% + 10px)";
}

function closeNav() {
  document.getElementById("menu-small").style.height = "0%";
}



function showMenu(n){
    $(".chevron-up").css("display", "inline-block");
    $(".chevron-down").css("display", "none");
    $(`#sub-menu-${n}`).css("display", "block");
    $(`#sub-menu-${n}`).css("visibility", "visible");
    $(`#sub-menu-${n}`).css("opacity", "1");
    }

function hideMenu(n){
    $(".chevron-up").css("display", "none");
    $(".chevron-down").css("display", "inline-block");
    $(`#sub-menu-${n}`).css("display", "none");
    $(`#sub-menu-${n}`).css("visibility", "hidden");
    $(`#sub-menu-${n}`).css("opacity", "0");
}












