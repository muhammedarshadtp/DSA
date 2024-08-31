
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
            if(this.heap[parentIdx] < this.heap[index]){
                this.swap(parentIdx,index)
                index=parentIdx
            } else{
                break;
            }
        } 
    }

    extractMax(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let max = this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
        return max
    }
    heapifyDown(index){
        let largest = index
        let leftIdx = this.leftchild(index)
        let rightIdx=this.rightchild(index)
        if(leftIdx < this.heap.length && this.heap[leftIdx] > this.heap[largest]){
            largest = leftIdx
        }
        if(rightIdx < this.heap.length && this.heap[rightIdx] > this.heap[largest]){
            largest=rightIdx
        }
        if(largest != index){
            this.swap(index,largest)
            this.heapifyDown(largest)
        }
    }

    heapSort(){
        let sorted=[]
        // for(let i=0;i<arr.length;i++){
        //     this.insert(arr[i])
        // }
        while(this.heap.length){
            sorted.push(this.extractMax())
        }
        return sorted
    
    }
}


const heap = new MaxHeap()
heap.insert(2)
heap.insert(6)
heap.insert(2)
heap.insert(8)
heap.insert(30)

// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
//  let arr=[2,6,2,8]
console.log(heap.heapSort());

// console.log(heap.heap);



