function isPrime(n){
    if (n<=1) return false;
    if(n<=3) return true;

    for(let i=2;i*i<=n;i++){
        if(n%i==0){
            return false;
        }
    }return true;
}console.log(isPrime(5));  // true
console.log(isPrime(4));

//MORE OPTIMIZE
function isPrime(n){
    if(n <= 1) return false;
    if(n <= 3) return true;
    if(n % 2 === 0 || n % 3 === 0) return false; // 2 ane 3 na multiples avoid karo

    for(let i = 5; i * i <= n; i += 6){  // 6k ± 1 optimization
        if(n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}
