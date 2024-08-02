// // ===========Recursion Fibonacci Sequence==========//

// function RecursionFibonacci(n,c){
//     if(n<2){
//         console.log(n,'-------',c);
//         return n
//     }
//     console.log(n,c);
//     return RecursionFibonacci(n-1,'f') + RecursionFibonacci(n-2,'e')
// }


// console.log("==========================");

// console.log(RecursionFibonacci(6,'f'));  //(8)




//===========RecursionFactorial==========//

// function recursionFactorial(n){
//     if(n === 0){
//         return 1
//     }
//     return n * recursionFactorial(n-1)
// }

// console.log("----------------");

// console.log(recursionFactorial(4));
// console.log(recursionFactorial(5));


// // ===Big-O=O(n)


//============

// function sample(str,i=0){
//     if(str.length-1===i){
//         return str[i]
//     }
    
//     return sample(str,i+1)  + str[i] 
// }



// console.log(sample('rashi'))  //output='ihsar'


