// Here, I am trying to print the function with the adding of the two variables storing int the function

function myName(a, b) {
  console.log(a + b);
}

myName(2, 5);

// Different methods to write a function

// function myAbs() {
//   console.log(result);
// }

// myAbs(3);

// Here, i will create the function to store the value and return the value
// Also, I will use the rest API method to call the rest values

function optionCart(num1, ...num2) {
  return num1;
}

console.log(optionCart(200, 400, 800));

// Now, the another function I will create where object will be used
// here, what I have done is that I have created one object and inside that value is stored
const User = {
  userName: "Akshat Kumar",
  price: "400",
};

// Here, You will notived that I have created the Function name
function BrandName(anyObject) {
  console.log(
    // Here, I Have used the object properties to call the object in it..
    `User name is ${anyObject.userName}, And the price of the userpurchase is ${anyObject.price}`
  );
}
// Here, Dont forget akshat to call the object inside the function while calling the function...
BrandName(User);
