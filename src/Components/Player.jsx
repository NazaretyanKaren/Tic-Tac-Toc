import { useState } from "react"

function Player({initialName,symbol,isActive,onChangeName}) {
    const [playerName,setPlayerName] = useState(initialName)
    const [isEditing,setIsEditing] = useState(false)


    function handleEditClick() {
        setIsEditing((editing) => !editing)

        if (isEditing)
          onChangeName(symbol,playerName)
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);

    }

    let editablePlayersName = <span className='player-name'>{playerName}</span>

    if(isEditing) {
        editablePlayersName = <input type="text" required defaultValue={playerName} onChange={handleChange} />
    }
    return (
        <li className={isActive ? 'active' : undefined}>
        <span className='player'>{editablePlayersName}
         <span className='player-symbol'>{symbol}</span>
         </span>
         <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
       </li>
    )
}

export default Player 