import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import Modal from 'react-modal';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Preloader from "../Components/Prealoder";
import '../Styles/AboutUs.css';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import team1 from '../img/team1.jpg';
import teamImage2 from '../img/team2.jpg';
import teamImage3 from '../img/team3.jpg';
import vroom from '../img/vroom.gif';
import mazda from '../img/mazda.png';
import showroom from '../img/showroom.jpg';
import mission from '../img/mission.webp';


Modal.setAppElement('#root');

function AboutUs() {
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!loading) {
      const elements = document.querySelectorAll('.element');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('element-visible');
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(element => observer.observe(element));

      return () => {
        elements.forEach(element => observer.unobserve(element));
      };
    }
  }, [loading]);

  const modalContents = {
    mission: (
      <div>
        <h2><strong>Our Mission</strong></h2>
        <p>We are dedicated to providing the best car-buying experience through a blend of innovation, quality, and customer care.</p>
        <img src={mission} alt="Our Mission" style={{ width: '100%' }} />
      </div>
    ),
    team: (
      <div>
        <h2><strong>Meet Our Team</strong></h2>
        <div className="team-members-modal">
          <div className="team-member zoom-hover">
            <img src={team1} alt="John Doe" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member zoom-hover">
            <img src={teamImage2} alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member zoom-hover">
            <img src={teamImage3} alt="Emily Johnson" />
            <h3>Emily Johnson</h3>
            <p>COO</p>
          </div>
        </div>
      </div>
    ),
    showroom: (
      <div>
        <h2><strong>Our Showroom</strong></h2>
        <p>Our state-of-the-art showroom features a wide range of the latest models, providing a premium experience for all car enthusiasts.</p>
        <img src={showroom} alt="Our Showroom" style={{ width: '100%' }} />
      </div>
    ),
    history: (
      <div>
        <h2>Our History</h2>
        <p>Since our inception in 2000, we have been committed to excellence, growing from a small dealership to a leading showroom known for quality and customer satisfaction.</p>
      </div>
    ),
  };


  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  if (loading) {
    return <Preloader />;
  }
  const position = [42.663035529083146, 21.165018573481632]

  return (
    <>
      <Navbar />
      <div className="about-us">
        <header className="hero-section">
          <h1>About Us</h1>
          <p>Welcome to our showroom, where the finest cars meet exceptional service.</p>
          <ScrollLink to="mission-section" smooth={true} duration={500}>
            <button className="scroll-button">Learn More</button>
          </ScrollLink>
        </header>

        <Element name="mission-section" className="element">
          <section className="mission-section">
            <div className="content zoom-hover">
              <h2 onClick={() => openModal(modalContents.mission)}> <strong>Our Mission</strong></h2>
              <p>We are dedicated to providing the best car-buying experience through a blend of innovation, quality, and customer care.</p>
            </div>
            <img src={vroom} alt="Our Mission" className='zoom-hover' />
          </section>
        </Element>

        <Element name="team-section" className="element">
          <section className="team-section">
            <h2 className="color-changing-text" onClick={() => openModal(modalContents.team)}>Meet Our Team</h2>
            <div className="team-members">
              <div className="team-member zoom-hover">
                <img src={team1} alt="Team Member" />
                <h3>John Doe</h3>
                <p>CEO</p>
              </div>
              <div className="team-member zoom-hover ">
                <img src={teamImage2} alt="Team Member" />
                <h3>Jane Smith</h3>
                <p>CTO</p>
              </div>
              <div className="team-member zoom-hover">
                <img src={teamImage3} alt="Team Member" />
                <h3>Emily Johnson</h3>
                <p>COO</p>
              </div>
            </div>
          </section>
        </Element>

        <Element name="showroom-section" className="element">
          <section className="showroom-section">
            <img src={mazda} alt="Our Showroom" className="bouncing-image" />
            <div className="content zoom-hover">
              <h2 onClick={() => openModal(modalContents.showroom)}> <strong>Our Showroom </strong></h2>
              <p>Our state-of-the-art showroom features a wide range of the latest models, providing a premium experience for all car enthusiasts.</p>
            </div>
          </section>
        </Element>
        <Element name="map-section" className="element">
          <section className="map-section">
            <h2><strong>Find us here</strong></h2>
            <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Our Showroom Location
                </Popup>
              </Marker>
            </MapContainer>
          </section>
        </Element>

        <Element name="history-section" className="element">
          <section className="history-section">
            <h2 className='swing-animation' onClick={() => openModal(modalContents.history)}> <strong>Our History</strong></h2>
            <p>Since our inception in 2000,<br /> we have been committed to excellence,<br /> growing from a small dealership to a leading showroom known <br /> for quality and customer satisfaction.</p>
          </section>
        </Element>
        <Footer />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="overlay"
        >
          {modalContent}
          <button onClick={closeModal} className="close-button">Close</button>
        </Modal>
      </div>
    </>
  );
}


export default AboutUs;
