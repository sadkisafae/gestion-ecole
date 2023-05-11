import { useState } from 'react';

function AddClassModal({ showModal , setShowModal, handleSave }) {
  const [nom, setNom] = useState('');
  const [niveau, setNiveau] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSave(nom, niveau);
    setShowModal(false);
  }

  return (
    <div
      className={`fixed inset-0 z-10 ${showModal ? '' : 'hidden'}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="px-6 py-4">
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              Add Class
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="nom"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={nom}
                  onChange={(event) => setNom(event.target.value)}
                  className="border border-gray-400 py-2 px-3 rounded-lg w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="niveau"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Niveau
                </label>
                <input
                  type="text"
                  id="niveau"
                  name="niveau"
                  value={niveau}
                  onChange={(event) => setNiveau(event.target.value)}
                  className="border border-gray-400 py-2 px-3 rounded-lg w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddClassModal;
