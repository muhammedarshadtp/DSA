

// ==========Queue with stack=============//

class queue{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(value){
        this.stack1.push(value)
        return true
    }
    dequeue(){
        if(!this.stack1.length && !this.stack2.length) return 'empty'
        if(this.stack2.length){
            return this.stack2.pop()
            
        }

        while(this.stack1.length){
            this.stack2.push( this.stack1.pop())
        }
        return this.stack2.pop()
      
    }
}

const myqueue=new queue()

console.log(myqueue.enqueue(35));
console.log(myqueue.enqueue(5));
console.log(myqueue.enqueue(3));
console.log(myqueue.enqueue(325));
console.log(myqueue.dequeue());
console.log(myqueue.dequeue());
console.log(myqueue.dequeue());
console.log(myqueue.enqueue(90))
console.log(myqueue.enqueue(0));

console.log(myqueue.stack2);
console.log(myqueue.stack1);