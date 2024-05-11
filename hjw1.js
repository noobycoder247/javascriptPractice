// console.log(fName); // Error because the varibale that we make through let is uninitialized at this moment
// let fName = "Jane";
// console.log(fName);

function myFunc() {
    let x = 10;
    function innerFunc() {
        x++;
        console.log(x);
    }
    return innerFunc;
}

const f = myFunc();
f();