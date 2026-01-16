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
            <p className='last-updated'>Stand: Januar 2026</p>
          </div>

          <div className='content'>
            {/* 1. Verantwortlicher */}
            <section className='section'>
              <h2>1. Verantwortlicher</h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website:
              </p>
              <p>
                <strong>BAG Al-Kadi</strong>
                <br />
                Berufsausübungsgemeinschaft
                <br />
                Bochumer Straße 124A
                <br />
                45661 Recklinghausen
                <br />
                Telefon: 02361 653962
                <br />
                E-Mail: info@IHRE-DOMAIN.de
              </p>
            </section>

            {/* 2. Allgemeine Hinweise */}
            <section className='section'>
              <h2>2. Allgemeine Hinweise</h2>
              <p>
                Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
                Anliegen. Personenbezogene Daten werden auf dieser Website nur
                im notwendigen Umfang und gemäß den gesetzlichen
                Datenschutzvorschriften verarbeitet.
              </p>
            </section>

            {/* 3. Hosting */}
            <section className='section'>
              <h2>3. Hosting</h2>
              <p>
                Diese Website wird bei folgendem Hosting-Anbieter betrieben:
              </p>
              <p>
                <strong>Vercel Inc.</strong>
                <br />
                440 N Barranca Ave #4133
                <br />
                Covina, CA 91723
                <br />
                USA
              </p>
              <p>
                Der Einsatz von Vercel erfolgt auf Grundlage von
                Standardvertragsklauseln der EU-Kommission.
              </p>
              <p>
                Dabei werden personenbezogene Daten (z. B. IP-Adressen,
                Server-Logfiles) verarbeitet, die für den technischen Betrieb
                der Website erforderlich sind.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
              </p>
            </section>

            {/* 4. Server-Logfiles */}
            <section className='section'>
              <h2>4. Server-Logfiles</h2>
              <p>
                Beim Aufruf dieser Website werden automatisch folgende Daten
                erfasst:
              </p>
              <ul>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Browsertyp und Betriebssystem</li>
                <li>Referrer-URL</li>
              </ul>
              <p>
                Diese Daten dienen der Sicherstellung eines störungsfreien
                Betriebs der Website.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
              </p>
            </section>

            {/* 5. Kontakt per E-Mail */}
            <section className='section'>
              <h2>5. Kontaktaufnahme per E-Mail</h2>
              <p>
                Wenn Sie uns per E-Mail kontaktieren, werden the übermittelten
                Daten ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
              </p>
            </section>

            {/* 6. Doctolib */}
            <section className='section'>
              <h2>6. Online-Terminbuchung über Doctolib</h2>
              <p>
                Für die Online-Terminbuchung nutzen wir den Dienst{' '}
                <strong>Doctolib</strong>. Bei Nutzung dieses Dienstes werden
                personenbezogene Daten direkt an Doctolib übermittelt.
              </p>
              <p>
                Anbieter:
                <br />
                Doctolib GmbH
                <br />
                Mehringdamm 51
                <br />
                10961 Berlin
              </p>
              <p>
                Die Datenverarbeitung erfolgt in eigener Verantwortung von
                Doctolib. Weitere Informationen finden Sie in der
                Datenschutzerklärung von Doctolib.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
              </p>
            </section>

            {/* 7. Google Maps */}
            <section className='section'>
              <h2>7. Google Maps</h2>
              <p>
                Diese Website nutzt Google Maps zur Darstellung von Karten.
                Anbieter ist Google Ireland Limited, Gordon House, Barrow
                Street, Dublin 4, Irland.
              </p>
              <p>
                Bei Nutzung von Google Maps können personenbezogene Daten (z. B.
                IP-Adresse) an Google übertragen werden.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
              </p>
            </section>

            {/* 8. Cookies */}
            <section className='section'>
              <h2>8. Cookies</h2>
              <p>
                Diese Website verwendet ausschließlich technisch notwendige
                Cookies. Diese sind für den Betrieb der Website erforderlich und
                können nicht deaktiviert werden.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
              </p>
            </section>

            {/* 9. Rechte */}
            <section className='section'>
              <h2>9. Ihre Rechte</h2>
              <ul>
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16 DSGVO)</li>
                <li>Löschung (Art. 17 DSGVO)</li>
                <li>Einschränkung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch (Art. 21 DSGVO)</li>
              </ul>
            </section>

            {/* 10. Beschwerderecht */}
            <section className='section'>
              <h2>10. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde
                zu beschweren:
              </p>
              <p>
                Landesbeauftragte für Datenschutz und Informationsfreiheit NRW
              </p>
            </section>

            {/* 11. Änderungen */}
            <section className='section'>
              <h2>11. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um
                sie an geänderte Rechtslagen oder technische Änderungen
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
