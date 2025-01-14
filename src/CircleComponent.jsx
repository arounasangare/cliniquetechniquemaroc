import React from "react";
import { Link } from "react-router-dom";
import dixe from './assets/macon.jpg';
import diixe from './assets/charpantier.jpg';
import diiixe from './assets/jardinier.jpg';
import dixxxxe from './assets/triporteur.jpeg';
import dixxxxxe from './assets/plombier.jpg';
import diiixxe from './assets/peintre.webp';
import diiiii from './assets/electrique.png';
import de from './assets/Carreleur.jpg';
import trans from './assets/Transport.jpg'
import dd from './assets/car.svg';
import taaa from './assets/tafff.png'
import tata from  './assets/servvvi.png'


const CircleComponent = () => {
  // Liste des cercles avec leurs titres, images et URLs
  const circles = [
    { id: 5, title: "Transports", imageUrl: dd, link: "/transports" },
    { id: 5, title: "Travaux", imageUrl: taaa, link: "/travaux" },
    { id: 3, title: "Services", imageUrl: tata, link: "/services" },
    // Ajoutez d'autres éléments si nécessaire
    // { id: 1, title: "Maçon", imageUrl: dixe, link: "/macon" },
    // { id: 4, title: "Électricien", imageUrl: diiiii, link: "/electricien" },
    // { id: 5, title: "Peintre", imageUrl: diiixxe, link: "/peintre" },
    // { id: 2, title: "Carreleur", imageUrl: de, link: "/carreleur" },
  ];

  return (
    <div className="circle-container">
      {circles.map((circle, index) => (
        <div key={index} className="gfhfg">
          <Link to={circle.link} className="bulle-link">
            <div className="bulle">
              <div className="imagee">
                <img src={circle.imageUrl} alt={circle.title} />
              </div>
            </div>
            <p className="tiiitre">{circle.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CircleComponent;
