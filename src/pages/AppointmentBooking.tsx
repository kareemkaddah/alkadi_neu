import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useScrollToTop from '../hooks/useScrollToTop';
import './AppointmentBooking.css';

interface AppointmentBookingProps {
  location: string;
  onLocationSelect: (location: string) => void;
}

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  location,
  onLocationSelect,
}) => {
  useScrollToTop();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    service: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert(
      `Terminanfrage für ${location} wurde gesendet! Wir melden uns bald bei Ihnen.`
    );
  };

  const getLocationInfo = (location: string) => {
    const locations = {
      stadtmitte: {
        name: 'Dr. med. Assad Al Kadi',
        address: 'Hauptstraße 123, 12345 Musterstadt',
        phone: '(0123) 456-789',
        email: 'info-stadtmitte@praxis.de',
      },
      nord: {
        name: 'Dr. Hazem Al Kadi',
        address: 'Nordstraße 456, 12345 Musterstadt',
        phone: '(0123) 456-790',
        email: 'info-nord@praxis.de',
      },
    };
    return (
      locations[location as keyof typeof locations] || locations.stadtmitte
    );
  };

  const locationInfo = getLocationInfo(location);

  return (
    <div className='appointment-booking'>
      <Header onLocationSelect={onLocationSelect} />

      <main className='main-content'>
        <div className='container'>
          <div className='page-header'>
            <h1>Termin buchen</h1>
            <p className='location-info'>
              📍 {locationInfo.name} - {locationInfo.address}
            </p>
          </div>

          <div className='booking-content'>
            <div className='booking-form-container'>
              <h2>Terminanfrage stellen</h2>
              <form className='booking-form' onSubmit={handleSubmit}>
                <div className='form-row'>
                  <div className='form-group'>
                    <label htmlFor='name'>Name *</label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>E-Mail *</label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className='form-row'>
                  <div className='form-group'>
                    <label htmlFor='phone'>Telefon *</label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='service'>Leistung</label>
                    <select
                      id='service'
                      name='service'
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value=''>Bitte wählen</option>
                      <option value='allgemein'>Allgemeinmedizin</option>
                      <option value='checkup'>Gesundheitscheck</option>
                      <option value='impfung'>Impfung</option>
                      <option value='beratung'>Beratung</option>
                      <option value='andere'>Andere</option>
                    </select>
                  </div>
                </div>

                <div className='form-row'>
                  <div className='form-group'>
                    <label htmlFor='preferredDate'>Gewünschtes Datum</label>
                    <input
                      type='date'
                      id='preferredDate'
                      name='preferredDate'
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='preferredTime'>Gewünschte Uhrzeit</label>
                    <select
                      id='preferredTime'
                      name='preferredTime'
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                    >
                      <option value=''>Bitte wählen</option>
                      <option value='morgen'>Morgens (8:00-12:00)</option>
                      <option value='mittag'>Mittags (12:00-14:00)</option>
                      <option value='nachmittag'>
                        Nachmittags (14:00-18:00)
                      </option>
                      <option value='egal'>Egal</option>
                    </select>
                  </div>
                </div>

                <div className='form-group'>
                  <label htmlFor='message'>Nachricht (optional)</label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder='Beschreiben Sie kurz Ihr Anliegen...'
                  />
                </div>

                <button type='submit' className='submit-button'>
                  Terminanfrage senden
                </button>
              </form>
            </div>

            <div className='location-details'>
              <h3>Standort Details</h3>
              <div className='location-card'>
                <h4>{locationInfo.name}</h4>
                <div className='contact-info'>
                  <p>
                    <strong>Adresse:</strong>
                    <br />
                    {locationInfo.address}
                  </p>
                  <p>
                    <strong>Telefon:</strong>
                    <br />
                    {locationInfo.phone}
                  </p>
                  <p>
                    <strong>E-Mail:</strong>
                    <br />
                    {locationInfo.email}
                  </p>
                </div>

                <div className='opening-hours'>
                  <h5>Öffnungszeiten</h5>
                  <div className='hours-list'>
                    <div className='hours-item'>
                      <span>Montag - Freitag</span>
                      <span>8:00 - 18:00 Uhr</span>
                    </div>
                    <div className='hours-item'>
                      <span>Samstag</span>
                      <span>9:00 - 13:00 Uhr</span>
                    </div>
                    <div className='hours-item'>
                      <span>Sonntag</span>
                      <span>Geschlossen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AppointmentBooking;
