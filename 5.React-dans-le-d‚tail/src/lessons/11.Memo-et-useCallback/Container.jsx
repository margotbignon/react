import { useCallback, useState } from "react";
import Card from "./Card";

export default function Container() {
  const [count, setCount] = useState(0)

  const customLog = useCallback(() => console.log('Bonjour'), [])


  return (
    <div>
     <Card txt={"test"} customLog = {customLog}/>
    <button onClick={() => setCount(count + 1 )}>Incr</button>
    </div>
  )
}
