import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Enseignant = () => {
  const [enseignants, setEnseignants] = useState([]);

  useEffect(() => {
    const getEnseignant = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/api/enseignants");
      setEnseignants(data);
    };

    getEnseignant()
  }, []);

  const deletEnseingnant = async (enseingnant) => {
    try {
      const { data } = await axios.delete(
        `http://127.0.0.1:8000/api/enseignants/${enseingnant}`
      );
      alert(data.message);
      setEnseignants(enseignants.filter((e) => e.id !== enseingnant));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div>
        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/addensei"> Add enseignant </Link>
        </button>
        <br />
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">id</th>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Prénom</th>
            <th className="px-4 py-2">Date de naissance</th>
            <th className="px-4 py-2">Adresse</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Téléphone</th>
          </tr>
        </thead>
        <tbody>
          {enseignants.map((element, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{element.id}</td>
              <td className="border px-4 py-2">{element.nom}</td>
              <td className="border px-4 py-2">{element.prenom}</td>
              <td className="border px-4 py-2">{element.date_de_naissance}</td>
              <td className="border px-4 py-2">{element.adresse}</td>
              <td className="border px-4 py-2">{element.email}</td>
              <td className="border px-4 py-2">{element.telephone}</td>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to={`/EditEnsi/${element.id}`}>Edit</Link>
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={() => deletEnseingnant(element.id)}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Enseignant;
