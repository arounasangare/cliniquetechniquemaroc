import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';

import axios from 'axios';
// import img from '../assets/bureau-etude-construction.jpg'
import CircleComponent from './CircleComponent';
import CircleComponent2 from './CircleComponent2';
// import TitleSection from './TitleSection';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import WhyChooseUs from './WhyChooseUs';
import CirecleService from './CirecleService';


function  PageServices() {
  const targetDate = new Date("2025-06-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());
  const base_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Envoi de la requête à l'API Laravel
    axios.get(`${base_url}/api/jobs`)
      .then((response) => {
        console.log('ok'); // Affiche la réponse de l'API
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  // Update timeLeft every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Convert milliseconds into days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <>
      {/* Navbar */}
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
                  <div className="button ngfgureg mt-0">
                  <Link to="/professionnel">
                    <button className="giojiojioj vrvrvrvr">S'inscrire en tant que professionnel</button>
                  </Link>
                  </div>
                </Nav.Link>
                <Nav.Link>
                  <div className="button ngfgureg mt-0">
                    <Link to="/login/client">
                      <button className="giojiojioj">Connexion</button>
                    </Link>
                  </div>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Countdown Section */}



      <div className="loginbutton jgreiohgerg d-flex">


        <div className="container">
        <div class="marquee">
  
</div>

        <div className="loginnavbar">
          </div>
          <div className="comptearebour">
            <div className="realcompte">             
              <div className="realcompte pb-5 pt-5 justify-content-center align-items-center">
                <div className='d-flex align-items-center justify-content-center flex-column'>
                   <p className="uhfieryfueriug nuhruehnjtrh mb-0">Services</p>
                  <p className='uhfieryfueriug lrlrlr'>Découvrez nos services pour simplifier votre quotidien</p>                  
                  <CirecleService/>               

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prefooter pt-3 pb-4" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }}>
        <div className="container">
        </div>
      </div>
      
    </>
  );
}

export default PageServices;
