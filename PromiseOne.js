// Here I will create the promise 
// -----Fetch the Api----but this is old one----
// fetch('https://www.google.com').catch().err().finally().then(); //-- here, I have created the 
// the API promises...
const promiseOne = new Promise(function(resolve, reject){
    // DB connected hoga yah toh phir cryptography connect hoga isme...
    setTimeout(function(){
       console.log("Asynchoronous function is called");
    //    yaha par maine kya kiya hai kii setTimeout kon laga kar promise banaya aur call karwaya... 
       resolve();
    //    aur yaad rakhna isko function ka andar call karna hai bahar nahi...
    //    jab tak hum ek function kon call nahi karenge tab tak niche wala run nahi karega...
    }, 1000);
})
promiseOne.then(function(){
    // yeh wala kii baat ho rahi hai yaha par...
    console.log("Promise is now called");
})
// another way to create the promises
new Promise(function(resolve, reject){
    setTimeout(function(){
       console.log("Async is called");
       resolve();
    }, 1000)
}).then(function(){
    console.log("Promise called");
});
// another way
const promiseThree = new Promise(function(resolve, reject){
    // yaha par maine resolve main kuch props pass kiya aur 
    // console.log kar waya....
    setTimeout(function(){
     resolve({username: "akshat Kumar", gmail: "salona22@gmail.com"
     })
    }, 1000)
});
// yaha par call karwaya....
promiseThree.then(function(user){
    console.log(user);
})
// another method to call the promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
       let error = false;
       if(!error)
        {
            resolve({username: "akshat Kumar", gmail: "salona22@gmail.com"});
        }else{
            reject('Something:  went Wrong');
        }
    }, 1000)
});
// yaha par maine kya kiya sabko ek saath call kiya...
promiseFour.then((user)=>{
    console.log(user);
    // username yaha par aayega
}).then((username)=>{
    console.log(username);
    // aagar error hua toh yaha par dikhayega
}).catch((error)=>{
    console.log(error);
    // agar nahi hua error toh finally print hojayega
}).finally((error)=>{
    console.log('Finally Error Resolved');
});
