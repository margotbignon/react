/* 1. Toujours exécuter les Hooks au plus haut niveau de la fonction.
Ne pas coder d'appels de Hooks dans des conditions, des boucles, etc...

2. Toujours exécuter les Hooks dans un composant ou un hook personnalisé, afin de garder la logique dans un environnement React.
*/

import { useState } from "react"
export default function Container() { 

  const [s1, sets1] = useState(0)

  if(s1 < 1) {
    const [s2, sets2] = useState(1) 
  }
  const [s3, sets3] = useState(3) 
  return (
    <div>
      <h1>Les règles des Hooks</h1>
      <button onClick={() => sets1(1)}>Change State</button>
      <p>{s1}</p>
      <p>{s3}</p>
    </div>
  )
}
