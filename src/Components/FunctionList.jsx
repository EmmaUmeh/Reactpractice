import { useState,useEffect } from "react";


const FunctionList = () => {
const [loading, setLoading] = useState(false);
const [data, setData] = useState(null);



function loadData() {
    setLoading(true)

    setTimeout(() => {
        setLoading(false);
        setData([1,2,3,4]);
    },1000)
    
}
useEffect(loadData,[])

return(
    <>
        {loading && <p>loading..</p>}
        {data && <p>{JSON.stringify(data,null,1)}</p>}
    </>
)


}




// export const data =[
//     {
//         id:0,
//         name:'software',
//     }
// ]

export default FunctionList;