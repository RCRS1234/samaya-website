var images = [

"images/store.jpg",
"images/petfood.jpg",
"images/pets.jpg"

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
