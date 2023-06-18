import Card from './Card'

function Cards({movie_list}){
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 h-min p-10 px-20 max-w-full m-auto col-span-2"> 
      {movie_list.map((e,i)=>
        <Card key={i} {...e} />
      )}
    </section>
  )
}

export default Cards