import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nom, setNom]=useState("")
  const[niveau, setNiveau]=useState("")


  useEffect(() => {
    const fetchData = async () => {
      const respanse = await axios.get(`http://127.0.0.1:8000/api/classes/${id}`);

    setNom(respanse.data.nom);
    setNiveau(respanse.data.niveau);

    };
    fetchData();
  }, []);


 const handleSubmit = async (e) => {
  e.preventDefault();
  await axios.put(`http://127.0.0.1:8000/api/classes/${id}`, { nom, niveau });
  console.log('classes')
  navigate('/classes');
};


  return (
    <div>
      <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="nom"
          >
            Nom
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nom"
            type="text"
            placeholder="Nom"
            name="nom"
            value={nom}
            onChange={(e)=>setNom(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="niveau"
          >
            Niveau
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="niveau"
            type="text"
            placeholder="Niveau"
            name="niveau"
            value={niveau}
            onChange={(e)=>setNiveau(e.target.value)}

          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}


export default Update
