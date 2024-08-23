


// // class Node{
// //     constructor(value){
// //         this.value=value
// //         this.next=null
// //     }
// // }


// // class stack{
// //     constructor(){
// //         this.top=null
// //     }
// //     push(value){
// //         let node = new Node(value)
// //         if(!this.top){
// //             this.top=node
// //         }else{
// //             node.next=this.top
// //             this.top=node
// //         }
// //     }
// //     pop(){
// //         if(!this.top){
// //             return -1
// //         }else{
// //             let remove = this.top
// //             this.top=remove.next
// //             remove.next=null
// //         }
// //     }
    
// //     display(value){
// //         let current = this.top
// //         while(current){
// //             console.log(current.value);
// //             current = current.next
// //         }
// //     }
// //     
// // }
// // const stacks=new stack()

// // stacks.push(1)
// // stacks.push(9)
// // stacks.push(4)

// // stacks.display()
// // stacks.reverse()



// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Stack{
//     constructor(){
//         this.top=null
//     }
//     push(value){
//         let node = new Node(value)
//         if(!this.top){
//             this.top=node
//         }else{
//             node.next=this.top
//             this.top=node
//         }
//     }
//     pop(){
//         if(!this.top){
//             return -1
//         }else{
//             let remove = this.top
//             this.top=remove.next
//             remove.next-=null
//         }
//     }
    
//     display(){
//         let current=this.top
//         while(current != null){
//             console.log(current.value);
//             current=current.next
//         }
//     }

//     reverse() {
//        let prev = null
//        let current = this.top
//        while(current != null){
//         let next = current.next
//         current.next=prev
//         prev=current
//         current=next
//        }
//        this.top = prev
// }
// }


// const link =new Stack()

// link.push('a')
// link.push('s')
// link.push('d')
// link.push('f')

// link.display()
// link.reverse()
// console.log('ekheuihgeru');
// link.display()


