import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEnseignant = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date_de_naissance, setDateDeNaissance] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [users, setUsers] = useState([]);
  const [user_id, setUser_id] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    async function getUsers() {
      const result = await axios.get("http://127.0.0.1:8000/api/users");
      setUsers(result.data);
    }
    getUsers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newEnseignant = {
      nom,
      prenom,
      date_de_naissance,
      adresse,
      telephone,

      user_id
    };

    try {
     const Enseignant= await axios.post("http://127.0.0.1:8000/api/enseignants", newEnseignant);
     console.log("hobi safae")
     console.log(Enseignant.data)
      alert("vous avez ajoutez un prof avec success");
      navigate("/enseignant");
    } catch (error) {
      console.log(error);
    }
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
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="prenom"
          >
            Prénom
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="prenom"
            type="text"
            placeholder="Entrez votre prénom"
            value={prenom}
            onChange={(event) => setPrenom(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="date_de_naissance"
          >
            Date de naissance
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date_de_naissance"
            type="date"
            value={date_de_naissance}
            onChange={(event) => setDateDeNaissance(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="adresse"
          >
            Adresse
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="adresse"
            placeholder="Entrez votre adresse"
            value={adresse}
            onChange={(event) => setAdresse(event.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="telephone"
          >
            Telephone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telephone"
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>

        <label className="block font-medium text-gray-700 mb-2">
          Select an option:
        </label>
        <div className="relative inline-block w-full text-gray-700">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={user_id}
            onChange={(e) => setUser_id(e.target.value)}

          >
            {users.map((e) => {
              return (
                <option key={e.id} value={e.id}>
                  {e.role} {e.name}
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
            ajouter ensiegnant
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddEnseignant;
