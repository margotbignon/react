import { nanoid } from "nanoid"
import { useRef, useState, useEffect } from "react"

export default function DynamicRefSelection() {
const [fruits, setFruits] = useState([
    {id: nanoid(8), value:'Mangue'},
    {id: nanoid(8), value:'Pastèque'},
    {id: nanoid(8), value:'Cerise'},
])

function deleteFruit(id) {
    setFruits(fruits.filter(fruit => fruit.id !==id))
}

const fruitsRef = useRef([])

function handleRefs(element) {
    if(element) {
        fruitsRef.current.push(element)
    }
    else {
        fruitsRef.current.shift()
    }
    console.log(fruitsRef)
}

  return (
    <div>
        <ul>
            {fruits.map(fruit => 
                <li
                key={fruit.id}
                onClick={() => deleteFruit(fruit.id)}
                ref={element => {
                    if(element) {
                        fruitsRef.current.push(element)
                    } else {
                        fruitsRef.current.shift()
                    }
                    console.log(fruitsRef);
                }}
                >
                    {fruit.value}
                </li>
            )}
        </ul>
        <button onClick={() => setFruits([...fruits, {id: nanoid(8), value: "Ananas"}])}>
            Add fruits
        </button>
    </div>
  )
}