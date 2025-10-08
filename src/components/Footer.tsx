import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleUeberUnsClick = () => {
    // Check if we're already on the home page
    if (window.location.pathname === '/') {
      // If on home page, scroll to locations section
      const locationsSection = document.getElementById('locations');
      if (locationsSection) {
        locationsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      // If not on home page, navigate to home page first
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const locationsSection = document.getElementById('locations');
        if (locationsSection) {
          locationsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  };

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h4>Kontakt</h4>
          <div className='footer-contact'>
            <div className='contact-item'>
              <h5>Dr. med. Assad Al Kadi</h5>
              <p>📍 Bochumer Straße 124A</p>
              <p>45661 Recklinghausen</p>
              <p>📞 02361 653962</p>
            </div>
            <div className='contact-item'>
              <h5>Dr. Hazem Al Kadi</h5>
              <p>📍 Konrad-Adenauer-Straße 13</p>
              <p>45739 Oer-Erkenschwick</p>
              <p>📞 02368 8920049</p>
            </div>
          </div>
        </div>

        <div className='footer-section'>
          <h4>Öffnungszeiten</h4>
          <div className='opening-hours'>
            <div className='doctor-hours'>
              <h5>Dr. med. Assad Al Kadi</h5>
              <p>
                <strong>Mo:</strong> 8:00 - 14:30 Uhr
              </p>
              <p>
                <strong>Di, Do:</strong> 8:00 - 12:00, 14:30 - 17:30 Uhr
              </p>
              <p>
                <strong>Mi:</strong> 8:00 - 12:30 Uhr
              </p>
              <p>
                <strong>Fr:</strong> 8:00 - 13:00 Uhr
              </p>
            </div>
            <div className='doctor-hours'>
              <h5>Dr. Hazem Al Kadi</h5>
              <p>
                <strong>Mo, Di, Do:</strong> 9:00 - 17:00 Uhr
              </p>
              <p>
                <strong>Mi, Fr:</strong> 9:00 - 13:00 Uhr
              </p>
            </div>
            <p className='emergency'>
              <strong>Notfall:</strong> Ärztlicher Bereitschaftsdienst 116 117
            </p>
          </div>
        </div>

        <div className='footer-section'>
          <h4>Navigation</h4>
          <ul className='footer-nav'>
            <li>
              <Link to='/' className='footer-link'>
                Startseite
              </Link>
            </li>
            <li>
              <button
                className='footer-link footer-button'
                onClick={handleUeberUnsClick}
              >
                Über uns
              </button>
            </li>
            <li>
              <Link to='/leistungen' className='footer-link'>
                Leistungen
              </Link>
            </li>
            <li>
              <Link to='/recklinghausen' className='footer-link'>
                Recklinghausen
              </Link>
            </li>
            <li>
              <Link to='/oer-erkenschwick' className='footer-link'>
                Oer-Erkenschwick
              </Link>
            </li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>Termin buchen</h4>
          <div className='booking-links'>
            <a
              href='https://www.doctolib.de/neurologie/recklinghausen/assad-alkadi'
              className='booking-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Dr. med. Assad Al Kadi
            </a>
            <a
              href='https://www.doctolib.de/einzelpraxis/oer-erkenschwick/neurologiepraxis-dr-alkadi?pid=practice-541381&utm_source=google_appointment_redirect&utm_campaign=gmb&utm_medium=organic&hl=en-DE&gei=-tZqaOH2N--sxc8PmqHj8AM&rwg_token=ACgRB3fIYmRhI1ib8gqsCRTFIg0C_lv9tP8x0CxMnr1rxa_xL_A5NL7uwS8trBL8uNOC8jPXBeoauSnb0WasJlooxzx9qm16cw%3D%3D'
              className='booking-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Dr. Hazem Al Kadi
            </a>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='footer-bottom-content'>
          <p>&copy; 2025 BAG Al-Kadi. Alle Rechte vorbehalten.</p>
          <div className='legal-links'>
            <Link to='/impressum' className='legal-link'>
              Impressum
            </Link>
            <Link to='/datenschutz' className='legal-link'>
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
