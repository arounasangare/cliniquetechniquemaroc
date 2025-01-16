import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import { useState } from 'react';

function LoginPro() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email requis';
    if (!formData.password) newErrors.password = 'Mot de passe requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Connexion réussie!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="navlogo">
            <p className="navlogo">La Clinique Technique</p>
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
                </Nav.Link>
                <Nav.Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <h1 style={{ textAlign: 'center', color: '#002964' }}>Se connecter</h1>
      <div className="container-sm bg-light border rounded p-4 col-10 col-lg-4 mt-5 mb-5">

        <Form onSubmit={handleSubmit} className="mt-2">
          <Form.Group className="mb-3">
            <Form.Label>Adresse Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre adresse email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrez votre mot de passe"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Lien flexbox pour "Mot de passe oublié ?" et "Vous n'avez pas de compte ?" */}
          <div className="d-flex justify-content-between mt-2">

            <Link to="/inscription" className="text-primary">
              Vous n'avez pas de compte ?
            </Link>
            <Link to="/mot-de-passe-oublie" className="text-primary">
              Mot de passe oublié ?
            </Link>
           
          </div>

          <div className="d-flex justify-content-center align-items-center mt-4">
            <Link to="/Workspace">
              <button className="giojiojioj">Connexion</button>
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

export default LoginPro;
