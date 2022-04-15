
var n=require("readline-sync").questionInt("enter a number");
var i=0;
var multi=0;
while(i<=10){
    multi=n*i;
    console.log(n+"*"+i+"="+multi)
    i++
}
