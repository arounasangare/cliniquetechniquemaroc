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
import cam from './assets/camionet.png'
import tar from './assets/taxiii.png'
import liv from './assets/livrai.png'
import'./CircleComponent .css'

const CirecleTransport = () => {
  // Liste des cercles avec leurs titres et images
  const circles = [
    // { id: 5, title: "Triporteur", imageUrl: dixxxxe },
    // { id: 5, title: "plombier", imageUrl: dixxxxxe },
    // { id: 3, title: "Jardinier", imageUrl: diiixe },
    // { id: 1, title: "Maçon", imageUrl: dixe },
    // { id: 4, title: "Électricien", imageUrl: diiiii },
     { id: 5, title: " Triporteur", imageUrl: diiixxe },
     { id: 2, title: "Camionette", imageUrl: cam }, 
     { id: 5, title: "Taxi", imageUrl: tar },
     { id: 5, title: "Livraison", imageUrl: liv },
    //  { id: 5, title: "Ingénieur Géotechnique ", imageUrl: deeee },
    // { id: 5, title: "plombier", imageUrl: dixxxxxe },
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

export default CirecleTransport;
