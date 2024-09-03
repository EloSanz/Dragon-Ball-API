import { useState, useEffect } from 'react';
import useColorThief from 'use-color-thief';

const useDominantColor = (imageSrc: string | null) => {
  const [bgColor, setBgColor] = useState<string | null>(null);
  const { color } = useColorThief(imageSrc || '', {
    format: 'hex',
    colorCount: 1,
    quality: 10,
  });

  useEffect(() => {
    if (color) {
      setBgColor(color.toString());
    }
  }, [color]);

  return bgColor;
};

export default useDominantColor;