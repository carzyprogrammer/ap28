var myAge=window.prompt("what is your age");

function age(myAge){
    if(myAge>18){
        document.writeln("you allowed to watch my website");
    }else{
        document.writeln("you are not allowed");
    }
}
document.getElementById("but").onclick=function(){
   var na= document.getElementById("name").value;
   document.writeln(na);
   
}
age(myAge);