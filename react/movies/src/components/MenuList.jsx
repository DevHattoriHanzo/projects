function MenuList({title, categories_list, search_by_genre}){
    return (
        <>
            <h1 className="text-xl text-white py-2">{title}</h1>
            <ul className="grid grid-cols-2 gap-x-3">
                {categories_list.map((cat,i)=>
                    <li key={i} onClick={()=>search_by_genre(cat)} className="text-white cursor-pointer text-sm opacity-20 hover:opacity-100">{cat}</li>
                )}
            </ul>
        </>
    )
}

export default MenuList