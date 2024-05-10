// Here, Today we will learn about the conditional statement about the if else, operational statements

const apple = "fruit";

if (apple > 0) {
  //Here, What is happening is that I am trying to print the function with the help
  // of the if-else conditional statements
  console.log("Yes");
} else {
  // Here, If we declare the variables inside the local variable then it wont show us the output
  console.log("No");
}

// 2nd types Conditional statements are there
// ==--> for matching the conditions....
// != ---> Not equal to the conditions.....
// === --> fot the matching of the data int to the Strings for e.g. 2 == "2"...
// <= --> less that equal to the coditions..
//  >= greater than equal to the conditons...

// Now, Lets try one example by creating one variable method and conditon method...
// Here, I have just tried one example to show how the conditional statements works...
const userLoggedIn = true;
const UserPaid = true;
// Here, It is matching with the conditon and the variable created above...
if (userLoggedIn && UserPaid) {
  console.log("Yes are you allowed ");
} else {
  console.log("User Not allowed");
}

// **************---SWITCH-STATEMENT---********************
// here I am writing switch statement to check the conditional statements
const ages = 1;
switch (ages) {
  case 1:
    console.log("You are allowed to vote");
    break;
  // Here, If the statements matches with the above varibale creation then it return that asked value
  case 2:
    console.log("Not allowed to vote");
    break;

  default:
    console.log("You are good");
    break;
}
// Here, I will be writing the ternary operator...
const isIcePacked = 90;
// This functionate as a ternary operator...
isIcePacked <= 80
  ? console.log("Nahi hai packed")
  : console.log("Haa packed hai");
