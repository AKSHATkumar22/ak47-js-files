// generate the random color 


// formula for generating the random colors....
// hex = '0123456789ABCDEF';

// **************************color += hex[Math.floor(Math.random() * 16)];*******************

const randomColor = function() {
    const hex = '0123456789ABCDEF';
    // It will genrate the random color with the help of hex
    let color = '#';
    for(let i=0; i<6; i++)
        {
            // random off the color with the multiply of 16
            color += hex[Math.floor(Math.random()*16)];
        }
        //  and then return me the color value at last
        return color;
}

let intervalID;
// for stoping the start button
const startChanging = function() {
    // inside the const variable we have to do this...
    document.body.style.backgroundColor = randomColor();
    // for generating the color id randomly
    intervalID = setInterval(startChanging, 1000);
};
// stop the changes using the clearInterval Id...
const stopChanging = function() {
    clearInterval(intervalID);
};

// targeting the id for start...
document.querySelector('#start').addEventListener
('click', startChanging);
//  targeting the id for stop...
document.querySelector('#stop').addEventListener
('click', stopChanging);

