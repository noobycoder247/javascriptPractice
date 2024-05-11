// Callback Functions
// It's simply taking function as an argument 

const func1 = () => {
    console.log("Inside Func 1");
}

const mainFunc = (Callback) => { // Here if we take function as an argument then  by naming conventions we have to coll it "callback"
    Callback();
}

mainFunc(func1); // Inside Func 1