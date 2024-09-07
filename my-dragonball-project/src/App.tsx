import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharacterDetailsPage from './pages/CharacterDetailsPage';
import PlanetDetail from './components/Planets/PlanetDetail';
import Planets from './pages/PlanetsPage';

const App: React.FC = () => {
  return (

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

  );
};

export default App;
