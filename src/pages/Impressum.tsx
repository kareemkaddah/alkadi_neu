import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useScrollToTop from '../hooks/useScrollToTop';
import './Impressum.css';

interface ImpressumProps {
  onLocationSelect: (location: string) => void;
}

const Impressum: React.FC<ImpressumProps> = ({ onLocationSelect }) => {
  useScrollToTop();

  return (
    <div className='impressum-page'>
      <Header onLocationSelect={onLocationSelect} />

      <main className='main-content'>
        <div className='container'>
          <div className='page-header'>
            <h1>Impressum</h1>
            <p className='last-updated'>Angaben gemäß § 5 TMG</p>
          </div>

          <div className='content'>
            {/* Anbieter */}
            <section className='section'>
              <h2>Anbieter</h2>
              <p>
                <strong>BAG Al-Kadi</strong>
              </p>
              <p>Berufsausübungsgemeinschaft (BAG)</p>
              <p>Fachärzte für Neurologie</p>

              <p>
                <strong>Vertretungsberechtigte Gesellschafter:</strong>
                <br />
                Dr. med. Assad Al Kadi
                <br />
                Hazem AlKadi
              </p>

              <p>
                <strong>Praxis Recklinghausen:</strong>
                <br />
                Bochumer Straße 124A
                <br />
                45661 Recklinghausen
              </p>

              <p>
                <strong>Praxis Oer-Erkenschwick:</strong>
                <br />
                Konrad-Adenauer-Straße 13
                <br />
                45739 Oer-Erkenschwick
              </p>
            </section>

            {/* Kontakt */}
            <section className='section'>
              <h2>Kontakt</h2>
              <p>
                <strong>Telefon Recklinghausen:</strong> 02361 653962
                <br />
                <strong>Telefon Oer-Erkenschwick:</strong> 02368 8920049
                <br />
                <strong>E-Mail:</strong> info@IHRE-DOMAIN.de
              </p>
            </section>

            {/* Berufsrecht */}
            <section className='section'>
              <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Facharzt für Neurologie
                <br />
                Verliehen in: Deutschland
              </p>
              <p>
                Zuständige Ärztekammer:
                <br />
                Ärztekammer Westfalen-Lippe
              </p>
              <p>
                Berufsrechtliche Regelungen:
                <br />
                Berufsordnung für die deutschen Ärztinnen und Ärzte (MBO-Ä)
              </p>
            </section>

            {/* Aufsichtsbehörde */}
            <section className='section'>
              <h2>Aufsichtsbehörde</h2>
              <p>
                Ärztekammer Westfalen-Lippe
                <br />
                Gartenstraße 210–214
                <br />
                48147 Münster
                <br />
                Telefon: 0251 929-0
                <br />
                E-Mail: kontakt@aekwl.de
              </p>
            </section>

            {/* KV (empfohlen) */}
            <section className='section'>
              <h2>Kassenärztliche Vereinigung</h2>
              <p>Kassenärztliche Vereinigung Westfalen-Lippe</p>
            </section>

            {/* Umsatzsteuer */}
            <section className='section'>
              <h2>Umsatzsteuer</h2>
              <p>
                Gemäß § 4 Nr. 14 UStG sind ärztliche Leistungen von der
                Umsatzsteuer befreit.
              </p>
            </section>

            {/* Redaktionell verantwortlich */}
            <section className='section'>
              <h2>Redaktionell verantwortlich</h2>
              <p>
                Dr. med. Assad Al Kadi
                <br />
                Bochumer Straße 124A
                <br />
                45661 Recklinghausen
              </p>
            </section>

            {/* EU-Streitbeilegung */}
            <section className='section'>
              <h2>EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
                <br />
                <a
                  href='https://ec.europa.eu/consumers/odr/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Haftung */}
            <section className='section'>
              <h2>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich.
              </p>
            </section>

            <section className='section'>
              <h2>Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben.
              </p>
            </section>

            {/* Urheberrecht */}
            <section className='section'>
              <h2>Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke
                unterliegen dem deutschen Urheberrecht.
              </p>
            </section>

            {/* Bildnachweis */}
            <section className='section'>
              <h2>Bildnachweis</h2>
              <ul>
                <li>Eigene Fotografien</li>
                <li>Lizenzfreie Stockfotos</li>
                <li>Icons von Flaticon</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
