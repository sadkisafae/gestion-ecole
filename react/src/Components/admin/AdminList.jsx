import axios from "axios";
import { useEffect, useState } from "react";

const AdminList = () => {

  const [admin,setAdmin]= useState()
  useEffect(() => {
    const getAdmin = async () => {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/users`);
        setAdmin(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAdmin();
  }, []);
  return (
    <div>
         les admins de ce site : 
         <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">name</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">email</th>

          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {admin?.map((e) =>{
      return(
        <tr key={e.id}>
        <td className="px-6 py-4 whitespace-nowrap">{e.name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{e.email}</td>
      </tr>
      )
        }

          )}
        </tbody>
      </table>
    </div>
  )
}

export default AdminList
