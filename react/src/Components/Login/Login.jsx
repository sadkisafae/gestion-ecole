import { useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['user']);
const navigat=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post('http://127.0.0.1:8000/api/login',
      { email,password })
      console.log(data.user.role);
      localStorage.setItem("user",JSON.stringify(data.user))
      setCookie('token', data.token);

      if(data.user.role==='admin'){
         navigat("/AdminInterface")

      }else if(data.user.role==='enseignant'){
        navigat('/EnseignantInerface')
      }
      else if(data.user.role==="eleve"){
        navigat("/EleveInterface")
      }

      else
        navigat('not role')

    }catch(e){
      console.error(e)
    }


  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-sm font-medium">Email</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium">Password</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
            type="submit"
          >
            Login
          </button>

          {cookies.email && (
      <div>
         email:<p>{cookies.email}</p>
      </div>
      )}
      {cookies.Password && (
      <div>
         Password:<p>{cookies.Password}</p>
      </div>
      )}

        </form>
      </div>
    </div>



  );
}

export default Login;
