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