import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  onLocationSelect: (location: string) => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setShowDropdown(false);
  };

  const closeMenus = () => {
    setShowMobileMenu(false);
    setShowDropdown(false);
  };

  const handleUeberUnsClick = () => {
    closeMenus();

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
    <header className='header'>
      <div className='header-content'>
        {/* Logo */}
        <div className='logo-container'>
          <Link to='/' className='logo-link' onClick={closeMenus}>
            <div className='logo-text'>LOGO</div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='desktop-navigation'>
          <ul className='nav-list'>
            <li>
              <Link to='/' className='nav-link'>
                Startseite
              </Link>
            </li>
            <li>
              <button
                className='nav-link nav-button'
                onClick={handleUeberUnsClick}
              >
                Über uns
              </button>
            </li>
            <li>
              <Link to='/leistungen' className='nav-link'>
                Leistungen
              </Link>
            </li>
            <li>
              <Link to='/recklinghausen' className='nav-link'>
                Recklinghausen
              </Link>
            </li>
            <li>
              <Link to='/oer-erkenschwick' className='nav-link'>
                Oer-Erkenschwick
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Appointment Button */}
        <div className='desktop-appointment'>
          <div className='appointment-container'>
            <button
              className='appointment-button'
              onClick={handleAppointmentClick}
              aria-expanded={showDropdown}
              aria-haspopup='true'
            >
              Termin buchen
            </button>
            {showDropdown && (
              <div className='dropdown-menu'>
                <div className='dropdown-header'>Standort wählen:</div>
                <button
                  className='dropdown-item'
                  onClick={() =>
                    window.open(
                      'https://www.doctolib.de/neurologie/recklinghausen/assad-alkadi',
                      '_blank'
                    )
                  }
                >
                  Recklinghausen
                </button>
                <button
                  className='dropdown-item'
                  onClick={() =>
                    window.open(
                      'https://www.doctolib.de/einzelpraxis/oer-erkenschwick/neurologiepraxis-dr-alkadi?pid=practice-541381&utm_source=google_appointment_redirect&utm_campaign=gmb&utm_medium=organic&hl=en-DE&gei=-tZqaOH2N--sxc8PmqHj8AM&rwg_token=ACgRB3fIYmRhI1ib8gqsCRTFIg0C_lv9tP8x0CxMnr1rxa_xL_A5NL7uwS8trBL8uNOC8jPXBeoauSnb0WasJlooxzx9qm16cw%3D%3D',
                      '_blank'
                    )
                  }
                >
                  Oer-Erkenschwick
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='mobile-menu-button'
          onClick={toggleMobileMenu}
          aria-expanded={showMobileMenu}
          aria-label='Toggle mobile menu'
        >
          <span className={`hamburger ${showMobileMenu ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className='mobile-menu'>
          <nav className='mobile-navigation'>
            <ul className='mobile-nav-list'>
              <li>
                <Link to='/' className='mobile-nav-link' onClick={closeMenus}>
                  Startseite
                </Link>
              </li>
              <li>
                <button
                  className='mobile-nav-link mobile-nav-button'
                  onClick={handleUeberUnsClick}
                >
                  Über uns
                </button>
              </li>
              <li>
                <Link
                  to='/leistungen'
                  className='mobile-nav-link'
                  onClick={closeMenus}
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  to='/recklinghausen'
                  className='mobile-nav-link'
                  onClick={closeMenus}
                >
                  Recklinghausen
                </Link>
              </li>
              <li>
                <Link
                  to='/oer-erkenschwick'
                  className='mobile-nav-link'
                  onClick={closeMenus}
                >
                  Oer-Erkenschwick
                </Link>
              </li>
            </ul>
            <div className='mobile-appointment-section'>
              <h4>Termin buchen</h4>
              <div className='mobile-appointment-buttons'>
                <button
                  className='mobile-appointment-button'
                  onClick={() =>
                    window.open(
                      'https://www.doctolib.de/neurologie/recklinghausen/assad-alkadi',
                      '_blank'
                    )
                  }
                >
                  Recklinghausen
                </button>
                <button
                  className='mobile-appointment-button'
                  onClick={() =>
                    window.open(
                      'https://www.doctolib.de/einzelpraxis/oer-erkenschwick/neurologiepraxis-dr-alkadi?pid=practice-541381&utm_source=google_appointment_redirect&utm_campaign=gmb&utm_medium=organic&hl=en-DE&gei=-tZqaOH2N--sxc8PmqHj8AM&rwg_token=ACgRB3fIYmRhI1ib8gqsCRTFIg0C_lv9tP8x0CxMnr1rxa_xL_A5NL7uwS8trBL8uNOC8jPXBeoauSnb0WasJlooxzx9qm16cw%3D%3D',
                      '_blank'
                    )
                  }
                >
                  Oer-Erkenschwick
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
