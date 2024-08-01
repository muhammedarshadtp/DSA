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
