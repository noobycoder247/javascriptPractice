// Rest Parameter (like *args and **kwargs)

const func = (num1, num2, ...rest) => {
    console.log(num1); // 1
    console.log(num2); // 2
    console.log(rest); // [3, 4, 5, 6]
}

func(1,2,3,4,5,6);