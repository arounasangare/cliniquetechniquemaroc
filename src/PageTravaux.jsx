import 'bootstrap/dist/css/bootstrap.min.css';
// import pro from '../assets/pro.svg';
// import partic from '../assets/partic.svg';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import ChooseRoleOfUser from './ChooseRoleOfUser';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
// import lin from '../assets/lin.svg';
// import face from '../assets/face.svg';
// import insta from '../assets/instagram-svgrepo-com.svg';
// import one from '../assets/1.svg'
// import two from '../assets/2.svg'
// import three from '../assets/3.svg'
// import four from '../assets/4.svg'
// import five from '../assets/5.svg'
// import six from '../assets/6.svg'
// import seven from '../assets/7.svg'
// import eight from '../assets/8.svg'
// import nine from '../assets/9.svg'
// import lct from '../assets/Photo LCT .png'
// import lctphoto from '../assets/photo LCT fissure.png'
import axios from 'axios';
// import img from '../assets/bureau-etude-construction.jpg'
import CircleComponent from './CircleComponent';
import CircleComponent2 from './CircleComponent2';
// import TitleSection from './TitleSection';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import WhyChooseUs from './WhyChooseUs';
import CirecleTravaux from './CirecleTravaux';

function PageTravaux() {
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
                {/* <Nav.Link href="#services">
                  <p className="item">Features</p>
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <p className="item">Pricing</p>
                </Nav.Link>
                <Nav.Link href="#contact">
                  <p className="item">Contact</p>
                </Nav.Link> */}
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
                  <p className="uhfieryfueriug nuhruehnjtrh mb-0">Travaux</p>
                  <p className='uhfieryfueriug lrlrlr'>Choisissez le service dont vous avez besoin pour vos travaux.</p> 
                  <CirecleTravaux/>
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

export default PageTravaux;
