


// ==========Sum of an Array==========//
// let array=[1,2,3,4,5,6]
// function sumofArray(array){
//     let sum = 0
//     for(let i=0;i<array.length;i++){
//         sum = sum+array[i]
//     }
//     return sum
// }

// console.log(sumofArray(array),'sum of an array');


// ======== Remove element from the array=============//

// let array=[1,2,3,4,5,6,7]

// let newarr = []

// function removeElement(array,element){
//     for(let i=0; i<array.length;i++){
//         if(array[i] != element){
//             newarr.push(array[i])
//         }
//     }
//     return newarr
// }

// console.log(removeElement(array,3));

// ====== Find the index of the value in array====//

// let array = [2,3,4,5,6,7,8]

// function valueIndex(array,value){
//     for(i=0;i<array.length;i++){
//         if(array[i]==value){
//             return i
//         }
//     }
//     return -1
// }

// console.log(valueIndex(array,6));



// ============ Linear Search ==========//


// const array=[1,2,3,4,5,6,7,8]

// function Linearsearch(array,value){
//     for(i=0;i<array.length;i++){
//         if(array[i]===value){
//             return i
//         }
//     }
//     return -1
// }

// console.log(Linearsearch(array,6));



// =======BinartySearch==========//

// const arr=[1,2,3,4,5,6,7,8]

// function binarySearch(arr,target){
//     let leftindex = 0
//     let rightindex=arr.length-1
//     while(leftindex<=rightindex){
//         let middleindex = Math.floor((leftindex + rightindex)/2)
//         if(target===arr[middleindex]){
//             return middleindex
//         }
//         if(target<arr[middleindex]){
//             rightindex=middleindex-1
//         }else{
//             leftindex=middleindex+1
//         }
//     }
//     return -1
// }

// console.log(binarySearch(arr,7));




// =======Linkedlist middle======//

// 



// ========= Fibonacci Recursion=========//

// function FibonacciRecursion(n){
//     if(n<2){
//         return n
//     }
//     return FibonacciRecursion(n-1) + FibonacciRecursion(n-2)
// }

// console.log(FibonacciRecursion(8));




//=============String Palindrome=============//

// function isPalindrome(arr,start=0,end=arr.length-1){
//     if(start>=end){
//         return true
//     }
//     if(arr[start] !== arr[end]){
//         return false
//     }
//     return isPalindrome(arr,start+1,end-1)
// }

// console.log(isPalindrome('101101')); // Should print true
// console.log(isPalindrome('2030'));   // Should print false



// ==============String uppercase and Lowercase==========//


// let str='ARSHAD'

// let newstr=str.toLowerCase()

// console.log(newstr); //(arshad)



// //=============Frequency of a string===============//


// // const str = 'muhammed arshad t p'
// const num = '12345677423344'
// const Frequency={}

// for(let char of num){
//     if(char !==''){
//         Frequency[char] = (Frequency[char] || 0) + 1
//     }
// }
// console.log(Frequency);
  //  output { '1': 1, '2': 2, '3': 3, '4': 4, '5': 1, '6': 1, '7': 2 } 
//   { m: 3, u: 1, h: 2, a: 3, e: 1, d: 2, ' ': 3, r: 1, s: 1, t: 1, p: 1 } //


//=============Delete the string =========//

// let str ='muhammed arshad t p'
// //  let result = ''
// // for(let i=0;i<str.length;i++){
// //     if(str[i]!=='e'){
// //         result +=str[i]
// //     }
// // }

// // console.log(result);

// str=str.split('e').join('')
// console.log(str);