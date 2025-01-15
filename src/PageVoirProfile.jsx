import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import "./pageVoirProfile.css";
import star from './assets/star.png';
import macon from './assets/macon.jpg'






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
      <div className="d-flex justify-content-center align-items-center flex-column ">
      <div className=' container-title d-flex align-items-center justify-content-center flex-column mt-5 mt-lg-5 '>
        <p className='title'>Profil du Professionnel</p>                                   
      </div>
      <div className='container bg-light border rounded p-4 col-11 col-lg-6 mt-1 mb-5'>
        <div className='aaaaa justify-content-center  align-items-center d-flex '>
            <img className='image' src={macon} thumbnail/>
          <div className=' cont ms-3  '>
            <h2 className='nom'>Ilias Maroun </h2>
            <h2 className='profess'>Profession : Macon</h2>
            <a href="#" class="btn btn-primary mt-2 text-light">Demander Professional</a>
          </div>
        </div>
        <div className='mt-3'>
          <h2 className='profess'> <span class='test'>Address </span>: Av cairo N 67 Tétouan</h2>
          <h2 className='profess'><span class='test'>Némuro téléphone: </span> +212602236509</h2>
          <h2 className='profess'> <span class='test'>Description :</span></h2>
          <h2 className='description'>aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaa</h2>
          <h2 className='profess'><span class='test'>Avis : </span> 4.5/5</h2>
        </div>

      </div>
      </div>
      <div className="prefooter pt-3 pb-4" style={{position:'fixed',  bottom: 0, left: 0, right: 0, width: '100%' }}>
        <div className="container">
        </div>
      </div>
      
    </>
  );
}

export default PageFormLieuDate;
