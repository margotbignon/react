import { useState, useMemo } from "react"

export default function Calculation() {
    const [temperature, setTemperature] = useState("")

    function celsiustoFarenheit(degree) {
        return degree ? degree * 1.8 + 32 : "Entrez une valeur"
    }

    const expensiveCalculation = useMemo(() => {
        console.log('RENDER')
        return celsiustoFarenheit(temperature)
    }, [temperature])
  return (
    <div>
        <input type="number"
        value={temperature}
        onChange={e => setTemperature(e.target.value)}
        />
        <h1>Valeur de {temperature} degrés en Fareinheit : {expensiveCalculation}</h1>
    </div>
  )
}