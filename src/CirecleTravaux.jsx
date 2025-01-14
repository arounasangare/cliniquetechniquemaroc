import React from "react";
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
import maç from './assets/maçone.png'
import el from  './assets/electrooo.png'
import pi from './assets/peinto.png'
import cl from './assets/carllo.png'
import pl from './assets/plumbo.png'

import'./CircleComponent .css'

const  CirecleTravaux = () => {
  // Liste des cercles avec leurs titres et images
  const circles = [
    // { id: 5, title: "Triporteur", imageUrl: dixxxxe },
    // { id: 5, title: "plombier", imageUrl: dixxxxxe },
    //  { id: 3, title: "Jardinier", imageUrl: diiixe },
     { id: 1, title: "Maçon", imageUrl: maç },
     { id: 4, title: "Électricien", imageUrl: el },
     { id: 5, title: " Peintre", imageUrl: pi },
     { id: 2, title: "Carreleur", imageUrl: cl }, 
    //  { id: 5, title: "Ingénieur Structure", imageUrl: dee },
    //  { id: 5, title: "Ingénieur Génie Electrique", imageUrl: deee },
    //  { id: 5, title: "Ingénieur Géotechnique ", imageUrl: deeee },
     { id: 5, title: "plombier", imageUrl: pl },
    // { id: 5, title: "Rénovation", imageUrl: dixxxxe },
   
    // { id: 5, title: "plombier", imageUrl: dixxxxxe },
  
    //
    
  ];

  return (
    <div className="circle-container">
       


        {circles.map(function(element, index){
            return(
                <div className="gfhfg">
                    <div className="bulle">
                    <div className="imagee">
                <img src={element.imageUrl} alt="" />

                </div>
                 </div>
                     <p className="tiiitre">{element.title}</p>
                 </div>
            )
        })}


    </div>
  );
};

export default CirecleTravaux;
