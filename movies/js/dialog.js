
dialog_out.on = () => {
    dialog_out.classList.add('dialog__on')
}

dialog_out.off = () => {
    dialog_out.classList.remove('dialog__on')
}

dialog_out.addEventListener("click", e=>{
    dialog_out.off()
})

dialog_in.addEventListener("click", e=>{
    e.stopPropagation()
})

window.addEventListener("keyup", e=>{
    if(e.key == "Escape"){
        dialog_out.off()
    }
})

dialog_out.toggle = () => {
    change()    
}