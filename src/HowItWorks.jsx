import React from "react";
import "./HowItWorks.css";
import dd from './assets/car.svg';
import dg from './assets/tel.png';
import da from './assets/depa.png';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2>Comment ça marche ?</h2>
      <div className="sections">
        {/* Section Dépannage */}
        <div className="section">
          <h3>Dépannage</h3>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <img
                src={dg}
                alt="Step 1"
                className="step-image"
              />
              <p>
                Par téléphone ou en ligne, vous nous faites part de votre besoin
                en dépannage.
              </p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <img
                src={da}
                alt="Step 2"
                className="step-image"
              />
              <p>
                Un professionnel se présente à votre domicile et réalise un
                devis détaillé gratuit.
              </p>
            </div>
          </div>
        </div>

        {/* Section Travaux */}
        <div className="section">
          <h3>Travaux</h3>
          <div className="steps">
            <div className="step">
              <span className="step-number">3</span>
              <img
                src={dd}
                alt="Step 3"
                className="step-image"
              />
              <p>Le montant n’est prélevé qu’à la fin de l’intervention.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <button className="diagnostic-button">Diagnostic en ligne</button> */}
    </div>
  );
};

export default HowItWorks;
