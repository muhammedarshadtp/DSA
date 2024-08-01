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

console.log(Factorial(4));