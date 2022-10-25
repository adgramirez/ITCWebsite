/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// CONVERSION SCRIPT
let clsbtn = document.getElementById("button1");
let frhbtn = document.getElementById("button2");
let mtrbtn = document.getElementById("button3");
let ftbtn = document.getElementById("button4");

clsbtn.addEventListener('click', function (){
    let input1 = document.getElementById("input1").value;
    document.getElementById("output1").value = input1 * 1.8 + 32;
})

frhbtn.addEventListener('click', function (){
    let input2 = document.getElementById("input2").value;
    document.getElementById("output2").value = (input2-32) * 5/9;
})

mtrbtn.addEventListener('click', function (){
    let input3 = document.getElementById("input3").value;
    document.getElementById("output3").value = input3 * 3.28084;
})

ftbtn.addEventListener('click', function (){
    let input4 = document.getElementById("input4").value;
    document.getElementById("output4").value = input4 / 3.28084;
})

// INCOME TAX CALCULATOR SCRIPT
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

// FACTORIAL, SUM, AND AVERAGE OF THE FIRST N NUMBERS SCRIPT

// FACTORIAL
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

// SUM
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

// AVERAGE
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

// SIMPLE PAYROLL SCRIPT
function initlist(){
    list=[];
    document.getElementById("items").value=list.length;
    document.getElementById("list").innerHTML="";            
}

function clearlist(){
    var toclear;

    toclear=confirm("Delete all item(s) from list ?");

    if (toclear) {
         initlist();
    }     
}

function addtolist(){
     
     var listitem = {
         "item": "1",
         "rate": 0,
         "days": 1,
         "deduct": 1,
        "itemamount" : function itemamount(){
             return Math.round((this.rate*this.days)-this.deduct);  
           },
        "itemgross" : function itemgross(){
          return Math.round(this.rate*this.days);  
        }
        };

      listitem.item=document.getElementById("employee").value;
      listitem.days=document.getElementById("days").value;
      listitem.rate=document.getElementById("rate").value;
      listitem.deduct=document.getElementById("deduct").value;

      console.log(listitem.item);
      console.log(listitem.days);
      console.log(listitem.rate);
      console.log(listitem.deduct);

       list.push(listitem);

      console.log(list.length);
      document.getElementById("items").value=list.length;

      showlist();
}

function computeamount() {
      var q,p,q,d;
      q = document.getElementById("days").value*1;
      p = document.getElementById("rate").value*1;
      d = document.getElementById("deduct").value*1;

      a = Math.round((q*p)-d); 

      console.log(a);

      document.getElementById("amount").value=a;
    
}    


function deleteitem(){
    var todelete;
    var itemno;

    itemno=document.getElementById("delete").value;

    todelete=confirm("Delete item no. "+itemno+"?");

    if (todelete) {

        list.splice(itemno-1,1);
        document.getElementById("items").value=list.length;
         showlist();   
    }
}

function showlist(){

    var i,l,listtext,totalamount,ln;
    var theader,tbody,tb,tfooter;

    theader ="<thead>";
    theader+="<tr>";
    theader+="<th>No.</th>";
    theader+='<th style="text-align:center">Employee Name</th>';
    theader+="<th style=text-align:center>Days Worked</th>";
    theader+='<th style="text-align:center">Daily Rate</th>';
    theader+="<th style=text-align:center>Gross Pay</th>";
    theader+="<th style=text-align:center>Deduction</th>";
    theader+="<th style=text-align:center>Net Pay</th>";
    theader+="</tr>";
    theader+="</thead>";
    
    l = list.length;
  
    for (i=0,totalamount=0,listtext="",tbody='';i<l;i++){
        ln=i+1;    
        tbody += "<tr>"
            +'<td style="text-align:center">'+ln+' </td>'
            +'<td>'+list[i].item+' </td>'
            +'<td style="text-align:right">'+list[i].days+'</td>'
            +'<td style="text-align:right">'+list[i].rate+'</td>'
            +'<td style="text-align:right"><b>'+list[i].itemgross()+'</b></td>'
            +'<td style="text-align:right">'+list[i].deduct+'</td>'
            +'<td style="text-align:right"><b>'+list[i].itemamount()+'</b></td>'                
            +"</tr>";
                   
        totalamount+=list[i].itemamount();
      
    }

    tfooter ="<tfoot>";
    tfooter+="<tr>";
    tfooter+='<th style="text-align:center">'+list.length+'</th>';
    tfooter+='<th style="text-align:left">Items</th>';
    tfooter+='<th></th>';
    tfooter+='<th></th>';
    tfooter+='<th></th>';
    tfooter+='<th>Total Amount:</th>';
    tfooter+='<th style="text-align:right">'+totalamount+'</th>';
    tfooter+="</tr>";
    tfooter+="</tfoot>";

   console.log(theader+tbody+tfooter);
    document.getElementById("list").innerHTML=
       "<table>"+theader+tbody+tfooter+"</table>";      
}


var list = []; 