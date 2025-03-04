
/** Verilen dizideki elemanları toplamını bulan fonksiyon */
function sum(arr) {
    let sonuc = 0;
    arr.forEach(element => {
        sonuc += element
    });
    return sonuc;
}
/** Verilen dizideki en büyük elemanı bulan fonksiyon */
function big(arr){
    let enbuyuk = arr[0];
    arr.forEach(element => {
        if (element > enbuyuk){
            enbuyuk = element;
        } 
    })
    return enbuyuk;
}
/** Verilen diziyi ters çevirir. */
function reverseArray(arr){
    let arr2 = [];
    for (let i = arr.length - 1; i >= 0; i--){
        arr2.push(arr[i])
    }
    return arr2;
}
/** Verilen dizideki tek sayıları bulup bunları döndüren fonksiyon */
function filterOdds(arr) {
    let arr2 = [];
    arr.forEach(element => {
        if (element % 2 == 1){
            arr2.push(element)
        }
    })
    return arr2;
}
/** Verilen dizideki hangi sayının kaç kez geçtiğini döndüren fonksiyon */
function countOccurrences(arr, num) {
    let gecen_sayi = 0;
    arr.forEach(element => {
        if (element ==  num){
            gecen_sayi += 1;
        }
    });
    return `${num}, ${gecen_sayi} kez geçmiştir`
}
/** Verilen dizideki eşşiz elemanlardan oluşan diziyi döndüren fonksiyon */
function uniqueElements(arr) {
    let arr2 = [];
    arr.forEach(element => {
        if (!arr2.includes(element)){
            arr2.push(element)
        }
    })
    return arr2;
}
/** Verilen diziyi basamak sayısı kadar sağa kaydıran fonksiyon */
function rotateArray(arr, step) {
    let current = 0;
    for (let i = step; i > 0; i--){
        current = arr.pop()
        arr.unshift(current)
    }
    return arr
}
/** Verilen 2 dizideki aynı elemanları tek bir dizi altında toplayıp döndüren fonksiyon */
function ArrayIntersection(arr1, arr2){
    let arr3 = []
    let turn = arr1.length > arr2.length ? arr1.length : arr2.length
    for (let i = 0; i < turn; i++){
        let current = arr1[i]
        if(arr2.includes(current) && !arr3.includes(current)){
            arr3.push(current);
        }
    }
    return arr3; 
}
/** 2.çözüm yolu */
function ArrayIntersection2(arr1, arr2){
    const set2 = new Set(arr2);
    return [...new Set(arr1.filter(num => set2.has(num)))]
}

function chunkArray(arr, size){
    let arr2 = [];
    for (let i = 0; i < arr.length; i+=size){
        arr2.push(arr.slice(i, i + size))
    }
    return arr2
}
console.time('Execution Time')
console.log(ArrayIntersection2([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3, 4, 55, 31, 8]));
console.timeEnd('Execution Time')
