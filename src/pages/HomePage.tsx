import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import alkadiNeuImage from '../assets/alkadi_neu.png';
import brainImage from '../assets/brain.png';
import useScrollToTop from '../hooks/useScrollToTop';
import './HomePage.css';

interface HomePageProps {
  onLocationSelect: (location: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onLocationSelect }) => {
  useScrollToTop();
  const handleUeberUnsClick = () => {
    const locationsSection = document.getElementById('locations');
    if (locationsSection) {
      locationsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className='homepage'>
      <Header onLocationSelect={onLocationSelect} />

      <main className='main-content'>
        {/* Hero Section */}
        <section
          className='hero-section'
          style={{
            backgroundImage: `url(${alkadiNeuImage})`,
          }}
        >
          <div className='hero-content'>
            <h1 className='hero-title'>Willkommen bei BAG Al-Kadi</h1>
            <p className='hero-subtitle'>
              Professionelle medizinische Betreuung für Ihre Gesundheit
            </p>
            <div className='hero-buttons'>
              <button className='primary-button'>Unsere Leistungen</button>
              <button
                className='secondary-button'
                onClick={handleUeberUnsClick}
              >
                Über uns
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='features-section'>
          <div className='container'>
            <h2 className='section-title'>Unsere Leistungen</h2>
            <div className='features-grid'>
              <div className='feature-card'>
                <div className='feature-image'>
                  <img src={brainImage} alt='Neurologische Untersuchung' />
                </div>
                <h3>Neurologische Untersuchung</h3>
                <p>
                  Umfassende neurologische Untersuchung zur Diagnose von
                  Erkrankungen des Nervensystems.
                </p>
              </div>
              <div className='feature-card'>
                <div className='feature-image'>
                  <img src={brainImage} alt='EEG' />
                </div>
                <h3>EEG (Elektroenzephalographie)</h3>
                <p>
                  Messung der elektrischen Aktivität des Gehirns zur Diagnose
                  von Epilepsie und anderen Erkrankungen.
                </p>
              </div>
              <div className='feature-card'>
                <div className='feature-image'>
                  <img src={brainImage} alt='EMG' />
                </div>
                <h3>EMG (Elektromyographie)</h3>
                <p>
                  Untersuchung der Muskelfunktion und Nervenleitung zur Diagnose
                  von Muskelerkrankungen.
                </p>
              </div>
            </div>
            <div className='features-button-container'>
              <button
                className='features-button'
                onClick={() => (window.location.href = '/leistungen')}
              >
                Alle Leistungen
              </button>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id='locations' className='locations-section'>
          <div className='container'>
            <h2 className='section-title'>Unsere Standorte</h2>
            <div className='locations-grid'>
              <div className='location-card'>
                <div className='location-image'>
                  <img
                    src='/src/assets/Dr-Assad.jpeg'
                    alt='Dr. Assad - Praxis Stadtmitte'
                  />
                </div>
                <div className='location-content'>
                  <h3>Dr. med. Assad Al Kadi</h3>
                  <p>Bochumer Straße 124A, 45661 Recklinghausen</p>
                  <div className='opening-hours'>
                    <h5>Öffnungszeiten</h5>
                    <div className='hours-list'>
                      <div className='hours-item'>
                        <span>Mo:</span>
                        <span>8:00 - 14:30</span>
                      </div>
                      <div className='hours-item'>
                        <span>Di, Do:</span>
                        <span>
                          8:00 - 12:00,
                          <br />
                          14:30 - 17:30
                        </span>
                      </div>
                      <div className='hours-item'>
                        <span>Mi:</span>
                        <span>8:00 - 12:30</span>
                      </div>
                      <div className='hours-item'>
                        <span>Fr:</span>
                        <span>8:00 - 13:00</span>
                      </div>
                    </div>
                  </div>
                  <div className='location-buttons'>
                    <button
                      className='location-button info-button'
                      onClick={() => {
                        window.location.href = '/recklinghausen';
                      }}
                    >
                      Info
                    </button>
                    <button
                      className='location-button'
                      onClick={() =>
                        window.open(
                          'https://www.doctolib.de/neurologie/recklinghausen/assad-alkadi',
                          '_blank'
                        )
                      }
                    >
                      Termin buchen
                    </button>
                  </div>
                </div>
              </div>
              <div className='location-card location-card-hazem'>
                <div className='location-image'>
                  <img
                    src='/src/assets/Dr-Hazem.jpeg'
                    alt='Dr. Hazem - Praxis Nord'
                  />
                </div>
                <div className='location-content'>
                  <h3>Dr. Hazem Al Kadi</h3>
                  <p>
                    Konrad-Adenauer-Straße 13,
                    <br />
                    45739 Oer-Erkenschwick
                  </p>
                  <div className='opening-hours'>
                    <h5>Öffnungszeiten</h5>
                    <div className='hours-list'>
                      <div className='hours-item'>
                        <span>Mo, Di, Do:</span>
                        <span>9:00 - 17:00</span>
                      </div>
                      <div className='hours-item'>
                        <span>Mi, Fr:</span>
                        <span>9:00 - 13:00</span>
                      </div>
                    </div>
                  </div>
                  <div className='location-buttons'>
                    <button
                      className='location-button info-button'
                      onClick={() => {
                        window.location.href = '/oer-erkenschwick';
                      }}
                    >
                      Info
                    </button>
                    <button
                      className='location-button'
                      onClick={() =>
                        window.open(
                          'https://www.doctolib.de/einzelpraxis/oer-erkenschwick/neurologiepraxis-dr-alkadi?pid=practice-541381&utm_source=google_appointment_redirect&utm_campaign=gmb&utm_medium=organic&hl=en-DE&gei=-tZqaOH2N--sxc8PmqHj8AM&rwg_token=ACgRB3fIYmRhI1ib8gqsCRTFIg0C_lv9tP8x0CxMnr1rxa_xL_A5NL7uwS8trBL8uNOC8jPXBeoauSnb0WasJlooxzx9qm16cw%3D%3D',
                          '_blank'
                        )
                      }
                    >
                      Termin buchen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className='contact-section'>
          <div className='container'>
            <h2 className='section-title'>Kontaktieren Sie uns</h2>
            <div className='contact-info'>
              <div className='contact-item'>
                <h4>Dr. med. Assad Al Kadi</h4>
                <p>
                  <a href='tel:02361653962' className='phone-link'>
                    02361 653962
                  </a>
                </p>
              </div>
              <div className='contact-item'>
                <h4>Dr. Hazem Al Kadi</h4>
                <p>
                  <a href='tel:023688920049' className='phone-link'>
                    02368 8920049
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
