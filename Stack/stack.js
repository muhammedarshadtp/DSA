
// =============Stack=============//

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }


// class stack{
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
//             remove.next=null
//         }
//     }
//     display(value){
//         let current = this.top
//         while(current){
//             console.log(current.value);
//             current = current.next
//         }
//     }
// }
// const stacks=new stack()

// stacks.push(1)
// stacks.push(9)
// stacks.push(4)
// stacks.pop()
// stacks.display()
// console.log(stacks.top);