class Dialog{
    constructor(el){
        this.el = el
        this.el_in = el.querySelector('.dialog__in')
        if(this.el.classList.contains("dialog--active")) this.open()
        this.el.addEventListener('click', e=>this.close())
        this.el_in.addEventListener('click', e=>e.stopPropagation())
        window.addEventListener('keyup', e=> e.key == "Escape" ? this.close() : undefined )
    }
    open(){ this.el.classList.add('dialog__on') }
    close(){ this.el.classList.remove('dialog__on') }
    toggle(){ this.el.classList.toggle('dialog__on') }

}

document.querySelectorAll(".dialog").forEach(e=>{
    e.dialog = new Dialog(e)
})

document.querySelectorAll("[dialog]").forEach(bt=>{
    let el = document.querySelector("#"+bt.getAttribute("dialog"))
    bt.addEventListener("click", e=>{
        el.dialog.open()
    })
})

export default Dialog