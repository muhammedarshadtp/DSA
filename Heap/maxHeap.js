
class MaxHeap{
    constructor(){
        this.heap=[]
    }
    parentIndex(index){
        return Math.floor((index-1)/2)
    }
    leftchild(index){
        return (2*index) + 1
    }
    rightchild(index){
        return (2 * index) + 2
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyup()
    }
    heapifyup(){
        let index = this.heap.length-1
        while(index > 0){
            let parentIdx=this.parentIndex(index)
            if(this.heap[this.parentIdx] < this.heap[index]){
                this.swap(parentIdx,index)
                index=parentIdx
            } else{
                break;
            }
        } 
        console.log(this.heap);
    }

}


const heap = new MaxHeap()
heap.insert(10)
heap.insert(20)
heap.insert(5)
heap.insert(15)
heap.insert(30)
console.log(heap.heapifyup());
console.log(heap.heap);