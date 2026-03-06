var images = [

"images/placeholder.jpg",

"images/placeholder.jpg",

"images/placeholder.jpg"

];

var i = 0;

function slideShow(){

document.getElementById("slide").src = images[i];

i++;

if(i >= images.length){

i = 0;

}

setTimeout(slideShow,3000);

}

window.onload = slideShow;
