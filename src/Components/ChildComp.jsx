import React from "react";

function ChildComp(props) {
    return(
        <div>
            <button onClick={ () => props.greetHan()}>Greet Parent</button>
        </div>
    )
}

export default ChildComp;