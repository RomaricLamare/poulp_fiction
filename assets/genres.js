const button = document.querySelector(".button");
const overlay = document.querySelector(".overlay-off");

const button2 = document.querySelector(".button2");
const overlay2 = document.querySelector(".overlay-off2");

const button3 = document.querySelector(".button3");
const overlay3 = document.querySelector(".overlay-off3");

const close1 = document.querySelector(".close");
const close2 = document.querySelector(".close2");
const close3 = document.querySelector(".close3");

const clickSlideFunction = (listener, layer) => listener.addEventListener("click", function() {
    layer.classList.toggle(layer.className);
    layer.classList.toggle("overlay");
})


const clickCloseFunction = (listener, layer) => listener.addEventListener("click", function() {
    layer.classList.toggle(layer.className);
    layer.classList.toggle("overlay-off");
})

clickSlideFunction(button, overlay)
clickSlideFunction(button2, overlay2)
clickSlideFunction(button3, overlay3)

clickCloseFunction(close1, overlay)
clickCloseFunction(close2, overlay2)
clickCloseFunction(close3, overlay3)