// Returning Function

const myFun = () => {
    const wrapper = () => {
        console.log("inside wrapper");
    }
    return wrapper;
}
const gettingWrapper = myFun(); // this varibale stores the wrapper function

// () => {
//     console.log("inside wrapper");
// }
console.log(gettingWrapper);
gettingWrapper(); //inside wrapper