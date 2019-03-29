function press(button){
    document.getElementById("line2").innerHTML = '';
    document.getElementById("line2").innerHTML += button.value;
    console.log(document.getElementById("line1").innerHTML)
  }
  function sum(){
    document.getElementById("line1").innerHTML=eval(document.getElementById("header").innerHTML);

  }

  function reset() {
 document.getElementById("line2").innerHTML = "";
  }

function sqrt(){
let val = eval(document.getElementById("line1").innerHTML);
document.getElementById("line1").innerHTML = Math.sqrt(val);}


function e() {
let toEval = document.getElementById("line1").innerHTML.replace("√", Math.sqrt);
sum(toEval)
}


function square(){
let sq = document.getElementById("line1").innerHTML;
document.getElementById("line1").innerHTML = Math.pow(sq, 2);}


function g() {
let binhphuong = document.getElementById("line1").innerHTML.replace("^2", Math.pow);
sum(binhphuong)
}