const modal = document.querySelector("#modal");
const text = document.querySelector(".mister");
const prenom = document.querySelector("#prenom");
const messageecrit = document.querySelector("#messageecrit")

function openModal() {
    event.preventDefault();
    modal.style.top = "25%";
    console.log("weeeeeeeshh");
    text.innerHTML = "Bonjour, Monsieur, Madame :  <br/><br/>" + prenom.value + "<br/><br/><br/>Votre message ci-dessous a bien été pris en compte :<br/><br/>" + messageecrit.value;



}

function closeModal() {
    event.preventDefault();
    modal.style.top = "-3000px";
}

