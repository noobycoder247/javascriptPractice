// Functions

function isEven(num) {
    return num%2==0;
}
console.log(isEven(10)); // true


// Function Expression or assign fuction to variable

const isEvenExpressionFunc = function(num) {
    return num%2==0;
}
console.log(isEvenExpressionFunc(10)) // true

// Arrow Functions

const isEvenArrowFunc = (num)=> {
    return num%2==0;
}
console.log(isEvenArrowFunc(10)) // true

// Short hand for arrow function if it's only take 1 parameter and have 1 line logic (return in one line)

const isEvenArrowFunc2 = num => num%2==0;
console.log(isEvenArrowFunc2(10)); // true