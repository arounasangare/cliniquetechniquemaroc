import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


import { Link } from 'react-router-dom';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import "./pageResultatsProf.css";
import star from './assets/star.png';
import macon from './assets/macon.jpg';
import depa from './assets/depa.png'



const results = [
  {
    nom: "Ilias Maroun",
    adresse: "Rue cairo N 67 Tetouan",
    distance: "À 2,5 km",
    telephone: "0602236509",
    image: star, // replace with actual image path
    evaluation: 5, // Number of stars
  },
  {
    nom: "Rajae El-Abida",
    adresse: "Boulevard Mohammed V, Tetouan",
    distance: "À 3,2 km",
    telephone: "0602547891",
    image: macon, // replace with actual image path
    evaluation: 4, // Number of stars
  },
  {
    nom: "Mohamed El Hauari",
    adresse: "Rue Hassan II, Tetouan",
    distance: "À 1,8 km",
    telephone: "0601987654",
    image: depa, // replace with actual image path
    evaluation: 3, // Number of stars
  },
  {
    nom: "Amine Bouhajja",
    adresse: "Avenue des FAR, Tetouan",
    distance: "À 5 km",
    telephone: "0611223344",
    image: macon, // replace with actual image path
    evaluation: 5, // Number of stars
  }
  // Add more profiles if needed
];




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
      
      <div className=' container-title d-flex align-items-center justify-content-center flex-column mt-3 mt-lg-5 '>
        <p className='title'>Professionnels disponibles près de chez vous</p>                                   
      </div>
      <div className='container bg-light border rounded p-4 col-11 col-lg-8 mt-1 mb-5'>
        <h3 className='sous-title mb-3' >Choisissez un professionnel : </h3>
        <div className="row row-cols-1 row-cols-md-2">
        {results.map((result) => (

        <div className="col mb-4 ">
            <div className="card">
            <img class=" imagescard card-img-top"  src={result.image} />
              <div>
                <div className="card-footer">
                  <h5 className="nom-prof card-title ">Nom : {result.nom} </h5>
                </div>
                <div className="card-body">
                  <p className="card-text text">Adresse  : {result.adresse} </p>
                  <p className="card-text text">Distance de vous : {result.distance}</p>
                  <p className="card-text text">N téléphone : {result.telephone} </p>
                  <div class="evaluation">
                    <p className="card-text text me-3 mt-1">Évaluation : </p>
                    {[...Array(result.evaluation)].map((_, i) => (

                    <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#efdc0b"></path> </g></svg>
                  ))}

                  </div>
                  <div className='buttons d-flex d-lg-block justify-content-center flex-column'>
                    <Link to="/voir-profile" class="btn btn-primary ms-1 mt-1 text-light " >
                    Voir le profil
                    </Link> 
                    <Link to="/voir-profile" class="btn btn-primary ms-1 mt-1 text-light">
                    Demander Professional
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
        ))}


      </div>
      </div>
      <div className="prefooter pt-3 pb-4" style={{  bottom: 0, left: 0, right: 0, width: '100%' }}>
        <div className="container">
        </div>
      </div>
      
    </>
  );
}

export default PageFormLieuDate;
