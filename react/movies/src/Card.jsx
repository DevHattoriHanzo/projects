import { useContext } from "react"
import UserContext from './UserContext'

function Card({poster_path, title, release_date, vote_average}){

  const {movie_list_full, set_is_dialog_active, set_dialog_item} = useContext(UserContext)

  const handleDialog = () =>{
    let obj = movie_list_full.find(e=>e.poster_path == poster_path)
    set_is_dialog_active(true)
    set_dialog_item(obj)
  }

  return (
    <div onClick={handleDialog} className="transition rounded text-white drop-shadow-xl relative bg-black group cursor-pointer overflow-hidden " >
      <img className="group-hover:scale-[1.1] transition w-full" src={"https://devhattorihanzo.github.io/datas/movies/imgs"+poster_path} />
      <div>
        <h1 className="flex gap-1 justify-between transition truncate absolute bottom-0 bg-opacity-80 w-full p-2 group-hover:-translate-y-0 translate-y-full opacity-0 group-hover:opacity-100 bg-black">{title}</h1>
        <span className="flex gap-1 absolute bottom-1 right-1 p-1 rounded px-3 text-shadow bg-black bg-opacity-50 group-hover:opacity-0 transition duration-500">{vote_average} <img width={10} src='./imgs/star.svg' /></span>
      </div>
    </div>
  )
}

export default Card