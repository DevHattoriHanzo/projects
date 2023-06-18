// https://devhattorihanzo.github.io/datas/movies/movies.json
// https://devhattorihanzo.github.io/datas/movies/imgs/f5bN53nIVa5ChLmYtmFjAjWt0Nx.jpg
// poster_path

// e.poster_path
// e.name
// movieList

import React, { useEffect, useState } from "react"
import UserContext from "./UserContext"
import Cards from './Cards'
import Menu from './components/Menu'
import Dialog from './components/Dialog'

import FakeApi from './class/FakeApi'

// import MenuList from './components/MenuList'
// import Menu2 from './components/Menu2'

let Api = new FakeApi()



let busca = {
  name:"",
  genres:"",
  vote_average: 0,
  release_date: 0
}

let texto = ""

function App(){

  let [is_active, set_is_active] = useState(false);
  let [is_dialog_active, set_is_dialog_active] = useState(false);
  let [dialog_item, set_dialog_item] = useState(0);

  let [categories_list, set_categories_list] = useState([]);
  let [release_date_list, set_release_date_list] = useState([]);

  let [obj_search, set_obj_search] = useState({});
  let [release_dates_list, set_release_dates_list] = useState([]);
  let [movie_list, set_movie_list] = useState([{}]);
  let [movie_list_full, set_movie_list_full] = useState([]);
  let [quant, set_quant] = useState(20)
  
  let [page, set_page] = useState(0)

  
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
      Api.setObjs(movie_list_full)
    })
  }, [])

  useEffect(()=>{
    Api.setObjs(movie_list_full)
  },[movie_list])


  // function search(){

  //   let ml = movie_list_full

  //   if(busca.name != "")
  //     ml = ml.filter(e=>e.name.toLowerCase().includes(busca.name))
    
  //   if(busca.genres != 0)
  //     ml = ml.filter(e=>e.genres.includes(busca.genres))

  //   if(busca.vote_average != "")
  //     ml = ml.filter(e=>parseInt(e.vote_average) == busca.vote_average)
    
  //   if(busca.release_date != "")
  //     ml = ml.filter(e=>e.release_date.split("-")[0].includes(busca.release_date))

  //   set_movie_list(ml.slice(0,quant))
  // }

  function search_by_genre(str){
    texto = `genres=${str}`
    set_page(0)
    set_movie_list(Api.query(`${texto}&page=${page}`))
    window.scrollTo(0,0)
  }

  function search_input(e){
    // busca.name = e.target.value.toLowerCase()
    // set_quant(50)
    // search()

    texto = `title=${e.target.value.toLowerCase()}`

    // console.log(texto)
    set_page(0)
    set_movie_list(Api.query(`${texto}&page=${page}`))

    console.log(Api.query(`${texto}`))

    window.scrollTo(0,0)
  }

  function search_by_rate(vote_average){
    
    set_page(0)

    texto = `vote_average=${vote_average}`
    let res = Api.query(`${texto}&page=${page}`)

    set_movie_list([])
    set_movie_list(res)

    window.scrollTo(0,0)
  }

  function search_by_release_date(release_date){
    texto = `release_date=${release_date}`
    
    set_page(0)
    set_movie_list(Api.query(`${texto}&page=${page}`))

    // busca.release_date = release_date
    // set_quant(50)
    // search()
    window.scrollTo(0,0)
  }

  // function add_plus(objs){
  //   set_movie_list(...Api.query(`genres=${str}&page=0`),Api.query(`genres=${str}&page=1`))
  // }

  // window.onkeyup=function(e){
  //   let new_list = Api.query(`genres=Thriller&page=${page}`)
  //   set_movie_list([...movie_list, ...new_list])
  // }

  function loadScroll(){
    let size_document_h = document.body.offsetHeight
    let posY = window.scrollY + window.innerHeight

    if(size_document_h - posY <= 1000){

      set_page(++page)
      let new_list = Api.query(`${texto}&page=${page}`)
      set_movie_list([...movie_list, ...new_list])

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
