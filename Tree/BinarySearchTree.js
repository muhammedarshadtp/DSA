
class Node{
    constructor(value){
        this.value=value
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
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left == null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right == null){
                root.right=node
            }else{
                this.insertNode(root.right , node)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    
}

const BST = new BinarySearchTree()

console.log('tree is empty',BST.isEmpty());

BST.insert(12)
BST.insert(22)


console.log(BST.search(BST.root,10));
console.log(BST.search(BST.root,20));
console.log(BST.search(BST.root,12));
console.log(BST.search(BST.root,1));