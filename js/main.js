
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

seed = getRandomInt(10000, 99999);
console.log(seed);

window.location.replace("index.html/" + seed);