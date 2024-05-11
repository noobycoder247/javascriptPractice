// Array fill methos

// Array.fill(value, start-index, end-index)

const nums1 = new Array(10).fill(-1);
console.log(nums1); //[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]

const nums2 = [1,2,3,4,5,6,7,8,9];
const makeSomeZeros = nums2.fill(0, 2, 6);
console.log(makeSomeZeros); // [1, 2, 0, 0, 0, 0, 7, 8, 9]