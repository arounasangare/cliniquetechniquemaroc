import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import "./PageCompteCree.css";

function PageCompteCree() {
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
                   {/*<div className="button ngfgureg mt-0">
                    <Link to="/login">
                      <button className="giojiojioj">Connexion</button>
                    </Link>
                  </div>*/}
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className='container text-center bg-light border rounded p-4 col-10 col-lg-4 mt-5 mb-5'>
          <h3 style={{color:'black'}} >Votre Compte est crée avec succès</h3>
        <div className="container2 mt-3">
           <a href="#!"><svg width='25px' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#393f81"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#393f81" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#393f81" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg><span className='lien'> Retourner á la page de connexion</span></a>
        </div>
      </div>

      <div className="prefooter pt-3 pb-4" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }}>
        <div className="container">
        </div>
      </div>
      
    </>
  );
}

export default PageCompteCree;
