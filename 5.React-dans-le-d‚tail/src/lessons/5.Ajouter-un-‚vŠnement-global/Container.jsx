import HugeContent from "./HugeContent"
import { useState } from "react"
export default function Container() {
  const [showContent, setShowContent] = useState(false)


  return (
    <div>
      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? "Cacher" : "Montrer"}
      </button>
      {showContent && <HugeContent/>}
    </div>
  )
}
