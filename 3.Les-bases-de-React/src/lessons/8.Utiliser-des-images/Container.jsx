import fugi from "./assets/fuji.jpg"
import triangle from "./assets/triangle.svg"

export default function Container() {

  const id = 3

  return (
    <div>
      <h1>Utiliser des images</h1>
    <p>Image jpg/png</p>
    <img src={fugi} alt="Mont fuji" />

    <p>Utiliser des images du dosiser public</p>
    <img src={`/assets/forest-${id}.jpg`}/>

    <p>SVGs</p>
    <img src={triangle}/>
    </div>
  )
}
