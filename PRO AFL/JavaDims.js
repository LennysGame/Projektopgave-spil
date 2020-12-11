var Snøffel = 1
var Click = 1
var Upgrade = 1


var button = document.getElementsByClassName("btn");
Button.onclick = function() {
    Snøffel = Snøffel + (Click * Upgrade)
    return Snøffel
}
    
function showSnøffel () {
document.getElementsByClassName('Snøffelcount').value = Snøffel; 
}