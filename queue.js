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
        return this.storage.shift();
    }

    front(){
        if(this.storage.length === 0){
            return "Queue underflow";
        }
        return this.storage[0];
    }

    queueLen(){
        return this.storage.length;
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

//test cases
console.log(queue.printQueue());

queue.enqueue('a');
queue.enqueue('b');
console.log(queue.front());
console.log(queue.printQueue());
console.log(queue.queueLen());

console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.printQueue());
console.log(queue.queueLen());

