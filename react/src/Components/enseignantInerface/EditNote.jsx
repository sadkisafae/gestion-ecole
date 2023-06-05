import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditNote = () => {
  const { id } = useParams();
  console.log(id);
  const [eleves, setEleves] = useState({});
  const [student_id, setStudent_id] = useState("");
  const [subject_id, setSubject_id] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    const getNote = async () => {
      const { data } = await axios.get(`http://127.0.0.1:8000/api/eleves/${id}`);
      setEleves(data);
    };
    getNote();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="note" className="block mb-2 text-sm font-bold text-gray-700">
          NOTE
        </label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject_id" className="block mb-2 text-sm font-bold text-gray-700">
          Matiere
        </label>
        <input
          type="text"
          value={subject_id}
          onChange={(e) => setSubject_id(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="student_id" className="block mb-2 text-sm font-bold text-gray-700">
          Student ID
        </label>
        <input
          type="text"
          value={student_id}
          onChange={(e) => setStudent_id(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default EditNote;
