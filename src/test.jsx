import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


import { Link } from 'react-router-dom';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import "./PageHome.css";
import star from './assets/star.png';
import macon from './assets/macon.jpg';
import depa from './assets/depa.png'



function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    section.classList.remove('active');
    section.style.display = 'none';
  });

  // Remove active state from all buttons
  const buttons = document.querySelectorAll('.nav_bar button');
  buttons.forEach((button) => button.classList.remove('active'));

  // Show the selected section
  const sectionToShow = document.getElementById(sectionId);
  sectionToShow.classList.add('active');
  sectionToShow.style.display = 'block';

  // Add active state to the clicked button
  const activeButton = document.querySelector(`button[onclick="showSection('${sectionId}')"]`);
  activeButton.classList.add('active');
}

function PageHomeClient() {

  return (
    <>
      <Navbar expand="lg" className="navbar ">
        <Container>
          <Navbar.Brand href="#home" className="navlogo">
            <p className="navlogo">lacliniquetechnique</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                La Clinique Technique
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end align-items-center flex-grow-1">
                <Nav.Link href="https://lacliniquetechnique.pro" target="_blank" rel="noopener noreferrer">
                {/*<div className="button ngfgureg mt-0">
                    <a >
                      <button className="giojiojioj vrvrvrvr ">Professionnel Adhérer au Réseau</button>
                    </a>
                  </div>*/}
                </Nav.Link>
                <Nav.Link>
                  <div className="button ngfgureg mt-0">
                    {/*<Link to="/login">
                      <button className="giojiojioj">Connexion</button>
                    </Link>*/}
                  </div>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className='nav_bar_container d-flex justify-content-center'>
        <ul className='nav_bar d-flex justify-content-center'>
          <li className='' href="#home" class="home_link" >
            <button className='link' onclick="showSection('home')" ><span className='link'>Home</span></button>
          </li>
          <li className='ms-4' href="#history" class="home_link" >
            <button className='link' onclick="showSection('history')" ><span className='link'>History</span></button>
          </li>
        </ul>
      </div>

      
      <div className=' container-title d-flex align-items-center justify-content-center flex-column mt-3 mt-lg-5 '>
        <p className='title'>Bienvenue sur votre espace client</p>                                   
      </div>
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
      <div id="history" className='history-class container bg-light border rounded p-4 col-11 col-lg-11 mt-1 mb-5'>
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
                  <h5 className="nom-prof card-title ">Historique des demandes :</h5>
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
      <div className="prefooter pt-3 pb-4" style={{ position:'fixed', bottom: 0, left: 0, right: 0, width: '100%' }}>
        <div className="container">
        </div>
      </div>
      
    </>
    
  );
   
}



export default PageHomeClient;
