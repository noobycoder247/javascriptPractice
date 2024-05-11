// Sets
// It's Itrerable [We only use for of loop on iterable] ("Array" and "string" are iterable nut not "Object")
// No Index Based Access
// Order not gurantted
// Don't store duplicate

const mySet = new Set([1,2,3,4,4]);
console.log(mySet) // {1, 2, 3, 4}
console.log(mySet[1]) // undefined

const charSet = new Set("abcd");
console.log(charSet); // {'a', 'b', 'c', 'd'}

const myNewSet = new Set();
myNewSet.add("item1");
myNewSet.add("item2");
myNewSet.add("item2"); // not be added
console.log(myNewSet); // {'item1', 'item2'}

myNewSet.add(["item3", "item4"]); // added
myNewSet.add(["item3", "item4"]); // added because in memory they both are at diiferent locations
console.log(myNewSet); // {'item1', 'item2', ["item3", "item4"], ["item3", "item4"]}

const arr1 = [1,2,3];
myNewSet.add(arr1);
myNewSet.add(arr1); // Not added because same memory location things can't be added

console.log(myNewSet); // {'item1', 'item2', ["item3", "item4"], ["item3", "item4"], [1,2,3]}


// -----------Check if a item present in a SET or not------------

console.log(myNewSet.has("item2")); // true

// ----------- for of Loop------------

for(let setItem of myNewSet) {
    console.log(setItem);
}
