import { useState } from "react"

export default function Team (){
    const teamSection = {
        border: '2px solid red',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }
    const [team,setTeam] = useState(11)
    const addPlayer = () =>{
        const newPlayer = team + 1;
        setTeam(newPlayer)
    }
    const removePlayer = () =>{
        const newPlayer = team - 1;
        setTeam(newPlayer)
    }
    return(
        <div style={teamSection}>
           <h3>Player : {team}</h3>
           <button onClick={addPlayer}>Add Player</button>
           <button onClick={removePlayer}>Remove Player</button> 
           
        </div>
    )
}