// create the Stack object

class Stack {
    constructor() {
        this.stack = [];
        this.length = 0;
    }

    top() {
        if (this.length === 0) {
            return undefined;
        }
        return this.stack[this.stack.length - 1];
    }

    push(item) {
        this.stack[this.stack.length] = item;
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        let shortenedStack = [];

        for (let i = 0; i < this.stack.length - 1; i++) {
            shortenedStack.push(this.stack[i]);
        }
        this.stack = shortenedStack;
        this.length--;
        return this;
    }

    empty() {
        for (let i = this.stack.length; i >= this.stack.length; i--) {
            this.pop();
        }
        this.length = 0;
        return this;
    }
}

let myStack = new Stack();
console.log(myStack.top());
console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.push(3));
console.log(myStack.push(4));
console.log(myStack.pop());
console.log(myStack.push(5));
console.log(myStack.top());
console.log(myStack.empty());
console.log(myStack.shift()); // not a function error thrown