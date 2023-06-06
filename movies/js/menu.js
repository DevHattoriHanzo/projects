// menu.addEventListener("click",()=>{
//     el.nextElementSibling.classList.toggle("list__open")
// })
const container = document.getElementById("container")

let menu_close = () => { container.classList.add("container__off") }
let menu_open = () => { container.classList.remove("container__off") }
let menu_toogle = () => { container.classList.toogle("container__off") }

icon_menu_close.addEventListener("click", ()=>{ menu_close() })
icon_menu_open.addEventListener("click", ()=>{ menu_open() })

export default container