import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppointmentBooking from './pages/AppointmentBooking';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';
import Leistungen from './pages/Leistungen';
import Recklinghausen from './pages/Recklinghausen';
import OerErkenschwick from './pages/OerErkenschwick';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLocationSelect = (location: string) => {
    // This function is passed down to handle location selection
    console.log(`Selected location: ${location}`);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={<HomePage onLocationSelect={handleLocationSelect} />}
          />
          <Route
            path='/termin-buchung/:location'
            element={
              <AppointmentBookingWrapper
                onLocationSelect={handleLocationSelect}
              />
            }
          />
          <Route
            path='/datenschutz'
            element={<Datenschutz onLocationSelect={handleLocationSelect} />}
          />
          <Route
            path='/impressum'
            element={<Impressum onLocationSelect={handleLocationSelect} />}
          />
          <Route
            path='/leistungen'
            element={<Leistungen onLocationSelect={handleLocationSelect} />}
          />
          <Route
            path='/recklinghausen'
            element={<Recklinghausen onLocationSelect={handleLocationSelect} />}
          />
          <Route
            path='/oer-erkenschwick'
            element={
              <OerErkenschwick onLocationSelect={handleLocationSelect} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper component to extract location from URL params
function AppointmentBookingWrapper({
  onLocationSelect,
}: {
  onLocationSelect: (location: string) => void;
}) {
  const { location } = useParams<{ location: string }>();

  if (!location) {
    return <div>Standort nicht gefunden</div>;
  }

  return (
    <AppointmentBooking
      location={location}
      onLocationSelect={onLocationSelect}
    />
  );
}

export default App;
