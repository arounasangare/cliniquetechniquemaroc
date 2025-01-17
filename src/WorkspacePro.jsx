import React, { useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./WorkspacePro.css";
import tata from  './assets/servvvi.png'
import taataa from './assets/profile.jpg'

const WorkspacePro = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const notifications = [
    { id: 1, type: "Demande", message: "Nouvelle demande de réparation plomberie.", timestamp: "Il y a 2 heures" },
    { id: 2, type: "Message", message: "Message de Marie Curie : Besoin de devis.", timestamp: "Il y a 4 heures" },
    { id: 3, type: "Alerte", message: "Votre rendez-vous avec Paul Martin est confirmé pour demain.", timestamp: "Il y a 1 jour" },
  ];

  const currentRequests = [
    { id: 1, client: "Jean Dupont", service: "Réparation plomberie", status: "En attente" },
    { id: 2, client: "Lucie Martin", service: "Installation électrique", status: "En cours" },
  ];

  const history = [
    { id: 1, client: "Paul Durand", service: "Pose de carrelage", date: "12/01/2024", status: "Terminé" },
    { id: 2, client: "Marie Curie", service: "Réparation toiture", date: "05/01/2024", status: "Annulé" },
  ];

  const calendar = [
    { id: 1, date: "15/01/2024", event: "Rendez-vous avec Jean Dupont" },
    { id: 2, date: "16/01/2024", event: "Inspection pour Lucie Martin" },
  ];

  return (
    <div>
      <Navbar expand="lg" className="navbarrr">
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
                <ul className="navvv-links">
                  <li
                    className={activeSection === "profile" ? "active" : ""}
                    onClick={() => setActiveSection("profile")}
                  >
                    Profil
                  </li>
                  <li
                    className={activeSection === "requests" ? "active" : ""}
                    onClick={() => setActiveSection("requests")}
                  >
                    Demandes en cours
                  </li>
                  <li
                    className={activeSection === "history" ? "active" : ""}
                    onClick={() => setActiveSection("history")}
                  >
                    Historique
                  </li>
                  <li
                    className={activeSection === "calendar" ? "active" : ""}
                    onClick={() => setActiveSection("calendar")}
                  >
                    Calendrier
                  </li>
                  <li
                    className={activeSection === "notifications" ? "active" : ""}
                    onClick={() => setActiveSection("notifications")}
                  >
                    Notifications
                  </li>
                </ul>
                <Nav.Link>
                  <div className="button ngfgureg mt-0">
                    <Link to="/logout">
                      <button className="giojiojioj vrvrvrvr">Déconnexion</button>
                    </Link>
                  </div>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Contenu dynamique */}
      <div className=" container content">
        {activeSection === "profile" && (
          <div className="profile-section">
            <h2>Bienvenue, Aroune</h2>
            <div className="profile-details">
              <img
                src={taataa}
                alt="Artisan"
                className="profile-picture"
              />
              <div>
                <p><strong>Nom :</strong> Aroune</p>
                <p><strong>Email :</strong> aroune.macon@example.com</p>
                <p><strong>Service :</strong> Maçonnerie</p>
              </div>
            </div>
            <button className="edit-profile">Modifier le profil</button>
          </div>
        )}
        {activeSection === "requests" && (
          <div className="requests-section">
            <h3>Demandes en cours</h3>
            <ul>
              {currentRequests.map((request) => (
                <li key={request.id} className="request-item">
                  <p><strong>Client :</strong> {request.client}</p>
                  <p><strong>Service :</strong> {request.service}</p>
                  <p><strong>Statut :</strong> {request.status}</p>
                  <button className="mark-complete">Marquer comme terminée</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeSection === "history" && (
          <div className="history-section">
            <h3>Historique des demandes</h3>
            <ul>
              {history.map((item) => (
                <li key={item.id} className="history-item">
                  <p><strong>Client :</strong> {item.client}</p>
                  <p><strong>Service :</strong> {item.service}</p>
                  <p><strong>Date :</strong> {item.date}</p>
                  <p><strong>Statut :</strong> {item.status}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeSection === "calendar" && (
          <div className="calendar-section">
            <h3>Calendrier</h3>
            <ul>
              {calendar.map((event) => (
                <li key={event.id} className="calendar-item">
                  <p><strong>Date :</strong> {event.date}</p>
                  <p><strong>Événement :</strong> {event.event}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeSection === "notifications" && (
          <div className="notifications-section">
            <h3>Notifications</h3>
            <ul className="notifications-list">
              {notifications.map((notification) => (
                <li key={notification.id} className="notification-item">
                  <p><strong>{notification.type} :</strong> {notification.message}</p>
                  <span className="timestamp">{notification.timestamp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkspacePro;
