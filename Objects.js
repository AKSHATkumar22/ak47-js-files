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
