let display=document.getElementById("display");

function edit(elem){
  display.value = display.value+elem.value;
}
function calc(){
  display.value = new Function("return " + display.value)();
}
