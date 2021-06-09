class Queue{

    constructor(){
        this.storage = [];
    }

    enqueue(element){
        this.storage.push(element);
    }

    dequeue(){
        if(this.storage.length === 0){
            return "Queue underflow";
        }
        return this.storage.pop();
    }

    front(){
        if(this.storage.length === 0){
            return "Queue underflow";
        }
        return this.storage[0];
    }

    printQueue(){
        if(this.storage.length === 0){
            return "Queue underflow";
        }
        var items = ''
        for(var i = 0; i < this.storage.length; i++){
            items += this.storage[i] + " ";
        }
        return items;
    }
}

const queue = new Queue();