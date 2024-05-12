// How to write a event listener in the javascript 

// first create a dom manipulationa nd target a id or the class of from the html 

// const form = form.addEventListener('click', function(e){
//     console.log(form);
// })  <--- in this manner we will write about the event listener...

// there are many types of Event listener

// types, preventElement, altKey, srcElement,
// addEvent and many more,

// Now we will learn about the Event propagation..

// How we can do the event propagation..----> means that how to tackled at the client..click events

// const form = document.getElementbyId('#form).addEventListener('click', function(e) ({
// console.log("Clicked") <--- for just the random user refernce...
// ), false / true},Show if we wont to stop this.. we have e.propagation(); <-- this method...
//  <---now here if I give a true then the clciked will bubble and will come all the 
// conditions together, but If I give false then it will not render both first down click will show and
// then the upper ones this are called bubbles codes....

// There are many types of methods aur the functions lets talk one by one about them 
// ------Synchronous Function------
// This is the function which executes by line by line code of execution....

// ------Asynchronous Function------
// This is the function which executes with the code firstly, back part of the code
// which are pilled up for execution that will execute first and then the present code..

// pseudo code....

// const myName = start.addEventListener('click', function(){
//    console.log("my Name is akshat")
// }, 2000);  out here What I have done is that I have given the time to execute my console-log code,

// setTimeout(myName, 2000); <--- This method helps to execute the code at a time period which is given

// clearTimeout() <-- to stop the code --->

// setInterval() <-- for continuously executing of the code--->
// clearInterval() <--- for clearing of the continously executing of the project -->