let form = document.querySelector(".game");
let gameListElements = document.querySelectorAll(".game-list-element");


events();

let a = parseInt(10 * (Math.random()));
function events() {
    form.addEventListener("click", clickTable);
}

function clickTable(e) {
    if (e.target.classList.contains("game-list-element")) {
        e.target.style.backgroundColor = "green";
        }
            if (gameListElements[a] == e.target) {
                e.target.style.backgroundColor = "red";   
                   
    }
   
}
