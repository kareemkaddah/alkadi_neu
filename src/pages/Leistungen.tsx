import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import alkadiNeuImage from '../assets/alkadi_neu.png';
import useScrollToTop from '../hooks/useScrollToTop';
import './Leistungen.css';

interface LeistungenProps {
  onLocationSelect: (location: string) => void;
}

const Leistungen: React.FC<LeistungenProps> = ({ onLocationSelect }) => {
  useScrollToTop();
  return (
    <div className='leistungen-page'>
      <Header onLocationSelect={onLocationSelect} />

      <main className='main-content'>
        {/* Hero Section */}
        <section
          className='hero-section'
          style={{
            backgroundImage: `url(${alkadiNeuImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className='hero-content'>
            <h1 className='hero-title'>Unsere Leistungen</h1>
            <p className='hero-subtitle'>
              Umfassende neurologische Diagnostik und Behandlung
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className='services-section'>
          <div className='container'>
            <h2 className='section-title'>Neurologische Leistungen</h2>
            <div className='services-grid'>
              <div className='service-card'>
                <h3>Neurologische Untersuchung</h3>
                <p>
                  Umfassende neurologische Untersuchung zur Diagnose von
                  Erkrankungen des Nervensystems.
                </p>
              </div>
              <div className='service-card'>
                <h3>EEG (Elektroenzephalographie)</h3>
                <p>
                  Messung der elektrischen Aktivität des Gehirns zur Diagnose
                  von Epilepsie und anderen Erkrankungen.
                </p>
              </div>
              <div className='service-card'>
                <h3>EMG (Elektromyographie)</h3>
                <p>
                  Untersuchung der Muskelfunktion und Nervenleitung zur Diagnose
                  von Muskelerkrankungen.
                </p>
              </div>
              <div className='service-card'>
                <h3>Schlafmedizin</h3>
                <p>
                  Diagnose und Behandlung von Schlafstörungen und
                  schlafbezogenen Atmungsstörungen.
                </p>
              </div>
              <div className='service-card'>
                <h3>Schmerztherapie</h3>
                <p>
                  Spezialisierte Behandlung von chronischen Schmerzen und
                  Kopfschmerzen.
                </p>
              </div>
              <div className='service-card'>
                <h3>Genetische Beratung</h3>
                <p>
                  Beratung und Diagnostik bei erblichen neurologischen
                  Erkrankungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className='contact-section'>
          <div className='container'>
            <h2 className='section-title'>Termin vereinbaren</h2>
            <div className='contact-info'>
              <div className='contact-item'>
                <h4>Dr. med. Assad Al Kadi</h4>
                <p>Bochumer Straße 124A, 45661 Recklinghausen</p>
                <p>Tel: 02361 653962</p>
                <button
                  className='contact-button'
                  onClick={() => onLocationSelect('Recklinghausen')}
                >
                  Termin buchen
                </button>
              </div>
              <div className='contact-item'>
                <h4>Dr. Hazem Al Kadi</h4>
                <p>Konrad-Adenauer-Straße 13, 45739 Oer-Erkenschwick</p>
                <p>Tel: 02368 8920049</p>
                <button
                  className='contact-button'
                  onClick={() => onLocationSelect('Oer-Erkenschwick')}
                >
                  Termin buchen
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Leistungen;
