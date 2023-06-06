let list_next = [...document.querySelectorAll(".list-next")]
for(let el of list_next){
    el.addEventListener("click",()=>{
        el.nextElementSibling.classList.toggle("list__open")
    })
}
