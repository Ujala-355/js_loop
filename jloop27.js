var i=1;
while (i<=5){
    var b=1;
    str=""
    while (b<=5-i){
        str+=" "
        b++
    }
    var j=1;
    while (j<=i){
        str=str+"*"
        j++
    }
    console.log(str);
    i++
}



