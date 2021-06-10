function mySet(){
    var items = [];

    // Recreation of ES6 methods

    this.has = function(element){
        return (items.indexOf(element)  !== -1);
    };

    this.values = function(){
        return items;
    };

    this.add = function(element){
        if(!this.has(element)){
            items.push(element);
            return 'Element added';
        }
        return 'Element already exists';
    };

    this.remove = function(element){
        if(this.has(element)){
            var index = items.indexOf(element);
            items.splice(index, 1);
            return 'Item removed';
        }
        return "Element doesn't exist";
    };

    this.size = function(){
        return items.length;
    };

    // Adding extra set operations
    
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
B.add("b");  
B.add("c");  
B.add("a");  
B.add("d"); // B = [b,c,a,d] 
console.log(A.subset(B)); // true
console.log(A.intersection(B).values()); // [a,b]
console.log(B.difference(A).values()); // [c,d]
console.log(A.union(B).values()); // [a,b,c,d]