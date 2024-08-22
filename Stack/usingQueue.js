

// ==================Stack with Queue========//

class StackUsingQueues {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(value) {
        this.queue1.push(value);
        return true;
    }

    pop() {
        if (!this.queue1.length && !this.queue2.length) return 'empty';
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        let poppedValue = this.queue1.shift();
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return poppedValue;
    }

    top() {
        if (!this.queue1.length && !this.queue2.length) return 'empty';
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        let topValue = this.queue1[0];
        this.queue2.push(this.queue1.shift());
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return topValue;
    }

    isEmpty() {
        return !this.queue1.length && !this.queue2.length;
    }
}

const myStack = new StackUsingQueues();

console.log(myStack.push(35));  // true
console.log(myStack.push(5));   // true
console.log(myStack.push(3));   // true
console.log(myStack.push(325)); // true
console.log(myStack.pop());     // 325
console.log(myStack.pop());     // 3
console.log(myStack.top());     // 5
console.log(myStack.pop());     // 5
console.log(myStack.push(90));  // true
console.log(myStack.push(0));   // true
console.log(myStack.pop());     // 0

console.log("Queue1:", myStack.queue1); // Queue1 contains the elements in stack order
console.log("Queue2:", myStack.queue2); // Queue2 will be empty






