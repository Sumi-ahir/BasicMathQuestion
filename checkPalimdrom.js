//check given number is palindrom or not
function palinNo(num){
    let originalNo=num;
    let rev=0;
    for(;num>0;num=Math.floor(num/10)){
        rev=(rev*10)+(num%10);
    }if(originalNo===rev){
        return`${originalNo} is palindrom`;
    }else{  return`${originalNo} is NOT palindrom`;}
}console.log(palinNo(121));
console.log(palinNo(211));
console.log(palinNo(191));



