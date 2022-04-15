let loop_time=require("readline-sync").question("enter loop time: ");
var maxi=0;
let lis=[ ]
for (let i=1;i<=loop_time;i++){
   let num=require("readline-sync").question("enter number: ")
   lis.push(num)
}
var maxi=lis[0];
for (let j=0;j<lis.length;j++) {
   if (maxi<lis[j]) {
       maxi=lis[j]
   }
}
console.log(maxi)
