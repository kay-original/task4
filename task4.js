const display = document.getElementById("display");

const plus = document.getElementById("plus");
const divided = document.getElementById("divided");
const multi = document.getElementById("multi");
const minus = document.getElementById("minus");
const point = document.getElementById("point")

const zerozero = document.getElementById("zerozero");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");



function initial(){
  plus.disabled = true;
  divided.disabled = true;
  multi.disabled = true;
  minus.disabled = true;
}
function edit(elem){
  if (display.value === "0") {
    display.value = elem.value;
  }
  else{
    display.value = display.value+elem.value;
  }
  plus.disabled = false;
  divided.disabled = false;
  multi.disabled = false;
  minus.disabled = false;
}
function calc(){
  display.value = new Function("return " + display.value)();
}
initial();
