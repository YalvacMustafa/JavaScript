class Deque {

    constructor(){
        this.items = [];
    }

    append(element){
        this.items.push(element);
    }

    appendLeft(element){
        this.items.unshift(element);
    }

    pop(){
        if (this.isEmpty()) return 'Deque boş';
        return this.items.pop();
    }

    popLeft(){
        if (this.isEmpty()) return 'Deque boş';
        return this.items.shift();
    }

    front(){
        if (this.isEmpty()) return 'Deque boş';
        return this.items[0];
    }

    back(){
        if (this.isEmpty()) return 'Deque boş';
        return this.items[this.items.length - 1];
    }
    
    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }
}