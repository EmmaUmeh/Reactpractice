import React from "react";
import {people} from './data.jsx'

export default function Receiver() {
        const lisitems = people.map(person=> 
            <li key={person.id}>
            <p>{person.goals}</p>
            <h1>{person.occupation}</h1>
            </li>
        )
       
    return(
        <div>
<ul>{lisitems}</ul>
        </div>
    )
}