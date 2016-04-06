
function getRandomInt() {
  return Math.floor(Math.random()*89998) + 10000;
}

$('#newSite').on('click', function() {
  window.location.replace("/" + getRandomInt());
});