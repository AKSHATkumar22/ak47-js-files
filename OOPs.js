// Object method 

const user = {
    username: "akshat",
    gmail: "you.com",

    getUserDetails: function(){

    }
    

}

console.log(user.username);
console.log(user.getUserDetails);


// this method or the keyword....
// in this way we will call the object...
function user1(loginIn, LoginCount, isLoggedIn){
    this.isLoggedIn = isLoggedIn;
    this.LoginCount = LoginCount;
    this.loginIn = loginIn;

    return this;
}
const userOne = new user1("hitesh", "hello", "true");
console.log(userOne);

// magic prototype

// where javascript doest not find his way to learn and find the problem solution

function multiplyby5(num){
    return num*5;
}

multiplyby5.power = multiplyby5((5));

// now lets create the function with the help of the this keyword

function UserTwo(ishepful, isHappy, isDone){
    this.ishepful = ishepful;
    this.isHappy = isHappy;
    this.isDone = isDone;
}

const userHappy = new UserTwo("Hello", "not", "You");
console.log(userHappy);

// now the prototype part starts from here

let array = ["hello", 'Akshat'];

const useMe = {
    name: "akshat Kumar",
    favHero: "no-one",
    
    getMydetails: function(){
        console.log(`My favHero is ${this.favHero}`);
    }
}

const userName = "Akshat     ";

String.prototype.trueLength = function(){
    console.log(`My name is ${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

userName.trueLength();






