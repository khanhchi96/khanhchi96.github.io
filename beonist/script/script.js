



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


$('.logo').click(function(){
    location.href = "index.html";
})

window.onscroll = function() {
  scrollBottom();
  if (window.innerWidth > 992) scrollFunction();
  };
window.onload = function() { 
  scrollBottom();
  scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    $(".menu-large").css("top", "0");
    $("#nav-large").css("background-color", "rgba(0, 0, 0)");
    $("#nav-large").css("padding", "50px 0");
    $(".menu-large").children().css("padding", "1px 20px");
    $(".menu-large").css("background-color", "transparent");
    $(".menu-large").css("transition", "all 0.2s");
    $("#nav-large").css("transition", "all 0.2s");
    $(".logo").css("display", "none");
    $(".logo-scroll").css("display", "block");
    $(".logo-beonist-scroll").css("width", "150px");
    $(".logo-scroll").css("top", "0px");
    $(".logo").css("margin-top", "0");
  } else {
    $(".menu-large").css("top", "40px")
    $(".menu-large").css("width", "unset");
    $("#nav-large").css("padding", "0px");
    // $(".menu-large").css("margin-right", "30px");
    $("#nav-large").css("background-color", "transparent");
    $(".logo-scroll").css("display", "none");
    $(".logo").css("display", "block");
    $(".menu-large").children().css("padding", "5px 20px 0 20px");
    $(".menu-large").css("background-color", "rgba(0, 0, 0, 0.6)");
  }
  let d = $(this).scrollTop();
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("#nav-large").css("padding-top",(150 - d/4)/3);
    $("#nav-large").css("padding-bottom",(150 - d/4)/3);
    $(".logo-beonist-scroll").css("width", (150 - d/6)) ;
    // $(".logo-beonist-scroll").css("min-width", '60') ;
    // $(".header-wrap").css("background-color", "transparent")
  } 
  else{
    $("#nav-large").css("background-color", "transparent");
    $(".menu-large").css("background-color", "rgba(0, 0, 0, 0.6)");
    $(".header-wrap").css("background-color", "#000")
  }

  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450){
    $("#nav-large").css("padding", 0)
    $(".logo-beonist-scroll").css("width", '60') ;
  };
}



function scrollBottom(){

  let d = $(document).height();
  let w = $(window).height();
  let s = $(this).scrollTop();
  let bottomBound = 72;
  
  if(d - (w + s) < bottomBound) { 
      $('.first-footer').css({
          bottom: bottomBound - (d - (w + s))
      });
  } else {
      $('.first-footer').css({
          bottom: 0
      });            
  }
};


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}



$(window).on('load',function(){
  $('.modal-homepage').css("display", "block")
  $('.modal-homepage').css("transition", "all 0.5s ease-in-out");
  // if($("body").height() <= $(window).height())
  // {$('.first-footer').css('bottom', '0');
  //  $('.secondary-footer').css('display', 'none')}
});


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












