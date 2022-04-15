var a=require("readline-sync").questionInt("enter a number");
var i=0;
var sum=0;
while (a<0){
    sum=sum+(a%10)*(a%10)*(a%10)
    a=a
}