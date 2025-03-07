/**
 * Singly linkedList
 */
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)

node1.next  = node2;
node2.next = node3;

/**
 * doubly linkedList
 */

class DoublyNode{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prevNode = null;
    }
}

let x = new DoublyNode(5);
let y = new DoublyNode(10);
let z = new DoublyNode(15);

x.next = y;
y.prevNode = x;