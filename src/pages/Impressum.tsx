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
            <section className='section'>
              <h2>Anbieter</h2>
              <div className='contact-info'>
                <p>
                  <strong>Praxis Musterstadt</strong>
                </p>
                <p>Dr. med. Max Mustermann</p>
                <p>Facharzt für Allgemeinmedizin</p>
                <br />
                <p>
                  <strong>Praxis Stadtmitte:</strong>
                </p>
                <p>Hauptstraße 123</p>
                <p>12345 Musterstadt</p>
                <br />
                <p>
                  <strong>Praxis Nord:</strong>
                </p>
                <p>Nordstraße 456</p>
                <p>12345 Musterstadt</p>
              </div>
            </section>

            <section className='section'>
              <h2>Kontakt</h2>
              <div className='contact-details'>
                <p>
                  <strong>Telefon:</strong> (0123) 456-789
                </p>
                <p>
                  <strong>Fax:</strong> (0123) 456-788
                </p>
                <p>
                  <strong>E-Mail:</strong> info@praxis-musterstadt.de
                </p>
                <p>
                  <strong>Website:</strong> www.praxis-musterstadt.de
                </p>
              </div>
            </section>

            <section className='section'>
              <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                <strong>Berufsbezeichnung:</strong> Arzt
                <br />
                <strong>Zuständige Kammer:</strong> Ärztekammer Musterland
                <br />
                <strong>Verliehen in:</strong> Deutschland
              </p>
              <p>
                <strong>Berufsrechtliche Regelungen:</strong>
                <br />
                Berufsordnung für die deutschen Ärztinnen und Ärzte (MBO-Ä)
              </p>
            </section>

            <section className='section'>
              <h2>Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
                <br />
                <strong>DE 123456789</strong>
              </p>
            </section>

            <section className='section'>
              <h2>Aufsichtsbehörde</h2>
              <p>
                <strong>Ärztekammer Musterland</strong>
                <br />
                Musterstraße 123
                <br />
                12345 Musterstadt
                <br />
                Telefon: (0123) 987-654
                <br />
                E-Mail: info@aek-musterland.de
              </p>
            </section>

            <section className='section'>
              <h2>Redaktionell verantwortlich</h2>
              <p>
                Dr. med. Max Mustermann
                <br />
                Hauptstraße 123
                <br />
                12345 Musterstadt
              </p>
            </section>

            <section className='section'>
              <h2>EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
                <a
                  href='https://ec.europa.eu/consumers/odr/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className='section'>
              <h2>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht unter der Verpflichtung,
                übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section className='section'>
              <h2>Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>
            </section>

            <section className='section'>
              <h2>Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </section>

            <section className='section'>
              <h2>Bildnachweis</h2>
              <p>
                Die auf dieser Website verwendeten Bilder stammen aus folgenden
                Quellen:
              </p>
              <ul>
                <li>Eigene Fotografien</li>
                <li>Lizenzfreie Stockfotos</li>
                <li>Icons von Flaticon (lizenzfrei)</li>
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
