function press(button){
    document.getElementById("header").innerHTML += button.value;
    console.log(document.getElementById("header").innerHTML)
  }
  function sum(){
    document.getElementById("header").innerHTML=eval(document.getElementById("header").innerHTML);

  }

  function reset() {
 document.getElementById("header").innerHTML = "";
  }

function sqrt(){
let val = eval(document.getElementById("header").innerHTML);
document.getElementById("header").innerHTML = Math.sqrt(val);}


function e() {
let toEval = document.getElementById("header").innerHTML.replace("√", Math.sqrt);
sum(toEval)
}


function square(){
let sq = document.getElementById("header").innerHTML;
document.getElementById("header").innerHTML = Math.pow(sq, 2);}


function g() {
let binhphuong = document.getElementById("header").innerHTML.replace("^2", Math.pow);
sum(binhphuong)
}