var i=0;
var sum=0;
do{
    if (i%3===0 && i%5===0){
        sum+=i
    }
    i+=1
}
while (i<=100);
console.log(sum);
