import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import alkadiNeuImage from '../assets/alkadi_neu.png';
import drHazemImage from '../assets/Dr-Hazem.jpeg';
import useScrollToTop from '../hooks/useScrollToTop';
import './OerErkenschwick.css';

interface OerErkenschwickProps {
  onLocationSelect: (location: string) => void;
}

const OerErkenschwick: React.FC<OerErkenschwickProps> = ({
  onLocationSelect,
}) => {
  useScrollToTop();

  // Reviews data
  const reviews = [
    {
      rating: 5,
      text: 'Ich möchte Dr. Hazem Al Kadi und sein Team herzlich empfehlen. Die Praxis ist sehr gut organisiert, und Dr. Al Kadi ist nicht nur äußerst kompetent, sondern auch sehr freundlich und einfühlsam. Er nimmt sich Zeit für seine Patienten und erklärt alles verständlich. Ich habe mich in der Praxis sehr gut aufgehoben gefühlt und bin dankbar für die hervorragende Behandlung. Vielen Dank!',
      author: 'J.A.',
    },
    {
      rating: 5,
      text: 'Ich bin unglaublich dankbar, einen so einfühlsamen und kompetenten Arzt wie Dr. Alkadi gefunden zu haben. Er nimmt sich immer die Zeit, zuzuhören, erklärt alles verständlich und gibt einem das Gefühl, in den besten Händen zu sein. Seine freundliche Art und sein Engagement für das Wohl seiner Patienten sind einfach außergewöhnlich. Man merkt, dass ihm das Wohl seiner Patienten wirklich am Herzen liegt. Vielen Dank für die großartige Betreuung – ich kann Dr. Alkadi nur wärmstens empfehlen.',
      author: 'T.T.',
    },
    {
      rating: 5,
      text: 'Dr. Hazem Alkadi ist ein äußerst kompetenter und einfühlsamer Neurologe. Er nimmt sich viel Zeit für seine Patienten, hört aufmerksam zu und erklärt alles verständlich und präzise. Seine fachliche Expertise und sein Engagement sind herausragend. Die Behandlung war professionell, und ich habe mich jederzeit bestens aufgehoben gefühlt. Das gesamte Praxisteam ist freundlich und organisiert, was den Besuch noch angenehmer macht. Ich kann Dr. Alkadi uneingeschränkt empfehlen – ein Arzt, dem man voll und ganz vertrauen kann!',
      author: 'M.A.',
    },
    {
      rating: 5,
      text: 'Ich war sehr zufrieden mit meiner Behandlung bei Neurologie-Praxis Hazem Al Kadi. Die Praxis ist gut organisiert und das Personal ist freundlich und hilfsbereit. Dr. Hazem Al Kadi hat sich viel Zeit genommen, um meine Symptome zu besprechen und eine genaue Diagnose zu stellen. Die Behandlung war effektiv und ich fühle mich seitdem deutlich besser. Besonders schätze ich die verständliche Erklärung der medizinischen Sachverhalte und die einfühlsame Art von Dr. Hazem Al Kadi. Ich kann diese Praxis uneingeschränkt weiterempfehlen.',
      author: 'H.W.',
    },
    {
      rating: 5,
      text: 'Super Arzt. Er nimmt sich Zeit und hört auch zu. Solche Ärzte findet man nicht oft. Einfach top.',
      author: 'D.R.',
    },
    {
      rating: 5,
      text: 'Sehr kompetenter und einfühlsamer Neurologe, nimmt sich Zeit und erklärt alles verständlich.',
      author: 'H.K.',
    },
    {
      rating: 5,
      text: 'I recently visited a neurologist and was very impressed. Dr. Hazem Al Kadi was attentive to detail, listened to all my complaints and explained in detail the possible causes of my condition. The atmosphere at the appointment was very friendly and the doctor took the time to answer all my questions.',
      author: 'И.Б.',
    },
    {
      rating: 5,
      text: 'Gerade aus der Praxis raus wegen Messung der Nerven. Bin total begeistert, schon lange nicht mehr so einem sympathischen, freundlichen Arzt mit viel Freude und Lächeln im Gesicht begegnet, top! Zudem hat sich Herr Alkadi viel Zeit genommen und die Ergebnisse verständlich erklärt. 5 Sterne noch zu wenig.',
      author: 'S.D.',
    },
  ];

  // State for mobile dropdown
  const [showAllReviews, setShowAllReviews] = useState(false);
  const reviewsScrollRef = useRef<HTMLDivElement>(null);

  // Function to scroll reviews
  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewsScrollRef.current) {
      const scrollAmount = 300;
      const currentScroll = reviewsScrollRef.current.scrollLeft;
      const newScroll =
        direction === 'left'
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      reviewsScrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='oer-erkenschwick-page'>
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
            <h1 className='hero-title'>Praxis Oer-Erkenschwick</h1>
            <p className='hero-subtitle'>Hazem AlKadi</p>
            <div className='hero-buttons'>
              <button
                className='primary-button'
                onClick={() =>
                  window.open(
                    'https://www.doctolib.de/einzelpraxis/oer-erkenschwick/neurologiepraxis-dr-alkadi?pid=practice-541381&utm_source=google_appointment_redirect&utm_campaign=gmb&utm_medium=organic&hl=en-DE&gei=-tZqaOH2N--sxc8PmqHj8AM&rwg_token=ACgRB3fIYmRhI1ib8gqsCRTFIg0C_lv9tP8x0CxMnr1rxa_xL_A5NL7uwS8trBL8uNOC8jPXBeoauSnb0WasJlooxzx9qm16cw%3D%3D',
                    '_blank'
                  )
                }
              >
                Termin buchen
              </button>
              <button
                className='secondary-button'
                onClick={() => (window.location.href = '/leistungen')}
              >
                Unsere Leistungen
              </button>
            </div>
          </div>
        </section>

        {/* Location Details Section */}
        <section className='location-details-section'>
          <div className='container'>
            <h2 className='section-title'>Unsere Praxis in Oer-Erkenschwick</h2>
            <div className='praxis-info-container'>
              <div className='doctor-image-container'>
                <img
                  src={drHazemImage}
                  alt='Dr. Hazem Al Kadi'
                  className='doctor-image'
                />
              </div>
              <div className='location-info-grid'>
                <div className='location-info-card'>
                  <h3>Hazem AlKadi</h3>
                  <p>Facharzt für Neurologie</p>
                  <p>Mit modernster Ausstattung und persönlicher Betreuung</p>
                </div>

                <div className='location-info-card'>
                  <h3>Öffnungszeiten</h3>
                  <div className='opening-hours-detail'>
                    <div className='hours-item'>
                      <span>Montag, Dienstag, Donnerstag:</span>
                      <span>9:00 - 17:00</span>
                    </div>
                    <div className='hours-item'>
                      <span>Mittwoch, Freitag:</span>
                      <span>9:00 - 13:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Section with Map Link */}
            <div className='address-section'>
              <div className='address-box'>
                <h3>Adresse</h3>
                <p>Konrad-Adenauer-Straße 13</p>
                <p>45739 Oer-Erkenschwick</p>
                <button
                  className='map-button'
                  onClick={() =>
                    window.open(
                      'https://maps.google.com/maps?q=Konrad-Adenauer-Straße+13,+45739+Oer-Erkenschwick',
                      '_blank'
                    )
                  }
                >
                  📍 In Karten öffnen
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className='reviews-section'>
          <div className='container'>
            <h2 className='section-title'>Kunden Bewertungen</h2>

            {/* Google Rating Display */}
            <div className='google-rating-display'>
              <div className='google-rating-card'>
                <div className='google-logo'>G</div>
                <div className='rating-info'>
                  <div className='rating-score'>4.9</div>
                  <div className='rating-stars'>{'★'.repeat(5)}</div>
                  <div className='rating-count'>27 Bewertungen auf Google</div>
                </div>
              </div>
            </div>

            {/* Desktop/Tablet View - Scrollable */}
            <div className='reviews-desktop'>
              <div className='reviews-container'>
                <button
                  className='scroll-button scroll-left'
                  onClick={() => scrollReviews('left')}
                >
                  ‹
                </button>
                <div className='reviews-scroll' ref={reviewsScrollRef}>
                  <div className='reviews-track'>
                    {reviews.map((review, index) => (
                      <div key={index} className='review-card'>
                        <div className='review-stars'>
                          {'★'.repeat(review.rating)}
                          {'☆'.repeat(5 - review.rating)}
                        </div>
                        <p className='review-text'>"{review.text}"</p>
                        <div className='review-author'>
                          <strong>{review.author}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  className='scroll-button scroll-right'
                  onClick={() => scrollReviews('right')}
                >
                  ›
                </button>
              </div>
            </div>

            {/* Mobile View - Dropdown */}
            <div className='reviews-mobile'>
              <button
                className='reviews-dropdown-toggle'
                onClick={() => setShowAllReviews(!showAllReviews)}
              >
                {showAllReviews
                  ? 'Bewertungen ausblenden'
                  : 'Alle Bewertungen anzeigen'}
                <span
                  className={`dropdown-arrow ${showAllReviews ? 'open' : ''}`}
                >
                  ▼
                </span>
              </button>

              {showAllReviews && (
                <div className='reviews-dropdown'>
                  {reviews.map((review, index) => (
                    <div key={index} className='review-card-mobile'>
                      <div className='review-stars'>
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </div>
                      <p className='review-text'>"{review.text}"</p>
                      <div className='review-author'>
                        <strong>{review.author}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className='contact-section'>
          <div className='container'>
            <h2 className='section-title'>Kontakt & Terminvereinbarung</h2>
            <div className='contact-info'>
              <div className='contact-item'>
                <h4>Praxis Oer-Erkenschwick</h4>
                <p>Konrad-Adenauer-Straße 13, 45739 Oer-Erkenschwick</p>
                <p>
                  <a href='tel:023688920049' className='phone-link'>
                    02368 8920049
                  </a>
                </p>
                <button
                  className='contact-button'
                  onClick={() =>
                    window.open(
                      'https://www.doctolib.de/einzelpraxis/oer-erkenschwick/neurologiepraxis-dr-alkadi?pid=practice-541381&utm_source=google_appointment_redirect&utm_campaign=gmb&utm_medium=organic&hl=en-DE&gei=-tZqaOH2N--sxc8PmqHj8AM&rwg_token=ACgRB3fIYmRhI1ib8gqsCRTFIg0C_lv9tP8x0CxMnr1rxa_xL_A5NL7uwS8trBL8uNOC8jPXBeoauSnb0WasJlooxzx9qm16cw%3D%3D',
                      '_blank'
                    )
                  }
                >
                  Online Termin buchen
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

export default OerErkenschwick;
