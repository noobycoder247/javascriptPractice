// Maps
// Map is  like hashmap in c++ or dict in python
// Map is a iterable like string and Array

//      map             VS  object

// Map is iterbale      |   Not iterable
// can use For of loop  |   Can't use For of
// Key can be anything  | key is always string
// Can't use indexing   | Can use indexing


// object convery integer key into string
const myObj = {
    1 : "one"
}

for(let key in myObj) {
    console.log(typeof key) // string
}

console.log(myObj[1]) // one
console.log(myObj['1']) // one

const myMap = new Map();

myMap.set(1, 'int string');
myMap.set('1', 'string one');

console.log(myMap.get(1));
console.log(myMap.get('1'));

myMap.set([1,2,3], 'one two three');

console.log(myMap.keys()); //MapIterator {1, '1', Array(3)}

for (let obj of myMap) {
    console.log(obj);
    // [1, 'int string']
    // ['1', 'string one']
    // [Array(3), 'one two three']
}

console.log(myMap.get([1,2,3])); // undeined

for (let [key, val] of myMap) {
    console.log(key, val);
}




