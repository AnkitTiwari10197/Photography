// Implementing the slider functionality for our Hero Images

const slider = document.querySelectorAll(".slides");
var counter = 0;
slider.forEach((element,index) => {
    element.style.left = `${index*100}%`;
})

// To slide our image functionalities have been implemented
function slideTheImage(){
    slider.forEach((element, index) => {
        if (counter>=0 && counter<slider.length){
            element.style.transform = `translateX(-${counter*100}%)`;

        }else if(counter<0){
            counter = slider.length-1;
            element.style.left = `-${counter*100}%`;
            
        }else{
            element.style.left = `${index*100}%`;
            counter = 0;
        }
    })
}

// Implementing interval functionality to change the image automatically after 1sec.

document.addEventListener("DOMContentLoaded", ()=>{
    setInterval(goNext,4000);
    
});

function goNext() {
    counter++;
    slideTheImage();
}

function goPrev(){
    counter--;
    slideTheImage();
}


// Implementing Gallery Slider Functionality

const arrowIcons= document.querySelectorAll("#gallery-wrapper img");
const gallery = document.querySelector("#gallery");
let firstImage = gallery.querySelectorAll("img")[0];   // Gives me the first image of gallery

// Adding Event Listener functionality to arrow images
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImageWidth = firstImage.clientWidth + 14;
        gallery.scrollLeft  += icon.id == "prevBtn" ? -firstImageWidth : firstImageWidth;
    })
})