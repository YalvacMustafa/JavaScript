function Topla(x, y){
    return x + y;
}

function Merhaba(isim) {
    return "Merhaba "+ isim;
}

function kareAl(arr){
    return arr.map(num => num * num)
}

function kareAl2(arr){
    const sonuc = arr.map(num => num * num)
    return sonuc;
}

function sum(arr){
    let toplam = 0;
    arr.forEach(element => {
        toplam += element
    });
    return toplam;
}

function carp(arr){
    let carpim = 1;
    arr.forEach(element => {
       carpim *= element; 
    });
    return carpim;
}

function Fact(num){
    if (num < 0){
        console.error("0'dan küçük bir sayının faktöriyeli olamaz.")
        return;
    }
    if (num == 0 || num == 1){
        return `${num} sayısının faktöriyeli 1'dir.`
    } 
    let sonuc = 1;
    for (let i = 1; i <= num; i++){
        sonuc *= i;
    }
    return sonuc;
    
}

function fibonacci(num){
    let first_num = 0;
    let second_num = 1;

    if (num == 0){
        return '0';
    }
    if ( num == 1){
        return '1';
    }
    for (let i = 1; i < num; i++){
        let current = first_num;
        first_num = second_num;
        second_num = current + first_num;
    }
    return second_num;
}

function AsalMı(num){
    if (num < 1){
        return false;
    }
    if (num == 2 || num == 3){
        return true;
    }
    for (let i = 2; i < num; i++){
        if (num % i == 0){
            return false
        }
    }
    return true;
}

function reverseString(str){
    return str.split('').reverse().join('')
}

function isPerfectNumber(num){
    let sum = 0;
    for (let i = 1; i < num; i++){
        if (num % i == 0){
            sum += i;
        }
    }
    if (sum == num){
        return true;
    } else {
        return false
    }
}

function secondLargest(arr){
    let first = null;
    let second = null;
    for (let num of arr){
        if (first === null || num > first){
            second = first;
            first = num;
        } else if ((second === null || num > second) && num !== first){
            second = num;
        } 
    }
    return second === null ? 'İkinci en büyük sayı yok.' : second;
}

function isAnagram(str1, str2){
    if (str1.length !== str2.length){
        return false;
    }
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}
console.time('Execution Time')
console.log(isAnagram('test', 'estt'));
console.timeEnd('Execution Time')



