import React,{useState,useEffect} from "react";

const ListWithrender = () => {
    const [load,setLoad] = useState(false);
    const [data,setData] = useState(null);
    const [page,setPage] = useState(1);
    function loadData() {
        setLoad(true)
        setTimeout(() => {
            setLoad(false);
            if(data < page) {
                setData([1,6,9,9])
            }else{
                setData(["what","are"])
            }
        })
    }
useEffect(loadData,[page]);
function ClickNext (){
    setPage((count) => count +1);
}
    return(
        <div>
           {load && <p>info loading...</p>}
           {data && <p>{JSON.stringify(data)}</p>}
           Current {page}
           <button onClick={ClickNext}>ClickNext</button>
        </div>
    )
}

export default ListWithrender;