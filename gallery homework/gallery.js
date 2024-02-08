function upDate(previewPic) {
    var imgdiv = document.querySelector("#image");
    imgdiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imgdiv.textContent = previewPic.alt;
}

function unDo() {
    var imgdiv = document.querySelector("#image");
    imgdiv.style.backgroundImage = "none";
    imgdiv.style.backgroundColor = "#8e68ff";
    imgdiv.textContent = "Hover over an image below to display here.";
}
       