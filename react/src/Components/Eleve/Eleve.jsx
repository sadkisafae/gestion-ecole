import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Eleve = () => {
  const [eleves, setEleves] = useState([]);

  useEffect(() => {
    const getEleves = async () => {
      const respance = await axios.get("http://127.0.0.1:8000/api/eleves");
      setEleves(respance.data);
    };

    getEleves();
  }, []);

  const deleteEleve = async (elefe) => {
    console.log(elefe);
    try {

      const { data } = await axios.delete(
        `http://127.0.0.1:8000/api/eleves/${elefe}`
      );
      alert(data.message);
      setEleves(eleves.filter((e) => e.id !== elefe));
    } catch (error) {
      console.log(error.data);
    }
  };

  return (
    <div>
      <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/addEl"> Add Student </Link>
      </button>
      <br />
      <div className="flex justify-end my-3">
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Nom
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Prenom
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Date de naissance
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Adresse
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Telephone
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Classe
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {eleves?.map((element) => (
              <tr className="bg-white" key={element.id}>
                <td className="px-4 py-2 border-b border-gray-200">
                  {element.nom}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {element.prenom}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {element.date_de_naissance}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {element.adresse}{" "}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {element.email}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {element.telephone}
                </td>

                <td className="px-4 py-2 border-b border-gray-200">

                <select>
                  <option value="votre classe......">votre classe......</option>
              <option>
                  {element.classes.nom}
                </option>
                <option>
                  {element.classes.niveau}
                </option>
          </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to={`/EditEl/${element.id}`}>Edit</Link>
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                    onClick={() =>deleteEleve(element.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Eleve;
