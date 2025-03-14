class BSTNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new BSTNode(value);

        if (!this.root){
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true){
            if (value < current.value){
                if (!current.left){
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right){
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(value){
        let current = this.root;
        while (current){
            if (current.value === value) return true;
            if (value < current.value) current = current.left
            else current = current.right
        }
        return false
    }
}
