import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CharacterDetailsPage from './components/CharacterDetailsPage';
import Planet from './components/Planets/Planet';
import PlanetDetail from './components/Planets/PlanetDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character/:id" element={<CharacterDetailsPage />} />
            <Route path="/planets" element={<Planet />} />
            <Route path="/planets/:id" element={<PlanetDetail />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
