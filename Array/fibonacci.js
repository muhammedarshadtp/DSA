//===========Fibonacci============//


function fibonacci(n){
    const fib = [0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1] + fib[i-2]
    }
    return fib
}

 console.log(fibonacci(8)); // output[0,1,1,2,3,5,8,13]

//  Big-O = O(n)

//==============Factorial==========//

function Factorial(n){
    let result = 2
    for(let i=2;i<=n;i++){
        result = result * i
    }
    return result
}

console.log(Factorial(4));    //output 48

//====Big-O = O(n)


//=========PrimeNumber======//

function isPrime(n){
    if(n < 2){
        return false
    }
    for(let i=2; i < n ; i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(5));
console.log(isPrime(82));
console.log(isPrime(22));

//====Big-O =O(n)


// ========Power of Two========//


function power(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n % 2 !==0){
            return false
        }
        n=n/2
        return true
    }
}

console.log(power(5),'power kitty');
console.log(power(9));
console.log(power(5));

//======Big-O = o(logn)


function ispoweroftwobite(n){
    if(n<1){
        return false
    }
    return (n & (n-1)) === 0
}

console.log(ispoweroftwobite(4),'=======');

//=====Big-O=O(1)



// ===========Recursion Fibonacci Sequence==========//

function RecursionFibonacci(n){
    if(n<2){
        return n
    }
    return RecursionFibonacci(n-1) + RecursionFibonacci(n-2)
}


console.log("==========================");

console.log(RecursionFibonacci(6));  //(8)
console.log(RecursionFibonacci(8));  //(21)
console.log(RecursionFibonacci(10)); //(55)
console.log(RecursionFibonacci(4));  //(3)

