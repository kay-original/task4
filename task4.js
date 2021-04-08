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
  display.value = display.value+elem.value;
  if(display.value==="0"){
    one.disabled=true;
    two.disabled=true;
    three.disabled=true;
    four.disabled=true;
    five.disabled=true;
    six.disabled=true;
    seven.disabled=true;
    eight.disabled=true;
    nine.disabled=true;
    zerozero.disabled=true;
  }
  else if(display.value==="0."){
    one.disabled=false;
    two.disabled=false;
    three.disabled=false;
    four.disabled=false;
    five.disabled=false;
    six.disabled=false;
    seven.disabled=false;
    eight.disabled=false;
    nine.disabled=false;
    zerozero.disabled=false;    
    point.divided=true;
  }
  else if(display.value==="0/"){
    one.disabled=false;
    two.disabled=false;
    three.disabled=false;
    four.disabled=false;
    five.disabled=false;
    six.disabled=false;
    seven.disabled=false;
    eight.disabled=false;
    nine.disabled=false;
    zerozero.disabled=false;    
  }
  else if(display.value==="0/"){
    one.disabled=false;
    two.disabled=false;
    three.disabled=false;
    four.disabled=false;
    five.disabled=false;
    six.disabled=false;
    seven.disabled=false;
    eight.disabled=false;
    nine.disabled=false;
    zerozero.disabled=false;    
  }
  else if(display.value==="0+"){
    one.disabled=false;
    two.disabled=false;
    three.disabled=false;
    four.disabled=false;
    five.disabled=false;
    six.disabled=false;
    seven.disabled=false;
    eight.disabled=false;
    nine.disabled=false;
    zerozero.disabled=false;    
  }
  else if(display.value==="0-"){
    one.disabled=false;
    two.disabled=false;
    three.disabled=false;
    four.disabled=false;
    five.disabled=false;
    six.disabled=false;
    seven.disabled=false;
    eight.disabled=false;
    nine.disabled=false;
    zerozero.disabled=false;    
  }
  else if(display.value==="0*"){
    one.disabled=false;
    two.disabled=false;
    three.disabled=false;
    four.disabled=false;
    five.disabled=false;
    six.disabled=false;
    seven.disabled=false;
    eight.disabled=false;
    nine.disabled=false;
    zerozero.disabled=false;    
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
