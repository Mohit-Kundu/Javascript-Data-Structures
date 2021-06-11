// This is based on freecodecamps code for sets

function mySet(){
    var items = [];

    // Recreation of ES6 methods

    // Checks if set already has element
    this.has = function(element){
        return (items.indexOf(element)  !== -1);
    };

    // returns elements of a set
    this.values = function(){
        return items;
    };

    // adds new element to set
    this.add = function(element){
        if(!this.has(element)){
            items.push(element);
            return 'Element added';
        }
        return 'Element already exists';
    };

    // removes element from set
    this.remove = function(element){
        if(this.has(element)){
            var index = items.indexOf(element);
            items.splice(index, 1);
            return 'Item removed';
        }
        return "Element doesn't exist";
    };

    //returns size of set
    this.size = function(){
        return items.length;
    };

    // Adding extra set operations
    
    //performs union operation
    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        
        firstSet.forEach(function(element){
            unionSet.add(element);
        });

        secondSet.forEach(function(element){
            unionSet.add(element);
        });

        return unionSet;
    };

    //performs intersection operation
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();

        firstSet.forEach(function(element){
            if(otherSet.has(element)){
                intersectionSet.add(element);
            }
        });

        return intersectionSet;
    };

    // performs difference operation
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();

        firstSet.forEach(function(element){
            if(!otherSet.has(element)){
                differenceSet.add(element);
            }
        });

        return differenceSet;
    };

    // checks if set is a subset of another set
    this.subset = function(otherSet){
        var firstSet = this.values();

        return firstSet.every(function(element){
            return otherSet.has(element);
        });
    };
}

var A = new mySet();  
var B = new mySet();

A.add("a");
A.add('b'); // A = [a,b]
console.log(A.size()); // 2

B.add("b");  
B.add("c");  
B.add("a");  
B.add("d"); // B = [b,c,a,d]
console.log(B.size()); // 4

console.log(A.subset(B)); // true
console.log(A.intersection(B).values()); // [a,b]
console.log(B.difference(A).values()); // [c,d]
console.log(A.union(B).values()); // [a,b,c,d]