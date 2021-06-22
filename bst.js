class Node{

    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class BST{

    constructor(){
        this.root = null;
    }

    insert(node, data){
        var newNode = new node(data);

        //If tree is empty make newNode the rootNode
        if(this.root === null){
            this.root = newNode;
            return 'Node added as root node';
        }

        //Rejecting duplicate values
        if(this.root === newNode.data){
            return 'Node already exists'
        }
     
        //If newNode's value is less than root node move to left
        if(newNode.data < this.root.data){
            //if no node at left, newNode is added to left of root
            if(this.root.left === null){
                this.root.left = newNode;
                return 'Node added';
            }
        
            //Considering node to the left of root to be root of subtree and checking conditions again
            else this.insert(this.root.left, data);
        }

        //newNode's value is greater than root node
        else{
            //if no node at left, newNode is added to left of root
            if(this.root.right === null){
                this.root.right = newNode;
                return 'Node added';
            }

            //Considering node to the left of root to be root of subtree and checking conditions again
            else this.insert(this.root.right, data);
        }
    }

    //Search function
    search(node, data){

        if(node === null) return null;

        //Moving left if given data is lesser than node.data
        else if(data < node.data){
            return this.search(node.left, data)
        }

        //Moving right if given data is greater than node.data
        else if(data > node.data){
            return this.search(node.right, data)
        }

        //Node found
        else{
            console.log('Node found')
            return node;
        }
    }
}


