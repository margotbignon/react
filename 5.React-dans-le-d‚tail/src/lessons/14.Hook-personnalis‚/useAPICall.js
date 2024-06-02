import { useEffect, useState } from "react"

export default function useAPICall() {

    const [catData, setCatData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(()=> {
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => {
            if(!res.ok) {
                throw new Error()
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            setCatData(data)
            setLoading(false)
            setError(false)
        })
        .catch(() => setError(true))
    }, [])

  return {catData, error, loading}
}