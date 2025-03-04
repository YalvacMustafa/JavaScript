class ListNode {
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next
    }
}
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

/** Bağlı listeyi ekrana bastıran fonksiyon */
function printLinkedList(head) {
    let current = head;
    while (current){
        console.log(current.val);
        current = current.next;
    }
}
/** Bağlı listenin Uzunluğunu bulan fonksiyon */
function getLength(head) {
    let count = 0;
    let current = head;

    while (current){
        count++;
        current = current.next
    }
    return count;
}
/** Bağlı listenin sonuna ekleme yapan fonksiyon */
function appendNode(head, val) {
    let newNode = new ListNode(val); // Liste boşsa yeni düğüm baş olur.

    if (!head) return newNode

    let current = head;
    while(current.next){
        current = current.next
    }
    current.next  = newNode; // Son düğümü yeni düğüme bağla.
    return head;
}
/** Bağlı listeden belirli bir eleman silen fonksiyon */
function deleteNode(head, val) {
    if (!head)  return null;
    if (head.val === val) return head.next // İlk düğüm silinirse ikinci baş olur.

    let current = head;
    while(current.next && current.next.val !== val) {
        current = current.next;
    }

    if (current.next){
        current.next = current.next.next; // Bağlantıyı atla.
    }
    return head;
}
/** Bağlı Listeyi tersine çeviren fonksiyon */
function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current){
        let next = current.next; // Sonraki düğümü kaydet.
        current.next = prev; // Mevcut düğümün yönünü ters çevir.
        prev = current; // Prev pointer'ı güncelle.
        current = next; // İleri git.
    }
    return prev // Yeni baş (head)
}
console.log(reverseLinkedList(node1));


/**
 * JavaScript'te ListNode, bağlı liste (linked list) düğümünü temsil eden bir yapıdır. 
 * Bağlı listeler, diziler gibi elemanları saklayan bir veri yapısıdır, ancak düğümler birbirine referanslarla bağlanır.
 */