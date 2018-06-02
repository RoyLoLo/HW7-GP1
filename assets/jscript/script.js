



//Modal stuff
var modal = document.getElementById("start-modal");
var modalBtn = document.getElementById("modal-btn");
var closeBtn = document.getElementsByClassName("start-btn")[0];

//will load startmodal on window load
window.onload = openModal();

modalBtn.addEventListener("click",openModal);
closeBtn.addEventListener("click",closeModal);
window.addEventListener("dblclick", oustideClick);

function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}



//end of modal stuff

