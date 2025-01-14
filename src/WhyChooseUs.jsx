import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import hours from '/src/assets/24-hours2.png';
import constructeur from '/src/assets/constructeur.png';
import bill from '/src/assets/bill.png';
import pricetag from '/src/assets/price-tag.png';






const WhyChooseUs = () => {
  return (
    <div className="mt-5">
    <div class="">
        <h3 className="text-center" style={{fontSize: '36px',fontWeight: 'bold',marginBottom: '20px',color: '#002964'}}>4 Raisons Pour Nous Choisir </h3>
    </div>
    <div class="d-flex flex-wrap flex-md-nowrap justify-content-center">
        <Card style={{ width: '14rem',  backgroundColor: '#002964',  marginRight: '20px',marginBottom:'20px' }}>
            <Card.Img variant="top" style={{ width: '12rem', height: '12rem'}} src={hours} />
            <Card.Body>
                <Card.Title  style={{ lineHeight: '30px'}} class="fs-3 fw-bold text-white mt-5">Service 7j/7 24h/24</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',  backgroundColor: '#002964',  marginRight: '20px',marginBottom:'20px' }}>
            <Card.Img variant="top" style={{ width: '12rem', height: '12rem', }} src={constructeur} />
            <Card.Body>
                <Card.Title style={{ lineHeight: '30px'}} class="fs-3 fw-bold text-white mt-3">Réseau de professionnels qualifiés</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem', backgroundColor: '#002964',  marginRight: '20px',marginBottom:'20px' }}>
            <Card.Img variant="top" style={{ width: '12rem', height: '12rem'}} src={pricetag} />
            <Card.Body>
                <Card.Title style={{ lineHeight: '30px'}} class="fs-3 fw-bold text-white mt-2">Fourchette de prix connue avant intervention</Card.Title>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem',  backgroundColor: '#002964',  marginRight: '20px', marginBottom:'20px' }}>
            <Card.Img variant="top" style={{ width: '12rem', height: '12rem'}} src={bill} />
            <Card.Body>
                <Card.Title style={{ lineHeight: '30px'}} class="fs-3 fw-bold text-white mt-4">Sans majoration soir et week-end + devis gratuit</Card.Title>
            </Card.Body>
        </Card>
    </div>
    </div>
  
  
    
  );
};

export default WhyChooseUs;
