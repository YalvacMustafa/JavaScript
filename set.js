/**
 * JavaScrip'te Set benzersiz değerler koleksiyonudur.
 * Her değer bir kümede yalnızca bir kere olabilir.
 * Değer tiplerinin bir önemi yoktur.
 */


const letter = new Set([1, 2, 3, 4])
letter.add(5) // Set içerisine eleman ekler.

console.log(letter.has(3)); // Set'in icerisinde 3 var mı yok mu diye bakar. true veya false dondurur.
console.log(letter.delete(3)); // Set'in icerisinden 3'i siler. Silme islemi basarılı ise true, basarısız ise false dondurur.
console.log(letter.size); // Set'in boyutunu dondurur.

 let text = ''; 
 for (const value of letter.values()) {  // Set içerisindeki değerleri döndürür. Text içerisinde birleştirir.
     text += value + '';
 }

let str = '';
for (const value of letter.entries()) {  // entries() metodu, set içerisindeki her öğe için [value, value] şeklinde bir dizi döndüren
    str += value + '';                 // iterator oluşturur.
}
console.log(str);
 

const mySet = new Set(['elma', 'armut', 'muz']); 

for (let key of mySet.keys()){ // keys() metodu, set içerisindeki öğeleri iterator olarak döndürür.
    console.log(key);
    
}


const newSet = new Set([1, 2, 3, 4, 5, 6]);
newSet.clear() // Set'in icerisini temizler.
console.log(newSet); 

const number = new Set([1, 2, 3]); 
number.forEach((value) => { // forEach (callback) -> Döngü yapar.
    console.log(value);     // Tüm elemanlar üzerinde işlem yapmak için kullanılır.
});


const sayı = new Set([10, 20, 30]);
const myArray = [...sayı] // Seti diziye döndürür.
console.log(myArray);


/**
 * Set ile alakalı kullanışlı teknikler
 */

// Dizi içerisinde tekrar eden elemanları kaldırma.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);

// iki set arasındaki ortak elemanları bulma

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([3, 4, 5, 6, 7]);
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection);

// iki set arasındaki farklı elemanları bulma

const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference);

// iki set'in birleştirme

const union = new Set([...setA, ...setB]);
console.log(union);