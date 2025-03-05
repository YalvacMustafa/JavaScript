class Queue {

    constructor(){
        this.items = [];
    }

    enqueue(element){
        this.items.push(element) // Eleman ekler.
    }

    dequeue(){
        if (this.isEmpty()) return 'Queue boş'
        return this.items.shift(); // İlk elemanı çıkarır.
    }

    front(){
        if (this.isEmpty()) return 'Queue boş'
        return this.items[0]; // İlk elemanı gösterir.
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }
}