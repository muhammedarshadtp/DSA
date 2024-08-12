// ==========Dsa Java script ==============//


// ========create a linked list class========//


// class Node{
//     constructor(value){
//         this.value =value
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
//     // remove(index){
//     //     if(index<0 || index>=this.size){
//     //         return null
//     //     }
//     //     let RemoveNode
//     //     if(index==0){
//     //         RemoveNode=this.head
//     //         this.head=this.head.next
//     //     }else{
//     //         let prev=this.head
//     //         for(let i=0; i<index-1; i++){
//     //             prev=prev.next
//     //         }
//     //         RemoveNode=prev.next
//     //         prev.next=RemoveNode.next
//     //     }
//     //     this.size--
//     //     return RemoveNode.value
//     // }
//     remove(value){
//         if(this.isempty()){
//             return null
//         }
//         if(this.head.value===value){
//             this.head=this.head.next
//             this.size--
//             return value
//         }else{
//             let prev = this.head
//             while(prev.next && prev.next.value != value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                 const removes = prev.next
//                 prev.next=removes.next
//                 this.size--
//                 return value
//             }
//         }
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

// link.remove(34)

// link.display()


// ===========Search=========//

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
//     append(value){
//         const node=new Node (value)
//         if(this.isempty()){
//          this.head=node
//         }else{
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
            
//         }
//         this.size++
//     }

// //     search(value){
// //         console.log(this.head,'length');
// //         if(this.isempty()){
// //             return -1
// //         }
// //         let i=0
// //         let curr = this.head
// //         while(curr){
// //         if(curr.value===value){
// //             return i
// //         }
// //         curr=curr.next
// //         i++
// //     }
// //     return -1
// //   }
// searchWithIndex(index){
//     if(index<0 || index >=this.size){
//         return -1
//     }
//     if(index===0){
//         return this.head.value
//     }else{
//         let prev=this.head
//         let count=0
//         while(prev){
//             if(count === index){
//                 return prev.value
//             }
//             prev=prev.next
//             count++

//         }
//         return -1
//     }
// }

// reverce(value){
//     let prev=null
//     let current=this.head
//     while(current){
//         let next=current.next
//         current.next=prev
//         prev=current
//         current=next
//     }
//     this.head=prev
// }
    
//     display(){

//         let current=this.head
//         while(current != null){
//             console.log(current.value);
//             current=current.next
//         }
//     }
// }

// const link= new linkedList()

// link.append(23)
// link.append(78)
// link.append(87)

// console.log(link.searchWithIndex(1),'val');
// // console.log(link.reverce(),"reverce kitty");
// link.reverce()
// link.display()


//==================Append and Prepend===================//

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
//         const node=new Node(value)
//         if(this.isempty()){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//         return value
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isempty()){
//             this.head=node
//             this.tail=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//         return value
//     }






//     display(){
//         let current=this.head
//         while(current != null){
//             console.log(current.value);
//             current=current.next
//         }
//     }


// }


// const link = new linkedList()

// link.append(12)
// link.append(89)
// link.prepend(126)
// link.prepend(895)

// link.display()



//=============RemovefromFront============//


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
//         return value
//     }

//     removeFromFront(value){
//         if(this.isempty()){
//             return null
//         }
//         const val = this.head.value
//         this.head=this.head.next
//         this.size--
//         return val
//     }
//     removeFromEnd(){
//         if(this.isempty()){
//             return null
//         }
//         const valuee=this.tail.value
//         if(this.size===1){
//             this.head=null
//             this.tail=null
//         }else{
//             let prev = this.head
//             while(prev.next !== this.tail){
//                 prev = prev.next
//             }
//             prev.next=null
//             this.tail=prev
//         }
//         this.size--
//         return valuee
//     }

//     display(){
//         let current = this.head
//         while(current != null){
//             console.log(current.value);
//             current = current.next
//         }
//     }
// }

// const link = new linkedList()

// link.append(129)
// link.append(23)
// link.append(123)
// link.append(233)
// link.append(263)


// link.removeFromEnd()
// link.display()


// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null

//     }
// }

// class Slinkedlist {
//     constructor() {
//         this.head = null
//         this.tail = this.tail
//     }

//     addNode(data) {
//         const newnode = new Node(data)
//         if (this.head == null) {
//             this.head = newnode
//         } else {
//             this.tail.next = newnode
//         }
//         this.tail = newnode
//     }


//     delete(data) {
//         let current = this.head
//         let prev = null
//         if (current.data == data) {
//             this.head = this.head.next
//             return

//         }
//         while (current != null) {
//             if (current.data == data) {
//                 prev.next = current.next
//                 break;
//             }
//             prev = current
//             current = current.next

//         }
//     }

//     display() {
//         let temp = this.head
//         while (temp != null) {
//             console.log(temp.data);
//             temp = temp.next
//         }
//     }


// }

// const list = new Slinkedlist()
// list.addNode(10)
// list.addNode(20)
// list.addNode(30)
// list.addNode(40)
// list.delete(30)
// list.display()

// 

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class Linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
//     isempty(){
//         return this.size===0
//     }
//     append(value){
//         const node=new Node(value)
//         if(this.isempty()){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//     }
//     search(value){
//         if(this.isempty()){
//             return -1
//         }
//         let i=0
//         let curr=this.head
//         while(curr){
//             if(curr.value === value){
//                 return i
//             }
//             curr=curr.next
//             i++
//         }
//         return -1
//     }
//     // search(index){
//     //     if(this.isempty() || index<0 ||index>=this.size){
//     //         return -1
//     //     }
//     //     if(index===0){
//     //         return this.head.index
//     //     }
//     //     let current = this.head
//     //     let count=1
//     //     while(current != null){
//     //         if(count === index){
//     //             return current.value
//     //         }
//     //         count++
//     //         current=current.next
//     //     }
//     //     return -1
//     // }
//     deletemiddle(){
//         if(this.isempty()){
//             return -1
//         }
//         if(this.size===1){
//             this.head= null
//             this.tail = null
//         }
//         let s=this.head
//         let f=this.head
//         let prev=null
//         while(f !=null && f.next !=null){
//             prev =s
//             s=s.next
//             f= f.next.next
//         }
//         if(prev !== null){
//             prev.next=s.next
//             if(s==this.tail){
//                 this.tail=prev
//             }
//         }
//      this.size--
//     }
//     reverse(){
//         let prev =null
//         let curr=this.head
//         while(curr){
//             let next = curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }
//     display(value){
//         let current = this.head
//         while(current != null){
//             console.log(current.value);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
//             current=current.next
//         }
//     }

// }


// const link = new Linkedlist()

// link.append(2)
// link.append(4)
// link.append(8)
// link.append(6)
// console.log(link.search(),"search kitty");
// link.reverse()
// // link.deletemiddle()
// link.display()  


// let array=[1,2,3,4];

// function addArray(array){
//     if(array.length==0){
//         return 0;
//     }
//     return array.shift()+addArray(array);
// }

// console.log(addArray(array));


// function sum(n){
//     if(n<0){
//         return 0
//     }
//     return n + sum(n-1)
// }
// console.log(sum(6),"kiiiiiiiiii");



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
//     prepent(value){
//         const node = new Node(value)
//         if(this.isempty()){
//             this.head=node
//             this.tail=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     insert(value,index){
//         if(index < 0 || index > this.size){
//             return -1
//         }
//         if(index===0){
//             this.prepent(value)
//         }else{
//             if(value%2 ==0 ){
//             const node = new Node(value)
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                     prev=prev.next
                
//             }
//             node.next=prev.next
//             prev.next=node
//         }
//         this.size++
//     }
//   }
//     display(){
//         let current = this.head
//         while(current != null){
//             console.log(current.value);
//                 current = current.next
//         }
//     }

// }

// const link = new linkedList()

// link.prepent(23)
// link.prepent(73)
// link.prepent(93)
// link.prepent(33)
// link.insert(2,2)
// link.insert(1,4)
// link.display()



// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
//     isempty(){
//         return this.size===0
//     }
//     appent(value){
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
//     delete(value){
//         if(this.isempty()){
//             return -1
//         }
//         if(this.head.value===value){
//             this.head=this.head.next
//             this.size--
//             return value
//         }else{
//             let prev =this.head
//             while(prev.next && prev.next.value != value){
//                 prev = prev.next
//             }
//             if(prev.next){
//                 const remove = prev.next
//                 prev.next = remove.next
//                 this.size--
//                 return value
//             }
//         }
//     }
//     display(){
//         let current = this.head
//         while(current != null){
//             console.log(current.value);
//             current=current.next
//         }
//     }
// }

// const link = new linkedlist()

// link.appent(12)
// link.appent(45)
// link.appent(56)
// link.appent(67)
// link.delete(45)
// link.display()


