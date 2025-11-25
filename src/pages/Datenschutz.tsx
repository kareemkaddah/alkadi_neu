import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useScrollToTop from '../hooks/useScrollToTop';
import './Datenschutz.css';

interface DatenschutzProps {
  onLocationSelect: (location: string) => void;
}

const Datenschutz: React.FC<DatenschutzProps> = ({ onLocationSelect }) => {
  useScrollToTop();
  return (
    <div className='datenschutz-page'>
      <Header onLocationSelect={onLocationSelect} />

      <main className='main-content'>
        <div className='container'>
          <div className='page-header'>
            <h1>Datenschutzerklärung</h1>
            <p className='last-updated'>Letzte Aktualisierung: November 2025</p>
          </div>

          <div className='content'>
            <section className='section'>
              <h2>1. Verantwortlicher</h2>
              <p>
                Verantwortlicher für die Datenverarbeitung auf dieser Website
                ist:
              </p>
              <div className='contact-info'>
                <p>
                  <strong>BAG Alkadi</strong>
                </p>
                <p>45661 Recklinghausen </p>
                <p>Bochumer Straße 124A </p>
                <p>Telefon: 02361 653962</p>
                <p>E-Mail: </p>
              </div>
            </section>

            <section className='section'>
              <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes
                Anliegen. Diese Datenschutzerklärung informiert Sie über die
                Art, den Umfang und Zweck der Verarbeitung von personenbezogenen
                Daten auf unserer Website.
              </p>
            </section>

            <section className='section'>
              <h2>3. Erhebung und Speicherung personenbezogener Daten</h2>
              <h3>3.1 Terminbuchung</h3>
              <p>
                Bei der Buchung eines Termins über unsere Website erheben wir
                folgende Daten:
              </p>
              <ul>
                <li>Name und Vorname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Gewünschtes Datum und Uhrzeit</li>
                <li>Art der gewünschten Leistung</li>
                <li>Optionale Nachricht</li>
              </ul>
              <p>
                Diese Daten werden ausschließlich zur Terminvereinbarung und
                Kommunikation mit Ihnen verwendet.
              </p>

              <h3>3.2 Website-Besuch</h3>
              <p>
                Bei jedem Besuch unserer Website werden automatisch folgende
                Informationen erfasst:
              </p>
              <ul>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der aufgerufenen Datei</li>
                <li>Übertragene Datenmenge</li>
                <li>Meldung über erfolgreichen Abruf</li>
                <li>Browsertyp und -version</li>
                <li>Betriebssystem</li>
              </ul>
            </section>

            <section className='section'>
              <h2>4. Zweck der Datenverarbeitung</h2>
              <p>
                Wir verarbeiten Ihre personenbezogenen Daten zu folgenden
                Zwecken:
              </p>
              <ul>
                <li>Terminvereinbarung und -verwaltung</li>
                <li>Kommunikation bezüglich Ihrer Termine</li>
                <li>Sicherstellung der Funktionsfähigkeit der Website</li>
                <li>Verbesserung unseres Angebots</li>
                <li>Erfüllung gesetzlicher Aufbewahrungspflichten</li>
              </ul>
            </section>

            <section className='section'>
              <h2>5. Rechtsgrundlage der Datenverarbeitung</h2>
              <p>
                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf
                Grundlage von:
              </p>
              <ul>
                <li>
                  <strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Vertragserfüllung
                </li>
                <li>
                  <strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigte
                  Interessen
                </li>
              </ul>
            </section>

            <section className='section'>
              <h2>6. Speicherdauer</h2>
              <p>
                Ihre personenbezogenen Daten werden nur so lange gespeichert,
                wie dies für die Erfüllung der Zwecke erforderlich ist oder
                gesetzliche Aufbewahrungsfristen bestehen. Termindaten werden
                nach Abschluss der Behandlung und Ablauf der gesetzlichen
                Aufbewahrungsfrist gelöscht.
              </p>
            </section>

            <section className='section'>
              <h2>7. Ihre Rechte</h2>
              <p>
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen
                Daten:
              </p>
              <ul>
                <li>
                  <strong>Auskunftsrecht:</strong> Recht auf Information über
                  verarbeitete Daten
                </li>
                <li>
                  <strong>Berichtigungsrecht:</strong> Recht auf Korrektur
                  falscher Daten
                </li>
                <li>
                  <strong>Löschungsrecht:</strong> Recht auf Löschung Ihrer
                  Daten
                </li>
                <li>
                  <strong>Einschränkungsrecht:</strong> Recht auf Einschränkung
                  der Verarbeitung
                </li>
                <li>
                  <strong>Widerspruchsrecht:</strong> Recht auf Widerspruch
                  gegen die Verarbeitung
                </li>
                <li>
                  <strong>Datenübertragbarkeit:</strong> Recht auf Übertragung
                  Ihrer Daten
                </li>
              </ul>
              <p>
                Um Ihre Rechte auszuüben, wenden Sie sich bitte an uns unter den
                oben genannten Kontaktdaten.
              </p>
            </section>

            <section className='section'>
              <h2>8. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
                über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu
                beschweren.
              </p>
            </section>

            <section className='section'>
              <h2>9. Cookies</h2>
              <p>
                Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit
                zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem
                Gerät gespeichert werden. Sie können die Verwendung von Cookies
                in Ihren Browsereinstellungen deaktivieren.
              </p>
            </section>

            <section className='section'>
              <h2>10. Änderungen der Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung zu
                aktualisieren, um sie an geänderte Rechtslagen oder bei
                Änderungen unserer Leistungen sowie der Datenverarbeitung
                anzupassen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;
