// Array using const

const arr1 = [1, 2, 3];
arr1.push(4); // This will not give the array because here suppose in arr1 we stored 
              //the memory address of array but not the actual array 
              //so if we change the array element we are not changing the memory reference
              // that is stored in the const arr1

// arr1 = [5, 6, 7] // This will give error because here we are re-assiging or changing the address

