// Synchornous and Asynchronous Programming
// Java is a Signle Threaded Asynchronous Programming language
// But we can execute asynchronous code as well

// console.log("script started")
// function hello() {
//     console.log("Hello!")
// }
// setTimeout(hello, 2000); // it takes function and run that function after the given time
// console.log("Script Ends")
// ----Output Sequence----
// Script Starts
// Script Ends
// Hello!


console.log("started")
function hello() {
    console.log("Hello!")
}
setTimeout(hello, 0); // it takes function and run that function after the given time

for(let i=0; i<10000; i++) {
    console.log("looping");
}
console.log("Ends")
