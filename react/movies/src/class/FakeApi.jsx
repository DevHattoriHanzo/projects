class FakeApi{
    constructor(objs){
        this.objs = objs
    }

    setObjs(objs){
        this.objs = objs
    }

    query(str){
        
        let objs = this.objs
        let page
        let limit

        const params = new URLSearchParams(str);
        const obj_query = Object.fromEntries(params.entries());

        if(Object.keys(obj_query).includes('page')){
            page = parseInt(obj_query.page)
            limit = 10
            delete obj_query.page
        }

        if(Object.keys(obj_query).includes('limit')){
            limit = parseInt(obj_query.limit)
            delete obj_query.limit
        }

        Object.keys(obj_query).map(name=>{
            let n = name
            let v = obj_query[n]
            let r = new RegExp( v ,"g")
            // objs = objs.filter(e=> e[n].toString().includes(v) )
            objs = objs.filter(e=> {
                if(typeof(e[n]) == 'number'){
                    return parseInt(e[n]) == v
                    // return e[n] >= v
                }

                else if(typeof(e[n]) == 'object'){
                    return e[n].includes(v)
                }
                else{
                    // return e[n].toString().match("^"+v)
                    return e[n].toLowerCase().includes(v)
                }
            } )
        })

        if(typeof(page) == "number") objs = objs.slice(page*limit,page*limit+limit)  
        return objs
    }
}

// objs = JSON.parse(document.body.innerText)

// let api = new FakeApi(objs)
// api.query("genres=Music&title=t")
// api.query("vote_average=1")
export default FakeApi
