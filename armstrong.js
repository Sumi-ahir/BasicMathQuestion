//find armstrong num
function armstrongNo(n){
    let sum=0;
    let temp=n;
    let degits=n.toString().length;

    while(temp!==0 || temp>0){
      let degit=temp%10;
      sum+=Math.pow(degit,degits);
      temp=Math.floor(temp/10);

    }return sum===n;

}console.log(armstrongNo(123));
console.log(armstrongNo(153)); 
console.log(armstrongNo(9474));


//MORE OPTIMISE WAY
function armstrongNo(n){
    let sum=0;
    let temp=n;
    let degits=n.toString().length;

    while(temp!==0 || temp>0){
      let degit=temp%10;
      sum+=Math.pow(degit,degits);
      if(sum>n) return false;
      temp=Math.floor(temp/10);

    }return sum===n;

}console.log(armstrongNo(123));
console.log(armstrongNo(153)); 
console.log(armstrongNo(9474));

