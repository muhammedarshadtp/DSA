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
//         this.size=0
//     }
// isEmpty() {                 // This method check if the list is empty or not
//     return this.size === 0
// }

//     getSize(){
//         return this.size
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//         node.next=this.head
//         this.head=node
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
//         this.size=0
//     }

//     getSize(){
//         return this.size
//     }
// isEmpty() {                 // This method check if the list is empty or not
//         return this.size === 0
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let prve=this.head
//          while(prve.next){
 //             prve=prve.next
//           }
//           prve.next=node
            
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

// link.append(10)
// link.append(20)
// link.append(30)

// link.display()

// console.log(link);


// ============Insert=============//

// class Node{
//     constructor(value){
//         this.value=value
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
//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//         node.next=this.head
//         this.head=node
//         }
//         this.size++
//     }

//     insert(value,index){
//         if(index<0||index>this.size){
//             return
//         }
//         if(index===0){
//             this.prepend(value)
//         }else{
//             const node =new Node(value)
//             let prev =this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//         }
//         this.size++
//     }

//     display(){
//         let current =this.head
//         while(current!=null){
//             console.log(current.value);
//             current = current.next
//         }
//     }
// }

// const item =new linkedList()


// item.prepend(10)
// item.prepend(20)
// item.prepend(30)


// item.insert(90,2)
// item.insert(100,3)
// item.display()

// =================RemoveNode===============//

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     isempty(){
//         return this.size===0
//     }


//     prepend(value){
//         const node = new Node(value)
//         if(this.isempty()){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     remove(index){
//         if(index<0 || index>=this.size){
//             return null
//         }
//         let RemoveNode
//         if(index==0){
//             RemoveNode=this.head
//             this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0; i<index-1; i++){
//                 prev=prev.next
//             }
//             RemoveNode=prev.next
//             prev.next=RemoveNode.next
//         }
//         this.size--
//         return RemoveNode.value
//     }
//     display(){
//         let current = this.head
//         while(current!=null){
//             console.log(current.value)
//             current=current.next
//         }
//     }
// }

// const link= new linkedList()

// link.prepend(23)
// link.prepend(34)
// link.prepend(67)
// link.prepend(10)

// link.remove(0)

// link.display()






