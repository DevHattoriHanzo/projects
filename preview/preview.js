const TagInputUpload = document.querySelector("#tag_input_upload")
const TagImageList = document.querySelector("#tag_image_list")

TagInputUpload.onchange = function(){
    preview(this.files)
}

function preview(FileList){
    const files = [...FileList]
    TagImageList.innerHTML = ""
    files.map(file=>{
        const image = new Image()
        image.src = URL.createObjectURL(file)
        TagImageList.appendChild(image)
    })
}

