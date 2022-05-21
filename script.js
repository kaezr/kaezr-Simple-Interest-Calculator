function compute()
{
    princ = document.getElementById("principal").value;
    ratee = document.getElementById("rate").value;
    var outs = document.getElementById("resu1");
    var outs2 = document.getElementById("result1");
    var outs3 = document.getElementById("resu2");
    var outs4 = document.getElementById("result2");
    var outs5 = document.getElementById("resu3");
    var outs6 = document.getElementById("result3");
    var outs7 = document.getElementById("resu4");
    var outs8 = document.getElementById("result4");
    var outs9 = document.getElementById("resu5");
    var outs10 = document.getElementById("resu6");
    var outs11 = document.getElementById("resu7");
    //var slide = document.getElementById("rate");
    //var out = document.getElementById("slidez");
    var text = "If you deposit ";
    var text2 = "at an interest rate of ";
    var text3 = "You will recieve an amount of ";
    var text4 = "in the year ";
    var text5 = ",";
    var text6 = ".";
    const sb = document.querySelector('#years')
    outs.innerHTML = text;
    outs2.innerHTML = princ;
    outs3.innerHTML = text2;
    outs4.innerHTML = ratee+"%";
    outs5.innerHTML =  text3;
    outs6.innerHTML =  princ*ratee*(sb.selectedIndex+1)/100;
    outs7.innerHTML =  text4;
    outs8.innerHTML =  (sb.selectedIndex+1) + 2020;
    outs9.innerHTML = text5;
    outs10.innerHTML = text6;
    outs11.innerHTML = text5;
    //alert(sb.selectedIndex);
}

