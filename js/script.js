

function openPopup(img){
document.getElementById("imagePopup").style.display = "block";
document.getElementById("popupImage").src = img.src;
}

function closePopup(){
document.getElementById("imagePopup").style.display = "none";
}
