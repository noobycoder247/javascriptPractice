// Optional Chaining
// ?. this is used to check if exist

const personDetail = {
    name: 'jane',
    // address: {houseNumber: 120, street: 'Main Street'}
}

// console.log(personDetail.address.houseNumber)// Uncaught TypeError: Cannot read properties of undefined (reading 'houseNumber')

console.log(personDetail?.address?.houseNumber) // undefined

// SO for prevent from error we use this
// personDetail?.address?.houseNumber => this means if "perSonDetail" exist check "address" 
// if "address" exists then check "houseNumber"