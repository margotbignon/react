import { useReducer } from "react"

export default function Container() {
  const [count, countDispatch] = useReducer(reducer, 0)

  function reducer(state,action) {
    switch(action.type) {
      case "increment":
        return state + 1
      case "decrement":
        return state - 1
      case "multiply":
        return state * 10
      case "divide":
        return state / 10
    }
  }

  return <div>
    <h1>Valeur du compteur : {count}</h1>
  <button onClick={() => countDispatch({type:"increment"})}>Incr</button>
  <button onClick={() => countDispatch({type:"decrement"})}>Decr</button>
  <button onClick={() => countDispatch({type:"multiply"})}>Mult</button>
  <button onClick={() => countDispatch({type:"divide"})}>Divide</button>
  </div>
}
