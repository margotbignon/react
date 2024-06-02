import { useRef } from "react"

export default function StaticRefSelection() {

  const inputsRef = useRef([])

  function addInputRef(el) {
    if(el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el)
    }
    console.log(el)
  }

  return (
   <div>
      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
   </div>
  )

}