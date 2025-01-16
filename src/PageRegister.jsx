import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import "./PageRegister.css";

function PageRegister() {
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
      <div className='container1 container bg-light border rounded p-4 col-10 col-lg-4 mb-5'>
        <h3>Créer votre compte</h3>
        <Form className='mt-2'>
        <Form.Group className="mb-3">
            <Form.Label>Nom Complet </Form.Label>
              <div className='d-flex'>
                <Form.Control className='me-2' placeholder='Prénom' />
                <Form.Control className='me-2' placeholder='Nom' />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Numéro de téléphone</Form.Label>
                <div className='d-flex'>
                  <Form.Control placeholder='(+212)' />
                </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type='password' placeholder='*****' />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirmer Mot de passe</Form.Label>
              <Form.Control type='password' placeholder='*****' />
            </Form.Group>
            <div  className=' d-flex  justify-content-center align-items-center'>
              <a style={{height: '30px' }}  className='btn-login bg-dark text-white border rounded ps-4 pe-4'>Connexion</a>
            </div>
        </Form>
        <div className="mt-3">
          <p>Vous avez déjà un compte ?<a href="#!"><span className='lien'> Connectez-vous.</span></a></p>
        </div>
      </div>
      <div className="prefooter pt-3 pb-4" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }}>
        <div className="container">
        </div>
      </div>
      
    </>
  );
}

export default PageRegister;
