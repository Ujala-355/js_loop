var n=require("readline-sync").questionInt("enter a  number");
var i=0;
var k=" "
while(i<=n){
    if (i%7===0){
        k=k+" "+i
    }
    i++
}
console.log(k);