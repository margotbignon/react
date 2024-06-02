export default function Container() {
  function handleClick(e) {
    console.log('click');
  }

  function handleClickWithId(id) {
    console.log(id)
  }

  function handleClickWithIdAndEventObject(e, id) {
    console.log(e, id)
  }
  return (
    <div>
      <h1>Utiliser des évènements</h1>
      {/* On peut ajouter un évènement directement dans le JSX avec une fonction anonyme, mais ce n'est pas pratique s'il y a beaucoup de code */}
      <button onClick={() => console.log("click!")}>Click</button>
      {/* Mauvaise pratique, peu maintenable */}
      <button onClick={() => {
        console.log("click!")
        console.log("click!")
        console.log("click!")
        console.log("click!")

      }}>Click</button>

      {/* On lui préfère en général ceci */}
      <button onClick={handleClick}>Click</button>

      {/* Attention, si on veut passer un argument, il faut obligatoirement utiliser une fonction anonyme */}
      <button onClick={() => handleClickWithId(2)}>Click</button>

      {/* Si on veut l'objet d'évènement ET passer un ou des arguments, on code ceci */}
      <button onClick={e => handleClickWithIdAndEventObject(e, 2)}>Click</button>
    </div>
  )
}
