
import { useState, useEffect } from 'react'
import axios from "axios";
import AddClassModal from './AddClassModal';

const Classe = () => {

   const [classes, setClasses] = useState()
   const [showAddModal, setShowAddModal] = useState(false)

  useEffect(()=>{
    const getClasses = async ()=>{
      const {data} = await axios.get('http://127.0.0.1:8000/api/classes')
      setClasses(data)
    }

    getClasses()
  },[])

  async  function handleAddClass(nom, niveau) {
    const newClass = { id: classes.length + 1, nom, niveau };
    setClasses([...classes, newClass]);

    const { data } = await axios.post('http://127.0.0.1:8000/api/classes',newClass)
   
    alert('Added Successfully')
  }

  console.log(classes)


  return (

    <div>
      <div className='flex justify-end my-3'>
          <button onClick={()=>setShowAddModal(!showAddModal)} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>

      </div>
    <table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Niveau</th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {classes?.map((element,index)=>(
      <tr key={index}>
        <td className="px-6 py-4 whitespace-nowrap">{element.id}</td>
        <td className="px-6 py-4 whitespace-nowrap">{element.nom}</td>
        <td className="px-6 py-4 whitespace-nowrap">{element.niveau}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

<AddClassModal
        showModal={showAddModal}
        setShowModal={setShowAddModal}
        handleSave={handleAddClass}
/>

</div>



  )
}

export default Classe
