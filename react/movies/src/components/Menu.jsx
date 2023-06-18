import MenuList from "./MenuList"
import { useContext } from "react";
import UserContext from '../UserContext'

function Menu(){
  
  const {search_by_genre,categories_list,release_date_list, search_input, search_by_rate, search_by_release_date} = useContext(UserContext);
  
  return(
    <main>
      <section className="w-64 h-screen overflow-y-scroll sticky top-0 p-5 border-r border-r-[#303030] bg-[#252525] grid items-center">
        
        <section>
          <input id="inp" placeholder="Pesquisar" onChange={search_input} className="rounded-full transition bg-[#202020] hover:bg-[#191919] focus:bg-[#181818] text-white p-2 px-4 outline-none w-full "></input>
          <MenuList title="Categories" search_by_genre={search_by_genre}  categories_list={categories_list} />
        </section>

        <section>
          <p className="text-xl text-white pb-1 flex gap-3">Rate <img width={13} src='./imgs/star.svg' /> </p>
          <div className="grid grid-cols-5 gap-1">
            <div className="p-1 bg-[#202020] rounded px-3 border border-[#303030] text-neutral-500 hover:text-white cursor-pointer flex items-center justify-center" onClick={() => search_by_rate(1)}>1</div>
            <div className="p-1 bg-[#202020] rounded px-3 border border-[#303030] text-neutral-500 hover:text-white cursor-pointer flex items-center justify-center" onClick={() => search_by_rate(2)}>2</div>
            <div className="p-1 bg-[#202020] rounded px-3 border border-[#303030] text-neutral-500 hover:text-white cursor-pointer flex items-center justify-center" onClick={() => search_by_rate(3)}>3</div>
            <div className="p-1 bg-[#202020] rounded px-3 border border-[#303030] text-neutral-500 hover:text-white cursor-pointer flex items-center justify-center" onClick={() => search_by_rate(4)}>4</div>
            <div className="p-1 bg-[#202020] rounded px-3 border border-[#303030] text-neutral-500 hover:text-white cursor-pointer flex items-center justify-center" onClick={() => search_by_rate(5)}>5</div>
            <div className="p-1 bg-[#202020] rounded px-3 border border-[#303030] text-neutral-500 hover:text-white cursor-pointer flex items-center justify-center" onClick={() => search_by_rate(6)}>6</div>
            <div className="p-1 bg-[#202020] rounded px-3 border border-[#303030] text-neutral-500 hover:text-white cursor-pointer flex items-center justify-center" onClick={() => search_by_rate(7)}>7</div>
            <div className="p-1 bg-[#202020] rounded px-3 border border-[#303030] text-neutral-500 hover:text-white cursor-pointer flex items-center justify-center" onClick={() => search_by_rate(8)}>8</div>
            <div className="p-1 bg-[#202020] rounded px-3 border border-[#303030] text-neutral-500 hover:text-white cursor-pointer flex items-center justify-center" onClick={() => search_by_rate(9)}>9</div>
            <div className="p-1 bg-[#202020] rounded px-3 border border-[#303030] text-neutral-500 hover:text-white cursor-pointer flex items-center justify-center" onClick={() => search_by_rate(10)}>10</div>
          </div>
        </section>

        <section>
          <p className="text-xl text-white pb-1">Release date</p>
          <div className="w-67 h-36  p-1 grid gap-1 grid-cols-4 overflow-y-scroll  bg-[#202020] border border-[#303030]" >
            {release_date_list.map((e,i)=>
              <div key={i} className="text-white cursor-pointer text-sm opacity-20 hover:opacity-100 flex justify-center items-center p-1" onClick={()=>search_by_release_date(e)}>{e}</div>  
            )}
          </div>
        </section>

      </section>
    </main>
  )
}

export default Menu

