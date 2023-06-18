import { useContext, useEffect } from 'react'
import '../css/Dialog.css'

import UserContext from '../UserContext'

function Dialog({isActive, obj}){

  const {set_is_dialog_active} = useContext(UserContext)

  const handleParent = () =>{
    set_is_dialog_active(false)
  }

  const childrenParent = (e) =>{
    e.stopPropagation()
  }

  return (
      <section onClick={handleParent} className={`dialog ${isActive ? 'dialog__on' : 'dialog__off'}`}>
          <section onClick={childrenParent} className='dialog__in'>
              <iframe id="ifr" height="315" src={"https://www.youtube.com/embed/"+obj.key} ></iframe>
              {/* <iframe id="ifr" height="315" src="" ></iframe> */}
              <div className=" text-[#aaa] p-3  gap-1 flex  items-center bg-[#202020]">
                <p className="uppercase font-bold text-xs">{obj.name}</p>
                <div className="flex-1"></div>
                <div className="flex gap-1 bg-[#202020] p-1 px-3 border border-[#303030]">
                  <img width={10} src='./imgs/star.svg' />
                  <p>{obj.vote_average}</p>
                </div>
                <div className="flex gap-1 bg-[#202020] p-1 px-3 border border-[#303030]">
                  Sinopse
                </div>
              </div>
              <div className='bg-[#202020] border-t border-[#303030] text-[#aaa] p-5  text-sm h-32 overflow-y-auto'>
                <p className="pb-3">{obj.release_date}</p>
                {obj.overview}
              </div>
          </section>
      </section>
  )
}

export default Dialog