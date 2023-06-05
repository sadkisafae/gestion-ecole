
import NavBarEnsie from "./NavBarEnsie"


const EnseiProfile = () => {
  const user =JSON.parse(localStorage.getItem('user'))
  return (
    <div>
      <NavBarEnsie/> <br /> <br />
      <div className="bg-white rounded-lg shadow-md p-6">
     <h2 className="text-xl font-semibold"> vos information : </h2>
     <div className="text-gray-600 mt-2">
        nom : {user.enseignant.nom} <br />
        prenom : {user.enseignant.prenom} <br />
        date_de_naissance : {user.enseignant.date_de_naissance} <br />
        adresse : {user.enseignant.adresse} <br />
        adresse : {user.email} <br />
        telephone : {user.enseignant.telephone} <br />
    </div>
</div>

    </div>
  )
}

export default EnseiProfile
