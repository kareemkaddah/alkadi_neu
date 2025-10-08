import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import alkadiNeuImage from '../assets/alkadi_neu.png';
import drAssadImage from '../assets/Dr-Assad.jpeg';
import useScrollToTop from '../hooks/useScrollToTop';
import './Recklinghausen.css';

interface RecklinghausenProps {
  onLocationSelect: (location: string) => void;
}

const Recklinghausen: React.FC<RecklinghausenProps> = ({
  onLocationSelect,
}) => {
  useScrollToTop();

  // Reviews data
  const reviews = [
    {
      rating: 5,
      text: 'Dr. Asaad Al-Qadi ist sehr klug und angesehen. Meiner Meinung nach ist er einer der besten Ärzte seines Fachs.',
      author: 'A.S.',
    },
    {
      rating: 5,
      text: 'Dr. Asaad Al-Qadi is the best doctor I have seen in my entire life. He listens well to patients, is intelligent, and has a high ability to diagnose illness. He is humble and has high morals. May God prolong your life and increase the number of people like you. You are a treasure in every sense of the word. With my complete gratitude.',
      author: 'W.O.',
    },
    {
      rating: 5,
      text: 'Uns hat die ruhige und zuvorkommende Art des Arztes und des Praxisteams sehr gefallen. Alle arbeiten Hand in Hand. Die Termine werden so gelegt, dass sämtliche Untersuchungen direkt nacheinander laufen und keine unnötigen Wartezeiten entstehen. Arabisch-deutsch sprechend. Für uns als arabisch-deutsches Paar sehr wichtig, damit beide Partner alles verstehen und die Untersuchungsergebnisse direkt besprochen werden können. Versierter Arzt in jeder Hinsicht. Vielen Dank, wir kommen gerne wieder.',
      author: 'A.G.',
    },
    {
      rating: 5,
      text: 'A wonderful doctor who takes the time to understand and diagnose your condition. He is proficient in his specialty and very friendly. I highly recommend him.',
      author: 'B.A.',
    },
    {
      rating: 5,
      text: 'Herr Doktor und Personal sind sehr nett, hilfsbereit und freundlich. Dr. hat viel Erfahrung. Ich empfehle einfach weiter.',
      author: 'N.T.',
    },
    {
      rating: 5,
      text: 'A good, educated and very good doctor. Respectful manners. May God bless you.',
      author: 'D.',
    },
    {
      rating: 5,
      text: 'Sehr einfühlsamer Neurologe. Man fühlt sich verstanden und gut aufgehoben. Komme gerne wieder 🤗.',
      author: 'A.M.',
    },
    {
      rating: 5,
      text: 'SUPER ARZT!! Bin das erste Mal bei Herr Dr. Al Kadi, sowohl die Mitarbeiter als auch der Arzt sind super nett, man fühlt sich aufgehoben und sicher. Der Dr. Al Kadi nimmt sich Zeit und hört einen gut zu. Kann ich nur weiterempfehlen. 👍🏼',
      author: 'M.A.',
    },
    {
      rating: 5,
      text: 'He is a really respectable doctor. I was treated by him. He respects his patients and gives you enough time to explain your problems. Thank you, praise be to God. Thanks to God and to him, I recovered.',
      author: 'H.H.',
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
    <div className='recklinghausen-page'>
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
            <h1 className='hero-title'>Praxis Recklinghausen</h1>
            <p className='hero-subtitle'>
              Dr. med. Assad Al Kadi - Neurologie in der Stadtmitte
            </p>
            <div className='hero-buttons'>
              <button
                className='primary-button'
                onClick={() =>
                  window.open(
                    'https://www.doctolib.de/neurologie/recklinghausen/assad-alkadi',
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
            <h2 className='section-title'>Unsere Praxis in Recklinghausen</h2>
            <div className='praxis-info-container'>
              <div className='doctor-image-container'>
                <img
                  src={drAssadImage}
                  alt='Dr. med. Assad Al Kadi'
                  className='doctor-image'
                />
              </div>
              <div className='location-info-grid'>
                <div className='location-info-card'>
                  <h3>Dr. med. Assad Al Kadi</h3>
                  <p>Facharzt für Neurologie</p>
                  <p>
                    Mit langjähriger Erfahrung in der Behandlung neurologischer
                    Erkrankungen
                  </p>
                </div>

                <div className='location-info-card'>
                  <h3>Öffnungszeiten</h3>
                  <div className='opening-hours-detail'>
                    <div className='hours-item'>
                      <span>Montag:</span>
                      <span>8:00 - 14:30</span>
                    </div>
                    <div className='hours-item'>
                      <span>Dienstag, Donnerstag:</span>
                      <span>8:00 - 12:00, 14:30 - 17:30</span>
                    </div>
                    <div className='hours-item'>
                      <span>Mittwoch:</span>
                      <span>8:00 - 12:30</span>
                    </div>
                    <div className='hours-item'>
                      <span>Freitag:</span>
                      <span>8:00 - 13:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Section with Map Link */}
            <div className='address-section'>
              <div className='address-box'>
                <h3>Adresse</h3>
                <p>Bochumer Straße 124A</p>
                <p>45661 Recklinghausen</p>
                <button
                  className='map-button'
                  onClick={() =>
                    window.open(
                      'https://maps.google.com/maps?q=Bochumer+Straße+124A,+45661+Recklinghausen',
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
                  <div className='rating-score'>4.7</div>
                  <div className='rating-stars'>
                    {'★'.repeat(4)}
                    <span className='half-star'>★</span>
                    {'☆'.repeat(0)}
                  </div>
                  <div className='rating-count'>52 Bewertungen auf Google</div>
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
                <h4>Praxis Recklinghausen</h4>
                <p>Bochumer Straße 124A, 45661 Recklinghausen</p>
                <p>
                  <a href='tel:02361653962' className='phone-link'>
                    02361 653962
                  </a>
                </p>
                <button
                  className='contact-button'
                  onClick={() =>
                    window.open(
                      'https://www.doctolib.de/neurologie/recklinghausen/assad-alkadi',
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

export default Recklinghausen;
