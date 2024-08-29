import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css'; 
import CharacterDetailsPage from './components/CharacterDetailsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character/:id" element={<CharacterDetailsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
