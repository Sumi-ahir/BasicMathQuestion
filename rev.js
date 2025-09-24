//REVERS ENUMBER
function revNum(num){
    let rev=0;
    while(num>0){
        let rem=num%10;//give last degit
    rev=(rev*10)+rem;//build rev number
    num= Math.floor(num/10);
    }
    return rev;
}console.log(revNum(123));

//MORE OPTIMISE WAY
function revNo(no){
    let rev=0;
    for(;num>0;no=Math.floor(num/10)){
        rev=(rev*10)+(num%10);
    }return rev;
}console.log(revNum(13));
