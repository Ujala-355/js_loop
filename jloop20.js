var a=require("readline-sync").questionInt("enter a number");
var i=0;
while (i<a){
    if (i%3===0 && i%7===0){
        console.log("Navgurukul");
    }
    else if (i%3===0){
        console.log("Nav");
    }
    else if (i%7===0){
        console.log("Gurukul")
    }
    else{
        console.log(i)
    }
    i++

}