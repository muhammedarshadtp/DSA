// ==========Dsa Java script ==============//


// ========create a linked list class========//


// class Node{
//     constructor(value){
//         this.head=value
//         this.next=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
// }
// const list = new linkedList()

// console.log(list.isEmpty());
// console.log(list.getSize());




// ===========Prepend===========//


// class Node{
//     constructor(value){
//         this.value=value
//         this.next =null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     getSize(){
//         return this.size
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(this.head == null){
//             this.head=node
//             this.tail=this.head
//         }else{
//         this.tail.next=node
//         this.tail=node
//         }
//         this.size++
//     }
//     display(){
//         let current = this.head
//         while(current!=null){
//             console.log(current.value);
//             current=current.next
//         }
//     }
// }

// const link = new linkedList()

// link.prepend(10)
// link.prepend(20)
// link.prepend(30)

// link.display()

// console.log(link);



// =============Append==========//

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
//     }
//     getSize(){
//         return this.size
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.head==null){
//             this.head=node
//         }else{
//             this.tail.next=node
//         }
//         this.tail=node
//         this.size++

//     }
//     display(){
//         let current = this.head
//         while(current!=null){

//             console.log(current.value);
//             current=current.next
//         }
//     }
// }

// const link = new linkedList()

// link.append(10)
// link.append(20)
// link.append(30)

// link.display()

// console.log(link);