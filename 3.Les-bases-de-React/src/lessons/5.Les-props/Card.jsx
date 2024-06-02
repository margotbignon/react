import React from 'react'

export default function Card({id, state, changeState}) {
    console.log(id, state)

  return (
    <div>
        <p>User {id}</p>
        <p>Statut : {state} </p>
        <button onClick={() => changeState('Buonjourno')}>Changer le state</button>
    </div>
  )
}
