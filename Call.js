function User(username, password){
    this.username = username;
    this.password = 123;
}

const User1 = new User({username: "akshat Kumar", password: "123"});

console.log(User1);