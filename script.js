function numero(x){
  var numero = document.getElementById('output').innerHTML;
  document.getElementById('output').innerHTML = numero + x;
}

function clean(){
  document.getElementById('output').innerHTML = "";
}

function back(){
  var output = document.getElementById('output').innerHTML;
  document.getElementById('output').innerHTML = output.substring(0, output.length -1);
}

function calcular(){
  var output = document.getElementById('output').innerHTML;
  if(output){
    document.getElementById('output').innerHTML = eval(output);
  }else{
    document.getElementById('output').innerHTML = "Tente calcular";
  }
}

