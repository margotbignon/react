export default function Container() {

  const isLogged = true

  if(isLogged) content = "Bienvenue sur votre contenu privé"
  else content = "Veuillez vous connecter"

  return (
    <div>
      <h1>Rendu conditionnel avec if</h1>
      <p>{content}</p>
    </div>
  )

}



//Méthode 1

/*export default function Container() {

  const isLogged = true

  if(isLogged) {
    return (
      <div>
        <h1>Rendu conditionnel avec if</h1>
        <p>Vous êtes connectés</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Rendu conditionnel avec if</h1>
        <p>Vous n'êtes connectés</p>
      </div>
    )
  }

}*/
