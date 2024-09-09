import React from 'react';
import maleIcon from '../../assets/images/maleIcon.jpg';
import femaleIcon from '../../assets/images/femaleIcon.jpg';

interface GenderButtonProps {
  active: boolean;
  label: string;
  backgroundImage: string;
  handleGenderClick: (gender: string) => void;
}

const GenderButton: React.FC<GenderButtonProps> = ({ active, label, backgroundImage, handleGenderClick }) => {
  return (
    <button
      onClick={() => handleGenderClick(label)}
      className={`w-24 h-24 text-white font-bold rounded-full flex items-center justify-center focus:outline-none focus:ring-2 transition-transform duration-300 ease-in-out transform hover:scale-105 mb-3 ${
        active ? 'ring-4 ring-yellow-500' : ''
      }`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
    </button>
  );
};

interface GenderFilterProps {
  handleGenderClick: (gender: string) => void;
  activeFilters: string[];
}

const GenderFilter: React.FC<GenderFilterProps> = ({ handleGenderClick, activeFilters }) => {
  return (
    <div className="flex justify-center mt-4">
      <GenderButton
        active={activeFilters.includes('Male')}
        label="Male"
        backgroundImage={maleIcon}
        handleGenderClick={handleGenderClick}
      />
      <GenderButton
        active={activeFilters.includes('Female')}
        label="Female"
        backgroundImage={femaleIcon}
        handleGenderClick={handleGenderClick}
      />
    </div>
  );
};

export default GenderFilter;
