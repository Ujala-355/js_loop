var a=require("readline-sync").questionInt("enter a number");
var i=1;
var c=0;
while (i<=a){
    if (a%i===0){
        c++
    }
    i++
}
if (c===2){
    console.log("prime number",a)
}
else{
    console.log("not a prime number",a)
}


