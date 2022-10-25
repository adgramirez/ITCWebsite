function factorial()
  {
  var n = document.getElementById("num").value;
  var i=1, f=1; 
  while(n>=i){
    f *= i;
    i++
  }
  document.getElementById("fact").innerHTML = f;
  }

  function sumMo()
  {
  var n = document.getElementById("num1").value;
  var i=1, f=0;
  do{
    f += i;
    i++
  }while(n >= i)
  document.getElementById("sum").innerHTML = f;
  }

  function AverageN()
  {
    var x = document.getElementById("num2").value;
      let nth = document.getElementById("num2").value*1;

      for(let i = 1; i < x; i++){
        nth += i;
      }
      let sum2 = nth/x
      document.getElementById("sum2").innerHTML = sum2;
  }