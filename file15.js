// Block Scope vs Function Scope

{} // These are blocks

{
    let v1 = "value1"; // Block Scope
}
console.log(v1); //Uncaught ReferenceError: v1 is not defined

{
    const v1 = "value1"; // Block Scope
}
console.log(v1); //Uncaught ReferenceError: v1 is not defined

// Our whole file is a  main function and you can use var anywhere after decalring
{
    var v1 = "value1"; // Function Scope
}
console.log(v1); //value1

var v1 = "Changed Value"; // Change Value
console.log(v1); // Changes Value
