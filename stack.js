class Stack{

    constructor(){
        this.storage =  [];
    }

    //Returns length of stack
    stackLen(){
        return this.storage.length;
    }

    //Inserts element to end of stack
    push(element){
        this.storage.push(element);
    }

    //Removes last element of stack
    pop(){
        if(this.storage.length === 0){
            return "Stack Underflow";
        }
        return this.storage.pop();
    }

    //Returns last element of Stack
    peek(){
        if(this.storage.length === 0){
            return "Stack Underflow";
        }
        return this.storage[this.storage.length - 1];
    }

    //Prints all elements of Stack
    printStack(){
        if(this.storage.length === 0){
            return "Stack Underflow";
        }
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


