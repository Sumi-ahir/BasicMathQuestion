//find all divisor of any number 
function divisor(number){
    let divisors=[];

    for(let i=2;i<=number;i++){
        if(number%i === 0){
            divisors.push(i);
        }
    }return divisors;
  
}
console.log(divisor(40));


//OPTIMISE WAY
function divisor(number){
    let divisors=[];

    for(let i=1;i*i<=number;i++){
        if(number%i === 0){
            divisors.push(i);
            if(i!==number/i){
                divisors.push(number/i);
            }
        }
    }return divisors.sort((a,b)=>a-b);//sort accending
  
}console.log(divisor(60));

