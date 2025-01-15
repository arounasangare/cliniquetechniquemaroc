import React from "react";
import { Link } from "react-router-dom";

import dixe from './assets/macon.jpg';
import diixe from './assets/charpantier.jpg'
import diiixe from './assets/jardinier.jpg'
import dixxxxe from './assets/triporteur.jpeg'
import dixxxxxe from './assets/plombier.jpg'
import diiixxe from './assets/peintre.webp'
import diiiii from './assets/electrique.png'
import de from './assets/Carreleur.jpg'
import dee from './assets/Structure.jpg'
import deee from './assets/electrique.jpg'
import deeee from './assets/geo.jpg'
import pisc from './assets/piscinist.png'
import jjj from './assets/jardy.png'
import'./CircleComponent .css'

const CirecleService = () => {
  // Liste des cercles avec leurs titres et images
  const circles = [
    // { id: 5, title: "Triporteur", imageUrl: dixxxxe },
    // { id: 5, title: "plombier", imageUrl: dixxxxxe },
    { id: 5, title: "pisciniste", imageUrl: pisc, link: "/info-supplementaire" },
     { id: 3, title: "Jardinier", imageUrl: jjj , link: "/info-supplementaire"},
    // { id: 1, title: "Maçon", imageUrl: dixe },
    // { id: 4, title: "Électricien", imageUrl: diiiii },
    //  { id: 5, title: " Peintre", imageUrl: diiixxe },
    //  { id: 2, title: "Carreleur", imageUrl: de }, 
    //  { id: 5, title: "Ingénieur Structure", imageUrl: dee },
    //  { id: 5, title: "Ingénieur Génie Electrique", imageUrl: deee },
    //  { id: 5, title: "Ingénieur Géotechnique ", imageUrl: deeee },
    //  { id: 5, title: "plombier", imageUrl: dixxxxxe },
    // { id: 5, title: "Rénovation", imageUrl: dixxxxe },
   
    // { id: 5, title: "plombier", imageUrl: dixxxxxe },
  
    //
    
  ];

  return (
    <div className="circle-container">
      {circles.map((circle, index) => (
        <div key={index} className="gfhfg">
          <Link to={circle.link}  className="bulle-link">
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

export default CirecleService;
