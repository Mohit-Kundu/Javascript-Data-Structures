class Stack{
    constructor(){
        this.storage =  [];
        this.size = 0; 
    }

    isEmpty(){
        return (this.storage.length == 0);
    }

    stackLen(){
        return this.items.length;
    }

    push(element){
        this.storage.push(element);
    }

    pop(){
        if(isEmpty()){
            return "Stack Underflow";
        }
        return this.storage.pop();
        
    }

    peek(){
        if(isEmpty()){
            return "Stack Underflow";
        }
        return this.storage[this.storage.length - 1];
    }

    printStack(){
        var items = ''
        for(var i = 0; i < this.items.length; i++){
            items += this.items[i] + "";
        }
        return items;
    }
}