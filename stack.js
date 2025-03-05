class Stack {

    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element); // Eleman ekler.
    }

    pop(element){
        if (this.isEmpty()) return 'Stack boş';
        return this.items.pop(element); // Son eklenen elemanı çıkarır.
    }

    peek(){
        if (this.isEmpty()) return 'Stack boş';
        return this.items[this.items.length - 1] // En üsteki elemanı gösterir.
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }
}
