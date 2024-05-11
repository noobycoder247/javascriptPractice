// BigInt

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 // This long integer can be stored, What if we want Big Numbers

let x = BigInt(90071992547409911112223399)
console.log(x) //90071992547409902820130816n

let y = 100n
console.log(typeof y) //bigint // Another way to convert this to BigInt