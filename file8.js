// For of loop & For in loop in array

const nums = [1, 2, 3, 4];

for(let num of nums) {
    console.log(num);
}
console.log("---------");
for(let index in nums) {
    console.log(nums[index]);
}