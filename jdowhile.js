var a=require("readline-sync").questionInt("enter a nmuber");
do{
    if(a%5==0){
        console.log(a,"divisible");
    }
    else{
        console.log(a,"not divisible");
    }
    a++
}
while (a<0);