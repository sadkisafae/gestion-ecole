import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEleve = () => {
  const [nom, setNom] = useState("");
  const [eleve_id, setEleve_id] = useState("");
  const [matiere_id, setMatiere_id] = useState("");
  const [eleves, setEleves] = useState([]);
  const [matieres, setMatieres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function eleves() {
      const result = await axios.get("http://127.0.0.1:8000/api/eleves");
      setEleves(result.data);
    }
    eleves();

    async function matieres() {
      const result = await axios.get("http://127.0.0.1:8000/api/matieres");
      setMatieres(result.data);
    }
    matieres();

  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newNote = {
      nom,
      eleve_id,
      matiere_id,
    };


     const note= await axios.post("http://127.0.0.1:8000/api/eleves", newNote);
     console.log(note.data)
      alert("vous avez ajoutez une note avec success");
      navigate("/note");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="nom">
            Nom
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nom"
            type="text"
            placeholder="Entrez votre nom"
            value={nom}
            onChange={(event) => setNom(event.target.value)}
          />
        </div>


        <label className="block font-medium text-gray-700 mb-2">
          Select an option:
        </label>
        <div className="relative inline-block w-full text-gray-700">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={eleve_id}
            onChange={(e) => setEleve_id(e.target.value)}

          >
            {eleves.map((eleve) => {
              return (
                <option key={eleve.id} value={eleve.id}>
                  {eleve.nom}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            ajouter Note
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddEleve;


