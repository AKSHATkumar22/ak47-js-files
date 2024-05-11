// Here I will write about the Dom manipulation (document object manipulation)

// console.dir(window.document); This basically defines the structure of the document that you have in the web browser...

// *****************--------STRUCTURE-----************************

//              WINDOW

//             DOCUMENT

//              HTML

// HEAD                     BODY

// TITLE                    TITLE

// ATTRIBUTE --- TEXT           ATTRIBUTE --- TEXT

// STRUCTURE OF THE BASICS WEB BROWSER THAT HOW IT WORKS...

// Here, I will write the code for the document object manipulation

// const myName = (document.getElementById("#nav-bar").innerHTML =
//   "<h1>Hello Akshat</h1>");

// console.log(myName); here, what it will do is that it is rendering the ID where i have given the class
// or the id in the HTML part and changing the formation with the help of Javascript...

// now the next part is on the DOM is the another types of the elements handling i.e.

// const myName = (document.getElementById("#happy").innerHTML =
//   "<h1>Hello, Coders</h1>");

//   another one is the

// const yourName = document.getElementById("#Hello").getAttribute("id"); // this will give you the attribute name present inside the HTML

// Hello.style.background-color = "red" // this will style the direct attribute inside the HTML part..

// Another attribute is that...

// hello.innerHtml...}<---This also acts as a same like innertext properties....gives you the whole HTML part of the project...
// hello.textcontent...}<------This will print the heading of the text, but show the hidden of the html like
// which will be hidden with the hep of the css properties it will show you that part also...
// hello.innertext...}<----This will just give you the text written on the html project...

// *************Query-Selector**********

// const myName = document.querySelector("ul");<----what it will do is that it will select the all the ul tag and gives you the properties...

// const myName = document.querySelectorAll("li"); <----what it will do is that it will provide you the whole li list properties items together...

// const h2 = document.querySelectorbyClassName('.heading')<--- I am getting the properties of the className...

// h2[0].innerHtml<--- It will provide the innerHtml properties of the h2 of the index zero present inside the project...

// I have targeted the properties inside the variable and trying to change inside the forEach loop
// const myH2 = document.querySelectorAll(".heading");
// myH2.forEach(function (heading) {
//   heading.style.backgroundColor = "green";
//   heading.style.color = "blue";
//   heading.style.padding = "14px";
// });
