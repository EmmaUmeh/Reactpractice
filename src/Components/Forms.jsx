import React,{useState,useEffect} from "react"

const Forms = () => {
    const [time,setTime] = useState(null)
    useEffect(()=>{
        const timerID = setInterval(reload, 1000);
        return () =>{
            clearInterval(timerID)
           
        }
  
    },[])
    const reload = () => setTime(new Date().toLocaleTimeString())
    return(
        <div>
            {time}
        </div>
    )
}

export default Forms;