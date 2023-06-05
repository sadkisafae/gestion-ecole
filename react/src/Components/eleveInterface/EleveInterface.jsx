// import axios from "axios";
// import { useHistory } from "react-router-dom";

import NavBarEle from "./NavBarEle";


const EleveInterface = () => {
  // const history = useHistory();
    const user =JSON.parse(localStorage.getItem('user'))
    console.log(user)
  // const logoutSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post(`/api/logout`)
  //     .then(res => {
  //       if (res.status === 200) {
  //         res.clearCookie('token');
  //         console.log('cookie cleared')

  //         // history.push("/login");
  //       } else {
  //         throw new Error('Logout failed');
  //       }
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  return (

    <div>
        <NavBarEle/>
        <br/>
      <div>bonjour : {user.eleve.nom} , {user.eleve.prenom} </div>
    </div>
  );
}

export default EleveInterface;
