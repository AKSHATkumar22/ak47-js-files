// Here, I have created the class name JsUser,
// where it defines the block scope of a code or the structure of the code.
// Basaically this are called the literals objects creation..
const JsUser = {
  // Here, It denotes the object of the class --> where it means the instance of a class
  // or the member functions or the user-defined functions.
  name: "Akshat",
  lastname: "Kumar",
  age: "21",
  gmail: "akshatk@gmail.com",
  city: "Kurseong",
  state: "West Bengal",
  country: "India",
  pincode: "734203",
};

// here First, it will print the output but not as satisfied as it will be.
console.log(JsUser.city);

// Here, It will print the output but while printing time we have to define it in a String way i.e. "".
console.log(JsUser["gmail"]);

// singleton objects creation
// This are called the singleton objects creation
const facebookUser = {};

facebookUser.id = "123";
facebookUser.name = "Akshat Kumar";
facebookUser.gmail = "salonakumar.com";
facebookUser.city = "Kurseong";

console.log(facebookUser);

// object assign helps the object to assign the two obj into the next obj creation

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj = Object.assign({}, obj1, obj2);

console.log(obj);
