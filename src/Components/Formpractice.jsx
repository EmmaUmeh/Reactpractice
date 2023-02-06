import React,{useState} from "react"

const Formpractice = () => {
    const [value,setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
    }
    console.log(value)

    return(
        <div>
            <input type="text" value={value} onChange={handleChange}/>
            <p>Name:{value}</p>
        </div>
    )
}

export default Formpractice;