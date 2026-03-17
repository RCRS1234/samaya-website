let index = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  index++;
  if (index > slides.length) {
    index = 1;
  }

  slides[index - 1].style.display = "block";

  setTimeout(showSlides, 3000); // change every 3 seconds
}

function openPopup(img){
document.getElementById("imagePopup").style.display = "block";
document.getElementById("popupImage").src = img.src;
}

function closePopup(){
document.getElementById("imagePopup").style.display = "none";
}
