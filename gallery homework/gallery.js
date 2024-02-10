// Function to update image on mouseover and focus
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

window.onload = function() {
    var previewImages = document.getElementsByClassName("preview");
    for (var i = 0; i < previewImages.length; i++) {
        previewImages[i].setAttribute("tabindex", i + 1);
    }
    console.log("Tabindex attributes added successfully.");
}

var previewImages = document.getElementsByClassName("preview");
for (var i = 0; i < previewImages.length; i++) {
    previewImages[i].addEventListener("focus", function() {
        upDate(this);
        console.log("Focus event triggered.");
    });

    previewImages[i].addEventListener("blur", function() {
        unDo();
        console.log("Blur event triggered.");
    });
}
