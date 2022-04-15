var a=require("readline-sync").questionInt("enter a starting number");
var b=require("readline-sync").questionInt("enter a stop number");
i=a;
while (i<=b){
    if(i%2===0){
        console.log(i,"even number");
    }
    else {
        console.log(i,"odd number")
    }
    i++
}