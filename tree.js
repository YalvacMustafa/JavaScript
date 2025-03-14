class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new TreeNode(value);
        if (!this.root){
            this.root = newNode
            return;
        }

        let queue = [this.root];
        while (queue.length){
            let current = queue.shift();

            if (!current.left){
                current.left = newNode;
                return;
            } else if (!current.right){
                current.right = newNode;
                return;
            }
            queue.push(current.left);
            queue.push(current.right)
        }
    }
}
