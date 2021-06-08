class Stack{
    constructor(){
        this.storage =  [];
    }

    stackLen(){
        return this.storage.length;
    }

    push(element){
        this.storage.push(element);
    }

    pop(){
        if(this.storage.length === 0){
            return "Stack Underflow";
        }
        return this.storage.pop();
        
    }

    peek(){
        if(this.storage.length === 0){
            return "Stack Underflow";
        }
        return this.storage[this.storage.length - 1];
    }

    printStack(){
        var items = ''
        for(var i = 0; i < this.storage.length; i++){
            items += this.storage[i] + " ";
        }
        return items;
    }
}

const stack = new Stack();

//test cases
console.log(stack.pop()); //Underflow

stack.push('a');
stack.push('b'); // items = [a,b]

console.log(stack.stackLen()); // 2
console.log(stack.peek()); // b
console.log(stack.printStack()); // a b

console.log(stack.pop()); // b
console.log(stack.peek()); // a
console.log(stack.stackLen()); // 1


