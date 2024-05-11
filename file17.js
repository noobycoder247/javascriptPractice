// Param Destructuring

const func = ({fname: firstName, lname: lastName}) => {
    console.log(firstName); // jane
    console.log(lastName); // doe
}

const personDetail = {
    "fname": "jane",
    "lname": "doe" 
}
func(personDetail);