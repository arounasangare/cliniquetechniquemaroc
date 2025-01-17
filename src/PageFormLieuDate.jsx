import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import "./pageFormLieuDate.css";

function PageFormLieuDate() {
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
      <div className='container-sm bg-light border rounded p-4 col-10 col-lg-4 mt-5 mb-5'>
        <h3>Complétez votre demande</h3>
        <Form className='mt-2'>
            <Form.Group className="mb-3">
                <Form.Label>Nom Complet </Form.Label>
                <div className='d-flex'>
                  <Form.Control placeholder='Entrez votre nom complet' />
                </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Numéro de téléphone</Form.Label>
              <Form.Control  placeholder='(+212)' />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label >Que souhaitez-vous exactement ?</Form.Label>
              <select className='select_exact' >
                <option>Construction de murs</option>
                <option>Réparation de fissures</option>
                <option>Réalisation de fondations</option>
                <option>Rénovation de façades</option>
                <option>Création d’ouvertures</option>
                <option>Autre</option>
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date </Form.Label>
              <div className='d-flex'>
                <Form.Control className='me-2' placeholder='jour' />
                <Form.Control className='me-2' placeholder='mois' />
                <Form.Control placeholder='année' />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Heure</Form.Label>
              <div className='d-flex'>
                <Form.Control className='me-2 ' style={{ width: '100px' }}placeholder='heure' />
                <Form.Control className='me-2  'style={{ width: '100px' }} placeholder='min' />
              </div>
            </Form.Group>
          <Form.Group className="mb-3 " >
            <Form.Label>Adresse</Form.Label>
            <div className='d-flex'>
              <Form.Control className='me-2' placeholder='Ville :' />
              <Form.Control className='me-2' placeholder='Rue :' />
              <Form.Control placeholder='N :' />
            </div>
          </Form.Group>

            <div  className='d-flex justify-content-center align-items-center'>
              <Link to="/resultats" style={{ height: '30px' }} className="bg-dark text-white border rounded ps-4 pe-4">
                Trouver un professionnel
              </Link> 
            </div>
        </Form>
      </div>

      <div className="prefooter pt-3 pb-4" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }}>
        <div className="container">
        </div>
      </div>
      
    </>
  );
}

export default PageFormLieuDate;
