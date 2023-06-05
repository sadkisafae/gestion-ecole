import NavBarEle from "./NavBarEle"


const HomeEleve = () => {
  const user =JSON.parse(localStorage.getItem('user'))

  return (
    <div>
     <NavBarEle/> <br />
      <br />
        <h1>hello {user.eleve.nom}</h1>
        <h1> votre classe est : {user.eleve.classes.nom}</h1>

    </div>
  )
}

export default HomeEleve
