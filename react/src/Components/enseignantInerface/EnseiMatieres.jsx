import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBarEnsie from "./NavBarEnsie";

const EnseiMatieres = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [classes, setClasses] = useState([]);
  const [eleves, setEleves] = useState([]);
  const [selectedClasse, setSelectedClasse] = useState();
  // const [notess, setNote] = useState("");
  const [note_id, setNote_id] = useState("");
  const [filterthis,setFilterthis]=useState([])

  useEffect(() => {
    const getClasse = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/classes");
      setClasses(response.data);
    };

    const getEleves = async () => {
      try {
        const { data } = await axios.get("http://127.0.0.1:8000/api/eleves");
        setEleves(data);
      } catch (error) {
        console.log(error);
      }
    };

    getClasse();
    getEleves();
  }, []);


  const filterclases = (e) => {
    const filteredStudents=eleves.filter(
      (c) =>c.classe_id==e.target.value
    );
    console.log(filteredStudents)
    setFilterthis(filteredStudents);
  };

  return (
    <div>
      <NavBarEnsie/>
      <br /> <br /> <br />
      <h1>Voici la liste de vos matières :</h1> <br />
      <div>
        {user.enseignant.matieres.nom}

      </div>  <br />
    <div> la liste des classes : </div> <br />
      <div>
        <select
          value={selectedClasse}
          onChange={(e)=>{filterclases(e)}}

        >
          {classes.map((classe) => (
            <option key={classe.id} value={classe.id}>
              {classe.nom} {classe.niveau}
            </option>
          ))}
        </select>
      </div> <br />

      <div>la liste des eleves qui étudient dans la filière :</div>

      <br />  <br />
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
              Nom
            </th>
            <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
              Prénom
            </th>
            <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
              Date de naissance
            </th>
            <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
              Adresse
            </th>

            <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
              Téléphone
            </th>
            <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
              Classe
            </th>
            <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider w-60">
              Matière and note
            </th>
            <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider  text-center">
              action
            </th>

          </tr>
        </thead>
        <tbody>
          {filterthis.map((element) => {
            return(
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
              {element.adresse}
            </td>
            <td className="px-4 py-2 border-b border-gray-200">
              {element.telephone}
            </td>
            <td className="px-4 py-2 border-b border-gray-200">
              {element.classes.nom}
            </td>

        
            <td className="px-4 py-2 border-b border-gray-200 flex">

              {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                <Link to={`/EditNote`}>modifier </Link>
              </button> */}

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                <Link to={`/show/${element.id}`}> show </Link>
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                <Link to={`/addNote/${element.id}`}> add note  </Link>
              </button>

            </td>
          </tr>
        )})
          }

        </tbody>
      </table>
    </div>
  );
};

export default EnseiMatieres;
