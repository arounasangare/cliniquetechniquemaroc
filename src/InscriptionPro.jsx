import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import { useState } from 'react';

function InscriptionPro() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    profession: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nom complet requis';
    if (!formData.address) newErrors.address = 'Adresse requise';
    if (!formData.phone) newErrors.phone = 'Numéro de téléphone requis';
    if (!formData.email) newErrors.email = 'Email requis';
    if (!formData.password) newErrors.password = 'Mot de passe requis';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    if (!formData.profession) newErrors.profession = 'Profession requise';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'Vous devez accepter les conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Soumettre le formulaire ou rediriger
      alert('Formulaire soumis avec succès!');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <>
      <Navbar expand="lg" className="navbar ">
        <Container>
          <Navbar.Brand href="#home" className="navlogo">
            <p className="navlogo">LaCliniqueTechnique</p>
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

      <h1 style={{textAlign:'center', color:'#002964'}}>Prêt à nous rejoindre ?</h1>
      <div className='container-sm bg-light border rounded p-4 col-10 col-lg-4 mt-5 mb-5'>

        <Form onSubmit={handleSubmit} className='mt-2'>
          <Form.Group className="mb-3">
            <Form.Label>Nom Complet </Form.Label>
            <div className='d-flex'>
              <Form.Control
                placeholder='Entrez votre nom complet'
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Adresse </Form.Label>
            <Form.Control
              placeholder="Entrez votre adresse"
              name="address"
              value={formData.address}
              onChange={handleChange}
              isInvalid={!!errors.address}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.address}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control
              placeholder='(+212)'
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Adresse Email</Form.Label>
            <Form.Control
              type="email"
              placeholder='Entrez votre adresse email'
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

          <Form.Group className="mb-3">
            <Form.Label>Confirmer le mot de passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmez votre mot de passe"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              isInvalid={!!errors.confirmPassword}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Métier du professionnel</Form.Label>
            <Form.Control
              as="select"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              isInvalid={!!errors.profession}
              required
            >
              <option>Plombier</option>
              <option>Électricien</option>
              <option>Maçon</option>
              <option>Taximan</option>
              <option>Autre</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.profession}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="J'accepte les conditions d'utilisation"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              isInvalid={!!errors.termsAccepted}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.termsAccepted}
            </Form.Control.Feedback>
          </Form.Group>

          <div className='d-flex justify-content-center align-items-center'>
          <Link to="/Workspace">
                      <button className="giojiojioj">Inscription</button>
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

export default InscriptionPro;
