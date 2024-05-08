// to create the arrays
const herores = [
  "akshat kumar",
  "neeli kumari",
  "pihoo kumari",
  "pratayasha kuamri",
];

let Obj = {
  name: "akshat kumar",
  age: "21",
  email: "saklona292",
};

console.table(herores);

// Array creation
let myArr = ["1", "2", "3"];

console.log(myArr[0]);

// *********Arrays*********

myArr.push("8"); //here, what happens is that it adds the extra element in the array.
console.log(myArr);

// 2nd method of the Arrays
myArr.shift(); //<--- It acts like a poping of the elements.
// console.log(myArr);

myArr.unshift("9");
console.log(myArr); // <--- Here, It acts like a adding or pushing of the elements in the array.

// 3rd method

console.log(myArr.includes(9)); //<-- Here, It checks for the presemce of an elements in the array

console.log(myArr.indexOf("2")); //<-- Here, It gives the index of the elements in the array.

// 4th method types of an Arrays.
// slice method where it means that it only excludes or gives the range from 1 till 3.
// it excludes the last part of the array.

let myArr1 = ["1", "2", "3", "4", "5"];

console.log(myArr1.slice(1, 3));

// splice method in the arrays
// Here what is the meaning is that it excludes the part which is been asked for to exclude.
// like Suppose client asks to exclude me this part from 1 - 3(so, it excludes that index element from arrays).

let myArr2 = ["1", "2", "4", "5", "6", "7", "8", "9"];

console.log(myArr2.splice(1, 2));

// 5th method in the Arrays.
// merging two different arrays element in one arrays form.

const tech_giants = ["apple", "sony", "Amazon"];

const product_giants = ["Tcs", "cogni", "wipro"];

console.log(tech_giants.concat(product_giants)); //<-- one method is concat to merge two arrays inone form

// 6th method i.e. (...) to merge the two arrays form.

const tech_giant = ["apple", "sony", "Amazon"];

const product_giant = ["Tcs", "cogni", "wipro"];

console.log(...tech_giant, ...product_giant); //<-- this method is okay but not satisfied in it.
