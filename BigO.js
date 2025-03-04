function bigon(n){
    for (let i = 0; i < n; i++){
        console.log(i);             // Big O(n)
        
    }
}

function bigon2(n){
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            console.log(i, j);      // Big O(n^2)
        }
    }
}

function logn(n){
    while (n > 1){
        n = Math.floor(n/2);      // Big O(logn)
        console.log(n); 
    }
}

function nlogn(n){
    const current = n
    while (n > 1){
        n = Math.floor(n/2);
        for (let i = 1; i < current; i++){ // Big O(n logn)
            console.log(i); 
        }
    }
}

let counter = 0;
function Fact(n){
    counter++;
    console.log(counter);
    if (n == 0 || n == 1){    // Bu fonksiyonun notasyonu Big 0(n)'dir.
        return 1;
    }
    return (n * Fact(n -1))
}

