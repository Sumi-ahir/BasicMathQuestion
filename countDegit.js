//COUNT THE NUMBER OF DEGIT GIVEN IN NUMBER
function countDegit(n){
    let count=0;
    if (n===0) return 1;
    while(n>0){
        n=Math.floor(n/10);
        count++;
    }return count;
}console.log(countDegit(156));

//using function
function cd(n){
    if(n===0) return 1;
    return Math.floor(Math.log10(n))+1;
}console.log(countDegit(16));


//using length
function cd(n){
    
    return n.toString().length;
    
}console.log(cd(1));

