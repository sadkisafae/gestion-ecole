import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddNoteStudent() {
  const [note, setNote] = useState("");
  const [eleve_id, setEleve_id] = useState();
  const [matiere_id, setMatiere] = useState();
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const navigat=useNavigate();

  useEffect(() => {
    const getstudent = async () => {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/eleves/${id}`
      );
      setEleve_id(data.id);
      console.log(data);
    };
    getstudent();
  },[]);

  const handelNote = (e) => {
    setNote(e.target.value);
  };

  const handeleleve_id = (e) => {
    setEleve_id(e.target.value);
  };

  const hadndelmatiere_id = (e) => {
    setMatiere(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newnote = {
      eleve_id,
      matiere_id,
      note,
    };

    const { data } = axios.post("http://127.0.0.1:8000/api/notes", newnote);
    console.log(data);
    alert("note has been successufly");
    navigat("/EnseiMatieres")


    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="w-64 mx-auto mt-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          note:
        </label>
        <input
          type="text"
          id="name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          value={note}
          onChange={handelNote}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="eleve_id"
          className="block text-gray-700 font-bold mb-2"
        >
          eleve_id:
        </label>
        <input
          type="text"
          id="eleve_id"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          value={eleve_id}
          onChange={handeleleve_id}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="option" className="block text-gray-700 font-bold mb-2">
          subject
        </label>
        <select
          id="option"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          value={matiere_id}
          onChange={hadndelmatiere_id}
        >
          {user.enseignant.matieres.map((e) => (
            <option key={e.id} value={e.id}>
              {e.nom}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}
export default AddNoteStudent;
