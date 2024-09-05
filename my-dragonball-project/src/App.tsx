import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CharacterDetailsPage from './components/CharacterDetailsPage';
import PlanetDetail from './components/Planets/PlanetDetail';
import Planets from './components/Planets/Planets';
import ErrorBoundary from './ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>

    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character/:id" element={<CharacterDetailsPage />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<PlanetDetail />} />

          </Routes>
        </main>
      </div>
    </Router>
    </ErrorBoundary>

  );
};

export default App;
