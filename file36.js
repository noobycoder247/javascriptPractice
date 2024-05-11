// async await

// "fetch" and json() dono promise return krte hai

const url = 'https://jsonplaceholder.typicode.com/posts'

// let data = ""

// fetch(url)
// .then(response => response.json())
// .then(data=>{
//     console.log(data);
//     data = data;
// })
// .catch(error=>{
//     console.log(error);
// })
// console.log(data); // !Blank

// "async" return promise
console.log("Script started");
async function getPosts() { // async likh diya to ye function run krna browser ke reposnibility hai
    const res = await fetch(url); // await will wait for till promise resloved or reject or ye intezar karega jab tak data fetch nahi hoti
    // console.log(res.json()); //return pending promise
    const data = await res.json();
    // console.log(data);
    return data;
}

getPosts()
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
});

console.log("Script Ends");