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


// function sum(n){
//     if(n<2){
//         return n
//     }

//     return sum(n-1) +sum(n-2)
// }

// console.log(sum(6));




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


// function string(str){
//     return str.split("").reverse().join('')
// }
// console.log(sample('rashi')) 



// // =============Resursion print One to five=============//

// function add(n){
//     console.log(n);
//     if(n==5){
//         return n
//     }
    
//     return add(n+1)
// }

// add(1)


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


//===========Array resursion find sum============//


// let array=[1,2,3,4];

// function addArray(array){
//     if(array.length==0){
//         return 0;
//     }
//     return array.shift()+addArray(array);
// }

// console.log(addArray(array));



// function isPalindrome(str,start=0,end=str.length-1){
//     if(start >= end){
//         return true
//     }

//     if(str[start] !== str[end]){
//         return false
//     }
//     return isPalindrome(str,start + 1,end - 1)
// }

// console.log(isPalindrome('malayalam'));
// function isPalindrome(str, start = 0, end = str.length - 1) {
//     if (start >= end) {
//         return true;
//     }

//     if (str[start] !== str[end]) {
//         return false;
//     }
//     return isPalindrome(str, start + 1, end - 1);
// }




class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isempty(){
        return this.size===0 
    }
    appent(value){
        const node = new Node(value)
        if(this.isempty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    middleDelete(){
        let s=this.head
        let f=this.head
        let prev=null
        while(f && f.next){
            prev=s
            s=s.next
            f=f.next.next
        }
        if(prev){
            prev.next=s.next
            if(s == this.tail){
                this.tail=prev
            }
            this.size--
        }
    }
    display(){
        let current = this.head
        while(current != null){
            console.log(current.value);
            current=current.next
        }
    }
    
}

const link = new linkedlist()


link.appent(12)
link.appent(34)
link.appent(35)
link.middleDelete()
link.display()

