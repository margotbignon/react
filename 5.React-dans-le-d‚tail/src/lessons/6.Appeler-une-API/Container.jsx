import "./Container.css"
import { useEffect, useState } from "react"
import spinner from "./spinner.svg"

export default function Container() {

  const [APIState, setAPIState] = useState({
    loading:false, 
    error: false,
    data: undefined
  })

  useEffect(() => {
    setAPIState({...APIState, loading:true})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res)
      if(!data.ok) throw new Error ()
      return res.json()
    })
    .then(data => {
      console.log(data)
      setAPIState({loading: false, error: false, data:data})
    })
    .catch(() => {
      setAPIState({loading: false, error: true, data:undefined})
    })
  }, [])

  let content;
  if(APIState.loading) content = <img src={spinner} alt="icône de chargement" />
  else if(APIState.error) content = <p>Une erreur est survenue...</p>
  else if(APIState.data?.length > 0) {
    content = <ul>
      {APIState.data.map(item => (
        <li key={item.id}>
        <span>{item.name}</span>
        <span>{item.email}</span>
        <span>{item.phone}</span>
        </li>
      ))}
    </ul>
  }
  else if(APIState.data?.lenght === 0) {
    content = <p>Votre recherche ne correspond à aucune donnée.</p>
  }

  return (
    <div>
      <h1>Appeler une API</h1>
      {content}
    </div>
  )
}
