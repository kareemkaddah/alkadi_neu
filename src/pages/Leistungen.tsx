import React, { useState } from 'react';
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
  const [isErkrankungenOpen, setIsErkrankungenOpen] = useState(false);
  const [isWeitereLeistungenOpen, setIsWeitereLeistungenOpen] = useState(false);

  const toggleErkrankungen = () => {
    setIsErkrankungenOpen(!isErkrankungenOpen);
  };

  const toggleWeitereLeistungen = () => {
    setIsWeitereLeistungenOpen(!isWeitereLeistungenOpen);
  };

  return (
    <div className='leistungen-page'>
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
                <h3>Nervenleitgeschwindigkeit (NLG)</h3>
                <p>Messung der Funktion peripherer Nerven</p>
              </div>
              <div className='service-card'>
                <h3>Elektromyographie (EMG)</h3>
                <p>Untersuchung der elektrischen Aktivität der Muskulatur</p>
              </div>
              <div className='service-card'>
                <h3>Elektroenzephalographie (EEG)</h3>
                <p>Aufzeichnung der Hirnströme, z. B. bei Epilepsie</p>
              </div>
              <div className='service-card'>
                <h3>Evozierte Potentiale (SEP, VEP, AEP)</h3>
                <p>
                  Überprüfung der Nervenbahnen von Gehirn, Rückenmark und
                  Sinnesorganen
                </p>
              </div>
              <div className='service-card'>
                <h3>Ultraschalldiagnostik der hirnversorgenden Gefäße</h3>
                <p>
                  Doppler- und Duplexsonographie der extra- und intrakraniellen
                  Arterien
                </p>
              </div>
              <div className='service-card'>
                <h3>Neuropsychologische Testung</h3>
                <p>Insbesondere Gedächtnis- und Demenzdiagnostik</p>
              </div>

              {/* Behandlung von Erkrankungen - Dropdown */}
              <div className='service-card erkrankungen-card'>
                <div
                  className='erkrankungen-header'
                  onClick={toggleErkrankungen}
                  role='button'
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleErkrankungen()}
                >
                  <h3>Behandlung von Erkrankungen</h3>
                  <span
                    className={`dropdown-icon ${
                      isErkrankungenOpen ? 'open' : ''
                    }`}
                  >
                    ▼
                  </span>
                </div>

                <div
                  className={`erkrankungen-content ${
                    isErkrankungenOpen ? 'open' : ''
                  }`}
                >
                  <ul className='erkrankungen-list'>
                    <li>
                      <strong>Kopfschmerzen und Gesichtsschmerzen</strong>
                      <span className='sub-info'>
                        (Migräne, Cluster-, Spannungs- oder HWS-bedingte
                        Kopfschmerzen, Trigeminusneuralgie)
                      </span>
                    </li>
                    <li>
                      <strong>
                        Epilepsie, Anfallsleiden und Krampfanfälle
                      </strong>
                    </li>
                    <li>
                      <strong>
                        Parkinson-Syndrome, Tremor, Dystonien und andere
                        Bewegungsstörungen
                      </strong>
                    </li>
                    <li>
                      <strong>Demenz- und Gedächtnisstörungen</strong>
                      <span className='sub-info'>
                        (Alzheimer, frontotemporale, vaskuläre Demenz,
                        Normaldruckhydrozephalus)
                      </span>
                    </li>
                    <li>
                      <strong>Polyneuropathien und Engpasssyndrome</strong>
                      <span className='sub-info'>
                        (z. B. Karpaltunnel-, Sulcus ulnaris-Syndrom, Meralgia
                        paraesthetica)
                      </span>
                    </li>
                    <li>
                      <strong>
                        Multiple Sklerose und andere neuroimmunologische
                        Erkrankungen
                      </strong>
                      <span className='sub-info'>
                        (z. B. Autoimmunenzephalitis, Myasthenia gravis)
                      </span>
                    </li>
                    <li>
                      <strong>
                        Schwindel, Gleichgewichts- und Gangstörungen
                      </strong>
                    </li>
                    <li>
                      <strong>Neuropathische Schmerzen</strong>
                    </li>
                    <li>
                      <strong>
                        Schlaganfall und andere Hirngefäßerkrankungen
                      </strong>
                    </li>
                    <li>
                      <strong>Rückenmarkerkrankungen</strong>
                    </li>
                    <li>
                      <strong>Motoneuronerkrankungen</strong>
                      <span className='sub-info'>
                        (z. B. Amyotrophe Lateralsklerose)
                      </span>
                    </li>
                    <li>
                      <strong>
                        Myopathien und neuromuskuläre Erkrankungen
                      </strong>
                      <span className='sub-info'>
                        (z. B. Muskeldystrophien, Myotonien)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Weitere Leistungen - Dropdown */}
              <div className='service-card erkrankungen-card'>
                <div
                  className='erkrankungen-header'
                  onClick={toggleWeitereLeistungen}
                  role='button'
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && toggleWeitereLeistungen()
                  }
                >
                  <h3>Weitere Leistungen</h3>
                  <span
                    className={`dropdown-icon ${
                      isWeitereLeistungenOpen ? 'open' : ''
                    }`}
                  >
                    ▼
                  </span>
                </div>

                <div
                  className={`erkrankungen-content ${
                    isWeitereLeistungenOpen ? 'open' : ''
                  }`}
                >
                  <ul className='erkrankungen-list'>
                    <li>
                      <strong>
                        Beratung bei Schlaganfallerkrankungen und Vorbeugung
                      </strong>
                    </li>
                    <li>
                      <strong>
                        Kooperation mit Hausärzten und Fachärzten zur optimalen
                        Betreuung
                      </strong>
                    </li>
                    <li>
                      <strong>
                        Betreuung von Pflege- und Senioreneinrichtungen
                      </strong>
                    </li>
                    <li>
                      <strong>Hausbesuche nach klinischer Einschätzung</strong>
                    </li>
                  </ul>
                </div>
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
                <h4>Recklinghausen</h4>
                <p>Bochumer Straße 124A, 45661 Recklinghausen</p>
                <p>Tel: 02361 653962</p>
                <a
                  href='https://www.doctolib.de/neurologie/recklinghausen/assad-alkadi'
                  className='contact-button'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Termin buchen
                </a>
              </div>
              <div className='contact-item'>
                <h4>Oer-Erkenschwick</h4>
                <p>Konrad-Adenauer-Straße 13, 45739 Oer-Erkenschwick</p>
                <p>Tel: 02368 8920049</p>
                <a
                  href='https://www.doctolib.de/einzelpraxis/oer-erkenschwick/neurologiepraxis-dr-alkadi?pid=practice-541381&utm_source=google_appointment_redirect&utm_campaign=gmb&utm_medium=organic&hl=en-DE&gei=-tZqaOH2N--sxc8PmqHj8AM&rwg_token=ACgRB3fIYmRhI1ib8gqsCRTFIg0C_lv9tP8x0CxMnr1rxa_xL_A5NL7uwS8trBL8uNOC8jPXBeoauSnb0WasJlooxzx9qm16cw%3D%3D'
                  className='contact-button'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Termin buchen
                </a>
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
