import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import NavBarEnsie from "./NavBarEnsie";

const GetEleve = () => {
  const [eleve, setEleve] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getStudent = async () => {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/eleves/${id}`);
        setEleve(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getStudent();
  }, [id]);

  if (eleve.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <NavBarEnsie/>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Note</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
            <th className="px-6 py-3 bg-gray-50">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {eleve.notes.map((e) => (
            <tr key={e.id}>
              <td className="px-6 py-4 whitespace-nowrap">{e.note}</td>
              <td className="px-6 py-4 whitespace-nowrap">{e.matieres.nom}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                <Link to={`/EditNote/${e.id}`}>modifier </Link>
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetEleve;
