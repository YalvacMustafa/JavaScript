/**
 * Map, key-value çiftlerini saklamak için kullanılan bir veri yapısıdır.
 */

const myMap = new Map();
myMap.set('isim', 'Mustafa');
myMap.set (10, 'Numara'); // Set map içerisine key-value eklememizi sağlar.
myMap.set(true, 'Boolean');  // Eğer aynı değer varsa güncelleme yapar.

console.log(myMap);
console.log(myMap.get('isim')); // get(key) => get ile içerisindeki key'e karşılık gelen value ekrana getirilir. 
console.log(myMap.has(10)); // has(key) => has ile key olup olmadığını bakarız. Boolean bir değer döner.
console.log(myMap.delete(true)); // delete(key) => key-value değerlerini birlikte siler.
myMap.clear() // Map içerisindeki tüm verileri siler.


const car = new Map([
    ['marka', 'Toyota'],
    ['model', 'Corolla']
])
console.log(car.size); // kaç tane key-value çifti olduğunu döndürür.

/**
 * forEach ile map içerisinde dolaşma
 */

const map = new Map([
    ['isim', 'Ali'],
    ['soyad', 'Bekir']
]);
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
})

/**
 * for of ile gezinme
 */

for (let value of map.values()){
    console.log(value); // sadece value gelir.
    
}

for (let key of map.keys()){
    console.log(key); // sadece key gelir.
}

for (let [key, value] of map.entries()){
    console.log(`${key}: ${value}`); // Hem key hem de value gelir.
}