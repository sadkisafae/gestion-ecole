import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Note = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const respance = await axios.get("http://127.0.0.1:8000/api/notes");
      setNotes(respance.data);
    };

    getNotes();
  }, []);

  const deleteNote = async (note) => {
    console.log(note);
    try {

      const { data } = await axios.delete(
        `http://127.0.0.1:8000/api/notes/${note}`
      );
      alert(data.message);
      setNotes(notes.filter((e) => e.id !== note));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/addNote"> Add note </Link>
      </button>
      <br />
      <div className="flex justify-end my-3">
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Note
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
              Name_Eleve
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
              Name_Matiere
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-bold uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {notes?.map((element) => (
              <tr className="bg-white" key={element.id}>
                <td className="px-4 py-2 border-b border-gray-200">
                  {element.note}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {element.eleves.nom}
                </td>

                <td className="px-4 py-2 border-b border-gray-200">
                  {element.matieres.nom}
                </td>



                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to={`/EditNote/${element.id}`}>Edit</Link>
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                    onClick={() =>deleteNote(element.id)}
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

export default Note;
