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

    //Finds minimum node
    findMinNode(node){
        // if left of a node is null then it is minimum node
        if(node.left === null)
            return node;
        //Moving left
        else
            return this.findMinNode(node.left);
    }

    remove(data){
        // root is re-initialized with root of a modified tree.
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data){
        if(node === null) return null;

        //Moving to left if given data is less than node.data
        if(data < node.data){
            node = removeNode(node.left, data)
            return node
        }

        //Moving to right if given data is greater than node.data
        if(data > node.data){
            node = removeNode(node.right, data);
        }

        //node found
        else{

            console.log('Node deleted');

            //If node has no leaf nodes
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }

            //Deleting node with one child node on the right
            if(node.left === null){
                node = node.right;
                return node;
            }

            //Deleting node with one child node on thr left
            else if(node.right === null){
                node = node.left;
                return node;
            }

            //Deleting node with two children
            // minumum node of the rigt subtree is stored in min
            var min = this.findMinNode(node.right);
            node.data = min.data;
    
            node.right = this.removeNode(node.right, min.data);
            return node;
        }
    }

    //Search function
    search(node, data){
        //Empty tree
        if(node === null) return null;

        //Moving left if given data is lesser than node.data
        else if(data < node.data){
            return this.search(node.left, data);
        }

        //Moving right if given data is greater than node.data
        else if(data > node.data){
            return this.search(node.right, data);
        }

        //Node found
        else{
            console.log('Node found');
            return node;
        }
    }

    //DFS functions

    // left, root, right
    inorder(node){
        if(node !== null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    //root, left, right
    preorder(node){
        if(node !== null){
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    //left, right, root
    postorder(node){
        if(node !== null){
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
}


