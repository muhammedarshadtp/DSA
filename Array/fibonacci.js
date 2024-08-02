// //===========Fibonacci============//


// function fibonacci(n){
//     const fib = [0,1]
//     for(let i=2;i<n;i++){
//         fib[i]=fib[i-1] + fib[i-2]
//     }
//     return fib
// }

//  console.log(fibonacci(8)); // output[0,1,1,2,3,5,8,13]

// //  Big-O = O(n)

// //==============Factorial==========//

// function Factorial(n){
//     let result = 2
//     for(let i=2;i<=n;i++){
//         result = result * i
//     }
//     return result
// }

// console.log(Factorial(4));    //output 48

// //====Big-O = O(n)


// //=========PrimeNumber======//

// function isPrime(n){
//     if(n < 2){
//         return false
//     }
//     for(let i=2; i < n ; i++){
//         if(n % i === 0){
//             return false
//         }
//     }
//     return true
// }

// console.log(isPrime(5));
// console.log(isPrime(82));
// console.log(isPrime(22));

// //====Big-O =O(n)


// // ========Power of Two========//


// function power(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n % 2 !==0){
//             return false
//         }
//         n=n/2
//         return true
//     }
// }

// console.log(power(5),'power kitty');
// console.log(power(9));
// console.log(power(5));

// //======Big-O = o(logn)


// function ispoweroftwobite(n){
//     if(n<1){
//         return false
//     }
//     return (n & (n-1)) === 0
// }

// console.log(ispoweroftwobite(4),'=======');

// //=====Big-O=O(1)






//==========Linkedlist Reverse=============//

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     isempty(){
//         return this.size===0
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isempty()){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//     }
//     reverse(value){
//         let pre = null
//         let val=this.head
//         while(val){
//             const next = val.next
//             val.next=pre
//             pre=val
//             val=next
            
//         }
//         this.head=pre
//     }
//     display(){
//         let current = this.head
//         while(current!=null){
//             console.log(current.value);
//             current = current.next
//         }
//     }
// }

// const link = new linkedList()

// link.append(34)
// link.append(34)
// link.append(2)
// link.append(5)
// link.append(5)
// link.reverse()
// link.display()