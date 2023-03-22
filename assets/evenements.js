const clickSlide = document.querySelector(".clickSlide");
const overlay = document.querySelector(".overlay-off");

const clickSlide2 = document.querySelector(".clickSlide2");
const overlay2 = document.querySelector(".overlay-off2");

const clickSlide3 = document.querySelector(".clickSlide3");
const overlay3 = document.querySelector(".overlay-off3");

const close1 = document.querySelector(".close");
const close2 = document.querySelector(".close2");
const close3 = document.querySelector(".close3");

/*clickSlide.addEventListener("click", function(){
    overlay.classList.toggle("overlay-off");
    overlay.classList.toggle("overlay");
});*/


const clickSlideFunction = (listener, layer) => listener.addEventListener("click", function() {
    layer.classList.toggle(layer.className);
    layer.classList.toggle("overlay");
})


const clickCloseFunction = (listener, layer) => listener.addEventListener("click", function() {
    layer.classList.toggle(layer.className);
    layer.classList.toggle("overlay-off");
})

clickSlideFunction(clickSlide, overlay)
clickSlideFunction(clickSlide2, overlay2)
clickSlideFunction(clickSlide3, overlay3)

clickCloseFunction(close1, overlay)
clickCloseFunction(close2, overlay2)
clickCloseFunction(close3, overlay3)