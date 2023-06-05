
import { useCookies } from 'react-cookie';

const Logout = () => {
  const [cookies, setCookie, removeCookie]  = useCookies(['Token']);

  const logout = () => {
    removeCookie('Token');
    window.location.href = '/';
    return false;
  };

  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
