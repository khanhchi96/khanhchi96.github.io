
// function includeHTML() {
//   var z, i, elmnt, file, xhttp;
//   /*loop through a collection of all HTML elements:*/
//   z = document.getElementsByTagName("*");
//   for (i = 0; i < z.length; i++) {
//     elmnt = z[i];
//     /*search for elements with a certain atrribute:*/
//     file = elmnt.getAttribute("w3-include-html");
//     if (file) {
//       /*make an HTTP request using the attribute value as the file name:*/
//       xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function() {
//         if (this.readyState == 4) {
//           if (this.status == 200) {elmnt.innerHTML = this.responseText;}
//           if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
//           /*remove the attribute, and call this function once more:*/
//           elmnt.removeAttribute("w3-include-html");
//           includeHTML();
//         }
//       }      
//       xhttp.open("GET", file, true);
//       xhttp.send();
//       /*exit the function:*/
//       return;
//     }
//   }
// };


// $(function(){
//   $("#nav-large").load("menu.html");
//  });  


var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("move");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 8000);
} 


function openNav() {
  
  document.getElementById("menu-large").style.display = "block";
  
}


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$("window").on("click", closeNav())

function showMenu(n){
    $("#sub-menu-1").css("display", "none");
    $("#sub-menu-2").css("display", "none");
    $("#sub-menu-3").css("display", "none");
    $(`#sub-menu-${n}`).css("display", "block");
    $(`#sub-menu-${n}`).css("visibility", "visible");
    $(`#sub-menu-${n}`).css("opacity", "1");
    if (n===2){
      $("#sub-menu-1").css("display", "block");
    };
      }

    
      // function hover(n){
      //   if(screen.width>932){
      //     $(`#sub-menu-${n}`).parent().hover(function(){
            
      //       $(`#sub-menu-${n}`).css("display", "block");
      //       $(`#sub-menu-${n}`).css("visibility", "visible");
      //       $(`#sub-menu-${n}`).css("opacity", "1");
      //       }, function(){
      //       $(`#sub-menu-${n}`).css("display", "none");
      //     });}
      // }

    

//  function func1(){
//   if(window.innerWidth<=932){
//     showMenu().disable();
//   }}
  

    
 


  

  // function hide(){
  //   $(".sub-menu").css("display", "none");
  // }