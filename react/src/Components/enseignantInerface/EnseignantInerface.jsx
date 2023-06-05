import NavBarEnsie from "./NavBarEnsie"




const EnseignantInerface = () => {
  const user =JSON.parse(localStorage.getItem('user'))
  console.log(user)
  return (
    <div>
       <NavBarEnsie/>
      <br /> <br />
      <h1>hello prof:{user.enseignant.nom}</h1>
    </div>
  )
}

export default EnseignantInerface
