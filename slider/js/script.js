let btnNext = document.querySelector(".next");
let btnBack = document.querySelector(".back");

let container = document.querySelector(".container");
let list = document.querySelector(".container .list");
let thumb = document.querySelector(".container .thumb")

btnNext.onclick = () => moveItensOnClick("next")
btnBack.onclick = () => moveItensOnClick("back")


function moveItensOnClick(type) {
    let listItens = document.querySelectorAll(".list .list-item")
    let thumbitens = document.querySelectorAll(".thumb .thumb-item")

    console.log(listItens)
    console.log(thumbitens)

    if (type === "next") {
        list.appendChild(listItens[0])
        thumb.appendChild()
    }else{
        list.prepend(listItens[3])
    }

}