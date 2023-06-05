import NavBarEle from "./NavBarEle"


const EleveProfile = () => {
  const user =JSON.parse(localStorage.getItem('user'))
  return (
    <div>
      <NavBarEle/> <br />
      <div className="bg-white rounded-lg shadow-md p-6">
  <h2 className="text-xl font-semibold"> vos information : </h2>
  <div className="text-gray-600 mt-2">
        nom :{user.eleve.nom} <br />
        prenom :{user.eleve.prenom} <br />
        date_de_naissance :{user.eleve.date_de_naissance} <br />
        adresse :{user.eleve.adresse} <br />
        Email:{user.email}<br></br>
        telephone :{user.eleve.telephone} <br />
    </div>
</div>
<h2 className="text-xl font-semibold"> Note and subject : </h2>
<div className="flex justify-end my-3">
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                note
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                subject
              </th>
              </tr>
              </thead>
              <tbody>
               {user.eleve.notes.map((e)=>{
                return(
                  <tr key={e.id}>
                    <td>{e.note}</td>
                    {/* <td>{e.matieres.nom}</td> */}
                  </tr>
                )
               })}
              </tbody>
              </table>
    </div>
    </div>
  )
}

export default EleveProfile
