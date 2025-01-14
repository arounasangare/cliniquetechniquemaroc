import React from "react";
import "./Testimonials.css"; // Importation des styles
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import mas from './assets/macon-1.png'
import mass from './assets/plom.jpg'
import masss from './assets/elect.jpg'

const testimonials = [
  {
    id: 1,
    image: mas, // Remplacez par le chemin réel
    quote: "Très satisfait, le professionnel m'a contacté très rapidement. Tarif clair, prix raisonnable et le travail a été bien fait.",
    name: "Guillaume",
    location: "Paris (75)",
    problem: "Problème de serrurerie",
  },

  {
    id: 1,
    image: mass, // Remplacez par le chemin réel
    quote: "Très satisfait, le professionnel m'a contacté très rapidement. Tarif clair, prix raisonnable et le travail a été bien fait.",
    name: "Guillaume",
    location: "Paris (75)",
    problem: "Problème de serrurerie",
  },

  {
    id: 1,
    image: masss, // Remplacez par le chemin réel
    quote: "Très satisfait, le professionnel m'a contacté très rapidement. Tarif clair, prix raisonnable et le travail a été bien fait.",
    name: "Guillaume",
    location: "Paris (75)",
    problem: "Problème de serrurerie",
  },
  // Ajoutez d'autres avis ici
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials-container">
      <h2>Ce que pensent nos clients</h2>
      <div className="testimonial-card">
        <FaChevronLeft className="arrow left" onClick={handlePrev} />
        <div className="testimonial-content">
          <img
            src={testimonials[currentIndex].image}
            alt="Customer Feedback"
            className="testimonial-image"
          />
          <div className="testimonial-text">
            <p className="quote">“{testimonials[currentIndex].quote}”</p>
            <p className="author">
              <strong>{testimonials[currentIndex].name}</strong> -{" "}
              {testimonials[currentIndex].location}
            </p>
            <p className="problem">{testimonials[currentIndex].problem}</p>
          </div>
        </div>
        <FaChevronRight className="arrow right" onClick={handleNext} />
      </div>
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
