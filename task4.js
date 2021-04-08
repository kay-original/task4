const display = document.getElementById("display");
const plus = document.getElementById("plus");
const divided = document.getElementById("divided");
const multi = document.getElementById("multi");
const minus = document.getElementById("minus");

function initial(){
  plus.disabled = true;
  divided.disabled = true;
  multi.disabled = true;
  minus.disabled = true;
}
function edit(elem){
  display.value = display.value+elem.value;
  plus.disabled = false;
  divided.disabled = false;
  multi.disabled = false;
  minus.disabled = false;
}
function calc(){
  display.value = new Function("return " + display.value)();
}
initial();
