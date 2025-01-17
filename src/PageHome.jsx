import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PageHome.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import profilecircle from './assets/profile-circle.png';




const demandes = [
  {
    id: 1,
    titre: "Triporteur",
    travail: "Transporter des matériaux de construction",
    dateDemande: "12-01-2025 18:20",
    heurePrevue: "14-01-2025 08:00",
    adresse: "Rue des Fleurs, Fès",
    nomProfessional: "Hassan Benali",
    status: "Accépte",
  },
  {
    id: 2,
    titre: "Peintre",
    travail: "Peindre les murs d’un salon",
    dateDemande: "10-01-2025 15:30",
    heurePrevue: "13-01-2025 09:00",
    adresse: "Boulevard Mohammed V, Casablanca",
    nomProfessional: "Youssef Laarbi",
    status: "Refusé",
  },
  {
    id: 3,
    titre: "Camionette",
    travail: "Transporter des meubles pour un déménagement",
    dateDemande: "11-01-2025 13:45",
    heurePrevue: "13-01-2025 10:00",
    adresse: "Avenue Hassan II, Rabat",
    nomProfessional: "Amine Tazi",
    status: "En cours",
  },
  {
    id: 4,
    titre: "Jardinier",
    travail: "Aménager un jardin avec des plantes et arbustes",
    dateDemande: "08-01-2025 09:20",
    heurePrevue: "12-01-2025 07:30",
    adresse: "Lotissement Al Amal, Marrakech",
    nomProfessional: "Sofia Khadiri",
    status: "Accépte",
  },
];
const historiqueDemandes = [
  {
    id: 1,
    titre: "Plombier",
    travail: "Réparer une fuite dans la salle de bain",
    dateDemande: "02-01-2025 14:00",
    heurePrevue: "03-01-2025 10:00",
    adresse: "Rue des Palmiers, Agadir",
    nomProfessional: "Mourad El Idrissi",
    status: "Accépte",
  },
  {
    id: 2,
    titre: "Camion",
    travail: "Transporter des matériaux lourds sur un chantier",
    dateDemande: "20-12-2024 08:30",
    heurePrevue: "21-12-2024 07:00",
    adresse: "Quartier Industriel, Tanger",
    nomProfessional: "Omar Hakimi",
    status: "Refusé",
  },
  {
    id: 3,
    titre: "Pisciniste",
    travail: "Nettoyer et traiter l'eau de la piscine",
    dateDemande: "15-11-2024 10:15",
    heurePrevue: "17-11-2024 09:00",
    adresse: "Résidence Les Oliviers, Rabat",
    nomProfessional: "Fatima Zahra El Alami",
    status: "Accépte",
  },
  {
    id: 4,
    titre: "Electricien",
    travail: "Installer un système d’éclairage extérieur",
    dateDemande: "10-11-2024 16:40",
    heurePrevue: "12-11-2024 11:00",
    adresse: "Cité Universitaire, Meknès",
    nomProfessional: "Ismail Amrani",
    status: "Refusé",
  },
];
function PageHomeClient() {
  const [activeSection, setActiveSection] = useState('home'); // État pour la section active

  return (
    <>
      {/* Navbar */}
      
          


      <div className="headerFree">
      <div className="container-fluid">
        <div className="listup">
          <ul className='d-flex justify-content-between align-items-center w-100'>

            <p className='logousersside mb-0'>lacliniquetechnique</p>
            <li>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img src={profilecircle} alt="" className='grgegtgrh'/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item  href="/home">Se Deconnecter</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </li>
          </ul>
        </div>

      </div>
    </div>


      


      <div className="nav_bar_container d-flex justify-content-center">
        <ul className="nav_bar d-flex justify-content-center">
          <li>
            <button
              className={`${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setActiveSection('home')}
            >
              Home
            </button>
          </li>
          <li className="ms-4">
            <button
              className={` ${activeSection === 'history' ? 'active' : ''}`}
              onClick={() => setActiveSection('history')}
            >
              History
            </button>
          </li>
        </ul>
      </div>
      <div className=' container-title d-flex align-items-center justify-content-center flex-column mt-1 mt-lg-1 '>
        <p className='title'>Bienvenue sur votre espace client</p>                                   
      </div>

      {/* Sections */}
        {activeSection === 'home' && (
          <div id="home" className='home-class container bg-light border rounded p-4 col-11 col-lg-11 mt-1 mb-5'>
          <h3 className='sous-title mb-3' >les demandes en cours : </h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {demandes.map((demande) => (
            <div className="col mb-4 ">
                <div className="card">
                    <div className="card-footer">
                      <h5 className="nom-prof card-title ">{demande.titre}</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text text"><span className='champs'> Travail á faire </span>: {demande.travail}</p>
                      <p className="card-text text"><span className='champs'> Date de la demande </span>: {demande.dateDemande} </p>
                      <p className="card-text text"><span className='champs'>Heure prévue </span>: {demande.heurePrevue} </p>
                      <p className="card-text text"><span className='champs'>Adresse de intervention</span> : {demande.adresse} </p>
                      <p className="card-text text"><span className='champs'>Nom du professional</span>  :{demande.nomProfessional}</p>
                      <p className="text-center mb-1"><span className='champs'>Status : </span>  <span
                       className=
                      {
                        demande.status === "Accépte"
                          ? "accepte"
                          : demande.status === "Refusé"
                          ? "refuse"
                          : "encours"
                      }> {demande.status} </span> </p>
                      <div className='buttons d-flex d-lg-block justify-content-center flex-column'>
                        <Link to="/voir-profile" class="btn btn-primary ms-1  mt-1 text-light ">voir profile professional</Link>
                        <Link to="/voir-profile" class="btn btn-primary ms-1 mt-1 text-light ">Annuler Demande</Link>
                      </div>
                    </div>
                </div>
            </div>
        ))}

        </div>
        </div>
        )}
        {activeSection === 'history' && (
          <div id="history" className='history-class container bg-light border rounded p-4 col-11 col-lg-11 mt-1 mb-5'>
        <h3 className='sous-title mb-3' >le history des demandes : </h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">


        {historiqueDemandes.map((demande) => (
            <div className="col mb-4 ">
                <div className="card">
                    <div className="card-footer">
                      <h5 className="nom-prof card-title ">{demande.titre}</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text text"><span className='champs'> Travail á faire </span>: {demande.travail}</p>
                      <p className="card-text text"><span className='champs'> Date de la demande </span>: {demande.dateDemande} </p>
                      <p className="card-text text"><span className='champs'>Heure prévue </span>: {demande.heurePrevue} </p>
                      <p className="card-text text"><span className='champs'>Adresse de intervention</span> : {demande.adresse} </p>
                      <p className="card-text text"><span className='champs'>Nom du professional</span>  :{demande.nomProfessional}</p>
                      <p className="text-center mb-1"><span className='champs'>Status : </span>  <span
                       className=
                      {
                        demande.status === "Accépte"
                          ? "accepte"
                          : demande.status === "Refusé"
                          ? "refuse"
                          : "encours"
                      }> {demande.status} </span> </p>
                      <div className='buttons d-flex d-lg-block justify-content-center flex-column'>
                        <Link to="/voir-profile" class="btn btn-primary ms-1  mt-1 text-light ">voir profile professional</Link>
                      </div>
                    </div>
                </div>
            </div>
        ))}

      </div>
      </div>
        )}
         <div className="prefooter pt-3 pb-4" style={{ position:'fixed', bottom: 0, left: 0, right: 0, width: '100%' }}>
        <div className="container">
        </div>
      </div>
    </>
  );
}

export default PageHomeClient;
