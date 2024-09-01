import React from "react";
import star_4 from "../assets/images/esfera_4_png.png";

interface DragonBallButtonProps {
  text: string;
  onClick: () => void;
}

const DragonBallButton: React.FC<DragonBallButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-24 h-24 text-white font-bold rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-400 mb-3 transition-transform duration-300 ease-in-out transform hover:scale-105"
      style={{
        backgroundImage: `url(${star_4})`,
        backgroundSize: "180%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {text}
    </button>
  );
};

export default DragonBallButton;
