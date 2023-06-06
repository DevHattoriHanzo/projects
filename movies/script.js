import menu from './js/menu.js'
import dialog from './material/module/dialog/js/dialog.js'
import render_cards from './js/render_cards.js'

class Filter{
    constructor(title=""){
        this.el = []
        this.title = title
        this.page = 0
        this.quant = 100
        this.release_date=''
        this.vote_average=''
    }

    filter_cards({el=[], title = '', page = 0, quant = 10, release_date='', vote_average=''}){
        el = el.sort((a,b)=>(
            (b.release_date.split("-")[0]|0) - (a.release_date.split("-")[0]|0)
        ))
        this.search_query = {
            el: el,
            title: title,
            page: page,
            quant: quant,
            release_date: release_date,
            vote_average: vote_average,
        }
        this.busca()
    }
    busca(){
        cards.innerHTML = ""
        let results = this.el.filter(e=>
            e.release_date.includes(this.release_date) 
            &&
            e.title.toLowerCase().includes(this.title)
            &&
            e.vote_average.toString().includes(this.vote_average+".")
        ).slice(this.page*this.quant,this.page*this.quant+this.quant)
        results.map(render_cards)
    }

}

let Lista = new Filter()

fetch('movies.json')
.then(e=>e.json())
.then(el=>{
    Lista.el = el
    Lista.busca()
})

inp.addEventListener('keyup', e=>{
    Lista.title = e.target.value
    Lista.busca()
})

function loadScroll(){
    let size_document_h = document.body.offsetHeight
    let posY = Math.ceil(window.scrollY) + window.innerHeight
    
    if(size_document_h - posY <= 500){
        console.log('chegou ao fim')
    }
}

document.onwheel =()=>{
    loadScroll()
}

// `

// let div = document.createElement("div")
