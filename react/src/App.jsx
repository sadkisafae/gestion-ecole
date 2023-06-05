import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddEleve from "./Components/Eleve/AddEleve";
import EditEleve from "./Components/Eleve/EditEleve";
import Enseignant from "./Components/Enseignant/Enseignant";
import AddEnseignant from "./Components/Enseignant/AddEnseignant";
import EditEnseignant from "./Components/Enseignant/EditEnseignant";
import Matiere from "./Components/Matiere/Matiere";
import AddMatiere from "./Components/Matiere/AddMatiere";
import EditMatiere from "./Components/Matiere/EditMatiere";
import Update from "./Components/Classe/Update";
import Note from "./Components/Note/Note";
import AddNote from "./Components/Note/AddNote";
// import EditNote from "./Components/Note/EditNote";
// import Login from "./Components/Login/login";
// import AdminInterface from "./Components/admin/AdminInterface";
// import EleveInterface from "./Components/eleveInterface/EleveInterface";
import Login from "./Components/Login/login";
import EleveInterface from "./Components/eleveInterface/EleveInterface";
import EnseignantInerface from "./Components/enseignantInerface/EnseignantInerface";
import AdminInterface from "./Components/admin/AdminInterface";
import EleveProfile from "./Components/eleveInterface/EleveProfile";
import HomeEleve from "./Components/eleveInterface/HomeEleve";

import EnseiProfile from "./Components/enseignantInerface/EnseiProfile";
import EnseiMatieres from "./Components/enseignantInerface/EnseiMatieres";
import AddNoteStudent from "./Components/enseignantInerface/AddNoteStudent";
import GetEleve from "./Components/enseignantInerface/GetEleve";
import EditNote from "./Components/enseignantInerface/EditNote";
import Classe from "./Components/Classe/Classe";
import AdminList from "./Components/admin/AdminList";
import AddClassModal from "./Components/Classe/AddClassModal";
import Eleve from "./Components/Eleve/Eleve";
import ProfilAdmin from "./Components/admin/profilAdmin";
import Logout from "./Components/logout/Logout";
import NavBarEnsie from "./Components/enseignantInerface/NavBarEnsie";
import NavBarEle from "./Components/eleveInterface/NavBarEle";



function App() {
  return (
    <div className="container mx-auto my-5">

      <BrowserRouter>
        <Routes>

        <Route path="/EleveInterface" element={<EleveInterface/>} />
        <Route path="/EleveProfile" element={<EleveProfile/>} />
        <Route path="/HomeEleve" element={<HomeEleve/>} />


          <Route path="/" element={<Login/>} />

          <Route path="/AdminInterface" element={<AdminInterface/>} />

          <Route path="/enseignantInerface" element={<EnseignantInerface/>} />

          <Route path="/EnseiProfile" element={<EnseiProfile/>} />
          <Route path="/EnseiMatieres" element={<EnseiMatieres/>} />



          <Route path="/note" element={<Note/>} />
          <Route path="/addNote" element={<AddNote/>} />
          {/* <Route path="/EditNote" element={<EditNote/>} /> */}


          <Route path="/update/:id" element={<Update />} />

          <Route path="/eleves" element={<Eleve/>} />
          <Route path="/addEl" element={<AddEleve/>} />
          <Route path="/EditEl/:id" element={<EditEleve/>} />

          <Route path="/enseignant" element={<Enseignant />} />
          <Route path="/addensei" element={<AddEnseignant />} />
          <Route path="/EditEnsi/:id" element={<EditEnseignant />} />

          <Route path="/matiere" element={<Matiere />} />
          <Route path="/addmatiere" element={<AddMatiere />} />
          <Route path="/EditMatiere/:id" element={<EditMatiere />} />


          <Route path="/addNote/:id" element={<AddNoteStudent />} />
          <Route path="/show/:id" element={<GetEleve />} />
          <Route path="/EditNote/:id" element={<EditNote/>} />

          <Route path='/classes' element={<Classe/>}/>
          <Route path='/addClasse' element={<AddClassModal/>}/>

          <Route path='/admins' element={<AdminList/>}/>
          <Route path='/profil' element={<ProfilAdmin/>}/>
          <Route path='/Logout' element={<Logout/>}/>
          <Route path='/NavBarEnsie' element={<NavBarEnsie/>}/>

          <Route path='/NavBarEle' element={<NavBarEle/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
