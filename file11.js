// Spread Opeartor on Object

const personalDetail = {
    "name": "jane",
    "age": "25"
};

const contactDetail = {
    "name": "doe",
    "mobile_no": 9974599357
};

const info = {...personalDetail, ...contactDetail, email: "test@gmail.com"};
console.log(info) // {name: 'doe', age: '25', mobile_no: 9974599357, email: 'test@gmail.com'}

const temp = {... "abc"}; //{0: 'a', 1: 'b', 2: 'c'}
console.log(temp);

const temp2 = {... ["item0", "item1", "item2"]};
console.log(temp2); //{0: 'item0', 1: 'item1', 2: 'item2'}
