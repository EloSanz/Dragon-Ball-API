import React from "react";
import star_4 from "../assets/images/esfera_4_png.png";

interface DragonBallButtonProps {
  text: string;
  onClick: () => void;
  active?: boolean;
}

const DragonBallButton: React.FC<DragonBallButtonProps> = ({
  text,
  onClick,
  active,
}) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`w-24 h-24 text-white font-bold rounded-full flex items-center justify-center focus:outline-none focus:ring-2 transition-transform duration-300 ease-in-out transform hover:scale-105 mb-3 ${
        active ? "bg-purple-600" : "bg-orange-500"
      }`}
      style={{
        backgroundImage: `url(${star_4})`,
        backgroundSize: "180%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: active ? "brightness(0.7)" : "brightness(1)", // Ajusta el brillo
      }}
    >
      {text}
    </button>
  );
};

export default DragonBallButton;
