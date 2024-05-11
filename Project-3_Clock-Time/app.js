// const clock = document.querySelector('#clock') ---gives thee selected id name

setInterval(function() {
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

