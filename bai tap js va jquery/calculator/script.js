// function press(button){
//     document.getElementById("line2").innerHTML = '';
//     document.getElementById("line2").innerHTML += button.value;
//     console.log(document.getElementById("line1").innerHTML)
//   }
//   function sum(){
//     document.getElementById("line1").innerHTML=eval(document.getElementById("header").innerHTML);

//   }

//   function reset() {
//  document.getElementById("line2").innerHTML = "";
//   }

// function sqrt(){
// let val = eval(document.getElementById("line1").innerHTML);
// document.getElementById("line1").innerHTML = Math.sqrt(val);}


// function e() {
// let toEval = document.getElementById("line1").innerHTML.replace("√", Math.sqrt);
// sum(toEval)
// }


// function square(){
// let sq = document.getElementById("line1").innerHTML;
// document.getElementById("line1").innerHTML = Math.pow(sq, 2);}


// function g() {
// let binhphuong = document.getElementById("line1").innerHTML.replace("^2", Math.pow);
// sum(binhphuong)
// }
let lastPress = false;
let mathString = {}
function press(button){
  if (lastPress == true)$('#line2').text('');
  $('#line2').text($('#line2').text() + $(button).val());
  lastPress = false;
  
}

function cal(button){
  $('#line1').html($('#line2').text() +' <small>' + $(button).html() + '</small>')
  mathString =  $('#line2').text() + $(button).val();
  lastPress = true;

}

function sum(){
  $('#line1').html($('#line1').html() + ' ' + $('#line2').text());
  $('#line2').text(eval(mathString + $('#line2').text()));
  lastPress = true;

  let res = $('#line2').text().split('.');
  let beforeDecimal = res[0];
  $('#line2').text(parseFloat($('#line2').text()).toFixed(13 - beforeDecimal.toString().length))
}


