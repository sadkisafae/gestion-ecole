import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const EditMatiere = () => {
  const [nom,setNom] = useState("");
  const [enseignant_id,setEnseignant_id] = useState("");
  const [enseignants,setEnseignants] = useState([]);
  const navigate = useNavigate();
  const {id}=useParams();

  useEffect(() => {
    async function Load() {
      const respanse = await axios.get(`http://127.0.0.1:8000/api/matieres/${id}`);
      setNom(respanse.data.nom);
      setEnseignant_id(respanse.data.enseignant_id);
    }
    Load();
    getEnseignant();
  }, []);

  const getEnseignant=async()=>{
    const {data} = await axios.get(`http://127.0.0.1:8000/api/enseignants`);
    setEnseignants(data)

  }

  const handleSubmit= async (e) =>{
    e.preventDefault();
    const newMatiere= {
      nom,
      enseignant_id
    }
    await axios.put(`http://127.0.0.1:8000/api/matieres/${id}`, newMatiere);
    alert("matiere has benn updated with success");
    navigate('/matiere');
  }
  return (
    <div>
    <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col gap-4">
      <label htmlFor="nom">Nom:</label>
      <input
        type="text"
        id="nom"
        value={nom}
        onChange={(e)=>setNom(e.target.value)}
        className="border border-gray-400 px-2 py-1 rounded-md"

      />

<label className="block font-medium text-gray-700 mb-2">
          Select an enseignant:
        </label>

        <div className="relative inline-block w-full text-gray-700">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={enseignant_id}
            onChange={(e) =>setEnseignant_id(e.target.value)}
            >
            {enseignants.map((enseignant) => {
              return (
                <option key={enseignant.id} value={enseignant.id}>
                  {enseignant.nom} ==
                  {enseignant.prenom}
                </option>

              );
            })}
          </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            update
      </button>
       </form>

    </div>
  )
}

export default EditMatiere
