var i=1;
var n=require("readline-sync").questionInt("enter a number");
while (i<=n){
    var j=1;
    while (j<=10){
        console.log(i*j)
        j++
    }
    i++
}

