import { useState } from 'react'
import SignupFirstStep from './SignupFirstStep'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageTransports from './PageTransports';
import PageTravaux from './PageTravaux';
import PageServices from './PageServices';
import PageFormLieuDate from './PageFormLieuDate';
import CircleComponent from './CircleComponent';
import PageResultatsProf from './PageResultatsProf';
import PageVoirProfile from './PageVoirProfile';




function App() {
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<SignupFirstStep />} />
      <Route path="/start" element={<CircleComponent/>} />
      
      <Route path="/transports" element={<PageTransports/>} />
      <Route path="/travaux" element={<PageTravaux/>} />
      <Route path="/services" element={<PageServices/>} />
      <Route path="/info-supplementaire" element={<PageFormLieuDate/>} />
      <Route path="/resultats" element={<PageResultatsProf/>} />
      <Route path="/voir-profile" element={<PageVoirProfile/>} />



    </Routes>
  </Router>
  )
}

export default App
