import React from 'react';
import loaderGif from '../assets/images/loader.gif'; 

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={loaderGif} alt="Loading..." className="w-auto h-auto" />
    </div>
  );
};

export default Loader;
