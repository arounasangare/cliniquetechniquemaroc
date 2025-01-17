import { useState } from 'react'
import SignupFirstStep from './SignupFirstStep'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageTransports from './PageTransports';
import PageTravaux from './PageTravaux';
import PageServices from './PageServices';
import PageFormLieuDate from './PageFormLieuDate';
import CircleComponent from './CircleComponent';
import Professionel from './professionel';
import InscriptionPro from './InscriptionPro';
import LoginPro from './LoginPro';
import PageResultatsProf from './PageResultatsProf';
import PageVoirProfile from './PageVoirProfile';
import PageLogin from './PageLogin';
import PageRegister from './PageRegister';
import PageCompteCree from './PageCompteCree';
import PageHomeClient from './PageHome';
import WorkspacePro from './WorkspacePro';








function App() {
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<SignupFirstStep />} />
      {/* <Route path="/start" element={<CircleComponent/>} /> */}
      <Route path="/home" element={<SignupFirstStep/>}/>
      <Route path="/professionnel" element={<Professionel/>}/>
      <Route path="/inscription" element={<InscriptionPro/>}/>
      <Route path="/Workspace" element={<WorkspacePro/>}/>
      <Route path="/login" element={<LoginPro/>}/>
      <Route path="/transports" element={<PageTransports/>} />
      <Route path="/travaux" element={<PageTravaux/>} />
      <Route path="/services" element={<PageServices/>} />
      <Route path="/info-supplementaire" element={<PageFormLieuDate/>} />
      <Route path="/resultats" element={<PageResultatsProf/>} />
      <Route path="/voir-profile" element={<PageVoirProfile/>} />
      <Route path="/login-client" element={<PageLogin/>} />
      <Route path="/register-client" element={<PageRegister/>} />
      <Route path="/compte-cree" element={<PageCompteCree/>} />
      <Route path="/home-client" element={<PageHomeClient/>} />


    </Routes>
  </Router>
  )
}

export default App
