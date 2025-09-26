//Find GCD(Greatest Common Diviso) of two numbers
//FORMULA GCD(A,B)=(A,B MOD B)//this method i more optimise

function GCNum(a,b){

    while(b!==0){
       let temp=b;
       b=a%b;
       a=temp;
    
    }return a;
}console.log(GCNum(12,18));
console.log(GCNum(2,18));
console.log(GCNum(12,8));

//USING FOR LOOP
function hcd(n){

    let min=Math.min(a,b);
    let hcd=1;

    for(let i=1;i<=min;i++){
        if(a%i===0 && b%i===0){
            hcd=i;
        }
    }return hcd;
}console.log(GCNum(2,8));
console.log(GCNum(12,8));
