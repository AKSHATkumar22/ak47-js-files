const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.peventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = parseInt(document.querySelector('#results').value);

    if(height === "" || height < 0 || isNan(height))
        {
           results.innerHTML = 'Please give me a valid input'
        }
});