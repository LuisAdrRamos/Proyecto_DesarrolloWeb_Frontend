import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSquareXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <p className="footer-text">Derechos reservados a <a href="mailto:luis.ramos02@epn.edu.ec">luis.ramos02@epn.edu.ec</a> - Proyecto Front End</p>
            <p className="footer-text">Quito - Ecuador</p>
            <div className="footer-icons">
                <a href="https://www.facebook.com/luis.ramos.guz" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/lucho_adr_/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://x.com/LuchoGGEZ" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
                </a>
                <a href="https://github.com/LuisAdrRamos" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/luis-adri%C3%A1n-ramos-guzm%C3%A1n-76639b24b/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;