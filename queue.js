class Queue{

    constructor(){
        this.storage = [];
    }

    //adds element to end of queue
    enqueue(element){
        this.storage.push(element);
    }

    //removes element from front of queue
    dequeue(){
        if(this.storage.length === 0){
            return "Queue underflow";
        }
        return this.storage.shift();
    }

    //returns element at the front of queue
    front(){
        if(this.storage.length === 0){
            return "Queue underflow";
        }
        return this.storage[0];
    }

    //returns queue length
    queueLen(){
        return this.storage.length;
    }

    //prints elements of queue
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
console.log(queue.printQueue()); //Underflow

queue.enqueue('a'); 
queue.enqueue('b'); //items = [a,b]
console.log(queue.front()); //a
console.log(queue.printQueue()); // a b
console.log(queue.queueLen());  //2

console.log(queue.dequeue());
console.log(queue.front()); //b
console.log(queue.printQueue()); //b
console.log(queue.queueLen()); //1

