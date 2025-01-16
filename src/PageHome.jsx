import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import './PageHome.css';

function PageHomeClient() {
  const [activeSection, setActiveSection] = useState('home'); // État pour la section active

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="navlogo">
            lacliniquetechnique
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>La Clinique Technique</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Navigation Bar */}
      <div className="nav_bar_container d-flex justify-content-center">
        <ul className="nav_bar d-flex justify-content-center">
          <li>
            <button
              className={`link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setActiveSection('home')}
            >
              Home
            </button>
          </li>
          <li className="ms-4">
            <button
              className={`link ${activeSection === 'history' ? 'active' : ''}`}
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
          <div className="col mb-4 ">
              <div className="card">
                  <div className="card-footer">
                    <h5 className="nom-prof card-title ">Demande de transport</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text text">Travail á faire : build un mur </p>
                    <p className="card-text text">Date de la demande : 25-05-2003 22:40 </p>
                    <p className="card-text text">Heure prévue : 30-05-2003 22:00</p>
                    <p className="card-text text">Adresse de intervention : av cairo N 67 Tetouan </p>
                    <p className="card-text text">Nom du professional  : Akram Maroun </p>
                    <div className='buttons d-flex d-lg-block justify-content-center flex-column'>
                      <a href="/voir-profile" class="btn btn-primary  mt-1 text-light ">voir profile professional</a>
                      <a href="/voir-profile" class="btn btn-primary ms-1 mt-1 text-light ">Annuler Demande</a>
                    </div>
                  </div>
              </div>
          </div>
          <div className="col mb-4 ">
              <div className="card">
                  <div className="card-footer">
                    <h5 className="nom-prof card-title ">Demande de transport</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text text">Travail á faire : build un mur </p>
                    <p className="card-text text">Date de la demande : 25-05-2003 22:40 </p>
                    <p className="card-text text">Heure prévue : 30-05-2003 22:00</p>
                    <p className="card-text text">Adresse de intervention : av cairo N 67 Tetouan </p>
                    <p className="card-text text">Nom du professional  : Akram Maroun </p>
                    <div className='buttons d-flex d-lg-block justify-content-center flex-column'>
                      <a href="/voir-profile" class="btn btn-primary  mt-1 text-light ">voir profile professional</a>
                      <a href="/voir-profile" class="btn btn-primary ms-1 mt-1 text-light ">Annuler Demande</a>
                    </div>
                  </div>
              </div>
          </div>
          <div className="col mb-4 ">
              <div className="card">
                  <div className="card-footer">
                    <h5 className="nom-prof card-title ">Demande de transport</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text text">Travail á faire : build un mur </p>
                    <p className="card-text text">Date de la demande : 25-05-2003 22:40 </p>
                    <p className="card-text text">Heure prévue : 30-05-2003 22:00</p>
                    <p className="card-text text">Adresse de intervention : av cairo N 67 Tetouan </p>
                    <p className="card-text text">Nom du professional  : Akram Maroun </p>
                    <div className='buttons d-flex d-lg-block justify-content-center flex-column'>
                      <a href="/voir-profile" class="btn btn-primary  mt-1 text-light ">voir profile professional</a>
                      <a href="/voir-profile" class="btn btn-primary ms-1 mt-1 text-light ">Annuler Demande</a>
                    </div>
                  </div>
              </div>
          </div>
          <div className="col mb-4 ">
              <div className="card">
                  <div className="card-footer">
                    <h5 className="nom-prof card-title ">Demande de transport</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text text">Travail á faire : build un mur </p>
                    <p className="card-text text">Date de la demande : 25-05-2003 22:40 </p>
                    <p className="card-text text">Heure prévue : 30-05-2003 22:00</p>
                    <p className="card-text text">Adresse de intervention : av cairo N 67 Tetouan </p>
                    <p className="card-text text">Nom du professional  : Akram Maroun </p>
                    <div className='buttons d-flex d-lg-block justify-content-center flex-column'>
                      <a href="/voir-profile" class="btn btn-primary  mt-1 text-light ">voir profile professional</a>
                      <a href="/voir-profile" class="btn btn-primary ms-1 mt-1 text-light ">Annuler Demande</a>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
        )}
        {activeSection === 'history' && (
          <div id="history" className='history-class container bg-light border rounded p-4 col-11 col-lg-11 mt-1 mb-5'>
        <h3 className='sous-title mb-3' >le history des demandes : </h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div className="col mb-4 ">
            <div className="card">
                <div className="card-footer">
                  <h5 className="nom-prof card-title ">Demande de transport</h5>
                </div>
                <div className="card-body">
                  <p className="card-text text">Travail á faire : build un mur </p>
                  <p className="card-text text">Date de la demande : 25-05-2003 22:40 </p>
                  <p className="card-text text">Heure prévue : 30-05-2003 22:00</p>
                  <p className="card-text text">Adresse de intervention : av cairo N 67 Tetouan </p>
                  <p className="card-text text">Nom du professional  : Akram Maroun </p>
                  <div className='buttons d-flex d-lg-block justify-content-center flex-column'>
                    <a href="/voir-profile" class="btn btn-primary  mt-1 text-light ">voir profile professional</a>
                    <a href="/voir-profile" class="btn btn-primary ms-1 mt-1 text-light ">Annuler Demande</a>
                  </div>
                </div>
            </div>
        </div>
        <div className="col mb-4 ">
            <div className="card">
                <div className="card-footer">
                  <h5 className="nom-prof card-title ">Demande de transport :</h5>
                </div>
                <div className="card-body">
                  <p className="card-text text">Travail á faire : build un mur </p>
                  <p className="card-text text">Date de la demande : 25-05-2003 22:40 </p>
                  <p className="card-text text">Heure prévue : 30-05-2003 22:00</p>
                  <p className="card-text text">Adresse de intervention : av cairo N 67 Tetouan </p>
                  <p className="card-text text">Nom du professional  : Akram Maroun </p>
                  <div className='buttons d-flex d-lg-block justify-content-center flex-column'>
                    <a href="/voir-profile" class="btn btn-primary  mt-1 text-light ">voir profile professional</a>
                    <a href="/voir-profile" class="btn btn-primary ms-1 mt-1 text-light ">Annuler Demande</a>
                  </div>
                </div>
            </div>
        </div>
        <div className="col mb-4 ">
            <div className="card">
                <div className="card-footer">
                  <h5 className="nom-prof card-title ">Demande de transport</h5>
                </div>
                <div className="card-body">
                  <p className="card-text text">Travail á faire : build un mur </p>
                  <p className="card-text text">Date de la demande : 25-05-2003 22:40 </p>
                  <p className="card-text text">Heure prévue : 30-05-2003 22:00</p>
                  <p className="card-text text">Adresse de intervention : av cairo N 67 Tetouan </p>
                  <p className="card-text text">Nom du professional  : Akram Maroun </p>
                  <div className='buttons d-flex d-lg-block justify-content-center flex-column'>
                    <a href="/voir-profile" class="btn btn-primary  mt-1 text-light ">voir profile professional</a>
                    <a href="/voir-profile" class="btn btn-primary ms-1 mt-1 text-light ">Annuler Demande</a>
                  </div>
                </div>
            </div>
        </div>
        <div className="col mb-4 ">
            <div className="card">
                <div className="card-footer">
                  <h5 className="nom-prof card-title ">Demande de transport</h5>
                </div>
                <div className="card-body">
                  <p className="card-text text">Travail á faire : build un mur </p>
                  <p className="card-text text">Date de la demande : 25-05-2003 22:40 </p>
                  <p className="card-text text">Heure prévue : 30-05-2003 22:00</p>
                  <p className="card-text text">Adresse de intervention : av cairo N 67 Tetouan </p>
                  <p className="card-text text">Nom du professional  : Akram Maroun </p>
                  <div className='buttons d-flex d-lg-block justify-content-center flex-column'>
                    <a href="/voir-profile" class="btn btn-primary  mt-1 text-light ">voir profile professional</a>
                    <a href="/voir-profile" class="btn btn-primary ms-1 mt-1 text-light ">Annuler Demande</a>
                  </div>
                </div>
            </div>
        </div>
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
