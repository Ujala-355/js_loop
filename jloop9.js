var num = require("readline-sync").questionInt("enter a number");
var i=num
var sum=0;
while (i!=0){
    dig=i%10
    sum+=dig
    i=Math.floor(sum/10)
}
if (num%sum==0){
    console.log("Harshad number="+num);
}
else{
    console.log("not Harshad number="+num);
}
