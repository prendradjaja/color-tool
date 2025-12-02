// color picker component
import React, { useState } from 'react';

interface ColorPickerProps {
  initialColor?: string;
  onColorChange?: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ initialColor = '#ffffff', onColorChange }) => {
  const [color, setColor] = useState(initialColor);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setColor(newColor);
    if (onColorChange) {
      onColorChange(newColor);
    }
  };

  return (
    <div>
      <input type="color" value={color} onChange={handleChange} />
      <p>Selected Color: {color}</p>
    </div>
  );
};