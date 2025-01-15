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



function SignupFirstStep() {
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
                    <a >
                      <button className="giojiojioj vrvrvrvr ">Professionnel Adhérer au Réseau</button>
                    </a>
                  </div>
                </Nav.Link>
                <Nav.Link>
                  <div className="button ngfgureg mt-0">
                    <Link to="/login">
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


        <div className="container-fluid">
        <div class="marquee">
  {/* <div class="track">
    <div class="contenthutgiyhrk">
      &nbsp;Accueil Téléphonique de 8h à 19h&nbsp;|&nbsp;+33 (0)4 65 84 65 38&nbsp;|&nbsp;Email: contact@lacliniquetechnique.fr
    </div>
    <div class="contenthutgiyhrk">
      &nbsp;Accueil Téléphonique de 8h à 19h&nbsp;|&nbsp;+33 (0)4 65 84 65 38&nbsp;|&nbsp;Email: contact@lacliniquetechnique.fr
    </div>
    <div class="contenthutgiyhrk">
      &nbsp;Accueil Téléphonique de 8h à 19h&nbsp;|&nbsp;+33 (0)4 65 84 65 38&nbsp;|&nbsp;Email: contact@lacliniquetechnique.fr
    </div>
    <div class="contenthutgiyhrk">
      &nbsp;Accueil Téléphonique de 8h à 19h&nbsp;|&nbsp;+33 (0)4 65 84 65 38&nbsp;|&nbsp;Email: contact@lacliniquetechnique.fr
    </div>
    <div class="contenthutgiyhrk">
      &nbsp;Accueil Téléphonique de 8h à 19h&nbsp;|&nbsp;+33 (0)4 65 84 65 38&nbsp;|&nbsp;Email: contact@lacliniquetechnique.fr
    </div>
    <div class="contenthutgiyhrk">
      &nbsp;Accueil Téléphonique de 8h à 19h&nbsp;|&nbsp;+33 (0)4 65 84 65 38&nbsp;|&nbsp;Email: contact@lacliniquetechnique.fr
    </div>
    <div class="contenthutgiyhrk">
      &nbsp;Accueil Téléphonique de 8h à 19h&nbsp;|&nbsp;+33 (0)4 65 84 65 38&nbsp;|&nbsp;Email: contact@lacliniquetechnique.fr
    </div>
    <div class="contenthutgiyhrk">
      &nbsp;Accueil Téléphonique de 8h à 19h&nbsp;|&nbsp;+33 (0)4 65 84 65 38&nbsp;|&nbsp;Email: contact@lacliniquetechnique.fr
    </div>
    <div class="contenthutgiyhrk">
      &nbsp;Accueil Téléphonique de 8h à 19h&nbsp;|&nbsp;+33 (0)4 65 84 65 38&nbsp;|&nbsp;Email: contact@lacliniquetechnique.fr
    </div>
    <div class="contenthutgiyhrk">
      &nbsp;Accueil Téléphonique de 8h à 19h&nbsp;|&nbsp;+33 (0)4 65 84 65 38&nbsp;|&nbsp;Email: contact@lacliniquetechnique.fr
    </div>
    <div class="contenthutgiyhrk">
      &nbsp;Accueil Téléphonique de 8h à 19h&nbsp;|&nbsp;+33 (0)4 65 84 65 38&nbsp;|&nbsp;Email: contact@lacliniquetechnique.fr
    </div>
  </div> */}
</div>

        <div className="loginnavbar">
            {/* <p className="tregrt gmreghiuthriuengi">La Clinique Technique</p> */}
          </div>
          <div className="comptearebour">
            <div className="realcompte">
              {/* <p className="huomjdyevh">
                Ouverture de notre plateforme le 6 janvier prochain
              </p> */}
              <div className="realcompte pb-5 pt-5 justify-content-center align-items-center">
                {/* <div className="iamgeofhfuehhere col-lg-5 d-none d-lg-block">
                  <img src={lct} alt="" />
                </div> */}
                <div className='d-flex align-items-center justify-content-center flex-column'>
                  {/* <TitleSection /> */}
                   <p className="uhfieryfueriug nuhruehnjtrh mb-0">La Clinique Technique</p>
                  <p className='uhfieryfueriug lrlrlr'> Réparer, rénover, sans stress.</p> 
                  {/* <p className='gmiou45iogeroihjgnoer text-center'><span className='njuhriu'>Nos Experts</span>: Architectes, Ingénieur(e)s Génie Civil, Ingénieur(e)s Géotechnique, Experts en Bâtiment, Architectes d'intérieur, Avocats en Droit Immobilier, Ingénieur(e)s Electricité, AMO, Diagnostiqueurs Immobiliers<br /> <span className='jioguoyrgtr'>Proche de chez vous!</span></p> */}
                   <CircleComponent/>
               
                  
                 
                  <Nav.Link className='ms-0 mt-2'>
                  <div className="button nfreuohregdd ngfgureg mt-0">
                    {/* <Link to="/start">
                      <button className="giojiojioj ngriugyoeruogyriu">Commencez maintenant</button>
                    </Link> */}
                  </div>
                </Nav.Link>
                </div>
                  <WhyChooseUs/>
                 <HowItWorks/> 
                 <Testimonials/>
                {/* <p className='uhfieryfueriug mt-4 grjeioguioeriogjer'>Votre guichet unique</p> */}
                {/* <div className="cardsofbanner  row mt-4 ">
                  <Link> 
                  </Link>
                <div className="cardonehere col-lg-4 col-md-6">

                  
                <div className="contentherekigek">
  <p className='jiogyreiugijkmr'>Votre Espace Connecté</p>
  <p className='iopfnuee'> - Générer, Gérer, Suivre et Archiver vos Devis, vos missions et Documents Sensibles en temps réel.</p>
</div>
</div>
<div className="cardonehere col-lg-4 col-md-6">
  <div className="contentherekigek">
    <p className='jiogyreiugijkmr'>Consultation Technique Rémunérée</p>
    <p className='iopfnuee'>- Mise en relation avec un Expert spécialisé proche de chez vous.</p>
  </div>
</div>
<div className="cardonehere col-lg-4 col-md-6">
  <div className="contentherekigek">
    <p className='jiogyreiugijkmr'>Tarificateur de Missions <br /> en quelques clics</p>
    <p className='iopfnuee'> - Permis de Construire, étude charpente, étude béton, étude de Sol, division de parcelle, litige, procédure judiciaire, décoration aménagement, diagnostic et expertise structurelle, Maîtrise d'Oeuvre, diagnostic immobilier, AMO</p>
  </div>
</div>

<div className="cardonehere col-lg-4 col-md-6">
  <div className="contentherekigek">
    <p className='jiogyreiugijkmr'>Tarificateur de devis Travaux <br /> en quelques clics</p>
    <p className='iopfnuee'> - Construction neuve, réhabilitation, rénovation intérieure, démolition, terrassement, ravalement, étanchéité, isolation</p>
  </div>
</div>

<div className="cardonehere col-lg-4 col-md-6">
  <div className="contentherekigek">
    <p className='jiogyreiugijkmr'>Le CI <br />Le Curriculum Immobilier</p>
    <p className='iopfnuee'> - 1er Carnet de santé pour les bâtiments et les ouvrages architecturaux</p>
  </div>
</div>
<div className="cardonehere col-lg-4 col-md-6">
  <div className="contentherekigek">
    <p className='jiogyreiugijkmr'>Bibliothèque Technique</p>
    <p className='iopfnuee'> - Consulter, publier des modèles et exemples d'études techniques, plans et rapports</p>
  </div>
</div>
<div className="cardonehere col-lg-4 col-md-6">
  <div className="contentherekigek">
    <p className='jiogyreiugijkmr'>La Bourse des Prix</p>
    <p className='iopfnuee'> - S'informer et comparer les prix des matériaux, matériels et main d'œuvre du BTP</p>
  </div>
</div>
<div className="cardonehere col-lg-4 col-md-6">
  <div className="contentherekigek">
    <p className='jiogyreiugijkmr'>Service de Vérification et d'Optimisation</p>
    <p className='iopfnuee'> - Obtenez un second avis par l'un de nos experts</p>
  </div>
</div>
<div className="cardonehere col-lg-4 col-md-6">
  <div className="contentherekigek">
    <p className='jiogyreiugijkmr'>Notre E-Market</p>
    <p className='iopfnuee'> - Achetez, vendez et louez</p>
  </div>
</div>

                </div> */}
                  {/* <div className="imageodgueh d-flex justify-content-center">
                  <img src={img} alt="" className='gikroujgkroepgkr' />
                </div> */}
                
                {/* <p className='jioyuiyihjkop mb-0'>+33 (0)4 65 84 65 38 <p className='jioyuiyihjkop'>Accueil Telephonique de 8h a 19h</p></p> */}

              </div>
            </div>
          </div>
        </div>
      </div>

     
                  <div className="contact" id='contact'>
        <div className="container-fluid ">
          {/* <p className='bigcontact freggtrhtr mb-0'>Bien que notre siège soit situé à Paris, nos experts sont stratégiquement répartis sur l'ensemble du territoire, toujours à proximité de nos clients. Cette organisation nous permet d'assurer une réactivité optimale et des interventions sur site, avec la garantie d'un accompagnement personnalisé et efficace partout en France.</p> */}

        </div>
      </div>
      <div className="prefooter pt-3 pb-4">
        <div className="container">
        <footer class="row mt-5">
          <div class="col mb-3">
            <a href="/" class="d-flex align-items-center mb-3 ms-0 link-dark text-decoration-none">
            <p className="navlogo text-white">lacliniquetechnique</p>
            </a>
            <p class="text-white">© 2025</p>
            <div className="footercontent">
            
            <div className="socialmedia">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                {/* <img src={lin} alt="LinkedIn" /> */}
                <svg width="24px" height="24px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#0077B5"></circle> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z" fill="white"></path> </g></svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                {/* <img src={face} alt="Facebook" /> */}
                <svg width="24px" height="24px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Facebook-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0"> <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook"> </path> </g> </g> </g></svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                {/* <img src={insta} alt="Instagram" /> */}
                <svg width="24px" height="24px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect> <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"></path> <defs> <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"> <stop stop-color="#B13589"></stop> <stop offset="0.79309" stop-color="#C62F94"></stop> <stop offset="1" stop-color="#8A3AC8"></stop> </radialGradient> <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stop-color="#E0E8B7"></stop> <stop offset="0.444662" stop-color="#FB8A2E"></stop> <stop offset="0.71474" stop-color="#E2425C"></stop> <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop> </radialGradient> <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"> <stop offset="0.156701" stop-color="#406ADC"></stop> <stop offset="0.467799" stop-color="#6A45BE"></stop> <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop> </radialGradient> </defs> </g></svg>
              </a>
            </div> 
          </div>
          </div>


    <div class="col mb-3">
      <h5>à propos de lacliniquetechnique</h5>
      <ul class="nav flex-column fjureghirjomhtrh ms-0">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ms-0 text-muted">Qui sommes-nous ?</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Nous rejoindre</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Nos engagements</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Espace presse</a></li>
      </ul>
    </div>
    <div class="col mb-3 ms-0">
      <h5>Conditions générales d’utilisation</h5>
      <ul class="nav flex-column fjureghirjomhtrh">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Référencement et classement des annonces</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Conditions générales de vente</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Vie privée / cookies</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Vos droits et obligations</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Avis utilisateurs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Charte de bonne conduite</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Accessibilité
        </a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Nos solutions pros</a></li>
      </ul>
    </div>


  </footer>
        </div>
      </div>
      
    </>
  );
}

export default SignupFirstStep;
