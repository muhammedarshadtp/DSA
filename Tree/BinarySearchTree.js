
class Node{
    constructor(value){
        this.value=null
        this.left=null
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
}

const BST = new BinarySearchTree()

console.log('tree is empty',BST.isEmpty());