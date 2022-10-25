function taxcalcu(){
    var ti,it;
    ti = document.getElementById("input5").value*1;

    if (ti < 250000) {
        it = 0;
     } else if (ti >= 250000 && ti <= 400000) { 
        it = (ti - 250000) *.20;
     } else if (ti >= 400000 && ti <= 800000) {
        it = (ti - 400000) *.25 + 30000;
     } else if (ti >= 800000 && ti <= 2000000) {
        it = (ti-800000)*.30 + 130000;
     } else if (ti >= 2000000 && ti <= 8000000) {
        it = (ti-2000000)*.32 + 490000;
     } else if (ti >= 8000000) {
        it = (ti-8000000)*.35 + 2410000;
      } else  {
        it = null;
     }
     document.getElementById("result").innerHTML='Your Income Tax is: '+it;  
}