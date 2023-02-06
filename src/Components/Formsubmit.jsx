import React,{useState} from "react";

function Formsubmit(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
     
    }
    console.log(username,password)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>Password: {password}</p>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <button type="button">Submit</button>
            </form>
        </div>
    )
}
export default Formsubmit;
