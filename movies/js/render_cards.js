function render_cards(obj){

    let path = "https://devhattorihanzo.github.io/datas/movies/imgs"
    // let obj = e[13]
    let div = document.createElement("div")
    let title = obj.title
    let img = path+obj.poster_path
    let release_date = obj.release_date.split("-").reverse().join("/")
    let overview = obj.overview
    let vote_average = obj.vote_average
    let key = obj.key

    let estrutura = `
        <section class="card" tag="${title} - ${release_date} - ${vote_average}">
            <div class="card-image">
                <img src="${img}"/>
            </div>
            <div class="card-body">
            <h4>${title}</h4>
                <div class="card-status">
                <p class="badge">${release_date}</p>
                    <p class="badge"><img width="10" src="./icons/star.svg"> ${vote_average}</p>
                </div>
            </div>
        </section>
    `

    div.innerHTML = estrutura

    div.children[0].addEventListener("click", ()=>{
        janela1.dialog.open()
        ifr.src = "https://www.youtube.com/embed/"+key
        sinopse.innerHTML = title+"<br>"+overview
        sinopse.innerHTML = `<h3>${title}</h3> <br> ${overview}`
    })
    
    window.addEventListener("keyup", e=>{
        if(e.key == "Escape") 
            ifr.src = ""
    })

    janela1.addEventListener("click", ()=> {
        ifr.src = ""
    })

    cards.appendChild(div.children[0])
}
export default render_cards