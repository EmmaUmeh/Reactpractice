import React,{ useState,useEffect } from "react";

const ListDev = () => {
    const [load,setLoad] = useState(false);
const [data,setData] = useState(null);

const loadData = () => {
    setLoad(true)
    setTimeout(() =>{
        setLoad(false);

        setData([1,2,3,"emma!"]);
    },1000)
}
useEffect(loadData,[])
    return(
        <div>
            {load && <p>loadinng...</p>}
            {data && <p>{JSON.stringify(data,null,1)}</p>}
        </div>
    )
}

export default ListDev;