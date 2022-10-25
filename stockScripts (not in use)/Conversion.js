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

