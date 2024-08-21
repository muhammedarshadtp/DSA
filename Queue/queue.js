

// ==========Linkedlist using Queue===============//


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Queue{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     enqueue(value){
//         let  node = new Node(value)
//         if(!this.head && !this.tail){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node

//         }
//     }
//     dequeue(){
//         if(!this.head){
//             return -1
//         }else{
//             let remove =this.head
//             this.head=this.head.next
//             remove.next=null
//         }
    
//     }
//     display(value){
//         let current = this.head
//         while(current){
//             console.log(current.value);
//             current = current.next
//         }
//     }
// }

// const myqueue = new Queue()

// myqueue.enqueue(90)
// myqueue.enqueue(12)
// myqueue.enqueue(78)
// myqueue.enqueue(70)
// myqueue.enqueue(8)
// myqueue.dequeue()
// myqueue.dequeue()

// myqueue.display()