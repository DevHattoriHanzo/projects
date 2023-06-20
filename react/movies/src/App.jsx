import React, { useEffect, useState } from "react"
import UserContext from "./UserContext"
import Cards from './Cards'
import Menu from './components/Menu'
import Dialog from './components/Dialog'

let movie_loaded = []
let page = 0
let quant = 20

function App(){

  let [is_dialog_active, set_is_dialog_active] = useState(false);
  let [dialog_item, set_dialog_item] = useState(0);

  let [categories_list, set_categories_list] = useState([]);
  let [release_date_list, set_release_date_list] = useState([]);

  let [release_dates_list, set_release_dates_list] = useState([]);
  let [movie_list, set_movie_list] = useState([{}]);
  let [movie_list_full, set_movie_list_full] = useState([]);
  
  useEffect(()=>{
    fetch("https://devhattorihanzo.github.io/datas/movies/movies.json")
    .then(e=>e.json())
    .then(e=>{
      
      e = e.filter(e=>e.poster_path != null)

      set_movie_list(e.slice(0,quant))
      set_movie_list_full(e)

      let release_date_list = e.map(e=> e.release_date.split("-")[0]|0).flat()
      release_date_list = [...new Set(release_date_list)].sort().reverse()
      set_release_date_list(release_date_list)

      let x = e.map(e=>e.genres).flat()
      x = [...new Set(x)]
      set_categories_list(x)
    })
  }, [])

  function search_by_genre(str){
    page = 0
    movie_loaded = movie_list_full.filter(e=>e.genres.includes(str))
    set_movie_list(movie_loaded.slice(page*quant, page*quant+quant))
    window.scrollTo(0,0)
  }

  function search_input(e){
    let value = e.target.value.toLowerCase()
    page = 0
    movie_loaded = movie_list_full.filter(e=>e.title.toLowerCase().includes(value))
    set_movie_list(movie_loaded.slice(page*quant, page*quant+quant))
    window.scrollTo(0,0)
  }

  function search_by_rate(vote_average){
    page = 0
    movie_loaded = movie_list_full.filter(e=>parseInt(e.vote_average) == vote_average)
    set_movie_list(movie_loaded.slice(page*quant, page*quant+quant))
    window.scrollTo(0,0)
  }

  function search_by_release_date(release_date){
    release_date = release_date.toString()
    page = 0
    movie_loaded = movie_list_full.filter(e=>e.release_date.includes(release_date))
    set_movie_list(movie_loaded.slice(page*quant, page*quant+quant))
    window.scrollTo(0,0)
  }

  function loadScroll(){
    let size_document_h = document.body.offsetHeight
    let posY = window.scrollY + window.innerHeight

    if(size_document_h - posY <= 1000){
      ++page
      set_movie_list([...movie_list, ...movie_loaded.slice(page*quant, page*quant+quant)])
    }
    
  }

  window.onwheel=()=>{
    loadScroll()
  }

  window.onscroll=()=>{
    loadScroll()
  }
  
  const values = {
    movie_list_full,
    categories_list,
    release_date_list, 
    dialog_item,
    search_by_genre,
    search_input, 
    search_by_rate, 
    search_by_release_date, 
    set_dialog_item,
    set_is_dialog_active
  }
  

  return (

      <UserContext.Provider value={values}>
        <div className="grid grid-cols-[250px,1fr] grid-flow-col h-full">
          <Menu />
          <Cards movie_list={movie_list} />
          <Dialog isActive={is_dialog_active} obj={dialog_item} ></Dialog>
        </div>
      </UserContext.Provider>
  )
}

export default App
